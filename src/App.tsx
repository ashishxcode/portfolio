import Footer from './pages/footer/Footer';
import Blogs from './pages/blogs/Blogs';
import Features from './pages/feature/Feature';
import Hero from './pages/hero/Hero';
import About from './pages/about/About';
import Options from './pages/projects/Projects';
import Timeline from './pages/timeline/Timeline';
import Contact from './pages/contact/Contact';
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
							<About />
							<Features />
							<Options />
							<Timeline />
							<Blogs />
							<Contact />
							<Footer />
						</>
					}
				/>
			</Routes>
		</main>
	);
};

export default App;
