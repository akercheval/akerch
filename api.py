from flask import Flask
import requests

app = Flask(__name__)
@app.route("/<word>")

def genderMe(word):
    headers = {"Accept": "application/json", "app_id": "5eb6d713", "app_key": "330c94ccd9813cfb8e40ecf9196992f8"}
    url = "https://od-api.oxforddictionaries.com:443/api/v1/entries/es/" + word
    r = requests.get(url, headers=headers)
    JSON = r.json()
    if JSON['results'][0]['lexicalEntries'][0]['lexicalCategory'] != "Noun":
        return "Not a noun!"
    return JSON['results'][0]['lexicalEntries'][0]['entries'][0]['grammaticalFeatures'][0]['text']

#word = raw_input("Word, please: ")
#print genderMe(word)
