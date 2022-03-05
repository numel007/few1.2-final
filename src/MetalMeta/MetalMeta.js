import React from 'react';
import BandData from '../metal.json';
import './MetalMeta.css';

function MetalMeta() {
	return (
		<div className="MetalMeta">
			<p>Band count: {BandData.length}</p>
		</div>
	);
}

export default MetalMeta;
