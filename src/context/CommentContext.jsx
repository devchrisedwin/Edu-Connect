import React, { createContext, useState } from "react";

export const CommentContext = createContext()

export const CommentContextProvider = ({children}) => {
    const [commentModal, setCommentModal] = useState(false)

    function isModalOpen() {
        setCommentModal(true)
    }

    function isModalClose() {
        setCommentModal(false)
    }

    return(
        <CommentContext.Provider value={{commentModal, setCommentModal}}>
            {children}
        </CommentContext.Provider>
    )
}