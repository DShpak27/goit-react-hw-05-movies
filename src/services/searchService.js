const movieServiceApi = {
    baseUrl: 'https://api.themoviedb.org/3/',
    userKey: 'a3cb0cf762fe02df8fbdba8f47fbe85b',
    currentQuery: '',
    pageNumber: 1,

    makeSearchParams() {
        return new URLSearchParams({
            api_key: this.userKey,
            query: this.currentQuery,
            page: this.pageNumber,
        });
    },

    makeUrlParams() {
        return new URLSearchParams({
            api_key: this.userKey,
        });
    },

    getTrending(typeOfTrending = 'movie', trendingPeriod = 'day') {
        const typeOfService = 'trending';
        return fetch(
            `${
                this.baseUrl
            }${typeOfService}/${typeOfTrending}/${trendingPeriod}?${this.makeUrlParams()}`
        );
    },

    getMovieById(id) {
        const urlPart = 'movie';
        return fetch(`${this.baseUrl}${urlPart}/${id}?${this.makeUrlParams()}`);
    },

    getReviewsById(id) {
        const urlPart = 'movie';
        const urlSuffix = 'reviews';
        return fetch(
            `${
                this.baseUrl
            }${urlPart}/${id}/${urlSuffix}?${this.makeUrlParams()}`
        );
    },

    getSearchedMovies(value) {
        this.currentQuery = value;
        const urlPart = 'search/movie';
        return fetch(`${this.baseUrl}${urlPart}?${this.makeSearchParams()}`);
    },

    getCast(id) {
        const urlPart = 'movie';
        const urlSuffix = 'credits';
        return fetch(
            `${
                this.baseUrl
            }${urlPart}/${id}/${urlSuffix}?${this.makeUrlParams()}`
        );
    },
};

export default movieServiceApi;
