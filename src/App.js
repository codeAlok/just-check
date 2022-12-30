import './App.css';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState(1);

  const handlePageClick = (data) => {
    console.log(data.selected + 1);
    setPage(data.selected + 1);
  }

  return (
    <div className='App'>

      <h1>Current page is {page} </h1>

      {/* all classnames used from bootstrap pagination */}
      <ReactPaginate
       previousLabel= {'previous'}
       nextLabel= {'next'}
       breakLabel= {'...'}
       pageCount= {25}
       marginPagesDisplayed= {2}
       pageRangeDisplayed= {3}
       onPageChange= {handlePageClick}
       containerClassName= {'pagination justify-content-center'}
       pageClassName= {'page-item'}
       pageLinkClassName= {'page-link'}
       previousClassName= {'page-item'}
       previousLinkClassName= {'page-link'}
       nextClassName= {'page-item'}
       nextLinkClassName= {'page-link'} 
       breakClassName= {'page-item'}
       breakLinkClassName= {'page-link'}
       activeClassName= {'active'}
      />

    </div>
  );
}

export default App;
