

export default function MovieDisplay({ movie }) {

    const  loaded = () => {
    return (
    <>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
    </>
    )
}

const loading = () => {
    return <h1>Loading...</h1>
};

return movie ? loaded() : loading();
}

// https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg