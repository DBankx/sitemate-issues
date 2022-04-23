function ApiResponse(data: any, message: string, status: boolean){
	return {
		data,
		message,
		status
	}
}

export default ApiResponse;