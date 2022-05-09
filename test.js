var fs = require('fs');
console.time('Start timer Read');
console.time('Start timer Write');

fs.readFile('test.txt', function (err, data) {
    if (err) {
        console.log('File Reading Error' + err);
        return;
    }
    console.log('File Reading: ' + data);
    console.timeEnd('Start timer Read');
});

fs.writeFile('test.txt', 'Writing to file 111 3333 It is certainly the most famous placeholder text even if there are different versions distinguishable from the order in which the Latin words are repeated.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there  anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', function () {
    console.log('Done With file Write \n');
    console.timeEnd('Start timer Write');
})
console.log('Done \n');