const { createApp } = Vue;

createApp({
  data() {
    return {
      num1: null,
      num2: null,
      operator: '+',
      userAnswer: null,
      message: '',
      isCorrect: false
    };
  },
  methods: {
    checkAnswer() {
      let result;
      switch (this.operator) {
        case '+': result = this.num1 + this.num2; break;
        case '-': result = this.num1 - this.num2; break;
        case '*': result = this.num1 * this.num2; break;
        case '/': result = this.num1 / this.num2; break;
      }
      if (this.userAnswer === result) {
        this.message = '正解です！';
        this.isCorrect = true;
      } else {
        this.message = 'もう一度計算して下さい。';
        this.isCorrect = false;
      }
    }
  }
}).mount('#app');
