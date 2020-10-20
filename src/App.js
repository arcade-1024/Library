import React, { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.scss";

//pages
import Buffer from "./Pages/buffer/Buffer";
import LoginPage from "./Pages/loginPage/LoginPage";
import Information from "./Pages/information/Information";
import Authenticate from "./Pages/authenticate/Authenticate";
import Details from "./Pages/details/Details";
import Fingerprint from "./Pages/fingerprint/Fingerprint";
import SuccessPage from "./Pages/successPage/SuccessPage";
import LibraryPage from "./Pages/libraryPage/LibraryPage";

//images
import toStar from "./assets/icon/step_to_the_sun.svg";
import accessAccount from "./assets/icon/Access_account.svg";
import secureLogin from "./assets/icon/secure_login.svg";
import secureSheild from "./assets/icon/Security_on.svg";
function App() {
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [code, setCode] = useState("");
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div className="App">
			<BrowserRouter>
				<Buffer img={toStar} />
				<Route
					exact={true}
					path="/"
					component={() => <LoginPage setName={setName} setEmail={setEmail} />}
				/>
				<Route
					exact={true}
					path="/info"
					component={() => (
						<Information
							img={accessAccount}
							email={email}
							phone={phone}
							setEmail={setEmail}
							setPhone={setPhone}
						/>
					)}
				/>
				<Route
					exact={true}
					path="/auth"
					component={() => (
						<Authenticate
							img={secureLogin}
							phone={phone}
							code={code}
							setCode={setCode}
						/>
					)}
				/>
				<Route
					exact={true}
					path="/del"
					component={() => (
						<Details
							setName={setName}
							setAddress={setAddress}
							setPassword={setPassword}
						/>
					)}
				/>
				<Route
					exact={true}
					path="/fig"
					component={() => <Fingerprint img={secureSheild} />}
				/>
				<Route exact={true} path="/success" component={SuccessPage} />
				<Route exact={true} path="/lib" component={() => <LibraryPage name={name} />} />
			</BrowserRouter>
		</div>
	);
}

export default App;
