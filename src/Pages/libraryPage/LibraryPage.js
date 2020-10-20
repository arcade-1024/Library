import React,{useState} from "react";
import Navbar from "../../components/navabar/Navbar";
const LibraryPage = ({ name }) => {
	const [myBooks,setMyBooks] = useState([
		{id:1,name:"",photo:""}
	])
	return (
		<div>
			<Navbar name={name} />
		</div>
	);
};

export default LibraryPage;
