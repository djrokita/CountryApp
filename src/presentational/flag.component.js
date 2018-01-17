import React from 'react';

const CountryFlag = props => (
	<div className='country-logo-wrapper'>
		<img className='county-logo' src={props.country.imageUrl} alt='coutry photo'/>
	</div>
);

export default CountryFlag;