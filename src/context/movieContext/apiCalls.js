import { axiosIstance } from "../../config";
import {
    getMoviesFailure,
    getMoviesStart,
    getMoviesSuccess,
    deleteMovieFailure,
    deleteMovieStart,
    deleteMovieSuccess,
    createMovieFailure,
    createMovieStart,
    createMovieSuccess
} from './actions'

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart())
    try {
        const {data} = await axiosIstance.get('movie', {
            headers: {
                token: 'F]2*Fr7SU:DF!?$ '+ JSON.parse(localStorage.getItem('user')).accessToken
            }
        })
        dispatch(getMoviesSuccess(data))
    } catch (error) {
        dispatch(getMoviesFailure())
    }
}
export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart())
    try {
        await axiosIstance.delete(`movie/${id}`, {
            headers: {
                token: 'F]2*Fr7SU:DF!?$ '+ JSON.parse(localStorage.getItem('user')).accessToken
            }
        })
        dispatch(deleteMovieSuccess(id))
    } catch (error) {
        dispatch(deleteMovieFailure())
    }
}
//Create
export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart())
    try {
        const {data} = await axiosIstance.post(`movie`, movie, {
            headers: {
                token: 'F]2*Fr7SU:DF!?$ '+ JSON.parse(localStorage.getItem('user')).accessToken
            }
        })
        dispatch(createMovieSuccess(data))
    } catch (error) {
        dispatch(createMovieFailure())
    }
}