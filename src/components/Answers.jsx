import { useState } from 'react';
import { FaCircle } from 'react-icons/fa';

function Answers() {
  const [answers, setAnswers] = useState([]);

  return (
    <div class='card py-3 my-3 rounded-0 w-100 rounded rounded-3 mx-auto'>
      <div className='card-body mx-3 px-3'>
        <div className='row'>
          <div className='col-12 col-sm-6'>
            <div className='d-flex align-items-center p-2 m-1 border border-4 rounded-pill'>
              <FaCircle />
              <span className='ms-auto me-2'>Placeholder</span>
            </div>
          </div>
          <div className='col-12 col-sm-6'>
            <div className='d-flex align-items-center p-2 m-1 border border-4 rounded-pill'>
              <FaCircle />
              <span className='ms-auto me-2'>Placeholder</span>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-sm-6'>
            <div className='d-flex align-items-center p-2 m-1 border border-4 rounded-pill'>
              <FaCircle />
              <span className='ms-auto me-2'>Placeholder</span>
            </div>
          </div>
          <div className='col-12 col-sm-6'>
            <div className='d-flex align-items-center p-2 m-1 border border-4 rounded-pill'>
              <FaCircle />
              <span className='ms-auto me-2'>Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Answers;
