var Tesseract = require('tesseract.js')
var image = "turkishData.png";


Tesseract.recognize(image, {lang:'tur'})
  .then(data => {
    console.log('DATA:\n\n', data.text)
  })
  .catch(err => {
    console.log('catch:\n', err);
  })
  .finally(e => {
    // console.log('finally:\n');
    process.exit();
  });