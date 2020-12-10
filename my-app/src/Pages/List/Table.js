import React, { Component } from 'react';
import ProductCard from './ProductCard';

class Table extends Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className="font-weight-bold">Component</th>
                        <th scope="col" className="font-weight-bold">Selection</th>
                        <th scope="col" className="font-weight-bold">Base</th>
                        <th scope="col" className="font-weight-bold">Promo</th>
                        <th scope="col" className="font-weight-bold">Snipping</th>
                        <th scope="col" className="font-weight-bold">Tax</th>
                        <th scope="col" className="font-weight-bold">Price</th>
                        <th scope="col" className="font-weight-bold">Where</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </tbody>
            </table>
        )
    }
}

export default Table;