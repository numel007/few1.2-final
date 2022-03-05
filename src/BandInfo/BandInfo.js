import React from 'react';
import LikeCounter from '../LikeCounter/LikeCounter';
import './BandInfo.css';

function BandInfo(props) {
	const { id, band_name, fans, formed, origin, split, style } = props;

	let fansCalculated = (fans * 1000).toLocaleString('en');
	let splitStatus = split === '-' ? true : false;

	const stylesArray = style.split(',');

	const styles = stylesArray.map((oneStyle) => {
		return <li>{oneStyle}</li>;
	});

	return (
		<div className="BandInfo" key={band_name}>
			<h2 className="band-name">{band_name}</h2>
			<li>Fans: {fansCalculated}</li>
			<li>Formed: {formed}</li>
			<li>Origin: {origin}</li>
			{splitStatus ? '' : <li>{`Split: ${split}`}</li>}

			<h3>Styles</h3>
			<div className="band-styles">{styles}</div>

			{splitStatus ? <LikeCounter key={id} band_name={band_name} /> : ''}
		</div>
	);
}

export default BandInfo;
