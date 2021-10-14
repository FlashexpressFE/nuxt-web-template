const middleware = {}

middleware['home-page'] = require('../middleware/home-page.js')
middleware['home-page'] = middleware['home-page'].default || middleware['home-page']

export default middleware
