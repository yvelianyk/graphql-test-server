const repository = require('./repository');
const DataLoader = require('dataloader');

module.exports = {
    getAuthorByPostLoader: () => {
        return new DataLoader(repository.getByPost);
    }
};
