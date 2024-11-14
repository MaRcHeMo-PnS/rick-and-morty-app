import { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import CardInfo from './components/CardInfo';
import ResidentsList from './components/ResidentsList';
import Serch from './components/Serch';
import '../src/styles/App.css';
import Pagination from './components/Pagination';
import usePagination from './hooks/usePagination';

function App() {
	const [location, setLocation] = useFetch();
	const [locationId, setLocationId] = useState(1);
	const { page, setPage, currentPageItems, maxPage } = usePagination({
		itemsPerPage: 6,
		totalItems: location?.residents?.length,
		items: location?.residents,
	});
	useEffect(() => {
		setLocation(`https://rickandmortyapi.com/api/location/${locationId}`);
	}, [locationId]);
	return (
		<>
			<div className="hero" />
			<div className="container">
				<Serch setLocationId={setLocationId} />
				<Pagination page={page} setPage={setPage} maxPage={maxPage} />
				<CardInfo location={location} />
				{/* <ResidentsList residents={location?.residents} /> */}
				<ResidentsList residents={currentPageItems} />
				<Pagination page={page} setPage={setPage} maxPage={maxPage} />
			</div>
		</>
	);
}

export default App;
