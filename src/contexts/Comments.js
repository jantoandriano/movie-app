import React from "react";
import useComments from "../hooks/useComments";

export const CommentContext = React.createContext();

const CommentContextProvider = ({ children }) => {
    const { comments, addComment } =
        useComments();

    const value = { comments, addComment };

    return (
        <>
            <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
        </>
    );
};

export default CommentContextProvider;
