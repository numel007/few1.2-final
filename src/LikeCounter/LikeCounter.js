import React, { useState } from 'react';
import './LikeCounter.css';

function LikeCounter(props) {
	const [likes, setLikes] = useState(0);
	const { band_name } = props;

	return (
		<div className="like-counter" key={band_name}>
			<button onClick={() => setLikes(likes - 1)}>👎</button>
			<p>{likes}</p>
			<button onClick={() => setLikes(likes + 1)}>👍</button>
		</div>
	);
}

export default LikeCounter;
