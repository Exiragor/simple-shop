import React from 'react';

export const ProductDetail = ({ product }) => (
    <div className="product">
        <div className="row">
            <div className="col-md-4 col-sm-12">
                <img className="card-img-top" src={ product.img || '/images/no-product-img.png' } alt={ product.name } />
                <div className="text-center mt-2">
                    <button className="w-100 button button--primaty">Купить</button>
                    {
                        product.tags && product.tags.map(tag => 
                            <button className="button button--small button--primary-border tag mt-4" key={tag}>{ tag }</button>
                        )
                    }
                </div>
            </div>
            <div className="col-md-8 col-sm-12">
                <h2>{ product.name }</h2>
                <div className="asin">ASIN: { product.code }</div>
                <h3 className="field__title font-italic mt-5">Description</h3>
                <div className="field">{ product.description }</div>
                <h3 className="field__title font-italic mt-5">Specifications</h3>
                <div className="field">
                    {
                        product.specifications && product.specifications.map(spec => 
                            <div className="d-flex justify-content-between" key={spec.name}>
                                <span className="font-weight-bold">{ spec.name }</span>
                                <span>{ spec.value }</span>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
); 