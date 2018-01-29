export const filterRelatedMovies = (originalTitle, relatedFilms) => {
    return relatedFilms.filter(film => {
        return film.title !== originalTitle;
    });
}