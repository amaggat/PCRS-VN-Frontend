import React, { Component } from 'react';

function PageNav ({totalPages, setPageNumber}) {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                {
                    Array(totalPages).fill(0).map((_,i) => (
                        <li className="page-item"><button className="page-link" onClick={() => setPageNumber(i)}>{i+1}</button></li>
                    ))
                }

                <li className="page-item">

                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default PageNav;