<template>
 <div class="container">
   <Quiz  :quizdata="Quiz_data_" ></Quiz>
   <ResetButton></ResetButton>
  </div>

</template>

<script>
import  Quiz_data  from '../assets/quizdata.js'
import Quiz from "../components/quiz/Quiz.vue";
import ResetButton from "../components/quiz/reset_button.vue";

export default {
  components: {
    Quiz,
    ResetButton,
  },
  setup()
  {

    const Quiz_data_ = Quiz_data.Quiz_data_2
    console.log(Quiz_data)
    return{
      Quiz_data_
    }
  }
  
}
</script>

<style>

</style>