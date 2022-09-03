import hildaRun from '../../assets/images/spinner.webp';
import './loading.scss';

function Loading() {
  
  return (
    <div className='loading'>
      <img src={hildaRun} alt="hilda loading"/>
      <p>Loading...</p>
    </div>
  )
}

export default Loading