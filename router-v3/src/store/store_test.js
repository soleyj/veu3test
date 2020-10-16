
export const store_test = {
    state(){
        return{
            index:0
        }
    },
    getters:{
        quiz_index: state =>{
           return state.index
        }
    },
    mutations:{
        INCREMENT(state)
        {
            state.index ++;
        },
        RESET(state){
            state.index = 0;
        }
    },

}

export default store_test