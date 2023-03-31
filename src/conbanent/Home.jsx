import { useContext } from 'react';
import './hom.scss';
import { FetchContext } from '../context/FitchConbonet';
const Home = () => {
  const {data} = useContext(FetchContext);
  return (
    <div className=" hom flex-2">
        <div className="hom__button ">
        <button className="hom__button--btn">For you</button>
        <button className="hom__button--btn1">Following</button>
        
        </div>
        <div className="row row__enner">
          {
            data.map((el)=>(
              <div className="col pb-5 row__enner">
                <img className='img1' src={el.urlToImage} alt={el.author}  />
                <div className="d-flex align-items-start pt-3 px-3 ">
                <img className='img' src={el.urlToImage} alt={el.author} />
                <div className="ps-2">
                <h2 className='row__enner--title'>{el.title.slice(0,70)}</h2>
                <p className="row__enner--text">{el.description}</p>
                </div>
                </div>
{
                console.log(el)

}
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Home