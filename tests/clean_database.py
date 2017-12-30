#!/usr/bin/python3

import sys
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

if __name__ == '__main__':
  if (len(sys.argv) != 2):
    print('Must specify enviroment as parameter')
    sys.exit(1)
  
  # Fetch the service account key JSON file contents
  cred = credentials.Certificate('../config/db_config.json')

  # Initialize the app with a service account, granting admin privileges
  firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://databaseName.firebaseio.com'
  })

  # As an admin, the app has access to read and write all data, regradless of Security Rules
  db.reference(sys.argv[1]).remove()
  print(sys.argv[1]+' removed!')
  sys.exit(0)