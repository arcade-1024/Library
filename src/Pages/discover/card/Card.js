import React from "react";
import styled from "styled-components";
import "./Card.scss";
const Card = ({ name, color1, color2 }) => {
	const CardDiv = styled.div`
		background: linear-gradient(to bottom left, ${color1}, ${color2});
		margin-right: 30px;
		margin-top: 30px;
		height: 200px;
		width: 200px;
		border-radius: 10px;
	`;
	return (
		<CardDiv>
			<p className="card-title">{name}</p>
		</CardDiv>
	);
};

export default Card;
