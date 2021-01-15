import { useState, useEffect, useCallback } from 'react';

export const usePost = (url, requestBody) => {
	const [state, setState] = useState({ responseData: {}, loading: true });
	const [requestOptions, setRequestOptions] = useState({
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(requestBody),
	});

	const postData = useCallback(async () => {
		fetch(url, requestOptions)
			.then(async (response) => {
				const data = await response.json();

				// check for error response
				if (!response.ok) {
					// get error message from body or default to response status
					const error = (data && data.message) || response.status;
					alert(
						`Server response error!\nDear user, please try again later.\n\nDetails: ${error}`
					);
					return Promise.reject(error);
				}
				console.log('After send request response data:', data);
				window.location.reload();
				// this.setState({ postId: data.id });
			})
			.catch((error) => {
				// this.setState({ errorMessage: error.toString() });
				console.error('There was an error!', error);
			});
	}, [url]);

	useEffect(() => {
		postData();
	}, [url, postData]);

	return state;
};
