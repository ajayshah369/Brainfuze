var fs = require('fs');
var fsp = require('fs').promises;
var fse = require('fs-extra');

//*********************************************
var oldpath_css = './css/style.min.css';
var oldpath_js = './js/bundle.min.js';

var oldpath_html = './index.html';

var oldpath_assets = './assets';

//***************************************************
var newpath_css = './build/css/style.min.css';
var newpath_js = './build/js/bundle.min.js';

var newpath_html = './build/index.html';

var newpath_assets = './build/assets';

const build = async () => {
  //***************************************************
  await fsp.mkdir('./build/css', { recursive: true }, (err) => {
    if (err) throw err;
  });
  await fsp.mkdir('./build/js', { recursive: true }, (err) => {
    if (err) throw err;
  });

  //*******************************************************
  await fsp.rename(oldpath_css, newpath_css, (err) => {
    if (err) throw err;
  });
  await fsp.rename(oldpath_js, newpath_js, (err) => {
    if (err) throw err;
  });

  //***********************************************************
  fse.copySync(
    oldpath_assets,
    newpath_assets,
    { overwrite: true },
    function (err) {
      if (err) {
        throw err;
      }
    }
  );

  // ***************************************************************

  fs.readFile(oldpath_html, 'utf8', (err, data) => {
    if (err) throw err;
    var data2 = data.replace(
      '<link rel="stylesheet" href="css/style.css" />',
      '<link rel="stylesheet" href="css/style.min.css" />'
    );
    var data3 = data2.replace(
      '<script src="./js/bundle.js"></script>',
      '<script src="./js/bundle.min.js"></script>'
    );

    fs.writeFile(newpath_html, data3, 'utf8', (err) => {
      if (err) throw err;
    });
  });

  await fsp.rm('./css/style.comp.css', {}, (err) => {
    if (err) throw err;
  });

  await fsp.rm('./css/style.prefix.css', {}, (err) => {
    if (err) throw err;
  });

  console.log('\x1b[32m', '✔ Success ❕');
};

build();
