import spinner from './assets/spinner.gif';

function Spinner() {
  return (
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '100px', margin: 'auto', display: 'block' }}
      className='mt-5'
    />
  );
}
export default Spinner;
