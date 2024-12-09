import { createContext, useState } from "react";


export const ContactContext = createContext()
   

export const ContactContextProvider = ({children}) => {
    const [contactUsModal, setContactUsModal] = useState(false)
    return(
        <ContactContext.Provider value={{contactUsModal, setContactUsModal}}>
            {children}
        </ContactContext.Provider>
    )
}
