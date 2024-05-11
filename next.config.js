module.exports = {
  basePath: process.env.NODE_ENV === 'production' ? '/<repository-name>' : '',
  images: {
    disableStaticImages: true
  }
};