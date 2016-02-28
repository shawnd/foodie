console.log("LOAD");
angular.module('slidebox.services', [])
.factory('UserHistory', function($http) {
  // Might use a resource here that returns a JSON array

  var history = [];
  console.log("HISTORY");
  $http({method: 'GET', url: 'http://api.servequake.com:8080/getHistory'}).success(function(data, status, headers, config) {
    console.log(data);
    for(var i = 0; i < data.length; i++){
      history.push(data[i].data);
    }
    console.log(history);
  });

  return {
    all: function() {
      if(history == null)
        return null;
      return history;
    },
    remove: function(chat) {
      history.splice(history.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < history.length; i++) {
        if (history[i].id === parseInt(chatId)) {
          return history[i];
        }
      }
      return null;
    }
  };
});
console.log("WHAT");
