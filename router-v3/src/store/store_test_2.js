

const store_test_2 = {
    state(){
        return{
            nan:1
        }
    },
    getters:{
        getquizindex: state =>{
            return state.nan
        }
    },
    mutations:{
        INCREMENT2(state)
        {
            state.nan ++;
        },
        RESET2(state){
            state.nan = 0;
        }
    },
}

export default store_test_2