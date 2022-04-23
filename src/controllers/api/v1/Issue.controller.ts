
import { IssueDao } from '../../../dao/issue.dao';
import ApiErrorResponse from '../../../utils/api_error_response.util';
import ApiResponse from '../../../utils/api_response.util';
import CreateIssueDto from '../../../dtos/create_issue.dto';
class IssueController {
	// create an issue
	static async createIssue(req: any, res: any) {
		const { title, description } = req.body;
		try{
			if(!title || !description){
				return res.status(400).json(ApiErrorResponse('Title and description are required', 'Missing required fields', 400));
			}
			//  create issue object
			const newIssue = {title, description};

			// add issue to the issue array
			IssueDao.addIssue(newIssue);

			// return response
			return res.status(201).json(ApiResponse(null, 'Issue created successfully', 201));			
		}catch(error){
			res.status(500).json(ApiErrorResponse(error, 'Error occurred creating issue', 500));
		}
	}

	// get all issues
	static async getAllIssues(req: any, res: any) {
		try{
			// get all issues
			const issues = IssueDao.getAllIssues();

			// return response
			return res.status(200).json(ApiResponse(issues, 'All issues retrieved successfully', 200));
		}catch(error){
			res.status(500).json(ApiErrorResponse(error, 'Error occurred retrieving issues', 500));
		}
	}

	// get an issue
	static async getIssue(req: any, res: any) {
		const { issueId } = req.params;
		try{
			// get issue
			const issue = IssueDao.getIssueById(issueId);

			if(!issue){
				return res.status(404).json(ApiErrorResponse('Issue with id: ' + issueId + ' was not found', 'Issue not found', 404));
			}

			// return response
			return res.status(200).json(ApiResponse(issue, 'Issue retrieved successfully', 200));
		}catch(error){
			res.status(500).json(ApiErrorResponse(error, 'Error occurred retrieving issue', 500));
		}
	}

	// update an issue
	static async updateIssue(req: any, res: any) {
		const { issueId } = req.params;
		const { title, description } = req.body;
		try{
			// get issue
			const issue = IssueDao.getIssueById(issueId);

			if(!issue){
				return res.status(404).json(ApiErrorResponse('Issue with id: ' + issueId + ' was not found', 'Issue not found', 404));
			}

			const updated_issue = {
				id: issue.id,
				title: title || issue.title,
				description: description || issue.description
			}

			// update issue
			const updatedIssue = IssueDao.updateIssueById(issueId, updated_issue);

			// return response
			return res.status(200).json(ApiResponse(null, 'Issue updated successfully', 200));
		}catch(error){
			res.status(500).json(ApiErrorResponse(error, 'Error occurred updating issue', 500));
		}
	}

	// delete an issue
	static async deleteIssue(req: any, res: any) {
		const { issueId } = req.params;
		try{
			// get issue
			const issue = IssueDao.getIssueById(issueId);

			if(!issue){
				return res.status(404).json(ApiErrorResponse('Issue with id: ' + issueId + ' was not found', 'Issue not found', 404));
			}

			// delete issue
			IssueDao.deleteIssueById(issueId);

			// return response
			return res.status(200).json(ApiResponse(null, `Issue with id: ${issueId} was deleted successfully`, 200));
		}catch(error){
			res.status(500).json(ApiErrorResponse(error, 'Error occurred deleting issue', 500));
		}
	}
}

export default IssueController;