import React, { useState } from 'react';

const useCurrency = (label, initialState, options) => {
	const [state, setState] = useState(initialState);

	const Select = () => (
		<>
			<label>{label}</label>
			<select onChange={(e) => setState(e.target.value)} value={state}>
				<option value="">- Seleccione -</option>
				{options.map((option) => (
					<option key={option.cod} value={option.cod}>
						{option.name}
					</option>
				))}
			</select>
		</>
	);

	return [state, Select, setState];
};

export default useCurrency;
