import { updateSearchParams } from '../../utils/search';
const searchForm = document.querySelector('#searchForm');

searchForm?.addEventListener('submit', (e) => {
	e.preventDefault();
	const searchInput = e.target.elements.search;
	const search = searchInput?.value;

	updateSearchParams({
		search,
		searchBy: 'title'
	})
	console.log('test');

	searchInput.value = ''
})
