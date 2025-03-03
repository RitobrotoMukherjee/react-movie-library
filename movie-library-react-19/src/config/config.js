const API_KEY = import.meta.env.VITE_API_ACCESS_KEY;

const CONFIG = {
    apiBaseUrl: "https://api.themoviedb.org/3",
    apiOptions: {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    }
}

export { CONFIG as default, API_KEY };