import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './../local-storage/local-storage.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions = [
    { text: "How do you feel today?", options: ["Happy", "Sad", "Angry", "Neutral"], answer: "" },
    { text: "Did you enjoy talking with friends recently?", options: ["Yes", "No"], answer: "" },
    { text: "How often have you felt supported by friends or family this week?", options: ["Not at all", "Rarely", "Sometimes", "Often", "Always"], answer: "" },
    { text: "How satisfied are you with your social life?", options: ["Not satisfied", "Somewhat dissatisfied", "Neutral", "Satisfied", "Very satisfied"], answer: "" },
    { text: "How much sleep have you been getting on average?", options: ["Less than 4 hours", "4-6 hours", "6-8 hours", "More than 8 hours"], answer: "" },
    { text: "Have you felt unusually tired or low on energy lately?", options: ["Always", "Often", "Sometimes", "Rarely", "Never"], answer: "" },
    { text: "Are you currently engaged in any hobbies or activities that you enjoy?", options: ["Yes", "No"], answer: "" },
    { text: "Do you feel that you have a purpose or goal that you are working towards?", options: ["Not at all", "Somewhat unclear", "Neutral", "Fairly clear", "Very clear"], answer: "" },
    { text: "How stressful is your work or school environment?", options: ["Very stressful", "Stressful", "Manageable", "Not stressful", "Not applicable"], answer: "" },
    { text: "Do you feel appreciated and valued in your work or academic pursuits?", options: ["Not at all", "Rarely", "Sometimes", "Often", "Always"], answer: "" },
    { text: "Overall, how would you rate your mood during the past week?", options: ["Very poor", "Poor", "Average", "Good", "Excellent"], answer: "" }
  ];

  currentQuestionIndex = 0;
  quizStarted = false;
  score = 0;
  resultMessage = '';

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    
    const savedResult = this.localStorageService.get<string>('quizResult');
    if (savedResult) {
      this.resultMessage = savedResult;
      console.log(`Loaded saved result on initialization:`, this.resultMessage);
    }
  }

  startGameButton() {
    this.quizStarted = true;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.resultMessage = "";
  }

  answerButton(option: string) {
    const question = this.questions[this.currentQuestionIndex];
    question.answer = option;

    const optionIndex = question.options.indexOf(option);
    this.score += optionIndex;

    if (this.currentQuestionIndex === this.questions.length - 1) {
      this.quizStarted = false;
      this.showResults();
    } else {
      this.currentQuestionIndex++;
    }
  }

  showResults() {
    const averageScore = this.score / (this.questions.length * (this.questions[0].options.length - 1));
    if (averageScore < 0.33) {
      this.resultMessage = 'Depressed';
    } else if (averageScore < 0.66) {
      this.resultMessage = 'Neutral';
    } else {
      this.resultMessage = "You're ok";
    }
    
    this.localStorageService.save('quizResult', this.resultMessage);
    console.log('Result Message:', this.resultMessage);
  }
}
