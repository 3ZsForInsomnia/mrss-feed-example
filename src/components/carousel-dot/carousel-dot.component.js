import React from 'react';
import './carousel-dot.styles.css';

const CarouselDot = ({onCarouselDotClick, isSelected}) => (
    <i
        onClick={onCarouselDotClick}
        className={"material-icons carousel-dot" +
            (isSelected ? " carousel-dot--selected" : "")
        }
    >fiber_manual_record</i>
)

export default CarouselDot;
