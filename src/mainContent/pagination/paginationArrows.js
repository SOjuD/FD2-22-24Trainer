
export const createPaginationArrows = (container) => {
	const backArrow = document.createElement('button');
	backArrow.classList.add('paginationArrow', 'back')
	backArrow.textContent = '<'
	const forwardArrow = document.createElement('button');
	forwardArrow.textContent = '>'
	forwardArrow.classList.add('paginationArrow', 'forward')

	container.prepend(backArrow);
	container.append(forwardArrow);
}