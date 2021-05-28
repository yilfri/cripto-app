import React, { useState } from 'react';

const useCurrency = () => {
	const [state, setState] = useState('');

	const Select = () => (
		<div>
			<>
				<label>Moneda</label>
				<select>
					<option value="VES">Bolívares</option>
				</select>
			</>
		</div>
	);

	return [state, Select, setState];
};

export default useCurrency;
