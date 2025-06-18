import {SAVEDATEFROMSAGAMIDDLEWARE} from '../Constant/ActionTypeConstant'

export const SagaReducer=(state:any=[],action:any)=>{

    switch(action.type){
        case SAVEDATEFROMSAGAMIDDLEWARE:{
            console.log("action from Saga Reducer",action)
        return  [...state,...action?.payload]
        }
        default:{
            return state;
        }
    }

}