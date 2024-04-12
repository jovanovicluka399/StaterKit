import React, { useEffect } from "react";

import "./style.scss";

const AdSense = ({ datakey }) => {
	useEffect(() => {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	}, []);
	return (
		<div datakey={datakey}>
			{/* <ins
				className="adsbygoogle adslot"
				data-ad-client="ca-pub-3763096470697498"
				data-ad-slot="2254987153"
			></ins> */}

			<ins
				className="adsbygoogle"
				style={{ display: "block" }}
				data-ad-client="ca-pub-3763096470697498"
				data-ad-slot="2254987153"
				data-ad-format="auto"
				data-full-width-responsive="true"
			></ins>
		</div>
	);
};

export default AdSense;
