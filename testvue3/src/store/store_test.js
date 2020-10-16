import { createStore } from "vuex";

const store_test = createStore(options:{
    state(){
        return{
            index:0
        }
    },
    mutaations:{
        INCREMENT(state)
        {
            state.index ++;
        },
        RESET(sate){
            state.index = 0;
        }
    }
})

export default store_test