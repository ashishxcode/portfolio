import React, { useState } from 'react';
import Arrow from '../../../assets/icons/arrow-down.svg';

interface FAQCardProps {
	faq: {
		question: string;
		answer: string;
	};
}
const FAQCard: React.FC<FAQCardProps> = ({ faq }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<div className={`faq-card ${isOpen && 'active'}`} onClick={toggle}>
			<div className="faq-card-header">
				<h3 className="faq-title">{faq.question}</h3>
				<img
					src={Arrow}
					alt="arrow"
					className="faq-arrow"
					style={{
						transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
						transition: 'all 0.3s ease-in-out',
					}}
				/>
			</div>

			{isOpen && (
				<div className="faq-card-body">
					<p>{faq.answer}</p>
				</div>
			)}
		</div>
	);
};

export default FAQCard;
