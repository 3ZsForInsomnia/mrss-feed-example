export const SetFilmsList = '[Films] Set Films List'
export const SetSelectedFilm = '[Films] Set Selected Film';
export const SetIsNoLongerAutoScrollingThroughFilms = '[Films] No Longer Auto Scrolling Through Films'

const stringUrlToGrabFilmsFrom = 'http://www.snagfilms.com/apis/films.json?limit=10';

export const getFilmsListAction = () => (dispatch, getState) => {
    fetch(stringUrlToGrabFilmsFrom).then(response => {
        return response.json();
    }).then(data => {
        dispatch(setFilmsListAction(data.films.film));
        setInterval(() => {
            if (getState().films.isAutoScrollingThroughFilms) {
                dispatch(getNextFilmAction());
            }
        }, 3500);
    })
}

export const setFilmsListAction = (films) => {
    return {
        type: SetFilmsList,
        payload: {
            films
        }
    }
}

export const getNextFilmAction = () => (dispatch, getState) => {
    const currentIndex = getState().films.indexOfSelectedFilm;
    const lengthOfFilmsList = getState().films.films.length;
    if (currentIndex < lengthOfFilmsList - 1) {
        dispatch(setSelectedFilmAction(currentIndex + 1));
    } else {
        dispatch(setSelectedFilmAction(0));
    }
}

export const getPreviousFilmAction = () => (dispatch, getState) => {
    const currentIndex = getState().films.indexOfSelectedFilm;
    const lengthOfFilmsList = getState().films.films.length;
    if (currentIndex > 0) {
        dispatch(setSelectedFilmAction(currentIndex - 1));
    } else {
        dispatch(setSelectedFilmAction(lengthOfFilmsList - 1));
    }
}

export const setSelectedFilmAction = (indexOfSelectedFilm) => {
    return {
        type: SetSelectedFilm,
        payload: {
            index: indexOfSelectedFilm
        }
    };
}

export const setSelectedFilmIndexIfValidAction = (indexOfSelectedFilm) => (dispatch, getState) => {
    if (indexOfSelectedFilm < 0) {
        return;
    }
    const lengthOfFilmsList = getState().films.films.length;
    if (indexOfSelectedFilm < lengthOfFilmsList) {
        dispatch(setSelectedFilmAction(indexOfSelectedFilm));
    }
}

export const setIsNoLongerAutoScrollingThroughFilmsAction = () => {
    return {
        type: SetIsNoLongerAutoScrollingThroughFilms
    }
}
