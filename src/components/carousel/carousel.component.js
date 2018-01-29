import React from 'react';
import CarouselDot from './../carousel-dot/carousel-dot.component';
import './carousel.styles.css';

const Carousel = (
    {films, selectedFilmIndex, onFilmSelect, nextFilm, previousFilm}
) => (
    <div className="carousel">
        <i
            onClick={previousFilm}
            className="material-icons carousel__nextprev carousel__button"
        >
            keyboard_arrow_left
        </i>
        { (films.length > 0)
            ? films.map((film, index) => (
                <CarouselDot
                    key={index}
                    onCarouselDotClick={() => onFilmSelect(index)}
                    isSelected={index === selectedFilmIndex}
                /> ))
            : ''
        }
        <i
            onClick={nextFilm}
            className="material-icons carousel__nextprev carousel__button"
        >
            keyboard_arrow_right
        </i>
    </div>
)

export default Carousel;
