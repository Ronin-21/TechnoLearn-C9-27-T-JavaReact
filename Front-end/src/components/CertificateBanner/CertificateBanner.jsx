import { GoCheck } from 'react-icons/go';
import certificateSvg from '../../assets/img/Certificado.svg';
import './CertificateBanner.css';

const CertificateBanner = () => {
	return (
		<section className='certificate-container'>
			<div className='certificate-svg'>
				<img src={certificateSvg} alt='certificate svg' />
			</div>
			<div className='certificate-content'>
				<h4 className='certificate-title'>CERTIFICA TU CONOCIMIENTO</h4>
				<p className='certificate-text'>
					Al finalizar el curso tendrás que aprobar un exámen y te emitiremos un
					certificado profesional digital que valida tu aprendizaje.
				</p>
				<div className='certificate-check'>
					<div>
						<GoCheck />
						<p>Mejora tu CV</p>
					</div>
					<div>
						<GoCheck />
						<p>Certificado con código</p>
					</div>
					<div>
						<GoCheck />
						<p>Impulsa tu carrera profesional</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CertificateBanner;
