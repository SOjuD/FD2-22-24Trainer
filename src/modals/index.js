
const modalOverlayClass = 'modal-overlay'

const toggleModalOverlay = () => {
	document.body.classList.toggle(modalOverlayClass)
}
export const toggleDeleteModal = (cb) => {
	try {
		toggleModalOverlay();
		const deleteModal = document.querySelector('.delete-movie-modal-window');
		const isVisible = deleteModal?.classList.contains('show')
		const deleteButton = deleteModal?.querySelector('#delete-confirm');
		const closeButton = deleteModal?.querySelector('.modal-close');
		const handleClose = () => {
			toggleModalOverlay()
			deleteModal?.classList.remove('show');
			deleteButton.replaceWith(deleteButton.cloneNode(true));
			closeButton?.removeEventListener('click', handleClose)
		}

		closeButton?.addEventListener('click', handleClose)

		if (!isVisible) {
			deleteModal?.classList.add('show');
			deleteButton?.addEventListener('click', cb)
		} else {
			deleteModal?.classList.remove('show');
			deleteButton?.removeEventListener('click', cb)
		}
	} catch {
		console.error('Something went wrong with delete modal');

	}
}

export const toggleSuccessModal = () => {
	toggleModalOverlay();
	const modal = document.querySelector('.congratulations');
	const isVisible = modal?.classList.contains('show')
	const closeButton = modal?.querySelector('.modal-close')


	if (!isVisible) {
		modal?.classList.add('show');
		closeButton?.addEventListener('click', toggleSuccessModal)
	} else {
		modal?.classList.remove('show');
		closeButton?.removeEventListener('click', toggleSuccessModal)
	}
}