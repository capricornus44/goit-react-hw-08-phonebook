import Loader from 'react-loader-spinner';
import './Spinner.scss';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner = () => {
  return (
    <div className="spinner-wrapper">
      <Loader
        type="Circles"
        color="#000BFF"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};

export default Spinner;
