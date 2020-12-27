import { Link } from "react-router-dom";
import formatMoney from "../../Components/Page/CurrencyFormat";

export default function Card ({title, name, part}) {
    const min = {...part}
    console.log(part)
    min.price = 10000000000
        
        // eslint-disable-next-line array-callback-return
    part?.priceList.map(e => {
        if (e.price < min.price) {
            min.logo = e.logo
            min.img = e.img
            min.link = e.link
            min.price = e.price
        }
    })

    delete min.priceList
    console.log(min)

    return (
        <tr className="product-card">
            <td className="row-title"><Link className="vertical-center" id="" to={`/products/${name}`}>{title}</Link></td>
            <td>
            {
                <Link className="wrap-product-img" to={`/products/${name}/${min.id}`}>
                    <img className="product-img" src={min.img ? min.img : null} alt={min.id}/> 
                    <span>
                        {min.fullname}
                    </span>
                </Link>
            }
            </td>
            <td className="base row-title">
                <div className="vertical-center">{min ? formatMoney(min.price) + "VND" : null}</div>
            </td>
            <td className="promo row-title">
                <div className="vertical-center">{min ?
                        min.promo ? 
                            min.promo
                            :
                            null
                        :
                    null
                }</div>
            </td>
            <td className="snipping row-title">
                <div className="vertical-center">{
                    min ?
                    min.snipping ? 
                        min.snipping
                        :
                        null
                    :
                null
                }</div>
            </td>
            <td className="tax row-title">
                <div className="vertical-center">{
                    min ?
                    min.tax ? 
                        min.tax
                        :
                        null
                    :
                null
                }</div>
            </td>
            <td className="price row-title">
                <div className="vertical-center">
                    {
                        min ?
                            min.promo ? 
                                formatMoney(min.price * min.promo) + "VND"
                                :
                                formatMoney(min.price) + "VND"
                            :
                        null
                    }
                </div>
            </td>
            <td className="where">
                <div className="">
                    {
                        min ?
                            <a className="contain-img" target="_blank" rel="noreferrer" href={min.link}>
                                <img className="product-img" src={min.logo ? min.logo : null} alt={min.id}/>
                            </a>
                        : null
                    }
                </div>
            </td>
        </tr>
    )
}