export const createPaginationItem = (number, isActive) => {
	const paginationItem = document.createElement('button');
	paginationItem.attributes.type = "button";
	paginationItem.disabled = isActive;
	paginationItem.textContent = number;
	paginationItem.dataset.page = number


	return paginationItem;
}