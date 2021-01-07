import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url, requestBody) => {
	const [state, setState] = useState({ responseData: {}, loading: true });
	const [requestOptions, setRequestOptions] = useState({
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(requestBody),
	});

	const fetchData = useCallback(async () => {
		const response = await fetch(url, requestOptions);
		const data = await response.json();
		setState({ responseData: data, loading: false });
	}, [url]);

	useEffect(() => {
		fetchData();
	}, [url, fetchData]);

	return state;
};
