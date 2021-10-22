
import ranPikachu from '../../assets/images/pikachuRuning.gif';


const Loader = () => {
  return (
    <div className="loader-content">
      <img
        src={ranPikachu}
        alt='Pikachu loader'
        width="300"
        height="250"
      />
      <span className="loading">Loading...</span>
    </div>
  )
}

export default Loader;