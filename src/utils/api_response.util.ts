function ApiResponse(data: any, message: string, code: number) {
	return {
		data,
		message,
		code
	}
}

export default ApiResponse;