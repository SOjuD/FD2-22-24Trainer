import { defaultSearchParams } from '../../api/constants';
import { updateSearchParams } from '../../utils/search';
import { updatePaginationArrows } from './paginationArrows';
import { createPaginationItem } from './paginationItem';
const paginationContainerElement = document.querySelector('#pagination-container')
const paginationElement = document.querySelector('#pagination')

paginationElement?.addEventListener('click', (e) => {
	const pagination = e.target.dataset.page;
	if (!pagination) return;


	updateSearchParams({
		offset: (pagination - 1) * defaultSearchParams.limit
	})
})

const paginationLimitDefault = 4;

export const createPagination = (limit, offset, total) => {
	const totalPages = Math.ceil(total / limit); // Общее количество страниц
	const currentPage = Math.floor(offset / limit) + 1; // Текущая страница

	paginationContainerElement.innerHTML = '';
	updatePaginationArrows(currentPage);

	// Определяем диапазон страниц
	const startPage = Math.max(1, currentPage - 2); // Начальная страница
	const endPage = Math.min(totalPages, startPage === 1 ? 5 : currentPage + 2); // Конечная страница

	// Создаем элементы пагинации
	for (let page = startPage; page <= endPage; page++) {
		const isCurrentPage = page === currentPage;
		const paginationItem = createPaginationItem(page, isCurrentPage);
		paginationContainerElement.appendChild(paginationItem);
	}
}
