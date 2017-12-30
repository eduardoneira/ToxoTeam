// All config 

var config_path = "../../config/"

var settings = {
  db: require(config_path+"db_config.json"),
  storage: 'storage',
  images: 'images'
}

module.exports = settings;