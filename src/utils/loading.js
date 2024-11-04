const loadingClass = 'is-loading'
const rootElement = document.body;
export const loadingDelay = 1000
export const startLoading = () => {
	rootElement.classList.add(loadingClass)
}

export const endLoading = () => {
	setTimeout(() => rootElement.classList.remove(loadingClass), loadingDelay)
}