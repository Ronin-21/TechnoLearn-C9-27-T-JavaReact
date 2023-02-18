import React from 'react';
function Newsletter() {
	return (
		<>
			<section className='py-16 bg-slate-100 flex grow justify-around'>
				<div className='w-96 mx-4'>
					<h1 className='text-center font-bold text-4xl mb-8'>NEWSLETTER</h1>
					<form>
						<input
							type='text'
							name='nombre'
							placeholder='Escribe tu nombre'
							className='ring-1 ring-gray-300 w-full rounded-md outline-none focus:ring-2 focus:ring-blue-300 px-4  py-2 mb-3'
						/>

						<input
							type='email'
							placeholder='E-mail'
							className='ring-1 ring-gray-300 w-full rounded-md outline-none focus:ring-2 focus:ring-blue-300 px-4  py-2 mb-1'
						/>
						<div className='flex justify-between mt-3'>
							<div className='pt-3'>
								<input type='checkbox' name='terminos' />
								<label htmlFor='terminos'>Aceptar términos</label>
							</div>
							<button className='bg-indigo-500 text-white px-5 py-3 rounded-lg text-sm '>
								Enviar
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}
export { Newsletter };
