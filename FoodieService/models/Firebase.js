//var Promise = require('bluebird');
//var Firebase = require('firebase');
//var firebaseURL = 'https://travelagent.firebaseio.com/';
//var ref = new Firebase('https://travelagent.firebaseio.com/');
//var itinerariesRef = ref.child("itineraries");
//var userItinerariesRef = ref.child("user_itineraries");
//var AUTH_SECRET = 'RYVRYkJr84incn68qcmukYOBjzgTd2nE2FloLqaR';
//
var Firebase = require("firebase");
var ref = new Firebase("https://nwhacksfoodie.firebaseio.com/");
var refUrl = "https://nwhacksfoodie.firebaseio.com/";

exports.getChatOrCreateNewIfNotExist = function (id) {

    return new Promise(function(resolve, reject) {

        ref.child(id).once('value', function (snapshot) {
            var exists = (snapshot.val() !== null);
            if (exists) {
                resolve(snapshot.val());
            }
            else {
                ref.child(id).set({
                    state: "init"
                }, function(error){
                    if (error){
                        reject(error);
                    }
                    else {
                        ref.child(id).once('value', function(snapshot){
                            resolve(snapshot.val());
                        })
                    }
                });

            }
        }, function (errorObject) {
            reject(errorObject.code);
        });
    });
};

exports.setState = function(id, state) {
    var ref =  new Firebase(refUrl + id);

    ref.update({
        state: state
    });
}

exports.setLocationAndChangeState = function(id, locationData, state) {
    var ref =  new Firebase("https://bbbb.firebaseio.com/" + id);

    ref.update({
        locationData: locationData,
        state: state
    });

}

exports.getLocationAndChangeState = function(id, state) {
    var ref =  new Firebase("https://bbbb.firebaseio.com/" + id);

    ref.update({
        state: state
    });

    return new Promise(function(resolve, reject) {
        var ref = new Firebase("https://bbbb.firebaseio.com/" + id + "/locationData");
        ref.on("value", function(locations) {
            console.log("got some data");
            if (locations.val() == null) {
                console.log("got no data");
                resolve("");
            }
            resolve(locations.val());
        }, function(errorObject) {
            console.log("failed");
            reject(errorObject.code);
        });
    });
}

exports.getLocations = function(id, state) {
    var ref =  new Firebase("https://bbbb.firebaseio.com/" + id);

    return new Promise(function(resolve, reject) {
        var ref = new Firebase("https://bbbb.firebaseio.com/" + id + "/locationData");
        ref.on("value", function(locations) {
            console.log("got some data");
            if (locations.val() == null) {
                console.log("got no data");
                resolve("");
            }
            resolve(locations.val());
        }, function(errorObject) {
            console.log("failed");
            reject(errorObject.code);
        });
    });
}






exports.setImageUrl = function(id, imageUrl) {
    var ref =  new Firebase(refUrl + id);

    ref.update({
        imageUrl: imageUrl
    });
}

exports.setName = function(id, name) {
    var ref =  new Firebase(refUrl + id);

    ref.update({
        name: name
    });
}

exports.setIngredients = function(id, ingredients) {
    var ref =  new Firebase(refUrl + id);

    ref.update(ingredients);
}

exports.setDirections = function(id, url, directions) {
    var ref =  new Firebase(refUrl + id);

    ref.update({
        url: url,
        directions: directions
    });
}

exports.getRecipe = function(id) {
    return new Promise(function(resolve, reject) {
        var ref = new Firebase(refUrl + id);
        ref.on("value", function(data) {
            console.log("got some data");
            if (data.val() == null) {
                console.log("got no data");
                resolve("");
            }
            resolve(data.val());
        }, function(errorObject) {
            console.log("failed");
            reject(errorObject.code);
        });
    });
}