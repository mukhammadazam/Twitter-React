import { createContext,useState } from "react";

export const MyContext =createContext();
export const Myprovaydir =({children})=>{
    const [counter,setCounter] =useState(false);
    const [counter1,setCounter1] =useState(false);
    const [counter2,setCounter2] =useState(false);
    const [counter3,setCounter3] =useState(false);
    const [counter4,setCounter4] =useState(false);
    const funCount=()=>{
         setCounter(!counter);
    }
    const funCount1=()=>{
        setCounter1(!counter1);
   }
   const funCount2=()=>{
    setCounter2(!counter2);
}
const funCount3=()=>{
    setCounter3(!counter3);
}
const funCount4=()=>{
    setCounter4(!counter4);
}
     return (
        <MyContext.Provider value={{counter ,funCount,funCount1,counter1,funCount2,counter2
        ,counter3,funCount3,counter4,funCount4}} >
            {children}
        </MyContext.Provider>
     )
}   