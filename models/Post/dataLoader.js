const repository = require('./repository');
const DataLoader = require('dataloader');

module.exports = {
    getPostsByAuthorLoader: () => {
        return new DataLoader(repository.findByAuthor);
    }
};
