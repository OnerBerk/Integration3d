const beautifyIndent = require('js-beautify');
const fs = require('fs');

const indent = (file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        let indentFile = beautifyIndent(data, {indent_size: 2, space_in_empty_paren: true})
        fs.writeFile(file, indentFile, (err) => {
            if (err) {
                console.log(err);
            }
            console.log('indent is done on : ' + file);
        });
    })
}
module.exports = {indent}