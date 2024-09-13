import { NextSeo } from 'next-seo';

const ContactPage = () => {
	return (
		<>
			<NextSeo
				title="Pagina de contacto"
				description="Esta es la pagina de contacto"
				openGraph={{
					images: [
						{
							url: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*EuuCS_NKfSijcNwK11xQ8g.jpeg',
							alt: 'Imagen de una pagina de contacto',
						},
					],
					title: 'Contacto',
					description: 'Esta es la pagina de contacto',
					locale: 'es_PE',
					type: 'website',
				}}
			/>
			<h1 className="text-6xl">ContactPage</h1>
		</>
	);
};

export default ContactPage;
