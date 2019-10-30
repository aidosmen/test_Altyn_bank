import {FETCH_DATA_SUCCESS} from "../actions/action-types";

const InitialState = {
  countries: [],
};

const reducer = (state = InitialState , action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return {...state , countries: action.countries};
        default: return state;
    }
};
export default reducer;