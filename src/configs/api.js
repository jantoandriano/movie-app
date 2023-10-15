import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "Content-Type": "application/json"
    },
});

instance.interceptors.request.use(
    (config) => {
        // TODO: Utilize environment variables. Using throwaway account for now.
        config.headers["Authorization"] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2RhMWRhZTI3OThlYWE5NmZjMWQ3MWRhODJkZmE3YSIsInN1YiI6IjVjYjE1NTczOTI1MTQxMmZiMzI1MDc3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OfyfL7aME8Wwi-u53mNGUiZPJtH1DhWtzJ-_D7aLGtw`;
        return config;
    },
    (error) => {
        console.log("REQUEST ERROR")
        return Promise.reject(error);
    }
)

export default instance;