import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ changeHandler, placeholder }) => (
    <nav>
        <div className="form-inline justify-content-end mb-4">
            <input className="form-control" type="search" placeholder={placeholder || 'Search'} aria-label="Search" onChange={changeHandler} />
        </div>
    </nav>
);

Search.propTypes = {
    placeholder: PropTypes.string,
    changeHandler: PropTypes.func
}