import React from 'react';

export default function Category({ image, title, id }) {
	return (
		<div>
			<img src={`http://127.0.0.1.:3333${image}`} alt={title} />
			<p>{title}</p>
		</div>
	);
}
