import React, { Component } from 'react';
import '../../Pages/Product/Product.css'

function PageNav ({totalPages, setPageNumber}) {
    var setPage = false
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
            {
                totalPages > 1 ?
                    Array(totalPages).fill(0).map((_,i) => (
                        <li className="page-item"><button className={`page-link ${setPage ? "active" : null}`} 
                            onClick={() => {
                                setPageNumber(i)
                                setPage = true
                        }}>{i+1}</button></li>
                    ))
                : null
            }
            </ul>
        </nav>
    )
}

export default PageNav;