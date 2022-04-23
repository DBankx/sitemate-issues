import express, { Router } from 'express';
import IssueController from '../../../controllers/api/v1/Issue.controller';

const router: Router = express.Router();

router.get('/', IssueController.getAllIssues);
router.get('/:issueId', IssueController.getIssue);
router.post('/', IssueController.createIssue);
router.put('/:issueId', IssueController.updateIssue);
router.delete('/:issueId', IssueController.deleteIssue);

module.exports = router;