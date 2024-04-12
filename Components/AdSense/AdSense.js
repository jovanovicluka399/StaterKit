import React from "react";

export default class AdSense extends React.Component {
	componentDidMount() {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	}

	render() {
		return (
			<ins
				className="adsbygoogle"
				style={{ display: "block" }}
				data-ad-client="ca-pub-3763096470697498"
				data-ad-slot="2254987153"
				data-ad-format="auto"
			/>
		);
	}
}
