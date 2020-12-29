const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
    };
  },
  computed: {
    fullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Potten';
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    decrease(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      // this.name = event.target.value; for regular, first name display w/event obj
      this.name = event.target.value;
      //^ allows the event to be grabbed w/$event in the html
    },
    resetInput() {
      this.name = '';
    },
    // outputFullName() {
    //   if (this.name === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + 'Potten';
    // },
  },
});

app.mount('#events');
