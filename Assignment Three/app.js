const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      result: '',
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    // findResult() {
    //   if (this.counter < 37) {
    //     this.result = 'Not there yet';
    //   } else if (this.counter > 37) {
    //     this.result = 'Too much!';
    //   } else if (this.counter === 37) {
    //     this.result = 37;
    //   }
    },
  },
});

app.mount('#assignment');
