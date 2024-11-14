import { useRef, useState } from 'react';
import '../styles/Search.css';

function Serch({ setLocationId }) {
	const [error, setError] = useState('');
	const inputRef = useRef();

	const onSubmit = (e) => {
		e.preventDefault();
		const id = parseInt(inputRef.current.value);

		if (isNaN(id)) {
			setError('❎ Invalid number 😊');
			setTimeout(() => {
				setError('');
			}, 3000);
			return;
		}

		if (id < 1 || id > 126) {
			setError('❎ Hey! you must provide an id form 1 to 126 😊');
			setTimeout(() => {
				setError('');
			}, 3000);
			return;
		}

		setLocationId(id);
		e.target.reset();
	};

	return (
		<>
			<form onSubmit={onSubmit} className="search">
				<input
					ref={inputRef}
					type="text"
					placeholder="Insert the universe Id"
					className="search__input"
				/>
				<button className="search__btn">Search</button>
			</form>
			<p className="mesage__error">{error && error}</p>
		</>
	);
}

export default Serch;
