// Question and answer data array
const data = [
    {
      number: 1,
      question: "Q1",
      answer: "A1",
    },
    {
      number: 2,
      question: "Q2",
      answer: "A2",
    },
    {
      number: 3,
      question: "Q3",
      answer: "A3",
    },
  ];
  
  // Export statement must be below data declaration - no hoisting with const
  module.exports = {
    data,
  };
