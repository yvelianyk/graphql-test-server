const authorLoaders = require('./Author/dataLoader');
const postLoaders = require('./Post/dataLoader');

module.exports = {
  ...authorLoaders,
  ...postLoaders
};
