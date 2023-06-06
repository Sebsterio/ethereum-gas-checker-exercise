import React from "react";

import { Stack } from "@src/components/Stack";

import "./GasFeeCard.scss";

type Props = {
	label: string;
	priceGwei: string | number;
	getUsd: (gwei: string | number) => number;
	usdRateLoading: boolean;
};

const formatUsd = (usd: number) => Math.round(usd * 100) / 100;

export const GasFeeCard: React.FC<Props> = ({
	label,
	priceGwei,
	getUsd,
	usdRateLoading,
}) => {
	const priceUsd = formatUsd(getUsd(priceGwei));

	return (
		<Stack className="GasFeeCard" gap={1}>
			<h4 className="GasFeeCard__label">{label}</h4>
			<p className="GasFeeCard__gwei">{priceGwei} gwei</p>
			<p className="GasFeeCard__usd">{usdRateLoading ? "..." : priceUsd} USD</p>
		</Stack>
	);
};
