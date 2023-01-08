import Footer from './pages/footer/Footer';
import FAQ from './pages/faq/FAQ';
import Features from './pages/feature/Feature';
import Hero from './pages/hero/Hero';
import Mentor from './pages/mentors/Mentor';
import Options from './pages/projects/Projects';
import Timeline from './pages/timeline/Timeline';
import { Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<main>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Hero />
							<Timeline />
							<Features />
							<Options />
							{/* <Mentor /> */}
							{/* <FAQ /> */}
							<Footer />
						</>
					}
				/>
			</Routes>
		</main>
	);
};

export default App;
