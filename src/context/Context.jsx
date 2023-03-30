import { createContext,useState } from "react";

export const MyContext =createContext();
export const Myprovaydir =({children})=>{
    const [counter,setCounter] =useState(false);
    const [counter1,setCounter1] =useState(false);
    const [counter2,setCounter2] =useState(false);
    const [counter3,setCounter3] =useState(false);
    const [counter4,setCounter4] =useState(false);
    const [counter5,setCounter5] =useState(false);
    const [counter6,setCounter6] =useState(false);
    const [counter7,setCounter7] =useState(false);
    const [counter8,setCounter8] =useState(false);
    const [counter9,setCounter9] =useState(false);
    const [counter10,setCounter10] =useState(false);
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
const funCount5=()=>{
    setCounter5(!counter5);
}
const funCount6=()=>{
    setCounter6(!counter6);
}
const funCount7=()=>{
    setCounter7(!counter7);
}
const funCount9=()=>{
    setCounter9(!counter9);
}

const funCount8=()=>{
    setCounter8(!counter8);
}
const funCount10=()=>{
    setCounter10(!counter10);
}
     return (
        <MyContext.Provider value={{counter ,funCount,funCount1,counter1,funCount2,counter2
        ,counter3,funCount3,counter4,funCount4,counter5,funCount5,counter6,funCount6,
        counter7,funCount7,counter8,funCount8,counter9,funCount9,counter10,funCount10}} >
            {children}
        </MyContext.Provider>
     )
}   