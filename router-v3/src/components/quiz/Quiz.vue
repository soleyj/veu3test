<template>
 <div>
   
  <h1>
    Main QUiz
  </h1>
  <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" v-bind:style="{width: barprogress + '%'}"></div>
  </div>
  <p>
    Points: {{correct}}
  </p>
  <div v-if="Quiz_finish" >
    <div class=row>
      <p>
      {{Question}}
      </p>
    </div>
      
   
      <div v-for="(ans,index) in answer" :key="ans">
        <div class="col">
          <button v-on:click="sumbit_ans(index)"  type="button" class=" btn btn-outline-primary m-1">{{ans}}</button>
        </div>
      </div>
 
   
  </div>
  <div v-else>
    <p>Quiz is finish, you get {{correct}} correct answ</p>
    <button  v-on:click="reset_quiz()">
        Reset
    </button>
  </div>


  </div>

</template>

<script>
import { ref, computed, watch } from 'vue';
import { useStore } from "vuex"
export default {
    props:{
        quizdata:Object,


    },
  //   computed: {
  //   quiz_count () {
  //     return  ;
  //   },
  // },
    setup(props)
    {
      const store = useStore()
      let quiz_count = computed(()=> store.getters.getquizindex)
      console.log(quiz_count.value)
      const Question = ref(props.quizdata.questions[quiz_count.value])
      const answer = ref(props.quizdata.Answers[quiz_count.value])
      const Quiz_finish = ref(true)
      const correct = ref(0)
      const barprogress = ref(0)
      barprogress.value = 25 * quiz_count.value
      
     watch(
       quiz_count,() =>{
          barprogress.value = 25 * quiz_count.value
          
          Question.value = props.quizdata.questions[quiz_count.value]
          answer.value = props.quizdata.Answers[quiz_count.value]
          if(quiz_count.value == 4)
          {
              Quiz_finish.value= false
          }
          else if(quiz_count.value == 0)
          {
            correct.value = 0;
            Quiz_finish.value= true
          }
          
       }
     )

      function sumbit_ans(id)
      {
        if(id == props.quizdata.Correct[quiz_count.value])
        {
            correct.value += 1;
        }
        store.commit('INCREMENT2')
      }
      function reset_quiz()
      {
          Quiz_finish.value= true
          correct.value = 0;
          store.commit('RESET2')
          Question.value = props.quizdata.questions[quiz_count.value]
          answer.value = props.quizdata.Answers[quiz_count.value]
      }

      return{
      sumbit_ans,
      reset_quiz,
      Question,
      answer,
      Quiz_finish,
      correct,
      barprogress,
      }
    }

}
</script>

<style>

</style>