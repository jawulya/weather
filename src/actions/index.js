import axios from 'axios';
const API_KEY ='990b32577b417d5f29adfe34f89533f3';
const ROOT_URL =`https://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`


export const FETCH_WEATHER = 'FETCH_WEATHER'
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},UA`
    const request = axios.get(url)
 
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}