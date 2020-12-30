const app = Vue.createApp({
  data() {
    return {
      output: '',
      outputTwo: '',
    };
  },
  methods: {
    showAlert() {
      alert('You did it');
    },
    setOutput(event) {
      this.output = event.target.value;
    },
    setOutputTwo(event) {
      this.outputTwo = event.target.value;
    },
  },
});

app.mount('#assignment');
