module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/unfortunate-few/'
    : '/',
    outputDir: 'docs'
}