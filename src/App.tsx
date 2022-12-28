import React from 'react';
import Footer from './pages/footer/Footer';
import FAQ from './pages/faq/FAQ';
import Features from './pages/feature/Feature';
import Hero from './pages/hero/Hero';
import Mentor from './pages/mentors/Mentor';
import Options from './pages/option/Option';
import Timeline from './pages/timeline/Timeline';

const App = () => {
	return (
		<main>
			<Hero />
			{/* <Features /> */}
			<Timeline />
			<Options />
			<Mentor />
			<FAQ />
			<Footer />
		</main>
	);
};

export default App;
