import React from 'react';
import VirtualCampImage from '../../assets/virtual-camp.png';
import PhysicalCampImage from '../../assets/physical-camp.png';
import './option.css';

const Options = () => {
	return (
		<section id="option">
			<div className="heading">
				<h1 className="text-uppercase">Which one are you?</h1>
				<p className="sticker text-primary sticker-stroke">
					Our team would reach you out soon
				</p>
			</div>
			<div className="container option-container">
				<div className="option-card">
					<div className="image-wrapper">
						<img
							className="card-image"
							alt="virtual camp"
							src={VirtualCampImage}
						/>
					</div>
					<div className="content-wrapper">
						<div className="design-advisory-parent">
							<h3>Physical Camp</h3>
							<p>
								Action-packed days on a getaway location among mega creators for
								community-building and networking like never before!
							</p>
						</div>
						<div>
							<button className="option-btn">Learn More</button>
						</div>
					</div>
				</div>
				<div className="option-card">
					<div className="image-wrapper">
						<img
							className="card-image"
							alt="physical camp"
							src={PhysicalCampImage}
						/>
					</div>
					<div className="content-wrapper">
						<div className="design-advisory-parent">
							<h3>Physical Camp</h3>
							<p>
								A 10-week itinerary for a knowledge presented by the best in the
								game to help you grow yourself and your business.
							</p>
						</div>
						<div>
							<button className="option-btn">Learn More</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Options;
