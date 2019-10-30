import {FETCH_DATA_SUCCESS} from "./action-types";
import axios from "../../axios";

export const fetchDatatSuccess = (countries) => {
    return {type: FETCH_DATA_SUCCESS, countries: countries}
};

export const fetchData = () => {
    return (dispatch) => {
        return axios.get('').then(response => {
            let data = response.data.items;
            dispatch(fetchDatatSuccess(data));
        })
    }
};