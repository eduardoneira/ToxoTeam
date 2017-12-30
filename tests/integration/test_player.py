#!/usr/bin/python3

import unittest
import requests
import base64
import json
import sys

class TestPlayer(unittest.TestCase):

  def setUp(self):
    with open('config_test.json') as file: 
      self.url = json.load(file)["url"]+'/players/'; 

  def testPostPlayer(self):
    with open('./integration/resources/lauti.json') as file:
      data = json.load(file)

    with open('./integration/resources/lauti.jpeg','rb') as file:
      data['img'] = base64.b64encode(file.read()).decode('utf-8')

    reply = requests.post(self.url, data=json.dumps(data), headers={'Content-Type' : 'application/json'})
    self.assertEqual(reply.content.decode('utf-8'), 'SUCCESS')

if __name__ == '__main__':
  unittest.main()