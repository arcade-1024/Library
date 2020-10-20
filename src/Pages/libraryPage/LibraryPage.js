import React from "react";

//components
import Navbar from "../../components/navabar/Navbar";
import MyBook from "../../components/myBook/MyBook";



const LibraryPage = ({ name,bookData }) => {
	
	return (
		<div>
			<Navbar name={name} />
			<MyBook bookData={bookData}/>
		</div>
	);
};

export default LibraryPage;
