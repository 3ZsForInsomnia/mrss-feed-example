import React from "react";
import "./related-movie.styles.css";

const RelatedMovie = ({film}) => {
    return <div className="related-movie">
        <img
            className="related-movie__image"
            src={film.images.image[0].src}
        />
        <p className="related-movie__title">{film.title}</p>
    </div>
}

export default RelatedMovie;
