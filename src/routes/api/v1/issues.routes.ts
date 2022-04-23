import express, { Router } from 'express';

const router: Router = express.Router();


router.get('/');
router.get('/:issueId')
router.post('/create');
router.put('/:issueId')
router.delete('/:issueId')

module.exports = router;