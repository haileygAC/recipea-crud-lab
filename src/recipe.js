const fs = require('fs');
const action = process.argv[2];


const readCookBook = () => {
    fs.readFile('./data/recipea-data.json', 'utf8', (err, data) => {
        const recipe = JSON.parse(data);
        console.log(`\nRecipea-Crud:\n\n`);
        recipe.forEach((recipe) => {
            console.log(
                `Recipe Name: ${recipe.name}\n`,
                `Method: ${recipe.cookingMethod}\n`,
                `Ingredients: ${recipe.ingredients}`,
            );
        });
    });
};

const readRecipe = (id) => {
    fs.readFile('./data/recipea-data.json', 'utf8', (err, data) => {
        const recipe = JSON.parse(data);
        console.log(`\nRecipe #${id}:\n\n`);
        recipe.forEach((recipe, i) => {
            if (i == id) {
                console.log(`Recipe Name: ${recipe.name}\n`);
                console.log(`Method: ${recipe.cookingMethod}\n`);
                console.log(`Ingredients: ${recipe.ingredients}\n`);
            };
        });
    });
};

const createRecipe = (newRecipe) => {
    fs.readFile('./data/recipea-data.json', 'utf8', (err, data) => {
        const recipe = JSON.parse(data);
        recipe.push(newRecipe);
        const jsonVersion = JSON.stringify(recipe, null, 2);
        fs.writeFile('./recipea-data.json', jsonVersion, 'utf8', (err) => {
            console.log('Recipe successfully added to the book!');
        });
    });
};

const deleteRecipe = (id) => {
    fs.readFile('./data/recipea-data.json', 'utf8', (err, data) => {
        const recipe = JSON.parse(data);
        recipe.splice(id, 1);
        const jsonVersion = JSON.stringify(recipe, null, 2);
        fs.writeFile('./recipea-data.json', jsonVersion, 'utf8', (err) => {
            console.log('Recipe successfully deleted from the book!');
        });
    });
};

const updateRecipe = (id, replacingRecipe) => {
    fs.readFile('./data/recipea-data.json', 'utf8', (err, data) => {
        const recipe = JSON.parse(data);
        recipe.splice(id, 1, replacingRecipe);
        const jsonVersion = JSON.stringify(recipe, null, 2);
        fs.writeFile('./recipea-data.json', jsonVersion, 'utf8', (err) => {
            console.log('Recipe successfully updated!');
        });
    });
};

switch (action) {
    case 'read': {
        const id = process.argv[3];
        if (id === undefined) {
            readCookBook();
        } else {
            readRecipe(Number(id));
        }
    }

        break;

    case 'create': {
        const name = process.argv[3];
        const cookingMethod = process.argv[4];
        const ingredients = process.argv[5].split(', ');
        const newRecipe = { name, cookingMethod, ingredients };
        createRecipe(newRecipe);

    };

        break;

    case 'delete': {
        const id = Number(process.argv[3]);
        deleteRecipe(id);
    };

        break;

    case 'update': {
        const id = Number(process.argv[3]);
        const name = process.argv[4];
        const cookingMethod = process.argv[5];
        const ingredients = process.argv[6].split(', ');
        const replacingRecipe = { name, cookingMethod, ingredients };
        updateRecipe(id, replacingRecipe);
    }

};


