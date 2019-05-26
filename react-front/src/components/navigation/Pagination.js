import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Pagination.css';

const generatePages = (currentPage, lastPage) => {
    let page = currentPage === 1 ? currentPage + 1 : currentPage;
    page = page === lastPage ? page - 1 : page;

    let pages = [];

    for (let i = page - 1 || 1; i <= page + 1; i++) {
        if (i > lastPage)
            break;
        pages.push(i);
    }

    return pages;
}

export const Pagination = ({ currentPage, lastPage, changePage }) => {
    const previousPage = cn('page-item', { 'disabled': currentPage <= 1 });
    const nextPage = cn('page-item', { 'disabled': currentPage >= lastPage });
    const commonPage = page => cn('page-item', { 'active': page === currentPage });

    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className={previousPage}>
                    <button className="page-link" onClick={() => changePage(currentPage - 1)}>Previous</button>
                </li>
                { currentPage - 1 > 1 &&
                    <li className="page-item">
                        <button className="page-link" onClick={() => changePage(1)}>1</button>
                    </li>
                }
                { currentPage - 2 > 1 &&
                    <li className="page-item disabled">
                        <button className="page-link">...</button>
                    </li>
                }
                {generatePages(currentPage, lastPage).map(page => 
                    <li className={commonPage(page)} key={page}>
                        <button className="page-link" onClick={() => changePage(page)}>{ page }</button>
                    </li>
                )}
                { currentPage + 2 < lastPage &&
                    <li className="page-item disabled">
                        <button className="page-link">...</button>
                    </li>
                }
                { currentPage + 1 < lastPage &&
                    <li className="page-item">
                        <button className="page-link" onClick={() => changePage(lastPage)}>{ lastPage }</button>
                    </li>
                }
                <li className={nextPage}>
                    <button className="page-link" onClick={() => changePage(currentPage + 1)}>Next</button>
                </li>
            </ul>
        </nav>
    )
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    lastPage: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired
}