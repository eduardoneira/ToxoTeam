import requests
import json

data = ""

verbose = True
ip = "http://127.0.0.1:"

if len(sys.argv) > 1:
	ip += int(sys.argv[1])
else:
	ip += "16081"

def create_player(player,score,team):
	data = json.dumps({'player':player, 'score': score, 'team': team})
	r = requests.post(ip+"/players", data=data)
	if verbose:
		print "POST", r.url, data
		print "content:", r.content
		print
	else:
		return r

def get_all_players():
	r = requests.get(ip+"/players")
	if verbose:
		print "GET", r.url, data
		print "content:", r.content
		print
	else:
		return r

def get_player(player):
    r = requests.get(ip+"/players/"+player)
	if verbose:
		print "GET", r.url, data
		print "content:", r.content
		print
	else:
		return r
