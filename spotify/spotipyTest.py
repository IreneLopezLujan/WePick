import spotipy
import spotipy.oauth2 as oauth2
import spotipy.util as util
import json
from json.decoder import JSONDecodeError

# Client ID e6b98ce6b2cf483c832c652aada81bea
# Client Secret 5325fce64c6b4c4aad72b34029085111

## Keith Client Key for test ##
# Client Id: 0dc45951e1c9441db418cfcd3950414f
# Client Secret: 5efbb9963b654491bb2024f13c1eccf8

# Prompt for the username of the Spotify account we want to search for
username = input("Enter username: ")

# Define the scope of the information we want to recieve so the user has some idea of what information the application is recieveing
# https://developer.spotify.com/documentation/general/guides/scopes/
scope = 'user-read-email'

# This token is generated in the web browser
# Can change redirect_uri to website name soon and parse it somehow
# Once token has been generated, copy into command prompt
# This should only have to be done once hopefully.
token = util.prompt_for_user_token(username,scope,client_id='0dc45951e1c9441db418cfcd3950414f',client_secret='5efbb9963b654491bb2024f13c1eccf8',redirect_uri='http://localhost/')


# Spotify Object
spotifyObject = spotipy.Spotify(auth=token)

# Information about user
# Get current device
devices = spotifyObject.devices()
deviceID = devices['devices'][0]['id']

# Current track information
track = spotifyObject.current_user_playing_track()
artist = track['item']['artists'][0]['name']
track = track['item']['name']

if artist != "":
    print("Currently playing " + artist + " - " + track)

# User information
user = spotifyObject.current_user()
displayName = user['display_name']
followers = user['followers']['total']



