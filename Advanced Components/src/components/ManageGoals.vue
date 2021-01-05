<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set goal</button>
  </div>
</template>

<script>
export default {
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        alert('Input must not be empty');
      }
    },
  },
};
</script>
