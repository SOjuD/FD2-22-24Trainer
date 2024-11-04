import { deleteMovie } from '../../api/requests';
import { toggleDeleteModal, toggleSuccessModal } from '../../modals/index';
import { endLoading, loadingDelay, moviesEvent } from '../../utils';
import { createMovieCard } from './moviCard';

export const cardContainer = document.querySelector('#cards');


cardContainer?.addEventListener('click', (e) => {
	const isCardOptions = e.target.classList?.contains('card-options');
	const isCloseCardOPtions = e.target.classList.contains('modal-close') && !!e.target.closest('.modal-delete-movie');
	const deleteId = e.target.dataset.delete;
	const editId = e.target.dataset.edit;


	try {
		if (deleteId) {
			const deleteButtonCallback = () => deleteMovie(deleteId).then(() => {
				endLoading();
				toggleDeleteModal(deleteButtonCallback)
				setTimeout(toggleSuccessModal, loadingDelay)
				moviesEvent();
			})

			toggleDeleteModal(deleteButtonCallback)

		}
	} catch {
		console.error('modal not found');

	}


	try {
		const card = e.target.closest('.card')
		const deleteModal = card.querySelector('.modal-delete-movie')

		if (isCloseCardOPtions || deleteId || editId) deleteModal.style.display = 'none';
		if (isCardOptions) deleteModal.style.display = 'block';
	} catch {
		console.error('delete modal does not exist')
	}
})

export const createMovieCardList = (moviesList) => {
	cardContainer.innerHTML = '';

	const moviesCards = moviesList.map(movie => createMovieCard(movie))

	cardContainer?.append(...moviesCards)
}