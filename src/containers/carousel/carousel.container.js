import { connect} from 'react-redux';
import * as actions from './../../store/films/films.actions';

import Carousel from './../../components/carousel/carousel.component';

const mapStateToProps = state => {
    return {
        films: state.films.films,
        selectedFilmIndex: state.films.indexOfSelectedFilm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        nextFilm: () => {
            dispatch(actions.getNextFilmAction());
            dispatch(actions.setIsNoLongerAutoScrollingThroughFilmsAction());
        },
        previousFilm: () => {
            dispatch(actions.getPreviousFilmAction());
            dispatch(actions.setIsNoLongerAutoScrollingThroughFilmsAction());
        },
        onFilmSelect: index => {
            dispatch(actions.setSelectedFilmIndexIfValidAction(index));
            dispatch(actions.setIsNoLongerAutoScrollingThroughFilmsAction());
        }
    }
}

const CarouselContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Carousel);

export default CarouselContainer;
