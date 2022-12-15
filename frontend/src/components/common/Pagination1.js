import React, { useEffect, useState } from 'react'
import ReactPaginate from "react-paginate"
import Items from './Items';

const Pagination1 = (props) => {

  const {data} = props

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(null);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5


    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(data.slice(itemOffset,endOffset))
      setPageCount(Math.ceil(data.length / itemsPerPage))
    },[itemOffset,itemsPerPage,data])


    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      console.log(newOffset);
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          previousLabel="< "
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName = "pagination"
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />
      </>
    );
  }


export default Pagination1