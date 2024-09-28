module.exports = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/personal-portfolio' : '',
  images: {
    disableStaticImages: false
  }
};