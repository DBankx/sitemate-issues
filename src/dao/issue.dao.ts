import CreateIssueDto from '../dtos/create_issue.dto';
import Issue from 'interfaces/issue.interface';
import issues from '../data/issue.data';
import { v4 as uuid } from 'uuid';

namespace IssueDao {
	// Add an issue to the issue array
	export function addIssue(issue: CreateIssueDto): void {
		const newIssue = {
			...issue,
			id: uuid()
		}
		issues.push(newIssue);
	}

	// get issue by id
	export function getIssueById(id: string): Issue {
		return issues.find(issue => issue.id === id);
	}

	// get all issues
	export function getAllIssues(): Issue[] {
		return issues;
	}

	// update issue by id
	export function updateIssueById(id: string, issue: Issue): Issue {
		const issueIndex = issues.findIndex(issue => issue.id === id);
		issues[issueIndex] = issue;
		return issue;
	}

	// delete issue by id
	export function deleteIssueById(id: string): void {
		const issueIndex = issues.findIndex(issue => issue.id === id);
		issues.splice(issueIndex, 1);
	}
}

export default IssueDao;