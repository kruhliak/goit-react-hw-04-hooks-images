import Spinner from 'react-loader-spinner';

export default function Loader() {
  return (
    <Spinner
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}
