import { useContext } from "react"
import { FetchContext } from "../context/FitchConbonet"
const Explore = () => {
const {data}=useContext(FetchContext);
  return (
    <div>
      {console.log(data)}
    </div>
  )
}

export default Explore