import React from 'react';
import formatMoney from '../../Components/Page/CurrencyFormat';
import img from './sample.png'
import './Build.css'

function BuildTag ({post}) {
    console.log("POST", post)
    return (
        <div className="tag">
            <div className="background">
                <a className="content" href={`/builds/${post.id}`}>
                    <div className="text">
                        <div className="title">{post.name}</div>
                        <div className="description">
                            {/* {post.description} */}
                            <p>AMD Ryzen 5 5600X</p>
                            <p>Parametric Video Card (Chipset: GeForce RTX 3070)</p>
                            <p>Corsair 4000D Airflow ATX Mid Tower</p>
                        </div>
                        <div className="price"><i class="fas fa-money-bill-alt"></i>{formatMoney(1000000)}VND</div>
                    </div>
                    <div className="img">
                        <img src={img} alt="demo"/>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default BuildTag;