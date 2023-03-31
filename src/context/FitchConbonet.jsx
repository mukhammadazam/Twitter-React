import { useState, useEffect, createContext } from "react"
import axios from 'axios';
export const FetchContext = createContext();
export  const FitchConbonet = ({ children }) => {
    const [data, setData] = useState([]);
    const fetchFun = async () => {
        const response = await axios.get('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=f4067fe682044e6787e881d30a1c01ba')
        setData(response.data.articles)
    }
    useEffect(() => {
        fetchFun()
    }, [])


    return (
        <FetchContext.Provider value={{ data,setData }}>

            {children}

        </FetchContext.Provider>
    )
}
