function ApiErrorResponse(error: any, message: string, code: number) {
	return {
		error,
		message,
		code: code
	};
}

export default ApiErrorResponse;