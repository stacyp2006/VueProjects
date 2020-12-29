const app = Vue.createApp({
  data() {
    return {
      output: '',
    };
  },
  methods: {
    showAlert() {
      alert('You did it');
    },
    setOutput(event) {
      this.output = event.target.value;
    },
  },
});

app.mount('#assignment');
