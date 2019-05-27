import PropTypes from 'prop-types';

export const ProductType = PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.string,
    code: PropTypes.string.isRequired,
    description: PropTypes.string,
    specifications: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, value: PropTypes.isRequired })),
    tags: PropTypes.arrayOf(PropTypes.string)
});

export const ProductsType = PropTypes.arrayOf(ProductType);