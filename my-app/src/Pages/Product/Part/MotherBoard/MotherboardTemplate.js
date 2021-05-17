import React, { useState, useEffect } from 'react';
import StarRating from 'react-star-ratings';
import ScrollableMenu from 'react-horizontal-scrolling-menu';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

import Footer from '../../../../Components/Footer/Footer';
import Header from '../../../../Components/Header/Header';
import img from './motherboard-demo.jpeg';

import ProductSuggestionCard from '../../../Home/product-suggestion-section/suggestion-block/suggestion-card/suggestion-card';
import '../ProductSample.css';
import ImageSlider from '../../../../Components/Page/ImageSlider';
import { useParams } from 'react-router-dom';
import MotherboardService from '../../../../Client/MotherboardService';
import formatMoney from '../../../../Components/Page/CurrencyFormat';
import { RatingService } from '../../../../Client/RatingService';
import { getRecommendation } from '../../../../Client/RecommendService';
import LoadingBars from '../../../../Components/Page/LoadingBars';

function MotherboardTemplate() {
	const { id } = useParams();
	const [motherboard, setMotherboard] = useState({});
	const [recommendations, setRecommendations] = useState({});
	const [rating, setRating] = useState(0);
	const [averageRating, setAverageRating] = useState(0);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetch = async () => {
			setLoading(true);
			try {
				const mainboardResult = await MotherboardService.getMotherboardbyID(id);
				const recommendationResult = await getRecommendation('mainboard', id);
				if (mainboardResult.data) {
					setMotherboard(mainboardResult.data);
					setRating(mainboardResult.data.mainboardRating ? mainboardResult.data.mainboardRating.rating : 0);
					setAverageRating(mainboardResult.data.averageRating || 0);
				}
				if (recommendationResult.data) {
					setRecommendations(recommendationResult.data);
				}
			} catch (error) {
				toast.error(`Error: ${error}`);
			}
			setLoading(false);
		}

		fetch();
	}, [id])


	const handleChangeRating = async (newRating, name) => {
		const result = await RatingService({
			type: 'mainboard',
			productId: id,
			jwt: Cookies.get('jwt'),
			userId: Cookies.get('userId'),
			rating: newRating,
			favorite: true
		});
		if (result.data.success) {
			toast.dark(`Rating updated: ${newRating}/5 stars`);
			setRating(newRating)
		} else {
			toast.error('Error occured. Check console log for more details');
			console.error('RATING ERROR: ', result);
		}
		console.log(result);
	}

	const Arrow = (text) => (
		<div style={{ cursor: 'pointer' }}>
			{text}
		</div>
	)

	const componentRender = (
		<>
			<div className="row">
				<div className="col-lg-4 left">
					<div className="block img">
						{/* <ImageSlider arr={motherboard.priceList?.map(element => { return (element) })} img={img} /> */}
						<img src={motherboard.image} style={{ maxWidth: '350px' }} />
					</div>
					<div className="block action form-group row justify-content-md-center">
						<div className="col-lg action-function">
							<button type="button" className="btn btn-primary" onClick={() => MotherboardService.setMotherboard2List(motherboard)}>Add to your Build</button>
						</div>
					</div>
				</div>
				<div className="col-lg-7 right">
					<div className="block detail-text">
						<div className="detail-title">Price</div>
						<div className="detail-price row">
							<table className="table table-hover detail-table">
								<thead>
									<tr>
										<th scope="col">Retailer</th>
										<th scope="col">Base</th>
										<th scope="col">Promo</th>
										<th scope="col">Total</th>
										<th scope="col"></th>
									</tr>
								</thead>
								<tbody>
									{
										motherboard.priceList?.map(element => {
											return (
												<tr>
													<td className="retailer-img vertical-container">
														<img className="" src={element.retailer.logo} alt="retailer" />
													</td>
													<td className="base vertical-container">
														<div className="vertical">
															{formatMoney(+element.price)} VND
														</div>
													</td>
													<td className="promo vertical-container">
														<div className="vertical text-center">
															{element.promo ? element.promo : "-"}
														</div>
													</td>
													<td className="total vertical-container">
														<div className="vertical">
															{element.promo ? formatMoney(+(element.promo * element.price)) : formatMoney(+element.price)}
														</div>
													</td>
													<td className="buy-button vertical-container">
														<a target="_blank" rel="noreferrer" className="btn btn-success vertical" href={element.link}>Buy</a>
													</td>
												</tr>
											)
										})
									}
								</tbody>
							</table>
						</div>

						<div className="block detail-text">
							<ul>
								<div className="detail-title ">Specifications</div>
							</ul>
							<ul>
								<div className="detail-block border-bottom" id="manufaturer">
									<p className="title">Manufacturer</p>
									<p className="body">{motherboard.manufacturer}</p>
								</div>
							</ul>
							<ul>
								<div className="detail-block border-bottom" id="serieName">
									<p className="title">Serie Name</p>
									<p className="body">{motherboard.serieName}</p>
								</div>
							</ul>
							<ul>
								<div className="detail-block border-bottom" id="serieName">
									<p className="title">Memory Max</p>
									<p className="body">{motherboard.sizeofram}</p>
								</div>
							</ul>
							<ul>
								<div className="detail-block border-bottom" id="serieName">
									<p className="title">Memory Slot</p>
									<p className="body">{motherboard.memory_slot}</p>
								</div>
							</ul>
							<ul>
								<div className="detail-block border-bottom" id="serieName">
									<p className="title">Chipset</p>
									<p className="body">{motherboard.chipset}</p>
								</div>
							</ul>
							<ul>
								<div className="detail-block border-bottom" id="serieName">
									<p className="title">Socket</p>
									<p className="body">{motherboard.socket}</p>
								</div>
							</ul>
						</div>

						<div className="block detail-text">
							<ul>
								<div className="detail-title">Ratings</div>
							</ul>
							<ul>
								Your score: &nbsp;
								<StarRating
									rating={rating}
									changeRating={(rating) => handleChangeRating(rating)}
									starRatedColor="orange"
									numberOfStars={5}
									starDimension="20px"
									starSpacing="5px"
								/>
							</ul>
							<ul>
								Average score: &nbsp;
								<StarRating
									rating={averageRating}
									starRatedColor="orange"
									numberOfStars={5}
									starDimension="20px"
									starSpacing="5px"
								/>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="block detail-text">
				<ul>
					<div className="detail-title">You may also like...</div>
				</ul>
				<ul>
					{
						(() => {
							if (recommendations.content) {
								const recommendationRender = [];
								recommendations.content.forEach((product) => {
									recommendationRender.push(
										<ProductSuggestionCard
											key={product.id}
											name={product.fullname}
											link={`/products/motherboard/${product.id}`}
											img={product.image}
											price={product.minPrice}
										/>
									)
								})
								return (
									<ScrollableMenu
										wheel={false}
										data={recommendationRender}
										arrowLeft={Arrow('<')}
										arrowRight={Arrow('>')}
									/>
								)
							} else return null;
						})()
					}
				</ul>
			</div>
		</>
	)

	return (
		<div className="product-detail white-back">
			<Header />
			<div className="banner text-center">
				<p className="banner-title">PRODUCT DETAIL</p>
				<p className="banner-name">{motherboard.fullname}</p>
			</div>

			<div className="w-container">
				{
					loading
					? <LoadingBars />
					: componentRender
				}
			</div>
			<Footer />
		</div>
	)
}

export default MotherboardTemplate;