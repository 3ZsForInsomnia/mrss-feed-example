import { combineReducers } from 'redux';
import * as actions from './films.actions';

const initialState = {
    films: [],
    indexOfSelectedFilm: 0,
    isAutoScrollingThroughFilms: true,
}

export const films = (state = initialState, action) => {
    switch (action.type) {
        case actions.SetSelectedFilm:
            return {
                ...state,
                indexOfSelectedFilm: action.payload.index
            }
        case actions.SetFilmsList:
            return {
                ...state,
                films: action.payload.films,
                indexOfSelectedFilm: 0
            }
        case actions.SetIsNoLongerAutoScrollingThroughFilms:
            return {
                ...state,
                isAutoScrollingThroughFilms: false,
            }
        default:
            return state
    }
}

export default combineReducers({films});