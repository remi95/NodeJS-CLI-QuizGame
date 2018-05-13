#!/usr/bin/env node

const request = require('axios')
const chalk = require('chalk')
const baseEndPoint = 'https://opentdb.com/api'

exports.lister = () => { listCategories() }

async function listCategories() {
	try {
		const categoriesRequest = await request.get(baseEndPoint+'_category.php')
		let categories = []

		for(const [index, item] of categoriesRequest.data.trivia_categories.entries()){
			categoryId = index // variable pour nous indiquer à quoi correspond l'index ;)
			categories.push(item.name)
			console.log(categoryId+" -", chalk.green(item.name))
		}
		return categories
	}
	catch(e) {
		console.error(e.message)
		return false
	}
}

exports.getCategorieName = async function getCategorieName(index) {
	let categories = await listCategories()
	return categories[index]
}
