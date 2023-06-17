// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

// Hint: You can use the `split` function to split the string into an array of words and then use the `join` function to join the array back into a string. You can also use the `trim` function to remove extra spaces.
var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, 'file.txt');

fs.readFile(filePath, 'utf8', function(err, contents) {
    var newContents = contents.split(' ').join(' ');
    fs.writeFile(filePath, newContents, function(err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });
}
);




