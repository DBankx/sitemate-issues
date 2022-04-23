import inquirer from 'inquirer';
import axios from 'axios';

const OPTIONS = {
	'get': 'Get an issue - GET /api/v1/issues/<issueId>',
	'post': 'Create an issue - POST /api/v1/issues',
	'put': 'Update an issue - PUT /api/v1/issues/<issueId>',
	'delete': 'Delete an issue - DELETE /api/v1/issues/<issueId>',
	'list': 'List all issues - GET /api/v1/issues', 
}

const BASE_URL = 'http://localhost:3000/api/v1/issues';


inquirer
  .prompt([
	  { type: 'list', message: "Pick an endpoint to call", name: "endpoint", choices: [
		  OPTIONS.get,
		  OPTIONS.post,
		  OPTIONS.put,
		  OPTIONS.delete,
	  ] },
  ])
  .then(answers => {
	switch(answers.endpoint){
		case OPTIONS.list:
			axios.get(BASE_URL).then(res => {
				console.log(res.data);
			})
			break;
		case OPTIONS.get:
			inquirer.prompt([
				{ type: 'input', message: "Enter the issue id", name: "id" },
			]).then(answers => {
				axios.get(`${BASE_URL}/${answers.id}`).then(res => {
					console.log(res.data);
				})
			})
			break;
		case OPTIONS.post:
			inquirer.prompt([
				{ type: 'input', message: "Enter the issue title", name: "title" },
				{ type: 'input', message: "Enter the issue description", name: "description" },
			]).then(answers => {
				axios.post(BASE_URL, {
					title: answers.title,
					description: answers.description,
				}).then(res => {
					console.log(res.data);
				})
			})
			break;
		case OPTIONS.put:
			inquirer.prompt([
				{ type: 'input', message: "Enter the issue id", name: "id" },
				{ type: 'input', message: "Enter the issue title", name: "title" },
				{ type: 'input', message: "Enter the issue description", name: "description" },
			]).then(answers => {
				axios.put(`${BASE_URL}/${answers.id}`, {
					title: answers.title,
					description: answers.description,
				}).then(res => {
					console.log(res.data);
				})
			})
			break;
		case OPTIONS.delete:
			inquirer.prompt([
				{ type: 'input', message: "Enter the issue id", name: "id" },
			]).then(answers => {
				axios.delete(`${BASE_URL}/${answers.id}`).then(res => {
					console.log(res.data);
				})
			})
		default:
			break;
	}
  })
