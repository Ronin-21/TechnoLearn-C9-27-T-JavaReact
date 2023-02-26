import { useGetUserByIDQuery } from '../store/api/apiSlice';
import { useSelector } from 'react-redux';
import Loading from '../components/loading/Loading';
import CardComponentProfile from '../components/Cards/CardComponentProfile';
import '../styles/profileUser.css';

const ProfileUser = () => {
	// Trae datos del usuario desde el store
	const datosUsuario = useSelector((state) => state.auth);
	// Trae datos Actualizados del usuario desde la API
	const { data, isLoading } = useGetUserByIDQuery(datosUsuario.id, {
		refetchOnMountOrArgChange: true,
	});

	const idUserAvatar = Math.floor(Math.random() * 100);

	// Loader
	if (isLoading) return <Loading />;

	return (
		<div>
			<div className='profile-container'>
				<h2 className='profile-title'>BIENVENIDO</h2>
				<p className='profile-username'>{datosUsuario.nombre}</p>

				<div className='profile-avatar'>
					<img
						className='profile-avatar-img'
						src={`https://randomuser.me/api/portraits/men/${idUserAvatar}.jpg`}
						alt='foto de perfil'
					/>
					<div className='profile-avatar-info'>
						<span>EMAIL:</span>
						<p>{datosUsuario.email}</p>
					</div>
				</div>
			</div>
			<div className='profile-courses-container'>
				<h4 className='profile-courses-title'>Cursos que estas tomando</h4>

				<div className='profile-courses-list'>
					{data?.cursosUsuario.map((e) => {
						return (
							<CardComponentProfile
								key={e.id}
								id={e.id}
								data={data}
								instructor={e.instructor}
								nombreCurso={e.nombreCurso}
								miniaturaCurso={e.miniaturaCurso}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProfileUser;
