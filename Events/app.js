const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    decrease(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      // this.name = event.target.value; for regular, first name display w/event obj
      this.name = event.target.value + ' ' + lastName;
      //^ allows the event to be grabbed w/$event in the html
    },
  },
});

app.mount('#events');
