import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useCrypto from '../hooks/useCrypto';
import axios from 'axios';
import Error from './Error';
import PropTypes from 'prop-types';

const Button = styled.input`
	margin-top: 20px;
	font-weight: bold;
	font-size: 20px;
	padding: 10px;
	background-color: #66a2fe;
	border: none;
	width: 100%;
	border-radius: 10px;
	color: #fff;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #326ac0;
		cursor: pointer;
	}
`;

const Form = ({ setCurrency, setCryptoCurrency }) => {
	const [listCrypto, setlistCrypto] = useState([]);
	const [error, setError] = useState(false);

	const CURRENCYS = [
		{ cod: 'USD', name: 'Dólar Americano' },
		{ cod: 'VES', name: 'Bolívares Soberanos' },
		{ cod: 'MXN', name: 'Peso Mexicano' },
		{ cod: 'EUR', name: 'Euro' },
		{ cod: 'GBP', name: 'Libra Esterlina' }
	];

	const [currency, SelectCurrency] = useCurrency('Selecciona tu Moneda', '', CURRENCYS);

	const [cryptocurrency, CryptoCurrency] = useCrypto('Seleeciona tu Criptomoneda', '', listCrypto);

	useEffect(() => {
		const getApi = async () => {
			const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

			const result = await axios.get(url);
			setlistCrypto(result.data.Data);
		};

		getApi();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (currency === '' || cryptocurrency === '') {
			setError(true);
			return;
		}

		setError(false);
		setCurrency(currency);
		setCryptoCurrency(cryptocurrency);
	};

	return (
		<form onSubmit={handleSubmit}>
			{error ? <Error message={'Todos los campos son obligatorios'} /> : null}

			<SelectCurrency />

			<CryptoCurrency />

			<Button type="submit" value="Calcular" />
		</form>
	);
};

Form.propTypes = {
	setCurrency: PropTypes.func.isRequired,
	setCryptoCurrency: PropTypes.func.isRequired
};

export default Form;
