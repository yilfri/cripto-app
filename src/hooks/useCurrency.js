import React, { useState } from 'react';

const useCurrency = (label, initialState, options) => {
	const [state, setState] = useState(initialState);
	console.log(options);

	const Select = () => (
		<div>
			<>
				<label>{label}</label>
				<select>
					<option value="VES">Bolívares</option>
					{options.map((option) => (
						<option key={option.cod} value={option.cod}>
							{option.name}
						</option>
					))}
				</select>
			</>
		</div>
	);

	return [state, Select, setState];
};

export default useCurrency;
