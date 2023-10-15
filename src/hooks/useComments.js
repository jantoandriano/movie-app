import { useEffect, useState } from "react";

function useComments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem("comments")
        );

        if (movieFavourites) {
            setComments(movieFavourites);
        }
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem("comments", JSON.stringify(items));
    };

    const addComment = (movie) => {
        const newFavouriteList = [...comments, movie];
        setComments(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
        return;
    };

    return {
        comments,
        addComment,
    };
}

export default useComments;
