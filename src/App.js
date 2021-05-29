import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import image from './cripto.jpg';
import Form from './components/Form';
import axios from 'axios';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
	max-width: 900px;
	margin: 0 auto;
	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
	}
`;

const Image = styled.img`
	max-width: 100%;
	margin-top: 5rem;
`;

const Heading = styled.h1`
	font-family: 'Bebas Neue', cursive;
	color: #fff;
	text-align: left;
	font-weight: 700;
	font-size: 50px;
	margin-bottom: 50px;
	margin-top: 80px;

	&&::after {
		content: '';
		width: 100px;
		height: 6px;
		background-color: #66a2fe;
		display: block;
	}
`;

function App() {
	const [currency, setCurrency] = useState('');
	const [cryptoCurrency, setCryptoCurrency] = useState('');
	const [result, setResult] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getChangeCurrency = async () => {
			if (currency === '') return;

			const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;

			const result = await axios.get(url);

			setLoading(true);

			setTimeout(() => {
				setLoading(false);
				setResult(result.data.DISPLAY[cryptoCurrency][currency]);
			}, 3000);
		};

		getChangeCurrency();
	}, [currency, cryptoCurrency]);

	const component = loading ? <Spinner /> : <Result result={result} />;

	return (
		<Contenedor>
			<div>{<Image src={image} alt="Cryptocurrency" />}</div>
			<div>
				<Heading>Cotiza Criptomonedas al Instante</Heading>
				<Form setCurrency={setCurrency} setCryptoCurrency={setCryptoCurrency} />
				{component}
			</div>
		</Contenedor>
	);
}

export default App;
