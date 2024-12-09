import React, { createContext, useState } from "react";

export const QuestionModalContext = createContext()

export const QuestionModalProvider = ({children}) => {
    const [questionModal, setQuestionModal] = useState(false)

    function isOpen() {
        setQuestionModal(true)
    }

    function isClose() {
        setQuestionModal(false)
    }

    return(
        <QuestionModalContext.Provider value={{questionModal, isClose, isOpen}}>
            {children}
        </QuestionModalContext.Provider>
    )
}
