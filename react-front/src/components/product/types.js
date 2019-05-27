import PropTypes from 'prop-types';

export const ProductType = PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    code: PropTypes.string,
    description: PropTypes.string,
    specifications: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
    tags: PropTypes.arrayOf(PropTypes.string)
});

export const ProductsType = PropTypes.arrayOf(ProductType);