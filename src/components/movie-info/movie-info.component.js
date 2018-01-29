import React from "react";
import "./movie-info.styles.css";

const MovieInfo = ({film}) => {
    if (!film) {
        return <div className="movie-info">
                <span className="movie-info__empty">Coming soon</span>
            </div>
    }
    else return <div
        className="movie-info"
        style={{backgroundImage:
            "url(" + film.images.image[0].src + ")"}}
    >
        <div className="movie-info__text">
            <span className="movie-info__title">{film.title}</span>
            <span className="movie-info__runtime">
                {film.durationMinutes} mins
            </span>
        </div>
    </div>
}

export default MovieInfo;
