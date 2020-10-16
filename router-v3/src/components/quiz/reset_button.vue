<template>
  <button v-on:click="reset()">RESET</button>

</template>

<script>
export default {
    setup()
    {
        function reset()
        {
            this.$store.commit('RESET2')
        }
        return{
            reset,
        }
    }

     
}
</script>

<style>

</style>