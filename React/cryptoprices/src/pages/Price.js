import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Price() {
	const apiKey = "F47F4AC3-B22A-4B3A-9675-7B8B69E589A1";

	const params = useParams();
	const symbol = params.symbol;

	const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

	const [coin, setCoin] = useState("");

	const getCoin = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setCoin(data);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getCoin();
	}, []);

	const loaded = () => {
		return (
			<div>
				<h1>
					{coin.asset_id_base}/{coin.asset_id_quote}
				</h1>
				<h2>{coin.rate}</h2>
			</div>
		);
	};

	const loading = () => {
		return <h1>Loading...</h1>;
	};

	return coin && coin.rate ? loaded() : loading();
}

// API Key: F47F4AC3-B22A-4B3A-9675-7B8B69E589A1
