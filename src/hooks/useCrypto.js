import React, { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
	font-family: 'Bebas Neue', cursive;
	color: #fff;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 2.4rem;
	margin-top: 2rem;
	display: block;
`;

const SelectContainer = styled.select`
	width: 100%;
	display: block;
	padding: 1rem;
	-webkit-appearance: none;
	border-radius: 10px;
	outline: none;
	font-size: 1.1rem;
`;

const useCrypto = (label, initialState, options) => {
	const [state, setState] = useState(initialState);

	const CryptoSelect = () => (
		<>
			<Label>{label}</Label>
			<SelectContainer onChange={(e) => setState(e.target.value)} value={state}>
				<option value="">- Seleccione -</option>
				{options.map((option) => (
					<option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
						{option.CoinInfo.FullName}
					</option>
				))}
			</SelectContainer>
		</>
	);

	return [state, CryptoSelect, setState];
};

export default useCrypto;
