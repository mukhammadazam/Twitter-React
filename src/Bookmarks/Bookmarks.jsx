import { Link } from "react-router-dom";
import kitob from "./qa.png";
import "./book.scss";
const Bookmarks = () => {
  return (
    <div>
      <div>
        <p className='h4 m-0 text-start'>Bookmarks</p>
        <Link
          to='https://twitter.com/i/bookmarks'
          target='_blank'
          className='text-decoration-none text-dark'>
          @MuhammadazamRi5
        </Link>
      </div>
      <div className='book'>
        <div className='d-flex justify-content-center'>
          <img className='book__img' src={kitob} alt='kitob' />
        </div>
        <p className='book__title text-center'>Save Tweets for later</p>
        <p className='book__text text-center px-5'>
          Don’t let the good ones fly away! Bookmark Tweets to easily find them
          again in the future.
        </p>
      </div>
    </div>
  );
};

export default Bookmarks;
