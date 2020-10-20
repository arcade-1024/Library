import React from "react";
import "./Book.scss";
const Book = ({ name, author, cover, completed }) => {
  
	
	return (
		<div className="book">
			<div className="book-cover">
				<div className="book-cover-overlay">
					<button className="book-cover-overlay-btn">Read</button>
				</div>
				<img src={cover} className="book-cover-img" alt="bookcover" />
			</div>
			<h4 className="book-name">{name}</h4>
			<p className="book-author">{author}</p>
		</div>
	);
};

export default Book;
