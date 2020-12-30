const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return 'Not there yet!';
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return 'Too much!';
      }
    },
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
    //},
  },
});

app.mount('#assignment');
