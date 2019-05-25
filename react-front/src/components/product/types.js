import PropTypes from 'prop-types';

export const ProductType = PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.string
});

export const ProductTypes = PropTypes.arrayOf(ProductType);