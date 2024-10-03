// models/QuizQuestions.js

export class QuizQuestions {
    constructor(category, type, difficulty, question, correct_answer, incorrect_answers) {
      this.category = category; // Example: "General Knowledge"
      this.type = type; // Example: "multiple"
      this.difficulty = difficulty; // Example: "easy"
      this.question = question; // Example: "What is the capital of France?"
      this.correct_answer = correct_answer; // Example: "Paris"
      this.incorrect_answers = incorrect_answers; // Example: ["Lyon", "Marseille", "Nice"]
    }
  }
  