import { RESTAURANT_LIST_FAIL, RESTAURANT_LIST_SUCCESS, RESTAURANT_LIST_REQUEST } from '../constants/restaurantConstants'


export const restaurantlistreducer = (state = { restaurant: [] }, action) => {
   
    switch (action.type) {
        case RESTAURANT_LIST_SUCCESS:
            
            return { restaurant: action.paylod };
             
        case RESTAURANT_LIST_FAIL:

            return { restaurant: action.error };

        default: return state;
    }

}
