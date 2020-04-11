import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import * as math from 'mathjs';

@Component({
  selector: 'app-arithmetic',
  templateUrl: './arithmetic.component.html',
  styleUrls: ['./arithmetic.component.scss'],
})
export class ArithmeticComponent implements OnInit {
  // public page: string; // page name
  // public expression: string; // given to the user
  // public result: boolean; // answer is right or wrong
  public buttonText: string;
  public page: string;
  public result: boolean;
  submitted: boolean;
  private answer: string;
  private expression: string;
  public arithmeticForm: FormGroup;
  private resultText: string;
  private level: number;
  private levelCap = 3;
  private levelQuestions: number;
  public buttonTextMap = {
    0: 'Check',
    1: 'Check Again',
    2: 'Next Question'
  };

  public resultTextMap = {
    0: 'Correct!',
    1: 'Incorrect',
    2: ''
  };
  // map max value for each level
  public levelIntMap = {
    0: 5,
    1: 5,
    2: 10,
    3: 12
  };

  // map of operators for each level
  public levelOperatorMap = {
    0: ['+'],
    1: ['+', '-'],
    2: ['+', '-', '*'],
    3: ['+', '-', '*', '/']
  };

  constructor() {
    this.expression = '';
   }

  ngOnInit() {
    this.level = 0;
    this.levelQuestions = 0;
    this.buttonText = this.buttonTextMap[0];
    this.result = false;
    this.submitted = false;
    this.resultText = this.resultTextMap[2];
    this.expression = this.getRandomExpression();
    this.page = 'Basic Arithmetic'; // this.activatedRoute.snapshot.paramMap.get('id')
    this.arithmeticForm = new FormGroup({
      input: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.maxLength(255)])
    });
  }

  getRandomExpression() {
    let num1 = Math.floor(Math.random() * this.levelIntMap[this.level]) + 1;
    let num2 = Math.floor(Math.random() * this.levelIntMap[this.level]) + 1;
    const operators = this.levelOperatorMap[this.level];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    if (operator === '/') {
      num2 = 1;
    }

    if (num2 > num1) {
      const num3 = num2;
      num2 = num1;
      num1 = num3;
    }
    return [num1, operator, num2].join(' ');
  }

  getExpressionAnswer() {
    // use this.expression
    return math.evaluate(this.expression);
  }

  inputCorrect(arithmeticForm: FormGroup) {
    if (this.getExpressionAnswer() === parseFloat(this.arithmeticForm.get('input').value)) {
      return true;
    }
    return false;
  }

  updateButtonText() {
    if (this.result && this.submitted) {
      this.buttonText = this.buttonTextMap[2];
      this.resultText = this.resultTextMap[0];
    } else if (this.submitted && !this.result) {
      this.buttonText = this.buttonTextMap[1];
      this.resultText = this.resultTextMap[1];
    } else if (!this.submitted) {
      this.buttonText = this.buttonTextMap[0];
      this.resultText = this.resultTextMap[2];
    }
  }

  // submits the form
  arithmeticFormSubmit() {
    if (this.submitted && this.result) {
      this.submitted = false;
      this.result = false;
      this.expression = this.getRandomExpression();
      this.arithmeticForm.patchValue({
        input: ''
      });
    } else {
      if (this.inputCorrect(this.arithmeticForm)) {
        if (this.level < this.levelCap && this.levelQuestions > 3) {
          this.level += 1;
          this.levelQuestions = 0;
        } else {
          this.levelQuestions += 1;
        }
        this.result = true;
        this.submitted = true;
      } else {
        this.submitted = true;
        this.result = false;
      }
    }

    this.updateButtonText();
  }
}
