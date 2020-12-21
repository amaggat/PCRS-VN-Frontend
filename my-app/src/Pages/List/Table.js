import React, { Component } from 'react';
import CaseCard from './Part/CaseCard';
import CCCCard from './Part/CCCard';
import CPUCard from './Part/CPUCard';
import MemoryCard from './Part/MemoryCard';
import MotherBoardCard from './Part/MotherBoardCard';
import PowerCard from './Part/PowerCard';
import ProductCard from './Part/ProductCard';
import StorageCard from './Part/StorageCard';
import GPUCard from './Part/VideoCard';

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
                    <CPUCard />
                    <CCCCard />
                    <MotherBoardCard />
                    <MemoryCard />
                    <StorageCard />
                    <GPUCard />
                    <CaseCard />
                    <PowerCard />
                </tbody>
            </table>
        )
    }
}

export default Table;