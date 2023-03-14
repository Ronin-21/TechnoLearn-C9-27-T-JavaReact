import Slider from '../components/Slider/Slider';
import { Newsletter } from '../components/Newsletter/Newsletter';
import { bannerImages } from '../utils/bannerImages';
import { testimonialInfo } from '../utils/testimonialsInfo';
import { About } from '../components/About/About';
import { Testimonials } from '../components/Testimonials/Testimonials';
import CertificateBanner from '../components/CertificateBanner/CertificateBanner';
import { CardsContainer } from '../components/CardsContainer/CardsContainer';

const Home = () => {
	return (
		<>
			<Slider sliderData={bannerImages} />
			<CardsContainer />
			<About />
			<CertificateBanner />
			<Testimonials testimonialData={testimonialInfo} />
			<Newsletter />
		</>
	);
};

export default Home;
