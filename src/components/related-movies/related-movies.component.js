import React from "react";
import "./related-movies.styles.css";
import RelatedMovie from './../related-movie/related-movie.component';

const RelatedMovies = ({relatedFilms}) => {
    return <div className="related-movies">
        { (relatedFilms.length > 0) ?
            relatedFilms.map((film, index) => (
                <div key={index} className="related-movies__movie">
                    <RelatedMovie film={film} />
                </div>
            ))
            : ''
        }
    </div>
}

export default RelatedMovies;
