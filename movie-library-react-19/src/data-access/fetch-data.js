import CONFIG from "../config/config";

export const FETCH_MOVIES = async () => {
    const endpoint = `${CONFIG.apiBaseUrl}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, CONFIG.apiOptions);
    
    if(response.ok && response.status == 200) {
        return response.json();
    }
    
    throw new Error(`Unable to fetch movie from ${CONFIG.apiBaseUrl}/discover/movie`);
}