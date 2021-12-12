import { axiosIstance } from "../../config";
import {loginFailure, loginStart, loginSuccess} from './actions'

export const login = async (user, dispatch) => {
    dispatch(loginStart())
    try {
        const {data} = await axiosIstance.post("auth/login", user);
       data.isAdmin &&  dispatch(loginSuccess(data))
    } catch (error) {
        dispatch(loginFailure())
    }
}