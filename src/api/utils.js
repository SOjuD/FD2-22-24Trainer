export const handleRequestReject = err => {
	console.error(err)
}
export const handleRequestResolve = res => {
	if (res.ok) return res.json();
	else throw new Error(res)
}
