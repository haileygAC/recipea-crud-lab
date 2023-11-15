const fs = require('fs');
const action = process.argv[2];
const recipe = JSON.parse(data);
const file = './recipea-data.json';


const readCookBook = () => {
fs.readFile(file, 'utf8', (err, data) => {
console.log(`The Misspelt Cookbook: Recipea-Crud:\n\n`);
recipe.forEach(recipe => {
    console.log(
        `Recipe Name: ${recipe.name}\n`,
        `Method: ${recipe.cookingMethod}\n`,
        `Ingredients: ${recipe.ingredient}\n`,
    )
});
})
}