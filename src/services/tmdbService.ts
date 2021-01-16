import axios from 'axios';

import { IMovie, IMovieExtense } from '../interfaces/movie';

const BASE_API = "https://api.themoviedb.org/3";
const TOKEN = "63b106b0deba7e01034936daac898b89";

const fetchBasic = async <T>(endpoint: string) => {
    return axios.get<T | any>(`${BASE_API}${endpoint}`);
}

export interface categoryResponse {
    slug: string;
    title: string;
    items: IMovie[]    
}

// eslint-disable-next-line
export default {
    getPageInfo:  async (): Promise<categoryResponse[]> => {
        return [
            {
                slug: "originals",
                title: "Originais do Netflix",
                items: (await fetchBasic(`/discover/tv?with_network=213&language=pt-BR&api_key=${TOKEN}`)).data.results
            },
            {
                slug: "trending",
                title: "Recomendados para Você",
                items: (await fetchBasic(`/trending/all/week?&language=pt-BR&api_key=${TOKEN}`)).data.results
            },
            {
                slug: "toprated",
                title: "Em Alta",
                items: (await fetchBasic(`/movie/top_rated?&language=pt-BR&api_key=${TOKEN}`)).data.results
            },
            {
                slug: "action",
                title: "Ação",
                items: (await fetchBasic(`/discover/movie?with_genres=28&language=pt-BR&api_key=${TOKEN}`)).data.results
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: (await fetchBasic(`/discover/movie?with_genres=35&language=pt-BR&api_key=${TOKEN}`)).data.results
            },
            {
                slug: "horror",
                title: "Terror",
                items: (await fetchBasic(`/discover/movie?with_genres=27&language=pt-BR&api_key=${TOKEN}`)).data.results
            },
            {
                slug: "romance",
                title: "Romance",
                items: (await fetchBasic(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${TOKEN}`)).data.results
            },
            {
                slug: "documentary",
                title: "Documentários",
                items: (await fetchBasic(`/discover/movie?with_genres=99&language=pt-BR&api_key=${TOKEN}`)).data.results
            }
        ]
    },
    getMovieById: async (movieId: number, type: string = 'tv'): Promise<IMovieExtense> => {
        switch (type){
            case 'tv':
                return (await fetchBasic<IMovieExtense>(`/tv/${movieId}?&language=pt-BR&api_key=${TOKEN}`)).data;
            case 'movie':
                return (await fetchBasic<IMovieExtense>(`/movie/${movieId}?&language=pt-BR&api_key=${TOKEN}`)).data;
            default:
                return (await fetchBasic<IMovieExtense>(`/movie/${movieId}?&language=pt-BR&api_key=${TOKEN}`)).data;;
        }
    }
}