const path = require('path');
module.exports = {
    entry:{
        entry:'./src/main.js'
    },
    output:{
    	filename: 'index.js',
        path: path.resolve(__dirname,'dist'),
    }
}