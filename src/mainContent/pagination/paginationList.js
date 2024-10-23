import { defaultSearchParams } from '../../api/constants';
import { getCurrentSearchParamsObj, updateSearchParams } from '../../utils/search';
import { createPaginationArrows } from './paginationArrows';
import { createPaginationItem } from './paginationItem';
const paginationContainerElement = document.querySelector('#pagination-container')
const paginationElement = document.querySelector('#pagination')

paginationElement?.addEventListener('click', (e) => {
	const pagination = e.target.dataset.page;
	if (!pagination) return;


	updateSearchParams({
		offset: pagination * defaultSearchParams.limit
	})
})

const paginationLimitDefault = 4;

export const createPagination = (limit, offset, total) => {
	const { offset: currentOffset } = getCurrentSearchParamsObj();
	const currentPage = !currentOffset ? 0 : currentOffset / defaultSearchParams.limit;

	paginationContainerElement.innerHTML = '';
	createPaginationArrows(paginationElement);
	const startPage = offset ? (offset / limit) : offset;
	const paginationNumbers = Array.from(Array(Math.ceil(total / limit)).keys());
	const paginationLimit = paginationNumbers.includes(startPage + paginationLimitDefault) ? startPage + paginationLimitDefault : 1

	const paginationButtons = paginationNumbers.slice(startPage, paginationLimit + 1).map(number => createPaginationItem(number + 1, number === currentPage));

	paginationContainerElement.append(...paginationButtons)
}