import { createStore , createLogger} from "vuex";
import store_test from "./store_test"
import store_test_2 from "./store_test_2"
const store = createStore({
    modules:{
        store_test,
        store_test_2,

    },
    plugins:[createLogger()]
})

export default store