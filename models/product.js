const fs = require('fs');
const path = require('path');

const rootDir = require('../helpers/path');

const p = path.join(
    rootDir, 
    'data', 
    'products.json'
);

const getProductsFromFile = (callBack) => {
    fs.readFile(p, (err, fileContent) => {
        if(err) {
            callBack([]);
        } else {
            callBack(JSON.parse(fileContent));
        }
    });
}

module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price
    }

    save() {
        this.id = Math.random().toString();
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(callBack) {
        getProductsFromFile(callBack);
    }

    static findById(id, callBack) {
        getProductsFromFile(products => {
            const product = products.find(product => product.id === id);
            callBack(product);
        });
    }
}
