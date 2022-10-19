import { R_FAIL,R_SUCCESS } from "../constants/restconstants"

export const restaurantlistreducer = (state={restaurant:[]},action)=>{

    console.log(action.payload);
    switch(action.type){
        case R_SUCCESS:
            return {restaurant:action.payload}
        case R_FAIL:
            return {restaurant:action.error}    

        default:
            return state    
    }
}