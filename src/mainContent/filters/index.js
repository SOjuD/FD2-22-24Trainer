import { updateSearchParams } from '../../utils';
const filtersForm = document.querySelector('#filtersForm');
const resetFiltersButton = document.querySelector('#resetFilters');
const activeFilterClass = 'activeFilter'

resetFiltersButton?.addEventListener('click', (e) => {

	const filterElements = filtersForm.querySelectorAll('[name="filter"]:checked');
	filterElements.forEach((el) => el.checked = false)

	e.currentTarget.classList.add(activeFilterClass)

	filtersForm?.dispatchEvent(new Event('change'))

})

const sortParams = [
	{
		sortBy: 'title',
		sortOrder: 'asc'
	},
	{
		sortBy: 'title',
		sortOrder: 'desc'
	},
	{
		sortBy: 'year',
		sortOrder: 'asc'
	},
	{
		sortBy: 'year',
		sortOrder: 'desc'
	}
]


filtersForm?.addEventListener('change', (e) => {
	const formData = new FormData(e.currentTarget);
	const filter = formData.getAll('filter')
	const sort = formData.get('sort');

	if (filter.length) resetFiltersButton?.classList.remove(activeFilterClass)

	updateSearchParams({
		filter: filter.toString(),
		...sortParams[sort],
		offset: 0
	})
})
