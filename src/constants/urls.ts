const baseURL = 'https://api.themoviedb.org/3';
const imgURL = 'https://image.tmdb.org/t/p/w500//';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTRjN2I5YWQxMTFkODQzODhlZTMwYTFmYmM5NDJkNyIsInN1YiI6IjY1NDU1MmEzMjg2NmZhMDBmZWZlNmNiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G0uGQYKmQ2hICu81ymN0zyEh-PZIX_9aUQRB1GJAAas'

const discover = '/discover';
const movie = '/movie';
const genre = '/genre';
const list = '/list';
const search = '/search';
const keyword = '/keyword'

const urls = {
    movie: {
        base: `${discover}${movie}`,
        oneMovie: movie,
        infoMovie: {
            byId: (id: string) => `${movie}/${id}`
        }
    }
    ,
    genre: {
        base: `${genre}${movie}${list}`
    },
    search: {
        base: `${search}${keyword}`
    }
}

export {baseURL, urls, imgURL, token}