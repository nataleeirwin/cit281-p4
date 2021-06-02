const { data } = require('./p4-data.js');

//getQuestions function returns array of strings where each array element is question
function getQuestions() {
    let result = data.map(({question}) => question);
    return result;
}
//TEST
//console.log(getQuestions());


//getAnswers returns array of strings where each array element is an answer
function getAnswers() {
    let result = data.map(({answer}) => answer);
    return result;
}
//TEST
//console.log(getAnswers());


//getQuestionsAnswers returns copy of the original data array
function getQuestionsAnswers() {
    const clonedDataArray = JSON.parse(JSON.stringify(data));
    data === clonedDataArray //false
    return clonedDataArray
}
//TEST
//console.log(getQuestionsAnswers());


//getQuestion(number = "") returns object with question, number, and error
function getQuestion(number = "") {
  let response = {
      error: '',
      question: '',
      number: '',
      };
  if (Number.isInteger(number) == false) {
      response.error = 'Question number must be an integer'
  } else if (number < 1) {
      response.error = 'Question number must be >= 1'
  } else if (number > data.length) {
      response.error = `Question number must be less than the number of questions (${data.length})`
  } else {
      response.question = `${data[number-1].question}`
      response.number = number
  }
  return response
};        
//TEST
//console.log(getQuestion());


//getAnswer(number = "") returns object with answer, number, and error
function getAnswer(number = "") {
  let response = {
    error: '',
    answer: '',
    number: '',
    };
if (Number.isInteger(number) == false) {
    response.error = 'Answer number must be an integer'
} else if (number < 1) {
    response.error = 'Answer number must be >= 1'
} else if (number > data.length) {
    response.error = `Answer number must be less than the number of questions (${data.length})`
} else {
    response.answer = `${data[number-1].answer}`
    response.number = number
}
return response
};  
//TEST
//console.log(getAnswer(number = "2"));


//getQuestionAnswer(number = "") returns object with question, answer, number, and error properties
function getQuestionAnswer(number = "") {
    let response = {
        question: '',
        answer: '',
        number: '', 
        error: ''
    }
  if (Number.isInteger(number) == false) {
      response.error = 'Question number must be an integer'
  } else if (number < 1) {
      response.error = 'Question number must be >= 1'
  } else if (number > data.length) {
      response.error = `Question number must be less than the number of questions (${data.length})`
  } else {
      response.question = `${data[number-1].question}`
      response.answer = `${data[number-1].answer}`
      response.number = number
  }
  return response
  };  
//TEST
//console.log(getQuestionAnswer(1));


//EXTRA CREDIT function addQuestionAnswer
function addQuestionAnswer(info = {}) {
  const {question, answer} = info
  let response = {
    error: '',
    message: '',
    number: ''
  }
  if (question !== undefined && answer !== undefined) {
    response.message = 'Question added'
    response.number = (data.length + 1)
    data.push(info)
  } else if (question === undefined) {
    response.message = 'Object question property required'
    response.number = -1
  } else if (answer === undefined) {
    response.message = 'Object answer property required'
    response.number = -1
  }
  return response
}
//TEST
//console.log(addQuestionAnswer({question: 'Q4'}));


//export functions
module.exports = {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
  addQuestionAnswer
};



//TEST
//console.log(getQuestionAnswer(number = "2"));

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit


  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

  // addQuestionAnswer()
if (testAdd) {
  testing(
    "addQuestionAnswer",
    { d: "()", f: addQuestionAnswer() },
    { d: "({})", f: addQuestionAnswer({}) },
    { d: '(question: "Q4")', f: addQuestionAnswer({ question: "Q4" }) },
    { d: '(answer: "A4")', f: addQuestionAnswer({ answer: "A4" }) },
    {
      d: '(question: "Q4", answer: "A4")',
      f: addQuestionAnswer({ question: "Q4", answer: "A4" }),
    }
  );
}
