import { useContext } from 'react';
import { FetchContext } from '../context/FitchConbonet';

const Fetch = () => {
  const {datas}=useContext(FetchContext)
  console.log(datas)
  return (
    <div>
      Hello World
    </div>
  )
}

export default Fetch;