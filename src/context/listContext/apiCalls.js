import { axiosIstance } from "../../config";
import {
    getListsFailure,
    getListsStart,
    getListsSuccess,
    deleteListsFailure,
    deleteListsStart,
    deleteListsSuccess,
    createListsFailure,
    createListsStart,
    createListsSuccess
} from './actions'

export const getLists = async (dispatch) => {
    dispatch(getListsStart())
    try {
        const {data} = await axiosIstance.get('list', {
            headers: {
                token: 'F]2*Fr7SU:DF!?$ '+ JSON.parse(localStorage.getItem('user')).accessToken
            }
        })
        dispatch(getListsSuccess(data))
    } catch (error) {
        dispatch(getListsFailure())
    }
}

//delete
export const deleteList = async (id, dispatch) => {
    dispatch(deleteListsStart())
    try {
        await axiosIstance.delete(`list/${id}`, {
            headers: {
                token: 'F]2*Fr7SU:DF!?$ '+ JSON.parse(localStorage.getItem('user')).accessToken
            }
        })
        dispatch(deleteListsSuccess(id))
    } catch (error) {
        dispatch(deleteListsFailure())
    }
}
//create
export const createList = async (list, dispatch) => {
    dispatch(createListsStart())
    try {
        const {data} = await axiosIstance.post(`list`, list, {
            headers: {
                token: 'F]2*Fr7SU:DF!?$ '+ JSON.parse(localStorage.getItem('user')).accessToken
            }
        })
        dispatch(createListsSuccess(data))
    } catch (error) {
        dispatch(createListsFailure())
    }
}
