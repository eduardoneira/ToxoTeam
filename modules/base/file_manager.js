/**
* File manager 
*/

function FileManager() {
  var fs = require('fs');
  var settings = require('./settings');
  var rootPath = settings.storage+'/';
  create_directory(rootPath) 
  rootPath += settings.env+'/';
  create_directory(rootPath)
  rootPath += settings.images+'/';
  create_directory(rootPath)

  function create_directory(path) {
    if (!fs.existsSync(rootPath)) {
      fs.mkdirSync(rootPath);
    }
  }

  this.save_image = function(filename, data) {
    fs.writeFile(rootPath+filename+'.jpg', data, 'binary', function(err){})
  }
}

module.exports = new FileManager()