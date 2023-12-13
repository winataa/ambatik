const models = require('../models/');
const sequelize = models.sequelize;
const quiz  = models.quiz;
const quizHistory = models.quiz_history;
const question = models.question;
const answer = models.answer;
const user = models.user;

const getAllQuizType = async(req, res) => {
    try{
        const quizType =  await quiz.findAll({
            attributes: [
                'type',
                [sequelize.literal('COALESCE(quiz_histories.done, 0)'), 'done'], // Use COALESCE to handle null values
            ],
            include: [
                {
                    model: quizHistory,
                    where: { userId: req.params.userid },
                    required: false, // Use a left join
                },
            ],
        });
        res.status(200).json({
            error: false,
            message: 'Get all quiz type',
            data: quizType,
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Get All Quiz Type',
            serverMessage: error.message
        })
    }
}

const getQuestion = async(req, res) => {
    try{
        const specificQuestion = await question.findOne({
            attributes: ['id', 'question'],
            where: {
                id: req.params.questionid,
                quizId: req.params.quizId,
            },
            include: [
                {
                    model: answer,
                    attributes: ['id', 'answer', 'questionId'],
                },
            ],
        })
        res.status(200).json({
            error: false,
            message: 'Get question',
            data: specificQuestion,
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Get Specific Question',
            serverMessage: error.message
        })
    }
}

const submitQuiz = async(req, res) => {
    try{
        const userId = req.body.userid
        const quizId = req.body.quizid;
        const questionIds = req.body.questionIds;
        const answerIds = req.body.answerIds;

        let result;
        let checkAnswer
        let accumulatePoint= 0;
        let totalCorrect = 0;
        let totalWrong = 0;
        
        const quizScore = []
        const selectedUser = await user.findByPk(userId);

        if(selectedUser){
            for(let i = 0; i < answerIds.length; i++){
                result = await question.findOne({
                        attributes: ['question'],
                        include: [
                            {
                                model: answer,
                                attributes: ['truth'],
                                where: { id: answerIds[i] },
                            },
                            {
                                model: quiz,
                                attributes: ['type'],
                                where: { id: quizId },
                            },
                        ],
                        where: {
                            id: questionIds[i],
                        },
                });
                    
                checkAnswer = result['answers'][0]['truth'];
                if(checkAnswer == '1'){
                    accumulatePoint += 100;
                    totalCorrect += 1;
                }
                else{
                    totalWrong +=1;
                }
            }

            await selectedUser.increment('point', { by: accumulatePoint });
        
            // quizScore.push({'totalCorrect': totalCorrect}, {'totalWrong': totalWrong}, {'accumulatePoint': accumulatePoint});
            quizScore.push({
                'summary': {
                    'totalCorrect': totalCorrect,
                    'totalWrong': totalWrong,
                    'accumulatePoint': accumulatePoint
                }
            });
            res.status(200).json({
                error: false,
                message: 'Submitted quiz and get result',
                data: quizScore,
            })
        }
        else{
            res.status(404).json({
                error: true,
                message: 'User not found',
                data: null,
            })
        }
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error: Submit Quiz',
            serverMessage: error.message
        })
    }
}

module.exports = {
    getAllQuizType,
    getQuestion,
    submitQuiz
}
