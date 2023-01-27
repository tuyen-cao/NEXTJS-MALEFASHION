import { NUMOFITEMPERPAGE } from '@/constants/product.constant';
import { PagiantionProps } from '@/models';
import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination: React.FC<PagiantionProps> = ({ totalItems = 0, onPageChange = () => { } }) => {

    // Invoke when user click to request another page.
    const handlePageClick = (event: { selected: number }) => {
        onPageChange(event.selected)
    };
    return <>
        <div className="row">
            <div className="col-lg-12">
                <div className="product__pagination">
                    <ReactPaginate
                        previousLabel="Previous"
                        nextLabel="Next"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        pageCount={Math.ceil(totalItems / NUMOFITEMPERPAGE)}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={3}

                        containerClassName="justify-content-center pagination"
                        activeClassName="active"

                        onPageChange={handlePageClick}
                    />
                </div>
            </div>
        </div>
    </>
}
export default Pagination
