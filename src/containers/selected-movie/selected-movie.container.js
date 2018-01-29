import { connect } from 'react-redux';

import MovieInfo from './../../components/movie-info/movie-info.component';

const mapStateToProps = state => {
    return {
        film: state.films.films[state.films.indexOfSelectedFilm]
    }
}

const SelectedMovie = connect(
    mapStateToProps
)(MovieInfo);

export default SelectedMovie;
