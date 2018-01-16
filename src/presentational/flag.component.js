import React from 'react';

const CountryFlag = props => (
	<div>
		<img className='county-logo' scr={props.country.imageUrl} alt='coutry photo'/>
	</div>
);

export default CountryFlag;