import { FcPrevious, FcNext } from 'react-icons/fc';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import './pagination.css';

const Pagination = (props) => {
  const {currentPage, setCurrentPage, totalPages} = props;

  const prev = function () {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  };
  
  const next = function () {
    if (currentPage < totalPages ) {
      setCurrentPage(currentPage + 1)
    }
  };

  return (
    <div>
      <div className='btn-content'>
        <button className="btn-page" disabled={currentPage <= 1} onClick={() => prev()} >
        {currentPage <= 1 ? BsChevronLeft() : FcPrevious()}
          {/* <img className="Button__icon" src="https://assets-cdn.123rf.com/ui-components/assets/images/navleft-icon.svg" alt="Próxima página"></img> */}
        </button>
        <a type='text' className='input-home'>Page
          <button className="btn-page">
            {currentPage}
          </button>
          of {totalPages} </a>
        <div>
          <button className="btn-page" disabled={currentPage >= totalPages} onClick={next}>
            {/* <img className="Button__icon" src="https://assets-cdn.123rf.com/ui-components/assets/images/navright-icon.svg" alt="Próxima página"></img> */}
            {currentPage >= totalPages ? BsChevronRight() : FcNext()}
          </button>
        </div>
      </div>
    </div>
  )
}


export default Pagination;