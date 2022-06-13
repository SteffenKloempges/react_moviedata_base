import { useState } from 'react';
import MovieItem from "./MovieItem";
import data from './data';

const MovieList = () => {

    const [dataSorted, setDataSorted] = useState(data);

    const handleAtoZ = () => {
        setDataSorted([...dataSorted].sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            } else if (a.title > b.title) {
                return 1;
            }
            return 0;
        }))
    }

    const handleZtoA = () => {
        setDataSorted([...dataSorted].sort((a, b) => {
            if (a.title < b.title) {
                return 1;
            } else if (a.title > b.title) {
                return -1;
            }
            return 0;
        }))
    }

    const handleRateAb = () => {
        setDataSorted([...dataSorted].sort((a, b) => {
            return b.rate - a.rate;
        }))
    }

    const handleYearAb = () => {
        setDataSorted([...dataSorted].sort((a, b) => {
            return b.year - a.year;
        }))
    }

    const handleYearAuf = () => {
        setDataSorted([...dataSorted].sort((a, b) => {
            return a.year - b.year;
        }))
    }

    const handleFilter = () => {
        setDataSorted([...dataSorted].filter((data) => {
            return data.genre.includes('Action');
        }))
    }

    const handleSortGenre = () => {
        setDataSorted([...dataSorted].sort((a, b) => {
            if (a.genre < b.genre) {
                return -1;
            } else if (a.genre > b.genre) {
                return 1;
            }
            return 0;
        }))
    }

    return (
        <div>
            <button onClick={handleAtoZ}>A-Z</button>
            <button onClick={handleZtoA}>Z-A</button>
            <button onClick={handleRateAb}>Rating</button>
            <button onClick={handleFilter}>Filter Genre</button>
            <button onClick={handleYearAuf}>Jahr auf</button>
            <button onClick={handleYearAb}>Jahr ab</button>
            <button onClick={handleSortGenre}>Sort Genre</button>
            <section>
                {dataSorted.map((elt, i) =>
                    <MovieItem
                        key={i}
                        title={elt.title}
                        year={elt.year}
                        director={elt.director}
                        duration={elt.duration}
                        genre={elt.genre}
                        rate={elt.rate}
                    />
                )}
            </section>
        </div>);
}

export default MovieList;