const { getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer, addQuestionAnswer } = require('./p4-module.js');
const fs = require("fs");
const fastify = require("fastify")();


// cit/question route
fastify.get("/cit/question",(request,reply) => {
    //call function from p4-modules and set up object to return
    let response = {
        error: "",
        statusCode: 200,
        questions: getQuestions()
    };
    const infoToReturn = JSON.stringify(response);
    //provide reply
    reply
    .code(200)
    .header("Content-Type", "application/json; charset-utf-8")
    .send(infoToReturn)
});


// cit/answer route
fastify.get("/cit/answer",(request,reply) => {
    //call function from p4-modules and set up object to return
    let response = {
        error: "",
        statusCode: 200,
        answers: getAnswers()
    };
    const infoToReturn = JSON.stringify(response);
    //provide reply
    reply
    .code(200)
    .header("Content-Type", "application/json; charset-utf-8")
    .send(infoToReturn)
});


// cit/questionanswer route
fastify.get("/cit/questionanswer",(request,reply) => {
    //call function from p4-modules and set up object to return
    let response = {
        error: "",
        statusCode: 200,
        question_answers: getQuestionsAnswers()
    };
    const infoToReturn = JSON.stringify(response);
    //provide reply
    reply
    .code(200)
    .header("Content-Type", "application/json; charset-utf-8")
    .send(infoToReturn)
});


// cit/question/:number route
fastify.get("/cit/question/:number",(request,reply) => {
   console.log(request);
   const {number} = request.params
   let numResponse = parseInt(number)
   let val = getQuestion(numResponse)
   let response = {
       error: val.error,
       statusCode: 200,
       question: val.question,
       number: numResponse
   }
   let finalResponse = JSON.stringify(response);
    //provide reply
    reply
    .code(200)
    .header("Content-Type", "application/json; charset-utf-8")
    .send(finalResponse)
});


// cit/answer/:number route
fastify.get("/cit/answer/:number",(request,reply) => {
    console.log(request);
    const {number} = request.params
    let numResponse = parseInt(number)
    let val = getAnswer(numResponse)
    let response = {
        error: val.error,
        statusCode: 200,
        answer: val.answer,
        number: numResponse
    }
    let finalResponse = JSON.stringify(response);
     //provide reply
     reply
     .code(200)
     .header("Content-Type", "application/json; charset-utf-8")
     .send(finalResponse)
});


// cit/questionanswer/:number route
fastify.get("/cit/questionanswer/:number",(request,reply) => {
    console.log(request);
    const {number} = request.params
    let numResponse = parseInt(number)
    let other = getQuestionAnswer(numResponse)
    let response = {
        error: other.error,
        statusCode: 200,
        question: other.question,
        answer: other.answer,
        number: numResponse
    }
    let finalResponse = JSON.stringify(response);
     //provide reply
     reply
     .code(200)
     .header("Content-Type", "application/json; charset-utf-8")
     .send(finalResponse)
});


//unmatched route
fastify.get("*",(request,reply) => {
    let response = {
        error: "Route not found",
        statusCode: 404
    }
     //provide reply
     reply
     .code(404)
     .header("Content-Type", "application/json; charset-utf-8")
     .send(response)
});


//EXTRA CREDIT to add new questions
fastify.post("/cit/question",(request,reply) => {
    console.log(request);
    const {answer,question} = request.query
    let info = {question,answer}
    let add = addQuestionAnswer(info)
    let response = {
        error: add.error,
        statusCode: 201,
        number: add.number
    }
    let finalResponse = JSON.stringify(response);
     //provide reply
     reply
     .code(201)
     .header("Content-Type", "application/json; charset-utf-8")
     .send(finalResponse)
});


//Start server
const listenIP = 'localhost';
const listenPort = 8082;
fastify.listen(listenPort, listenIP, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});

