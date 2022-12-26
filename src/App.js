import './App.css';
import ReactPaginate from 'react-paginate';

function App() {
  
  const handlePageClick = (data) => {
    console.log(data.selected);
  }

  return (
    <div>

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
