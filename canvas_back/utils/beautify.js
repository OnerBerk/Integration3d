const beautify = require('js-beautify').js;
const fs = require('fs')


const indent = (file) => {
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            throw err;
        } else {
            let indentfile = beautify(data, {indent_size: 2, space_in_empty_paren: true})
            fs.writeFile(file, indentfile, function (err) {
                if (err) return console.log(err);
                console.log('reindneter');
            });
        }
    })
}
module.exports = {indent}