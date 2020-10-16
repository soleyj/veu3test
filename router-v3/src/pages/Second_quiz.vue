<template>
 <div class="container">
   <Quiz  :quizdata="Quiz_data_" ></Quiz>
  </div>

</template>

<script>
import Quiz_data from '../assets/quizdata.js'

import Quiz from "../components/quiz/Quiz.vue";

export default {
  components: {
    Quiz,
  },
  setup()
  {
    const Quiz_data_ = Quiz_data.Quiz_data
    console.log(Quiz_data)
    return{
      Quiz_data_
    }
  }
  
}
</script>

<style>

</style>