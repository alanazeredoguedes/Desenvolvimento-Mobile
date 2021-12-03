import requests
import json

api_url = "http://192.168.0.104:8000/"

url = api_url + "anos"
anos = requests.get(url).json()

print( json.dumps(anos, indent=4) )