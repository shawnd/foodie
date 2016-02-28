import json
import bottle
import time
import calendar
import sys
import copy
import requests
from datetime import date
from bottle import route, run, request, response, abort, default_app, \
    get, post
#-KBaugmmTLWrKtwk2F6x
user_template = {"fav_cuisine": "", "password": "", "planning": '', "user_name": "", "saved":{"recipe_id":"","time_stamp":""}, \
                 "cooked":{"recipe_id":"","time_stamp":""}, "following":"","recommended":{"recipe_id":"","time_stamp":""},"history":{"recipe_id":"","time_stamp":""}}

from firebase import firebase
firebase = firebase.FirebaseApplication('https://boiling-heat-7995.firebaseio.com')

def main():
        print "Starting bottle server"
        run(host='localhost', port=8080)


@route('/getUser')
def getUser():
        rq_id = request.query.id
        result = firebase.get('/users',rq_id)
        return result

@route('/insertUser')
def insertUser():
        rq_user = request.query.user_name
        rq_password = request.query.password
        rq_fav = request.query.fav_cuisine
        user = copy.copy(user_template)
        user['user_name'] = rq_user
        user['password'] = rq_password
        user['fav_cuisine'] = rq_fav
        user['created_at'] = time.time()
        result = firebase.post('/users/',(user))

@route('/getHistory')
def getHistory():
        rq_id = request.query.id
        result = firebase.get('/users/'+rq_id,'history')
        #append history id's
        r = requests.get('https://peaceful-lowlands-66729.herokuapp.com/recipes/3,4')
        print json.dumps(r.json())
        return json.dumps(r.json())

@route('/getRecipesBudget')
def getRecipesBudget():
        rq_id = request.query.id
        result = firebase.get('/users/'+rq_id,'history')
        #append history id's
        r = requests.get('https://peaceful-lowlands-66729.herokuapp.com/budget/100')
        print json.dumps(r.json())
        return json.dumps(r.json())
main()
