import React, { Component } from 'react';
import CaseCard from './Part/CaseCard';
import CCCCard from './Part/CCCard';
import CPUCard from './Part/CPUCard';
import MemoryCard from './Part/MemoryCard';
import MotherBoardCard from './Part/MotherBoardCard';
import PowerCard from './Part/PowerCard';
import StorageCard from './Part/StorageCard';
import GPUCard from './Part/VideoCard';

class Table extends Component {
    render() {
        return (
            <table className="table title">
                <thead>
                    <tr>
                        <th scope="col">Component</th>
                        <th scope="col">Selection</th>
                        <th scope="col">Base</th>
                        <th scope="col">Promo</th>
                        <th scope="col">Snipping</th>
                        <th scope="col">Tax</th>
                        <th scope="col">Price</th>
                        <th scope="col">Where</th>
                    </tr>
                </thead>
                <tbody className="attribute">
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