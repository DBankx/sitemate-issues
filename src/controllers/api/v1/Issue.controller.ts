
import ApiResponse from 'utils/api_response.util';
import CreateIssueDto from '../../../dtos/create_issue.dto';
module.exports = class IssueController {
	// create an issue
	static async createComment(req: Request, res: Response) {
		const { title, description } = req.body;

		try{

		}catch(error){
			res.status(500).json()
		}
	}
}