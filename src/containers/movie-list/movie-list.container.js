import { connect } from 'react-redux';
import RelatedMovies from './../../components/related-movies/related-movies.component';
import { filterRelatedMovies } from './../../services/filter-related-movies.service';

const mapStateToProps = state => {
    const films = state.films.films;
    const index = state.films.indexOfSelectedFilm;
    if (films[index]) {
        return {
            relatedFilms: filterRelatedMovies(
                films[index].title,
                films[index].relatedFilms.relatedFilm
            ),
        }
    } else {
        return {
            relatedFilms: []
        };
    }
}

const MovieList = connect(
    mapStateToProps
)(RelatedMovies);

export default MovieList;
