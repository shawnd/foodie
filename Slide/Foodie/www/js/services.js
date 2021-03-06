console.log("LOAD");
angular.module('slidebox.services', [])
.factory('UserHistory', function($http) {
  // Might use a resource here that returns a JSON array

  var history = [];
  console.log("HISTORY");
  return {
    all: function() {
      return new Promise(function(resolve, reject){
        $http({method: 'GET', url: 'http://api.servequake.com:8080/getHistory'}).success(function(data, status, headers, config) {
          console.log(data);
          history = data.split(',');
          resolve(history);
        });

      });
    },
    remove: function(chat) {
      history.splice(history.indexOf(chat), 1);
    },
    get: function(Id) {
        return history[Id];
    }
  };
})

.factory('UserFavorites', function($http) {
  // Might use a resource here that returns a JSON array

  var favorites = [];
  console.log("FAVORITES");
  return {
    all: function() {
      return new Promise(function(resolve, reject){
        $http({method: 'GET', url: 'http://api.servequake.com:8080/getHistory'}).success(function(data, status, headers, config) {
          console.log(data);
          favorites = data.split(',');
          resolve(favorites);
        });
      });
    },
    remove: function(chat) {
      history.splice(history.indexOf(chat), 1);
    },
    get: function(Id) {
      return favorites[Id];
    }
  };
})

.factory('Cart', function() {
  // Might use a resource here that returns a JSON array

  var cart = [];
  cart.push(2);
  cart.push(6);
  cart.push(40);
  return {
    all: function() {
      return cart;
    },
    add: function(Id){
      cart.push(Id);
    },
    remove: function(id) {
      cart.splice(id, 1);
    }
  };
})

.factory('Recipes', function(){
    Recipes = [{"directions":"Combine mayonnaise and grated parmesan cheese and boneless skinless chicken breasts and italian seasoned dry bread crumbs","imageUrl":"lh3.ggpht.com/wJ1WXUf4EhjrBMvqZBG2dy4g_M_j1ezOm0SGps0wkgxilNFB2CLN6sFSfLh47w8hDoHJ89uJ5oKF-me_POqZeQc=s480-c-e365","index":0,"ingredientArrayAmount":["118 ml","25 grams","0.57 kg","4 tsps"],"ingredientArrayName":["mayonnaise","grated parmesan cheese","boneless skinless chicken breasts","italian seasoned dry bread crumbs"],"ingredientArrayPrice":[3,4,5,2],"name":"Oven Fried Parmesan Chicken","totalPrice":14,"totalTime":"30 Minutes","url":"http://www.yummly.com/recipe/external/Oven-Fried-Parmesan-Chicken-1019862?unitType=metric"},{"directions":"Combine carrots and thyme and agave nectar","imageUrl":"lh3.googleusercontent.com/-muAOcSXilk47clDH8CQbPvHXxLM_f4oENbARDb2ztc1KOKEHRGl5w0iU3jkTgtmzIAymTfQCiq_gQdFcwpB=s480-c-e365","index":1,"ingredientArrayAmount":["","",""],"ingredientArrayName":["carrots","thyme","agave nectar"],"ingredientArrayPrice":[2,1,2],"name":"Agave Thyme Glazed Carrots","totalPrice":5,"totalTime":"30 Minutes","url":"http://www.yummly.com/recipe/external/Agave-Thyme-Glazed-Carrots-1522572?unitType=metric"},{"array":["qwer","werty"],"directions":"Combine boneless skinless chicken breasts and frozen broccoli and cream of mushroom soup and mayonnaise and shredded reduced fat cheddar cheese","imageUrl":"lh3.googleusercontent.com/itm0w5jGyk0_Vtojx1CPO2fnHY5VuUEUSaUSe3U_7iDZIAD6pvhHnLCEvGEQLPHS-xw2S23k60B_Iu8hkNZX=s480-c-e365","index":2,"ingredientArrayAmount":["454 grams","283 grams","1 can","3 tbsps","110 grams"],"ingredientArrayName":["boneless skinless chicken breasts","frozen broccoli","cream of mushroom soup","mayonnaise","shredded reduced fat cheddar cheese"],"ingredientArrayPrice":[5,4,2,3,4],"name":"Chicken and Broccoli Casserole","totalPrice":18,"totalTime":"45 Minutes","url":"http://www.yummly.com/recipe/external/Chicken-and-Broccoli-Casserole-1509184?unitType=metric"},{"directions":"Combine asparagus spears and garlic and olive oil and salt and ground black pepper","imageUrl":"lh3.googleusercontent.com/Gz9Q8Mnaf_e8t2Vmd4gS-D0XpVvzcQHWa8_Enss-L_PTG2rjGp02Bs-Spd86OS4tn9msYBbWKhmI9sxPHVbk9Q=s480-c-e365","index":3,"ingredientArrayAmount":["0.68 kg","2 cloves","2 tbsps","1/4 tsp","1/4 tsp"],"ingredientArrayName":["asparagus spears","garlic","olive oil","salt","ground black pepper"],"ingredientArrayPrice":[3,1,1,1,1],"name":"Garlic-Roasted Asparagus","totalPrice":7,"totalTime":"15 Minutes","url":"http://www.yummly.com/recipe/external/Garlic-Roasted-Asparagus-1053963?unitType=metric"},{"directions":"Combine asparagus and penne and olive oil and chicken breasts and parmesan cheese","imageUrl":"lh5.ggpht.com/Pw-PwIaSGurr_3MyyBKO64vwqxDwfvK7J1HqyWRRkQOZV_WmCqLYvbR1t3M4eFTxihgIicMD5NJTLp1jUKxc4Uc=s480-c-e365","index":4,"ingredientArrayAmount":["454 grams","340 grams","59 ml","454 grams","50 grams"],"ingredientArrayName":["asparagus","penne","olive oil","chicken breasts","parmesan cheese"],"ingredientArrayPrice":[3,1,1,5,4],"name":"Chicken & Asparagus Penne","totalPrice":14,"totalTime":"20 Minutes","url":"http://www.yummly.com/recipe/external/Chicken-_-Asparagus-Penne-561410?unitType=metric"},{"directions":"Combine bananas and honey and cinnamon and olive oil","imageUrl":"lh6.ggpht.com/sNwD1iFZJRwAds4aozn5JTdbK5Pu2xKUAIJxfZ4xmIH2xbSdCNpseWxt0TzrRhtP3zhrCcsrUO4OkhR8YBpV=s480-c-e365","index":5,"ingredientArrayAmount":["1","1 tbsp","",""],"ingredientArrayName":["bananas","honey","cinnamon","olive oil"],"ingredientArrayPrice":[1,4,2,1],"name":"\"fried\" Honey Banana","totalPrice":8,"totalTime":"25 Minutes","url":"http://www.yummly.com/recipe/external/_fried_-Honey-Banana-578871?unitType=metric"},{"directions":"Combine mayonnaise and sweet onion and grated parmesan cheese and garlic salt and swiss cheese and fresh parsley and crackers","imageUrl":"lh6.ggpht.com/eq2c_HLS8PThgaD5yEkyMhTEZRA7Hookh5uS3NJrIZHd96VVRR0Qig0Tff8okmq5FJME3udriVw0_GjJwZ-H=s480-c-e365","index":6,"ingredientArrayAmount":["237 ml","89 grams","1 tbsp","1/4 tsp","108 grams","",""],"ingredientArrayName":["mayonnaise","sweet onion","grated parmesan cheese","garlic salt","swiss cheese","fresh parsley","crackers"],"ingredientArrayPrice":[3,2,4,1,4,2,2],"name":"Baked Onion Dip","totalPrice":18,"totalTime":"45 Minutes","url":"http://www.yummly.com/recipe/external/Baked-Onion-Dip-TasteOfHome?unitType=metric"},{"directions":"Combine spaghetti and andouille sausage and onions and grape tomatoes and basil leaves and garlic cloves and kosher salt and ground black pepper and grated parmesan cheese","imageUrl":"lh5.ggpht.com/UPSxt9WnwCh_Mj1zHBRLBwe2R6jkgmqaN9fE_Pn33ZyyWnCGGGzaMHnXXrrHRtno4kb9pPyrsubflATpOz03C9w=s480-c-e365","index":7,"ingredientArrayAmount":["454 grams","363 grams","1","456 grams","77 grams","4","","","100 grams"],"ingredientArrayName":["spaghetti","andouille sausage","onions","grape tomatoes","basil leaves","garlic cloves","kosher salt","ground black pepper","grated parmesan cheese"],"ingredientArrayPrice":[1,4,2,3,2,1,1,1,4],"name":"One Pot Pasta","totalPrice":19,"totalTime":"20 Minutes","url":"http://www.yummly.com/recipe/external/One-Pot-Pasta-576320?unitType=metric"},{"directions":"Combine shredded Monterey Jack cheese and non-fat sour cream and fresh parmesan cheese and black pepper and garlic and artichoke hearts and fat free cream cheese and frozen chopped spinach","imageUrl":"lh6.ggpht.com/EgSh1EjtCxS0IeIA5pQ0hupdipINQBdz9rbOa_ZYhVpB_of3eQUFVEuicLzAU8-JpJnM4cV-Za2Z0-Z64JAh=s480-c-e365","index":8,"ingredientArrayAmount":["113 grams","60 grams","25 grams","1 tsp","3 cloves","227 grams","227 grams","142 grams"],"ingredientArrayName":["shredded Monterey Jack cheese","non-fat sour cream","fresh parmesan cheese","black pepper","garlic","artichoke hearts","fat free cream cheese","frozen chopped spinach"],"ingredientArrayPrice":[4,2,4,1,1,1,4,3],"name":"Spinach Artichoke Dip","totalPrice":20,"totalTime":"35 Minutes","url":"http://www.yummly.com/recipe/external/Spinach-Artichoke-Dip-Savour-the-Senses-58241?unitType=metric"},{"directions":"Combine noodles and pasta sauce and cream cheese and sour cream and cottage cheese and shredded cheddar cheese","imageUrl":"lh5.ggpht.com/nzU6eeTFGROCp8gXHWd9M1t_xl_V0KzOFd37abTI0Mi7blVssdwV8LCGHMW0kObTr4IEPoGE1tkWJY80rRn4hxA=s480-c-e365","index":9,"ingredientArrayAmount":["114 grams","0.79 kg","227 grams","59 ml","210 grams","85 grams"],"ingredientArrayName":["noodles","pasta sauce","cream cheese","sour cream","cottage cheese","shredded cheddar cheese"],"ingredientArrayPrice":[1,1,4,2,3,4],"name":"Million Dollar Spaghetti Casserole","totalPrice":15,"totalTime":"30 Minutes","url":"http://www.yummly.com/recipe/external/Million-Dollar-Spaghetti-Casserole-637199?unitType=metric"},{"directions":"Combine red potato and vegetable oil and rosemary leaves and garlic cloves and salt","imageUrl":"lh3.googleusercontent.com/eWzBL0Kz3XdHcdgB40RnrKgKMxPyRsDIQkoo8GltVGam51Gvg3OwPHlr9U2gZ0fPcyrMWjxqZjI7MI2BZNQ5=s480-c-e365","index":10,"ingredientArrayAmount":["0.68 kg","1 tbsp","1 tbsp","2","3/4 tsp"],"ingredientArrayName":["red potato","vegetable oil","rosemary leaves","garlic cloves","salt"],"ingredientArrayPrice":[1,1,3,1,1],"name":"Rosemary Roasted Potatoes","totalPrice":7,"totalTime":"40 Minutes","url":"http://www.yummly.com/recipe/external/Rosemary-Roasted-Potatoes-1513049?unitType=metric"},{"directions":"Combine sourdough bread and monterey jack and butter and green onions and poppy seeds","imageUrl":"lh6.ggpht.com/1O61FaKKLN4rgxrjG3pHut0zP2zowTa97vSCD3Hii8P9msPBQ23WKjtdq6Jk_st1EK4sZe3BiTzzASgCbUl33w=s480-c-e365","index":11,"ingredientArrayAmount":["1","454 grams","114 grams","36 grams","3 tsps"],"ingredientArrayName":["sourdough bread","monterey jack","butter","green onions","poppy seeds"],"ingredientArrayPrice":[2,4,1,1,1],"name":"Savory Party Bread","totalPrice":9,"totalTime":"35 Minutes","url":"http://www.yummly.com/recipe/external/Savory-Party-Bread-573084?unitType=metric"},{"directions":"Combine reduced fat cream cheese and reduced-fat sour cream and hot sauce and cooked chicken breasts and crackers","imageUrl":"lh5.ggpht.com/6o5QbpHRnBgGER-BrTQrXJKpSdCyzdb1w1gzzP_Ear-a5jjzierBmAesKz7w2jlT_sh5CgkacvwyjtkhrjBbSXw=s480-c-e365","index":12,"ingredientArrayAmount":["227 grams","237 ml","118 ml","420 grams",""],"ingredientArrayName":["reduced fat cream cheese","reduced-fat sour cream","hot sauce","cooked chicken breasts","crackers"],"ingredientArrayPrice":[4,3,1,5,2],"name":"Easy Buffalo Chicken Dip","totalPrice":15,"totalTime":"30 Minutes","url":"http://www.yummly.com/recipe/external/Easy-Buffalo-Chicken-Dip-572747?unitType=metric"},{"directions":"Combine ground beef and onions and salt and shredded cheddar cheese and pancake and milk and eggs","imageUrl":"lh3.ggpht.com/P-tMcWJYs--yNnok1-Efct_xliXT6cRV15HIBiKEiBle-XJg-lzf2z4QDN4br6v2vrdDD4RQ63PwzU941rkca_I=s480-c-e365","index":13,"ingredientArrayAmount":["454 grams","1","1/2 tsp","113 grams","20 grams","237 ml","2"],"ingredientArrayName":["ground beef","onions","salt","shredded cheddar cheese","pancake","milk","eggs"],"ingredientArrayPrice":[5,2,1,4,1,2,2],"name":"Immaculately Yummy Cheeseburger Pie","totalPrice":17,"totalTime":"45 Minutes","url":"http://www.yummly.com/recipe/external/Immaculately-Yummy-Cheeseburger-Pie-751098?unitType=metric"},{"directions":"Combine whole wheat pizza crust and basil pesto and shredded mozzarella cheese and chicken and sun-dried tomatoes in oil","imageUrl":"lh3.googleusercontent.com/17dAOt1-7YvHWJKW54XHg9upryvuAcdX8Mul_t7fTvy_GV-z3TiBGmRgnvYnzcBiEIpCBczkB4_SAPIQKg-Kbg=s480-c-e365","index":14,"ingredientArrayAmount":["2.54 cms","118 ml","85 grams","170 grams","28 grams"],"ingredientArrayName":["whole wheat pizza crust","basil pesto","shredded mozzarella cheese","chicken","sun-dried tomatoes in oil"],"ingredientArrayPrice":[2,2,4,5,3],"name":"5-Ingredient Chicken Pesto Pizza with Sun-Dried Tomatoes","totalPrice":16,"totalTime":"15 Minutes","url":"http://www.yummly.com/recipe/external/5-Ingredient-Chicken-Pesto-Pizza-with-Sun-Dried-Tomatoes-1523396?unitType=metric"},{"directions":"Combine rice and seasoned black beans and pico de gallo and grilled chicken breasts and jack cheese and sour cream and cilantro","imageUrl":"lh4.ggpht.com/AD3_aGFayOiGIQ35LyrFaQP4Aw5Fjmxv_8QN1IBfrIudKLIkUiG4Sntz3U_hJTS9BIaGu9EU_mgHdEuXFyMLew=s480-c-e365","index":15,"ingredientArrayAmount":["186 grams","97 grams","118 ml","1","28 grams","2 tbsps","1 handful"],"ingredientArrayName":["rice","seasoned black beans","pico de gallo","grilled chicken breasts","jack cheese","sour cream","cilantro"],"ingredientArrayPrice":[5,2,2,5,4,2,2],"name":"Burrito Bowls","totalPrice":22,"totalTime":"10 Minutes","url":"http://www.yummly.com/recipe/external/Burrito-Bowls-676927?unitType=metric"},{"directions":"Combine ground beef and onions and garlic and enchilada sauce and jack cheese and sour cream and tortilla chips","imageUrl":"lh5.ggpht.com/HPZpRdkpLLBkMIGQsTPWjOq2O3MS-Cqcb-M1I5CfFd9SGFd-2szZU-TksjJovGQK3IXNG2mBvAdEnZFxLzjhHQ=s480-c-e365","index":16,"ingredientArrayAmount":["0.91 kg","1/2","2 cloves","480 grams","226 grams","",""],"ingredientArrayName":["ground beef","onions","garlic","enchilada sauce","jack cheese","sour cream","tortilla chips"],"ingredientArrayPrice":[5,2,1,1,4,2,2],"name":"Beef Enchilada Dip","totalPrice":17,"totalTime":"13 Minutes","url":"http://www.yummly.com/recipe/external/Beef-Enchilada-Dip-631256?unitType=metric"},{"directions":"Combine ground beef and chopped onion and chili sauce and water and prepared mustard and chili powder and hamburger buns and cheddar cheese","imageUrl":"lh5.ggpht.com/dOJgpzqWtNVznYcwV2PeIDbhFitgtE6pfQt6Jzll2a3n_LgB7psRXD5e25bUA83EH4GcfgnKR3y5zF8QIAOL=s480-c-e365","index":17,"ingredientArrayAmount":["0.91 kg","80 grams","177 ml","118 ml","60 grams","2 tsps","12","12 slices"],"ingredientArrayName":["ground beef","chopped onion","chili sauce","water","prepared mustard","chili powder","hamburger buns","cheddar cheese"],"ingredientArrayPrice":[5,2,1,1,1,1,1,5],"name":"Favorite Sloppy Joes","totalPrice":17,"totalTime":"30 Minutes","url":"http://www.yummly.com/recipe/external/Favorite-Sloppy-Joes-TasteOfHome?unitType=metric"},{"directions":"Combine spaghetti and cooked chicken and shredded cheddar cheese and condensed cream of chicken soup and milk and pimentos and salt and pepper","imageUrl":"lh5.ggpht.com/eXzU5xLD8OHN8JGQX9vB9MCKAn68ghAXhJtV8amWd_ZulbqeECuuhuC0KEEBwCgR8gpb-YnipYC0gX7pFTbHl8M=s480-c-e365","index":18,"ingredientArrayAmount":["198 grams","280 grams","226 grams","305 grams","237 ml","1 tbsp","1/4 tsp","1/4 tsp"],"ingredientArrayName":["spaghetti","cooked chicken","shredded cheddar cheese","condensed cream of chicken soup","milk","pimentos","salt","pepper"],"ingredientArrayPrice":[1,5,4,2,2,2,1,1],"name":"Cheddar Chicken Spaghetti","totalPrice":18,"totalTime":"35 Minutes","url":"http://www.yummly.com/recipe/external/Cheddar-Chicken-Spaghetti-TasteOfHome?unitType=metric"},{"directions":"Combine boneless chicken breast and ranch dressing and parmesan cheese and shredded cheddar cheese","imageUrl":"lh6.ggpht.com/ECA3jUZKjon-BeH8cJOcCmgiVDb7ngUTBJHri8lg51tBg1HCOP_rkazihk7LK-y9rkoHOQ-j9FAsSLh32oKd70c=s480-c-e365","index":19,"ingredientArrayAmount":["0.57 kg","118 ml","50 grams","57 grams"],"ingredientArrayName":["boneless chicken breast","ranch dressing","parmesan cheese","shredded cheddar cheese"],"ingredientArrayPrice":[5,1,4,4],"name":"Cheesy Ranch Chicken","totalPrice":14,"totalTime":"40 Minutes","url":"http://www.yummly.com/recipe/external/Cheesy-Ranch-Chicken-589856?unitType=metric"},{"directions":"Combine skinless chicken breasts and garlic powder and onion powder","imageUrl":"lh3.googleusercontent.com/lZfpzJFDy8bXxHUzGt9CS3VE-pZUbh07v-duP9tQrt514NE7tGxaIkbhndXk__3nYkoURNdfcoAEZ3BYI13MtW8=s480-c-e365","index":20,"ingredientArrayAmount":["0.91 kg","11/2 tsps","1 tsp"],"ingredientArrayName":["skinless chicken breasts","garlic powder","onion powder"],"ingredientArrayPrice":[5,1,1],"name":"Slow Cooker Honey-Dijon Chicken","totalPrice":7,"totalTime":"10 Minutes","url":"http://www.yummly.com/recipe/external/Slow-Cooker-Honey-Dijon-Chicken-1438107?unitType=metric"},{"directions":"Combine brussels sprouts and garlic and olive oil and salt and pepper and balsamic vinegar","imageUrl":"lh3.googleusercontent.com/6Zq_-8RTnZtPAH_sTfIx0A7dken98ajab-CXssTWSs3aKh-xWvK-QGSz8W4n3DujzGVCca_DevGVr3d2QTLxSBY=s480-c-e365","index":21,"ingredientArrayAmount":["0.68 kg","3 cloves","21/2 tbsps","","","2 tbsps"],"ingredientArrayName":["brussels sprouts","garlic","olive oil","salt","pepper","balsamic vinegar"],"ingredientArrayPrice":[3,1,1,1,1,1],"name":"Garlic Balsamic Roasted Brussel Sprouts","totalPrice":8,"totalTime":"20 Minutes","url":"http://www.yummly.com/recipe/external/Garlic-Balsamic-Roasted-Brussel-Sprouts-1430996?unitType=metric"},{"directions":"Combine biscuits and cheddar cheese and butter and garlic and parmesan cheese and dried parsley","imageUrl":"lh3.ggpht.com/9CUTOLgp8RHo_vlDEbmMKTVpsTNfdAp8ydNqPAPsovKdzQfKKWewOhkigsmnOGNtstHRjtXU0N7ClfGpf34XzCQ=s480-c-e365","index":22,"ingredientArrayAmount":["1 can","20 cubes","3 tbsps","1 clove","33 grams","2 tsps"],"ingredientArrayName":["biscuits","cheddar cheese","butter","garlic","parmesan cheese","dried parsley"],"ingredientArrayPrice":[1,5,1,1,4,1],"name":"Garlic Cheese Bombs","totalPrice":13,"totalTime":"25 Minutes","url":"http://www.yummly.com/recipe/external/Garlic-Cheese-Bombs-634340?unitType=metric"},{"directions":"Combine yukon gold potatoes and melted butter and oil and flour and ground black pepper and salt","imageUrl":"lh6.ggpht.com/whDz0P4wp7LPgB5Voa0JJhrzepqRyDE0gkQ51TrYY4A6LrkWskzMHKSFEXeXxYrYzmB6LluIWYxOvFKi5xnv5Q=s480-c-e365","index":23,"ingredientArrayAmount":["1.13 kilograms","11/2 tbsps","4 tbsps","1 tbsp","",""],"ingredientArrayName":["yukon gold potatoes","melted butter","oil","flour","ground black pepper","salt"],"ingredientArrayPrice":[2,1,1,1,1,1],"name":"Our Best Oven-Roasted Potatoes","totalPrice":7,"totalTime":"10 Minutes","url":"http://www.yummly.com/recipe/external/Our-Best-Oven-Roasted-Potatoes-676497?unitType=metric"},{"directions":"Combine ","imageUrl":"lh3.ggpht.com/7HAv26jpBcQuRQHOoUIq3tuV8GQY1QBz5oSIHCegkmIM9edOEllt7ONssBvwF-MmbRoww1ICu0rxhmtn7maoo14=s480-c-e365","index":24,"name":"Sauteed Kale & Red Onions","totalPrice":0,"totalTime":"25 Minutes","url":"http://www.yummly.com/recipe/external/Sauteed-Kale-_-Red-Onions-761810?unitType=metric"},{"directions":"Combine boneless chicken breast and cream of chicken soup and soup and chicken broth and salt and seasoning and sour cream and broccoli florets and shredded cheddar cheese","imageUrl":"lh3.ggpht.com/jT-C6VXjFy_ohNN_zx_zQ9JPvY9MScTaHn99QeSprNeroB6-wZ1Wuv3xlhHCE_iQraV422z8wYvcmJ0Iux5JyI0=s480-c-e365","index":25,"ingredientArrayAmount":["4","283 grams","283 grams","391 ml","1/2 tsp","1/4 tsp","237 ml","0.55 kg","113 grams"],"ingredientArrayName":["boneless chicken breast","cream of chicken soup","soup","chicken broth","salt","seasoning","sour cream","broccoli florets","shredded cheddar cheese"],"ingredientArrayPrice":[5,2,2,1,1,1,2,2,4],"name":"Creamy Crock-pot Chicken and Broccoli Over Rice","totalPrice":20,"totalTime":"30 Minutes","url":"http://www.yummly.com/recipe/external/Creamy-Crock-pot-Chicken-and-Broccoli-Over-Rice-636056?unitType=metric"},{"directions":"Combine cooking spray and extra wide egg noodles and beef and mixed vegetables and diced tomatoes and red enchilada sauce and water and Mexican cheese blend and sliced green onions and sour cream","imageUrl":"lh4.ggpht.com/V41tLqfGU4sL5lvtyfUx6L83kSacQBZoSLYszCD7OFmzFVUU_K93yS5OF5Dk_WsOv_e48lX4OOD_XgH_lYx0EQ=s480-c-e365","index":26,"ingredientArrayAmount":["1 stick","","454 grams","326 grams","1 can","1 can","296 ml","296 ml","18 grams",""],"ingredientArrayName":["cooking spray","extra wide egg noodles","beef","mixed vegetables","diced tomatoes","red enchilada sauce","water","Mexican cheese blend","sliced green onions","sour cream"],"ingredientArrayPrice":[1,1,8,3,1,1,1,4,1,2],"name":"Beef Taco Noodle Casserole","totalPrice":23,"totalTime":"45 Minutes","url":"http://www.yummly.com/recipe/external/Beef-Taco-Noodle-Casserole-679013?unitType=metric"},{"directions":"Combine whole wheat tortillas and hummus and ground cumin and cilantro and california avocado and queso fresco","imageUrl":"lh5.ggpht.com/Jfw7kJRpQaIM0T1twDLES5QvYI0pvDVRXwItCTObYDk6vseCk0VR9mZHl5kJLhIMzAI2XA1fBfU2hLjkpPoaKQ=s480-c-e365","index":27,"ingredientArrayAmount":["4 whole","62 grams","1/4 tsp","1 tbsp","1/2","43 grams"],"ingredientArrayName":["whole wheat tortillas","hummus","ground cumin","cilantro","california avocado","queso fresco"],"ingredientArrayPrice":[2,3,1,2,4,3],"name":"Mini Avocado & Hummus Quesadilla","totalPrice":15,"totalTime":"18 Minutes","url":"http://www.yummly.com/recipe/external/Mini-Avocado-_-Hummus-Quesadilla-1017900?unitType=metric"},{"directions":"Combine olive oil cooking spray and frozen chopped broccoli and large eggs and kosher salt and garlic powder and dried oregano and black pepper and cayenne pepper and sharp cheddar cheese and almond meal","imageUrl":"lh3.ggpht.com/aixkriQJyJrJ3AJleufZjvBrYIYZqx4Ed4IiZwr9DDiYkuHDstZHxWZAXk8KkrUu_CCGT9QM-Pza3j7Y9tGBBg=s480-c-e365","index":28,"ingredientArrayAmount":["","454 grams","3","1 tsp","1/2 tsp","1/2 tsp","1/4 tsp","1/8 tsp","113 grams","95 grams"],"ingredientArrayName":["olive oil cooking spray","frozen chopped broccoli","large eggs","kosher salt","garlic powder","dried oregano","black pepper","cayenne pepper","sharp cheddar cheese","almond meal"],"ingredientArrayPrice":[1,3,2,1,1,1,1,1,4,4],"name":"Cheesy Broccoli Bites","totalPrice":19,"totalTime":"40 Minutes","url":"http://www.yummly.com/recipe/external/Cheesy-Broccoli-Bites-758302?unitType=metric"},{"directions":"Combine chicken and cooked rice and sesame oil and white onion and frozen peas and carrots and soy sauce and eggs and green onions","imageUrl":"lh3.googleusercontent.com/9YtsqIAqkQfG0RARzuFXEvrcAGqQ3cbeHsejEsC_5NhnZU3RfJq7wTuTJJxWdPUB6HaBWYrW3IlUEy0d_BZw=s480-c-e365","index":29,"ingredientArrayAmount":["454 grams","474 grams","2 tbsps","1","140 grams","3 tbsps","2","2 tbsps"],"ingredientArrayName":["chicken","cooked rice","sesame oil","white onion","frozen peas and carrots","soy sauce","eggs","green onions"],"ingredientArrayPrice":[5,2,1,2,1,1,2,1],"name":"Better than Takeout Chicken Fried Rice","totalPrice":15,"totalTime":"40 Minutes","url":"http://www.yummly.com/recipe/external/Better-than-Takeout-Chicken-Fried-Rice-622828?unitType=metric"},{"directions":"Combine parsley and greek yogurt and olive oil and avocado and salt and lemon","imageUrl":"lh3.googleusercontent.com/r3KecKLLuT1JT5GrmVvkfRoF0VHUDkiV32edGQnPMSVSdh3TpjpaEc0sPvC5H4u0LSbbiNX0AfPxtPjVYQXI=s480-c-e365","index":30,"ingredientArrayAmount":["120 grams","245 grams","118 ml","1","1/2 tsp","2 tbsps"],"ingredientArrayName":["parsley","greek yogurt","olive oil","avocado","salt","lemon"],"ingredientArrayPrice":[1,1,1,3,1,1],"name":"5 Minute Avocado Parsley Spread","totalPrice":8,"totalTime":"5 Minutes","url":"http://www.yummly.com/recipe/external/5-Minute-Avocado-Parsley-Spread-1453587?unitType=metric"},{"directions":"Combine pork and tortilla chips and Mexican cheese blend and sour cream and salsa and shredded lettuce and sliced green onions and ripe olives and pepper","imageUrl":"lh5.ggpht.com/au2FC4mjrDL6RylEVJvrPZCGZ5gqr9fksS2VO3Ool6io-5ci1tlw-6QFH5KCDdmUh13OQGfXEBU9QnhqGdyPbg=s480-c-e365","index":31,"ingredientArrayAmount":["0.51 kg","354 grams","473 ml","118 ml","128 grams","18 grams","18 grams","34 grams","26 grams"],"ingredientArrayName":["pork","tortilla chips","Mexican cheese blend","sour cream","salsa","shredded lettuce","sliced green onions","ripe olives","pepper"],"ingredientArrayPrice":[7,2,4,2,2,3,1,1,1],"name":"Party Nachos","totalPrice":23,"totalTime":"20 Minutes","url":"http://www.yummly.com/recipe/external/Party-Nachos-573272?unitType=metric"},{"directions":"Combine cooking spray and corn tortillas and cooked chicken and diced tomatoes and red enchilada sauce and tomato sauce and shredded cheddar cheese","imageUrl":"lh3.ggpht.com/qeLkaUs8-goqzYl-gbldgsQeuhfjLSf8mgP-KLAWZTGvq34j9rtYyymiaGPRUMAKq8u77BLVJb8T9xU3xhUtNQ=s480-c-e365","index":32,"ingredientArrayAmount":["1 stick","12","420 grams","1 can","1 can","1 can","113 grams"],"ingredientArrayName":["cooking spray","corn tortillas","cooked chicken","diced tomatoes","red enchilada sauce","tomato sauce","shredded cheddar cheese"],"ingredientArrayPrice":[1,3,5,1,1,1,4],"name":"Chicken Enchilada Skillet","totalPrice":16,"totalTime":"20 Minutes","url":"http://www.yummly.com/recipe/external/Chicken-Enchilada-Skillet-697362?unitType=metric"},{"directions":"Combine pizza crust and shredded cheddar cheese and salsa and cooked chicken","imageUrl":"lh4.ggpht.com/m3FpJOfLpNElE-77wmDtquS0hcuxGnY07Qje1hh33HIwgV6WaOASZN5IoWIaCxEcYM0jdF6fr570Tp6H405mMg=s480-c-e365","index":33,"ingredientArrayAmount":["1","226 grams","341 grams","140 grams"],"ingredientArrayName":["pizza crust","shredded cheddar cheese","salsa","cooked chicken"],"ingredientArrayPrice":[2,4,2,5],"name":"Chicken Salsa Pizza","totalPrice":13,"totalTime":"20 Minutes","url":"http://www.yummly.com/recipe/external/Chicken-Salsa-Pizza-TasteOfHome?unitType=metric"},{"directions":"Combine vanilla instant pudding and cold milk and sweetened condensed milk and vanilla extract and frozen whipped topping and vanilla wafers and bananas","imageUrl":"lh6.ggpht.com/JVD6QbV9oHeZknkfDKdk8ooTH3Y5ru-bJ6Ih8ebO16jJb0C89SS8ceOTS2nT_lrYphWxAfg-OhrWNxFdSgmV=s480-c-e365","index":34,"ingredientArrayAmount":["142 grams","473 ml","307 ml","1 tbsp","1.07 liters","454 grams","14"],"ingredientArrayName":["vanilla instant pudding","cold milk","sweetened condensed milk","vanilla extract","frozen whipped topping","vanilla wafers","bananas"],"ingredientArrayPrice":[1,2,1,1,2,1,1],"name":"Best Banana Pudding","totalPrice":9,"totalTime":"25 Minutes","url":"http://www.yummly.com/recipe/external/Best-Banana-Pudding-546359?unitType=metric"},{"directions":"Combine boneless skinless chicken thighs and minced garlic and olive oil and garbanzo beans and diced tomatoes and salsa and ground cumin and fresh cilantro and sour cream","imageUrl":"lh3.ggpht.com/1gj3Dzv7xklzZniwQm64KW5Tx5hVPA4q3RLWgFTNo3AnH0gAP232BYT3gGuKVugHKIvO9QSekLq8GBW0A09qmA=s480-c-e365","index":35,"ingredientArrayAmount":["1.36 kilograms","2 tsps","2 tbsps","425 grams","411 grams","256 grams","1 tsp","5 grams",""],"ingredientArrayName":["boneless skinless chicken thighs","minced garlic","olive oil","garbanzo beans","diced tomatoes","salsa","ground cumin","fresh cilantro","sour cream"],"ingredientArrayPrice":[4,1,1,1,1,2,1,2,2],"name":"Spicy Chicken Stew","totalPrice":15,"totalTime":"30 Minutes","url":"http://www.yummly.com/recipe/external/Spicy-Chicken-Stew-573389?unitType=metric"},{"directions":"Combine cream of mushroom soup and milk and mustard and pepper and elbow macaroni and shredded cheddar cheese and french fried onions","imageUrl":"lh3.ggpht.com/CG-rUTZWUHIOzeKSIPC03KehLixTfsxd_MQ0j2pFQbYOt_D0vXJYECOMIcC2ar2ILAC6pQ504jZb3JZpg6bXnQ=s480-c-e365","index":36,"ingredientArrayAmount":["305 grams","118 ml","1/2 tsp","1/8 tsp","315 grams","226 grams","237 ml"],"ingredientArrayName":["cream of mushroom soup","milk","mustard","pepper","elbow macaroni","shredded cheddar cheese","french fried onions"],"ingredientArrayPrice":[2,2,1,1,1,4,1],"name":"Golden Macaroni & Cheese","totalPrice":12,"totalTime":"40 Minutes","url":"http://www.yummly.com/recipe/external/Golden-Macaroni-_-Cheese-571117?unitType=metric"},{"directions":"Combine avocado and bananas and cocoa powder and yoghurt","imageUrl":"lh3.ggpht.com/xlwAVDd2z63Dho8LmvhRMttdVPQYCyC8MWiCiknKy_UbKobB3hzfj-MBqR8DELPfF0o_N7evlLjSHPCpUH843A=s480-c-e365","index":37,"ingredientArrayAmount":["1/2","1/2","1 tbsp","1 tbsp"],"ingredientArrayName":["avocado","bananas","cocoa powder","yoghurt"],"ingredientArrayPrice":[3,1,1,3],"name":"Healthy Chocolate Pudding","totalPrice":8,"totalTime":"10 Minutes","url":"http://www.yummly.com/recipe/external/Healthy-Chocolate-Pudding-752337?unitType=metric"},{"directions":"Combine penne pasta and fresh mushrooms and olive oil and diced tomatoes and fresh basil and salt and feta cheese crumbles","imageUrl":"lh6.ggpht.com/U1mn9yvAFiuKqJC43ARz1SFAWq--GllmkUeQN4HFIyIMAP4FRNYwSNFaOzkYv1TrncmwShPfROAebAWHJlaskw=s480-c-e365","index":38,"ingredientArrayAmount":["170 grams","227 grams","1 tbsp","411 grams","1 tbsp","1/4 tsp","50 grams"],"ingredientArrayName":["penne pasta","fresh mushrooms","olive oil","diced tomatoes","fresh basil","salt","feta cheese crumbles"],"ingredientArrayPrice":[1,2,1,1,1,1,4],"name":"Penne From Heaven","totalPrice":11,"totalTime":"25 Minutes","url":"http://www.yummly.com/recipe/external/Penne-From-Heaven-TasteOfHome?unitType=metric"},{"directions":"Combine cream style corn and corn and Jiffy Corn Muffin Mix and sour cream and butter and cheddar cheese","imageUrl":"lh6.ggpht.com/D8BZ6x8-bgyAjU67YgalNU5oCy8dipjVs8nQ9MWOGhQ-pF3WpPeTz_geHEkGnTCyJi1VuHNaK6T9TA-XUrjDMw=s480-c-e365","index":39,"ingredientArrayAmount":["1 can","1 can","1 box","1 container","1 stick","1 bag"],"ingredientArrayName":["cream style corn","corn","Jiffy Corn Muffin Mix","sour cream","butter","cheddar cheese"],"ingredientArrayPrice":[2,2,3,2,1,5],"name":"Corn Casserole","totalPrice":15,"totalTime":"45 Minutes","url":"http://www.yummly.com/recipe/external/Corn-casserole-340876?unitType=metric"},{"directions":"Combine cremini and olive oil and garlic and baby spinach leaves and sun-dried tomatoes and ground black pepper and salt and asiago","imageUrl":"lh4.ggpht.com/7eWdBhxjL7Mv-DjKK9RJhjTxYdercXQy_G2GcXvrLGNvoU_I6ypsBjUjBG9gMidikaDC3ulLIli9Zfkfat-h=s480-c-e365","index":40,"ingredientArrayAmount":["227 grams","2 tbsps","1 clove","142 grams","18 grams","","","50 grams"],"ingredientArrayName":["cremini","olive oil","garlic","baby spinach leaves","sun-dried tomatoes","ground black pepper","salt","asiago"],"ingredientArrayPrice":[1,1,1,3,3,1,1,4],"name":"Spinach and Sun-Dried Tomato Stuffed Mushrooms","totalPrice":15,"totalTime":"25 Minutes","url":"http://www.yummly.com/recipe/external/Spinach-and-Sun-Dried-Tomato-Stuffed-Mushrooms-754319?unitType=metric"},{"directions":"Combine chicken stuffing mix and cooked chicken and frozen broccoli florets and broccoli cheese soup and shredded cheddar cheese","imageUrl":"lh3.ggpht.com/4JvYwjNabNQvTeUwyX4l9Ri7tF2mO4G4UtZSnNKT9caRCqVVzqeIFCnWjWr413XEOKi9QDvLjBXwqO2Fi7Xv3w=s480-c-e365","index":41,"ingredientArrayAmount":["170 grams","280 grams","237 ml","305 grams","113 grams"],"ingredientArrayName":["chicken stuffing mix","cooked chicken","frozen broccoli florets","broccoli cheese soup","shredded cheddar cheese"],"ingredientArrayPrice":[1,5,3,2,4],"name":"Contest-Winning Broccoli Chicken Casserole","totalPrice":15,"totalTime":"45 Minutes","url":"http://www.yummly.com/recipe/external/Contest-Winning-Broccoli-Chicken-Casserole-1033599?unitType=metric"},{"directions":"Combine bow-tie pasta and ground turkey and chopped onion and shredded cheddar cheese and salsa and diced tomatoes and taco seasoning and tortilla chips","imageUrl":"lh4.ggpht.com/x92yRFLdYtJu6Zo2YcE2dDT5kkEXkiotIhZ72_gs5s9zr1b5ciEADKpxolGQC8kVOSnGMieeXkGxfr9t5Crodw=s480-c-e365","index":42,"ingredientArrayAmount":["279 grams","454 grams","40 grams","226 grams","454 grams","411 grams","1 env","52 grams"],"ingredientArrayName":["bow-tie pasta","ground turkey","chopped onion","shredded cheddar cheese","salsa","diced tomatoes","taco seasoning","tortilla chips"],"ingredientArrayPrice":[1,5,2,4,2,1,1,2],"name":"Contest-Winning Taco Casserole","totalPrice":18,"totalTime":"45 Minutes","url":"http://www.yummly.com/recipe/external/Contest-Winning-Taco-Casserole-572510?unitType=metric"},{"directions":"Combine nonstick spray and cauliflower and large eggs and part-skim mozzarella cheese and grated parmesan cheese and ground black pepper and kosher salt and tomato sauce and grape tomatoes and garlic and crushed red pepper flakes and fresh basil leaves","imageUrl":"lh5.ggpht.com/ArDqBsnZYvskqcE0ET0Ayou6wAYlFArGnmGWSoIEIujftCdkdRgm3zfvA13cwEYeUWsagobmKT7_JR4XE-pbLQ=s480-c-e365","index":43,"ingredientArrayAmount":["","2.1 kilograms","1","137 grams","2 tbsps","","","59 ml","152 grams","2 cloves","1/4 tsp",""],"ingredientArrayName":["nonstick spray","cauliflower","large eggs","part-skim mozzarella cheese","grated parmesan cheese","ground black pepper","kosher salt","tomato sauce","grape tomatoes","garlic","crushed red pepper flakes","fresh basil leaves"],"ingredientArrayPrice":[1,3,2,4,4,1,1,1,3,1,1,1],"name":"Cauliflower Crust Pizza","totalPrice":23,"totalTime":"45 Minutes","url":"http://www.yummly.com/recipe/external/Cauliflower-Crust-Pizza-592451?unitType=metric"},{"directions":"Combine Nutella and large eggs and all-purpose flour","imageUrl":"lh6.ggpht.com/CEUlTZOuN5HE6hfR-iXGPMhbQHfnTI4uQdVe7zemM8QHxf420uoL0hc2kkcKPG5opHW6U7E3gEyMlrZxJwDiBg=s480-c-e365","index":44,"ingredientArrayAmount":["370 grams","2","63 grams"],"ingredientArrayName":["Nutella","large eggs","all-purpose flour"],"ingredientArrayPrice":[3,2,1],"name":"Incredible 3-Ingredient Nutella Brownies","totalPrice":6,"totalTime":"40 Minutes","url":"http://www.yummly.com/recipe/external/Incredible-3-Ingredient-Nutella-Brownies-679277?unitType=metric"},{"directions":"Combine fresh asparagus and olives and garlic and parmesan cheese and salt and pepper","imageUrl":"lh3.googleusercontent.com/K2hhnR4-iFks6QhbMuKsAk9GkhssKAfeUxwtwSw_O9xyH7clb9HNYUlSsFSXY_T7dfX8xBiGgkRDwy-bIVqBICk=s480-c-e365","index":45,"ingredientArrayAmount":["454 grams","3 tbsps","2 cloves","33 grams","",""],"ingredientArrayName":["fresh asparagus","olives","garlic","parmesan cheese","salt","pepper"],"ingredientArrayPrice":[3,1,1,4,1,1],"name":"Roasted Asparagus with Garlic & Parmesan","totalPrice":11,"totalTime":"15 Minutes","url":"http://www.yummly.com/recipe/external/Roasted-Asparagus-with-Garlic-_-Parmesan-1505146?unitType=metric"},{"directions":"Combine tilapia fillets and unsalted butter and lemon and garlic powder and pepper and salt and oregano and paprika","imageUrl":"lh3.ggpht.com/vk_f5uw42dlD7X6Lppe94UwXwkR286uDKEsOGM0HXNxs8LBJ-pEoKduWe_zIIMx3EtS7lqU0GqO4RGsNMzPOJQ=s480-c-e365","index":46,"ingredientArrayAmount":["2","3 tbsps","1","11/2 tsps","","","1/2 tsp","1/4 tsp"],"ingredientArrayName":["tilapia fillets","unsalted butter","lemon","garlic powder","pepper","salt","oregano","paprika"],"ingredientArrayPrice":[4,1,1,1,1,1,1,1],"name":"Baked Tilapia","totalPrice":11,"totalTime":"25 Minutes","url":"http://www.yummly.com/recipe/external/Baked-tilapia-317433?unitType=metric"},{"directions":"Combine cream cheese and non-fat sour cream and taco seasoning mix and iceberg lettuce and shredded cheddar cheese and chopped tomatoes and green bell pepper and black olives","imageUrl":"lh3.ggpht.com/DIsKCxcwFGfa1U3Y64vwJSXAE6hCR5sE_iV-Pj7dyaS9ds75lJSxSO6yfVtX54_Xtnzvg0KWSzOnmtY8PAo=s480-c-e365","index":47,"ingredientArrayAmount":["227 grams","454 grams","35 grams","1/4 head","113 grams","3","1","64 grams"],"ingredientArrayName":["cream cheese","non-fat sour cream","taco seasoning mix","iceberg lettuce","shredded cheddar cheese","chopped tomatoes","green bell pepper","black olives"],"ingredientArrayPrice":[4,2,1,2,4,3,3,1],"name":"Taco Dip I","totalPrice":20,"totalTime":"10 Minutes","url":"http://www.yummly.com/recipe/external/Taco-Dip-I-Allrecipes?unitType=metric"},{"directions":"Combine soba and peanut sauce and sesame seeds and green onions","imageUrl":"lh6.ggpht.com/wjf7yIGWoidP0qV00-t37gf64z2R3uLm2KbudOfYIYheBGAzL2Aa4Gg8b-FZxruPuscK76LszDfzBKv1XvGAgA=s480-c-e365","index":48,"ingredientArrayAmount":["454 grams","1","14 grams","1/2 bunch"],"ingredientArrayName":["soba","peanut sauce","sesame seeds","green onions"],"ingredientArrayPrice":[1,3,1,1],"name":"Thai Peanut Noodles","totalPrice":6,"totalTime":"20 Minutes","url":"http://www.yummly.com/recipe/external/Thai-Peanut-Noodles-758622?unitType=metric"},{"directions":"Combine ground beef and onions and salt and pepper and milk and Bisquick Baking Mix and eggs and tomatoes and cheddar cheese","imageUrl":"lh5.ggpht.com/tHqfdkcmEB8l2cPBK-gRbEp9xbRjx7yd2wS6KoIZHCUbyUuxYGj3-qzl-U8PvFIj3YjuVq8zh2zrPfASa5xaFHs=s480-c-e365","index":49,"ingredientArrayAmount":["454 grams","240 grams","1/2 tsp","1/4 tsp","355 ml","118 ml","3","2","113 grams"],"ingredientArrayName":["ground beef","onions","salt","pepper","milk","Bisquick Baking Mix","eggs","tomatoes","cheddar cheese"],"ingredientArrayPrice":[5,2,1,1,2,1,2,2,5],"name":"Impossoble Cheeseburger Pie","totalPrice":21,"totalTime":"45 Minutes","url":"http://www.yummly.com/recipe/external/Impossoble-cheeseburger-pie-343594?unitType=metric"},{"directions":"Combine broccoli florets and garlic and extra-virgin olive oil and kosher salt and pepper","imageUrl":"lh4.ggpht.com/xLkWHxZzWJaS59i4e5R_FVNxLQbFVAWrkWx8I9w2N-hTkkeFXKuHN7dYrHwmmYXAcUy9s1Xdv3u_hja7v3ewe0o=s480-c-e365","index":50,"ingredientArrayAmount":["0.68 kg","6 cloves","2 tbsps","",""],"ingredientArrayName":["broccoli florets","garlic","extra-virgin olive oil","kosher salt","pepper"],"ingredientArrayPrice":[2,1,1,1,1],"name":"Roasted Broccoli with Smashed Garlic","totalPrice":6,"totalTime":"30 Minutes","url":"http://www.yummly.com/recipe/external/Roasted-broccoli-with-smashed-garlic-352432?unitType=metric"},{"directions":"Combine ","imageUrl":"lh5.ggpht.com/ZgJF-eVyMMTFcB_ZQ4SmXos5os3I2GUcwgJ6Hv450DeMHX2i4HJWtYRpQ2I2VgITlo382VY4l-8QmLPfEPFO1g=s480-c-e365","index":51,"name":"Chicken Nugget Sliders","totalPrice":0,"totalTime":"20 Minutes","url":"http://www.yummly.com/recipe/external/Chicken-nugget-sliders-298407?unitType=metric"},{"directions":"Combine ground beef and onions and salt and shredded cheddar cheese and Bisquick Baking Mix and milk and eggs","imageUrl":"lh4.ggpht.com/IWpkHx3JWnQoy2z6N6wxxOwpf_poOkmBOdT3tbmgPvRXL4kqQkpnqcQnyFZuZlaWYauyd8yi9S5OEjSZ1rtuXw=s480-c-e365","index":52,"ingredientArrayAmount":["454 grams","1","1/2 tsp","113 grams","118 ml","237 ml","2"],"ingredientArrayName":["ground beef","onions","salt","shredded cheddar cheese","Bisquick Baking Mix","milk","eggs"],"ingredientArrayPrice":[5,2,1,4,1,2,2],"name":"Impossibly Easy Cheeseburger Pie","totalPrice":17,"totalTime":"40 Minutes","url":"http://www.yummly.com/recipe/external/Impossibly-Easy-Cheeseburger-Pie-638806?unitType=metric"},{"directions":"Combine mayonnaise and spicy brown mustard and pickle relish and worcestershire sauce and ground black pepper and paprika and garlic","imageUrl":"lh3.ggpht.com/CYvX-Jjp5CENSVX4-jmRXwBeC2d7WImM2TjMtOBDhZrzL1be-eUcllYR6hyqijf1o0ehv01OZCUGe-9zZwo-dxQ=s480-c-e365","index":53,"ingredientArrayAmount":["158 ml","59 ml","2 tbsps","1 tsp","1 tsp","1/2 tsp","1 clove"],"ingredientArrayName":["mayonnaise","spicy brown mustard","pickle relish","worcestershire sauce","ground black pepper","paprika","garlic"],"ingredientArrayPrice":[3,1,1,1,1,1,1],"name":"\"Delta\"-Style Pickle and Mustard Dipping Sauce","totalPrice":9,"totalTime":"15 Minutes","url":"http://www.yummly.com/recipe/external/_Delta_-Style-Pickle-and-Mustard-Dipping-Sauce-546413?unitType=metric"},{"directions":"Combine vegetable oil and salt and garlic powder and smoked paprika and pepper and russet potatoes","imageUrl":"lh3.ggpht.com/FBD3Qdzleae7EBL1nESpGt4EizwcUNpqm5ZaNMGkyHg4GvJmOuHlGyBfndZ5M8iY-mqJMIxsYIAV3ZOpETkKGA=s480-c-e365","index":54,"ingredientArrayAmount":["1 tbsp","1 tsp","1 tsp","1/4 tsp","1/4 tsp","2"],"ingredientArrayName":["vegetable oil","salt","garlic powder","smoked paprika","pepper","russet potatoes"],"ingredientArrayPrice":[1,1,1,1,1,2],"name":"Baked Garlic Fries","totalPrice":7,"totalTime":"35 Minutes","url":"http://www.yummly.com/recipe/external/Baked-garlic-fries-342072?unitType=metric"},{"directions":"Combine white cake mix and eggs and melted butter and mini chocolate chips","imageUrl":"lh4.ggpht.com/Y6o6FCp7z4Z2FtkzqsWsZG-QM09xIwqnWx4r0ELG19w7My5d_7rh5jSRZ4SxEEyNzLSvJDW_YB10-mB8XCOPHQ=s480-c-e365","index":55,"ingredientArrayAmount":["1 box","2","5 tbsps","336 grams"],"ingredientArrayName":["white cake mix","eggs","melted butter","mini chocolate chips"],"ingredientArrayPrice":[2,2,1,2],"name":"Lazy Cake Cookies","totalPrice":7,"totalTime":"40 Minutes","url":"http://www.yummly.com/recipe/external/Lazy-Cake-Cookies-607368?unitType=metric"},{"directions":"Combine salt and chili powder and onion powder and garlic powder and cayenne pepper and chicken fingers and butter and heavy cream","imageUrl":"lh5.ggpht.com/85M1BbknDH56o0tAJk8sY4M_5DkpNw_HXqzi6uNHwQSA0dxPMDHe3gPusiTeJ5xeQUQEen9BCcjfhns__KKD=s480-c-e365","index":56,"ingredientArrayAmount":["1/2 tsp","11/2 tsps","11/2 tsps","2 tsps","1/4 tsp","0.91 kg","57 grams","473 ml"],"ingredientArrayName":["salt","chili powder","onion powder","garlic powder","cayenne pepper","chicken fingers","butter","heavy cream"],"ingredientArrayPrice":[1,1,1,1,1,4,1,2],"name":"Chicken Lazone","totalPrice":12,"totalTime":"30 Minutes","url":"http://www.yummly.com/recipe/external/Chicken-Lazone-686025?unitType=metric"},{"directions":"Combine shrimp scampi and thin pizza crust and olive oil and Alfredo sauce and roma tomatoes and minced garlic and mozzarella cheese","imageUrl":"lh3.googleusercontent.com/1fOZiihPT2BEgH6Us0j6g4GDRBPVZFC3bV5UaolmQTs8iKK_P04dRK08OINndIs61VN8CPSS6T0pZiKDWd_mTA=s480-c-e365","index":57,"ingredientArrayAmount":["340 grams","1","1 tbsp","118 ml","1","1 tsp","28 grams"],"ingredientArrayName":["shrimp scampi","thin pizza crust","olive oil","Alfredo sauce","roma tomatoes","minced garlic","mozzarella cheese"],"ingredientArrayPrice":[12,3,1,2,3,1,4],"name":"Shrimp Alfredo Pizza","totalPrice":26,"totalTime":"20 Minutes","url":"http://www.yummly.com/recipe/external/Shrimp-Alfredo-Pizza-1523618?unitType=metric"},{"directions":"Combine ground chicken and avocado and garlic and panko breadcrumbs and poblano peppers and salt and pepper","imageUrl":"lh3.googleusercontent.com/Sgul-1UaHFREUSjkwvOuo6o0ZHzab3R1WZgrpdY9MncU8iMxs1TIoGdlbZ059ySy5RAVkn4z4MVIIaHXoCO0=s480-c-e365","index":58,"ingredientArrayAmount":["454 grams","1","1","10 grams","1","1/2 tsp","1/4 tsp"],"ingredientArrayName":["ground chicken","avocado","garlic","panko breadcrumbs","poblano peppers","salt","pepper"],"ingredientArrayPrice":[4,3,1,2,1,1,1],"name":"Chicken Avocado Burgers","totalPrice":13,"totalTime":"15 Minutes","url":"http://www.yummly.com/recipe/external/Chicken-Avocado-Burgers-1031197?unitType=metric"},{"directions":"Combine smoked sausage and pasta and heavy cream and cajun seasoning and grated parmesan cheese","imageUrl":"lh3.ggpht.com/YNKyMj1xSM05EC1SaTu4TO0E32KtDUa7CbkLfxKE75lKjedJX5AFnoWhXhfWx3XvDEApEg2Z6RxqFDdW6Ck9zg=s480-c-e365","index":59,"ingredientArrayAmount":["1 pkg","227 grams","473 ml","2 tsps","50 grams"],"ingredientArrayName":["smoked sausage","pasta","heavy cream","cajun seasoning","grated parmesan cheese"],"ingredientArrayPrice":[5,1,2,1,4],"name":"Smoked Sausage Alfredo","totalPrice":13,"totalTime":"25 Minutes","url":"http://www.yummly.com/recipe/external/Smoked-Sausage-Alfredo-608918?unitType=metric"},{"directions":"Combine boneless chicken breast and mayonnaise and grated parmesan cheese and dry bread crumbs","imageUrl":"lh3.ggpht.com/SF4DmJ1opD1AJoSFgdo7Vx7qU6HlcLHVfvsB0voo2egwIPc0kQWGQ2O6I03cGtGTIlhh_GY9JPYe15vpKse20A=s480-c-e365","index":60,"ingredientArrayAmount":["4","118 ml","25 grams","3 tbsps"],"ingredientArrayName":["boneless chicken breast","mayonnaise","grated parmesan cheese","dry bread crumbs"],"ingredientArrayPrice":[5,3,4,1],"name":"Baked Parmesan Chicken","totalPrice":13,"totalTime":"30 Minutes","url":"http://www.yummly.com/recipe/external/Baked-Parmesan-Chicken-932937?unitType=metric"},{"directions":"Combine ground turkey and hot italian turkey sausage and bread crumbs and garlic and chiffonade and large eggs and balsamic vinegar and salt and ground black pepper and tomato purée and balsamic vinegar and ground black pepper and salt","imageUrl":"lh6.ggpht.com/Me7lIZUVUGdILe-kEksgyo1-DUukSOHTzLzs-ZT-5lEfcqNxzAgs55SFXtN_hpDrwRYxZGWm3bPvSABUwzSl4A=s480-c-e365","index":61,"ingredientArrayAmount":["454 grams","454 grams","108 grams","3 cloves","30 grams","2","1 tbsp","1/2 tsp","","250 grams","2 tsps","",""],"ingredientArrayName":["ground turkey","hot italian turkey sausage","bread crumbs","garlic","chiffonade","large eggs","balsamic vinegar","salt","ground black pepper","tomato purée","balsamic vinegar","ground black pepper","salt"],"ingredientArrayPrice":[5,3,1,1,1,2,1,1,1,1,1,1,1],"name":"Balsamic-Basil Turkey Meatloaf","totalPrice":20,"totalTime":"25 Minutes","url":"http://www.yummly.com/recipe/external/Balsamic-Basil-Turkey-Meatloaf-677158?unitType=metric"},{"directions":"Combine olive oil and salt and black pepper and fingerling potatoes and haricots verts and garlic cloves and cooking spray","imageUrl":"lh5.ggpht.com/9BbBqS3Npam4iT6zEMNfCruTl_tk64Hn5Fm4FSrIY-MIEw86j_VonxR2oKZFfWo8VMZhwX9dFZBnvDlf0NQRt2Y=s480-c-e365","index":62,"ingredientArrayAmount":["1 tbsp","1/4 tsp","1/4 tsp","454 grams","283 grams","2",""],"ingredientArrayName":["olive oil","salt","black pepper","fingerling potatoes","haricots verts","garlic cloves","cooking spray"],"ingredientArrayPrice":[1,1,1,2,1,1,1],"name":"Roasted Potatoes and Green Beans","totalPrice":8,"totalTime":"40 Minutes","url":"http://www.yummly.com/recipe/external/Roasted-potatoes-and-green-beans-338423?unitType=metric"},{"directions":"Combine cream cheese and sour cream and cucumber and garlic and onions and salt and pepper","imageUrl":"lh3.ggpht.com/L1QOnxUCibHGBt72PCk4cMr562s2AwUyeJ29foRN-bYmRZdfxXCIpZoB8-DF3KGELO8s2RI4iMdZ7nMzsCjQV2Q=s480-c-e365","index":63,"ingredientArrayAmount":["113 grams","117 ml","1/2","1 clove","1/4","",""],"ingredientArrayName":["cream cheese","sour cream","cucumber","garlic","onions","salt","pepper"],"ingredientArrayPrice":[4,2,2,1,2,1,1],"name":"Garlic Cucumber Dip","totalPrice":13,"totalTime":"15 Minutes","url":"http://www.yummly.com/recipe/external/Garlic-Cucumber-Dip-Allrecipes?unitType=metric"},{"directions":"Combine rice and boneless skinless chicken breasts and peas and white onion and garlic and eggs and sesame oil and light soy sauce","imageUrl":"lh3.ggpht.com/Ftzb6Ql23W06MAN4ZKjWnNNPjdY23mlE5sdCX5pofZDVzkOInlAiR7Lh6Awdo7WItX_SJrLtxLZ5Z2jHfijxeMM=s480-c-e365","index":64,"ingredientArrayAmount":["0.74 kg","227 grams","145 grams","1","2 cloves","2","3 tbsps","59 ml"],"ingredientArrayName":["rice","boneless skinless chicken breasts","peas","white onion","garlic","eggs","sesame oil","light soy sauce"],"ingredientArrayPrice":[5,5,2,2,1,2,1,1],"name":"Skinny Chicken Fried Rice","totalPrice":19,"totalTime":"30 Minutes","url":"http://www.yummly.com/recipe/external/Skinny-Chicken-Fried-Rice-374714?unitType=metric"},{"directions":"Combine rotelle and Velveeta and hamburger and sausages and cream of chicken soup","imageUrl":"lh4.ggpht.com/ncUqSGo35KG161DdiRdCAU_9G1VT-r7elXQVu44yp7DqFnhUvadObVTOJI76oemUCiYDKcCtulbZ3TUP9k6q1A=s480-c-e365","index":65,"ingredientArrayAmount":["1 can","0.91 kg","454 grams","454 grams","1 can"],"ingredientArrayName":["rotelle","Velveeta","hamburger","sausages","cream of chicken soup"],"ingredientArrayPrice":[1,1,3,5,2],"name":"Cheesy Hamburger Dip","totalPrice":12,"totalTime":"15 Minutes","url":"http://www.yummly.com/recipe/external/Cheesy-hamburger-dip-338192?unitType=metric"},{"directions":"Combine ground chicken and onions and panko and eggs and cayenne and extra-virgin olive oil and bbq sauce and ranch dressing and salt","imageUrl":"lh3.ggpht.com/Vqa_MSB9NUoSJsZg88rV2czDjDvDtft45AqoSv3QRzGcxa9_2mddx_N0IbwVgIt1GGB3AAou_rkdZ4GIf6oARUE=s480-c-e365","index":66,"ingredientArrayAmount":["454 grams","1/2","36 grams","1","1/2 tsp","2 tbsps","237 ml","","1/2 tsp"],"ingredientArrayName":["ground chicken","onions","panko","eggs","cayenne","extra-virgin olive oil","bbq sauce","ranch dressing","salt"],"ingredientArrayPrice":[4,2,1,2,1,1,1,1,1],"name":"BBQ Chicken Meatball Skewers","totalPrice":14,"totalTime":"25 Minutes","url":"http://www.yummly.com/recipe/external/BBQ-Chicken-Meatball-Skewers-677865?unitType=metric"},{"directions":"Combine quinoa and water and olive oil and walnuts and garlic and zucchini and fresh thyme leaves and kosher salt and ground black pepper","imageUrl":"lh5.ggpht.com/HK6R3AMoYpQ6jAZLDWy2KX4OF0s92Nbuom8hM3aC-6lZA9CeCA3dvJxIlzHBNmY5NvCpzvFZs6YoGpLMzpX_eA=s480-c-e365","index":67,"ingredientArrayAmount":["170 grams","355 ml","2 tbsps","62 grams","1 clove","2","1 tsp","1/2 tsp","1/4 tsp"],"ingredientArrayName":["quinoa","water","olive oil","walnuts","garlic","zucchini","fresh thyme leaves","kosher salt","ground black pepper"],"ingredientArrayPrice":[3,1,1,4,1,3,2,1,1],"name":"Quinoa, Zucchini and Toasted Walnut Pilaf","totalPrice":17,"totalTime":"15 Minutes","url":"http://www.yummly.com/recipe/external/Quinoa_-Zucchini-and-Toasted-Walnut-Pilaf-681052?unitType=metric"},{"directions":"Combine sour cream and green onions and cheddar cheese and russet potatoes","imageUrl":"lh5.ggpht.com/RgiJ_iDtpM-Ef5qUkoV0yOGYPyo6r7otTZpc5JUgnjP2SLGXPpvTv__lVM7jgHMpIvqwMrRdruSlfWU79uBKRZo=s480-c-e365","index":68,"ingredientArrayAmount":["4 tbsps","2","113 grams","2"],"ingredientArrayName":["sour cream","green onions","cheddar cheese","russet potatoes"],"ingredientArrayPrice":[2,1,5,2],"name":"Stuffed Baked Potatoes","totalPrice":10,"totalTime":"30 Minutes","url":"http://www.yummly.com/recipe/external/Stuffed-baked-potatoes-336543?unitType=metric"},{"directions":"Combine ","imageUrl":"lh3.googleusercontent.com/5NdQ5NmLypXYLYCzIkLkg2OMccg2VvwMtnsx_dUdg5ZGjcCqW5ry7NbcJ74MTcXjSm21uATVSEF8bUD4F2cJ=s480-c-e365","index":69,"name":"Famous Queso Dip","totalPrice":0,"totalTime":"10 Minutes","url":"http://www.yummly.com/recipe/external/Famous-Queso-Dip-1080695?unitType=metric"},{"directions":"Combine bananas and unsweetened cocoa powder and vanilla and peanut butter and almond milk and ice cubes","imageUrl":"lh5.ggpht.com/9PtSYA5ZaVZr1BqiXhNC_kO949OSkeSAYq5bj_L7o9BFVNUzsyyMSKU7I7LdhoszY_tOd0rknKzaY6lrDYxslT8=s480-c-e365","index":70,"ingredientArrayAmount":["2","1 tbsp","1 tbsp","1 tbsp","237 ml","237 ml"],"ingredientArrayName":["bananas","unsweetened cocoa powder","vanilla","peanut butter","almond milk","ice cubes"],"ingredientArrayPrice":[1,2,1,3,3,1],"name":"Skinny Chocolate Shake","totalPrice":11,"totalTime":"10 Minutes","url":"http://www.yummly.com/recipe/external/Skinny-Chocolate-Shake-597365?unitType=metric"},{"directions":"Combine non-fat sour cream and canola mayonnaise and shredded cheddar cheese and chives and center cut bacon and black pepper and potato chips","imageUrl":"lh4.ggpht.com/m2iPP7bUfg0kt359tsfQOlPv82v8ylUFNs867988oXHiA57h8DGqylLIv2vL7qZnjXjEQ0h6BSUmTcyYIBOEIA=s480-c-e365","index":71,"ingredientArrayAmount":["5 tbsps","1 tbsp","21 grams","2 tbsps","2 slices","1 dash","57 grams"],"ingredientArrayName":["non-fat sour cream","canola mayonnaise","shredded cheddar cheese","chives","center cut bacon","black pepper","potato chips"],"ingredientArrayPrice":[2,1,4,1,6,1,1],"name":"Cheddar-Bacon-Chive Dip","totalPrice":16,"totalTime":"15 Minutes","url":"http://www.yummly.com/recipe/external/Cheddar-Bacon-Chive-Dip-756490?unitType=metric"},{"directions":"Combine cream cheese and salsa and Mexican cheese and chili powder and flour tortillas","imageUrl":"lh3.ggpht.com/VwRvHqHM4E-XQiITwE8KD2FSZPVeAingrcY3Mo0TOYOaxxFvwB1yCSFC7NhA-roDQ7YBkAKyATgtd-G9QrX3og=s480-c-e365","index":72,"ingredientArrayAmount":["113 grams","3 tbsps","66 grams","1/4 tsp","4"],"ingredientArrayName":["cream cheese","salsa","Mexican cheese","chili powder","flour tortillas"],"ingredientArrayPrice":[4,2,4,1,4],"name":"Weight Watchers Salsa Roll Ups","totalPrice":15,"totalTime":"20 Minutes","url":"http://www.yummly.com/recipe/external/Weight-Watchers-Salsa-Roll-Ups-681799?unitType=metric"},{"directions":"Combine cheese tortellini and marinara sauce and mozzarella cheese and flat leaf parsley and fresh mozzarella","imageUrl":"lh4.ggpht.com/WSyGq0Du_RdbFbJL6SvG_iaDNErilV5WM9By8FPJjfSCBEM6pLm0_vsHcfIVR13kAZIpI3pvXAoi1fEMYUlkxQ=s480-c-e365","index":73,"ingredientArrayAmount":["454 grams","0.63 liter","28 grams","15 grams","113 grams"],"ingredientArrayName":["cheese tortellini","marinara sauce","mozzarella cheese","flat leaf parsley","fresh mozzarella"],"ingredientArrayPrice":[4,1,4,1,5],"name":"Easy Cheesy Tortellini Bake","totalPrice":15,"totalTime":"25 Minutes","url":"http://www.yummly.com/recipe/external/Easy-Cheesy-Tortellini-Bake-755178?unitType=metric"},{"directions":"Combine butter and garlic cloves and medium shrimp and fresh lemon juice and fresh parsley and coarse salt and ground pepper","imageUrl":"lh5.ggpht.com/AFhM81ogorSkL62xuICnX7DONc61SnX080lidUIrdZ9KK-HyGpmqq-HrnF7UDTKUIOHjULWJYfF-s5_5coH-Ng=s480-c-e365","index":74,"ingredientArrayAmount":["4 tbsps","3","0.68 kg","79 ml","15 grams","",""],"ingredientArrayName":["butter","garlic cloves","medium shrimp","fresh lemon juice","fresh parsley","coarse salt","ground pepper"],"ingredientArrayPrice":[1,1,5,2,2,1,1],"name":"Shrimp with Garlic and Lemon","totalPrice":13,"totalTime":"15 Minutes","url":"http://www.yummly.com/recipe/external/Shrimp-with-Garlic-and-Lemon-Martha-Stewart?unitType=metric"},{"directions":"Combine Rhodes Dinner Rolls and extra lean ground beef and pizza sauce and italian seasoning and pepper and salt and mozzarella cheese and fresh basil","imageUrl":"lh4.ggpht.com/IjOEgihWo_Urd1FAbIzOukLRO8B7Kt8JIVtAuJqglDUUSfW_rv11Z8hANzmQj5cBtcjAhad4O92J87u6wosIcHw=s480-c-e365","index":75,"ingredientArrayAmount":["12","454 grams","355 ml","1 tsp","","","21 grams",""],"ingredientArrayName":["Rhodes Dinner Rolls","extra lean ground beef","pizza sauce","italian seasoning","pepper","salt","mozzarella cheese","fresh basil"],"ingredientArrayPrice":[2,5,2,1,1,1,4,1],"name":"Pizza Cups","totalPrice":17,"totalTime":"30 Minutes","url":"http://www.yummly.com/recipe/external/Pizza-Cups-761571?unitType=metric"},{"directions":"Combine sour cream and dried dill and dried parsley and garlic powder and onion powder and kosher salt and salsa and Mexican cheese and tortilla chips","imageUrl":"lh6.ggpht.com/NRNeZeWvrPjOsFhyMkOXHvkklFbLz7zwbieCUyyHwe7VzrLuDkapnIVmXI68jogvM5xeCUGCRDAjMA0uQuS5-ek=s480-c-e365","index":76,"ingredientArrayAmount":["467 ml","1 tsp","2 tsps","1/2 tsp","1/2 tsp","1/2 tsp","128 grams","66 grams",""],"ingredientArrayName":["sour cream","dried dill","dried parsley","garlic powder","onion powder","kosher salt","salsa","Mexican cheese","tortilla chips"],"ingredientArrayPrice":[2,1,1,1,1,1,2,4,2],"name":"Super Easy Mexican Sour Cream Dip","totalPrice":15,"totalTime":"2 Minutes","url":"http://www.yummly.com/recipe/external/Super-Easy-Mexican-Sour-Cream-Dip-746856?unitType=metric"},{"directions":"Combine chicken breasts and tortilla chips and rotel tomatoes and cream of chicken soup and green chile and Velveeta","imageUrl":"lh5.ggpht.com/BUJ17CnJmAweR-Unk9Crzlzb5lqWsmilWr3hJwaoN_Xy3cdL3LAd55uUMJJI0Zo3zsFs4Qs_ap9ThvShwJL1RQ=s480-c-e365","index":77,"ingredientArrayAmount":["3","1 bag","1 can","1 can","1 can","454 grams"],"ingredientArrayName":["chicken breasts","tortilla chips","rotel tomatoes","cream of chicken soup","green chile","Velveeta"],"ingredientArrayPrice":[5,2,2,2,1,1],"name":"Rotel Mexican Chicken Casserole","totalPrice":13,"totalTime":"45 Minutes","url":"http://www.yummly.com/recipe/external/Rotel-Mexican-Chicken-Casserole-761287?unitType=metric"},{"directions":"Combine taco seasoning and chicken broth and boneless skinless chicken breasts and salsa","imageUrl":"lh3.googleusercontent.com/fdsF0XnWCTlFl-otLQS-6bXB_SajLIaKknv-g38BexDlGvyEF53MoskVo-BwyDZr6Z8H7x5atJS75Vl0KScyhw=s480-c-e365","index":78,"ingredientArrayAmount":["1 packet","237 ml","454 grams","128 grams"],"ingredientArrayName":["taco seasoning","chicken broth","boneless skinless chicken breasts","salsa"],"ingredientArrayPrice":[1,1,5,2],"name":"#5. Shredded Chicken Tacos","totalPrice":9,"totalTime":"40 Minutes","url":"http://www.yummly.com/recipe/external/_5_-Shredded-Chicken-Tacos-1506516?unitType=metric"},{"directions":"Combine cream cheese and sour cream and salad dressing mix and rye bread and cucumber","imageUrl":"lh6.ggpht.com/dyyYlEtgV5ceLcFl92gFBxnvZF9qCeCO21JBFRR_24xXdYaB7AQP7JfU_TdFpP2gkvWzJnVC0n3YutcMQuml=s480-c-e365","index":79,"ingredientArrayAmount":["227 grams","3 tbsps","20 grams","454 grams","2"],"ingredientArrayName":["cream cheese","sour cream","salad dressing mix","rye bread","cucumber"],"ingredientArrayPrice":[4,2,1,2,2],"name":"Cucumber Sandwiches II","totalPrice":11,"totalTime":"30 Minutes","url":"http://www.yummly.com/recipe/external/Cucumber-Sandwiches-Ii-Allrecipes?unitType=metric"},{"directions":"Combine ground beef and tomato soup and salsa and milk and carrots and peas and corn tortillas and chili powder and shredded cheddar cheese","imageUrl":"lh3.ggpht.com/2eilo27QNkCfw1P329Nv8nyOskf9p2TkirhiDn4JKdpBpwCgHY9qgyJB0JKjfmeKtSTiilwKx_bwV_xJMZKMsT0=s480-c-e365","index":80,"ingredientArrayAmount":["454 grams","305 grams","256 grams","118 ml","","241 grams","7","11/2 tsps","113 grams"],"ingredientArrayName":["ground beef","tomato soup","salsa","milk","carrots","peas","corn tortillas","chili powder","shredded cheddar cheese"],"ingredientArrayPrice":[5,1,2,2,2,2,3,1,4],"name":"Down-Home Taco Casserole","totalPrice":22,"totalTime":"40 Minutes","url":"http://www.yummly.com/recipe/external/Down-home-taco-casserole-336586?unitType=metric"},{"directions":"Combine pineapple chunks and cocktail cherries and mandarin oranges and sour cream and mini marshmallows and sweetened coconut flakes","imageUrl":"lh6.ggpht.com/1znFVKzT7ePUiyUoZvfXdQjnNFkK6zg4VDU2TupGQQbWBPs06ZAJu6WBr4K6Jq7Z-p8NHxWGuu44JtCju5BNxQ=s480-c-e365","index":81,"ingredientArrayAmount":["0.57 kg","411 grams","312 grams","233 ml","298 grams","42 grams"],"ingredientArrayName":["pineapple chunks","cocktail cherries","mandarin oranges","sour cream","mini marshmallows","sweetened coconut flakes"],"ingredientArrayPrice":[3,3,1,2,1,1],"name":"Sweet Ambrosia Salad","totalPrice":11,"totalTime":"15 Minutes","url":"http://www.yummly.com/recipe/external/Sweet-ambrosia-salad-337528?unitType=metric"},{"directions":"Combine boneless skinless chicken breast halves and garlic salt and ground pepper and canola oil and balsamic vinegar and honey and dried basil","imageUrl":"lh4.ggpht.com/Z7byRLWnvrnw0jKq_qGJ2M2EbxBvbza3tBbbRoX4Sgkm4byvomPT6sjgYu6J8bt8WSD40zWmiC7hpULU_oq1uSQ=s480-c-e365","index":82,"ingredientArrayAmount":["2","1/2 tsp","1/8 tsp","2 tsps","1 tbsp","1 tbsp","1/2 tsp"],"ingredientArrayName":["boneless skinless chicken breast halves","garlic salt","ground pepper","canola oil","balsamic vinegar","honey","dried basil"],"ingredientArrayPrice":[5,1,1,1,1,4,1],"name":"Honey Balsamic Chicken","totalPrice":14,"totalTime":"20 Minutes","url":"http://www.yummly.com/recipe/external/Honey-Balsamic-Chicken-639647?unitType=metric"},{"directions":"Combine sweet mini bells and smoked gouda and cream cheese and feta cheese crumbles and onions and garlic and chopped cilantro","imageUrl":"lh4.ggpht.com/IAdvoQAbTA-AvbuHg0iEt5pDud3QIxyn4lcJhZp3sHPbmMEslTLu1jMnYDNBCU9UiyLQ5keS1LTfu6D7w-pj=s480-c-e365","index":83,"ingredientArrayAmount":["454 grams","227 grams","227 grams","75 grams","40 grams","2 cloves","2 tbsps"],"ingredientArrayName":["sweet mini bells","smoked gouda","cream cheese","feta cheese crumbles","onions","garlic","chopped cilantro"],"ingredientArrayPrice":[2,5,4,4,2,1,1],"name":"Low Carb Cheesy Sweet Pepper Poppers","totalPrice":19,"totalTime":"30 Minutes","url":"http://www.yummly.com/recipe/external/Low-Carb-Cheesy-Sweet-Pepper-Poppers-643777?unitType=metric"},{"directions":"Combine ground turkey and chopped onion and no salt added ketchup and barbecue sauce and white vinegar and prepared mustard and worcestershire sauce and celery seed and pepper and whole wheat hamburger buns","imageUrl":"lh3.ggpht.com/uRKyDB0BEy7hBAsXLrwKrKP2HmSqGY18-UayF4E__L_U6GmzeVZAIXgynGEpmYkl-QCPl2LOcrhRScORT79GGg=s480-c-e365","index":84,"ingredientArrayAmount":["454 grams","40 grams","120 grams","3 tbsps","1 tbsp","1 tbsp","11/2 tsps","1/2 tsp","1/4 tsp","6"],"ingredientArrayName":["ground turkey","chopped onion","no salt added ketchup","barbecue sauce","white vinegar","prepared mustard","worcestershire sauce","celery seed","pepper","whole wheat hamburger buns"],"ingredientArrayPrice":[5,2,1,1,1,1,1,1,1,2],"name":"Turkey Sloppy Joes","totalPrice":16,"totalTime":"25 Minutes","url":"http://www.yummly.com/recipe/external/Turkey-Sloppy-Joes-TasteOfHome?unitType=metric"},{"directions":"Combine garlic powder and chili powder and salt and paprika and boneless skinless chicken breast halves and lime juice","imageUrl":"lh4.ggpht.com/AwgadgEAbiahRfchq8T0qQHLVf54rG5BLQ4FejQCdTm9fLIXsgtqsbTZu7hY_ppTqWPg0qS2qjubNAnvsbMgijY=s480-c-e365","index":85,"ingredientArrayAmount":["2 tsps","1 tsp","1/2 tsp","1/2 tsp","4","2 tsps"],"ingredientArrayName":["garlic powder","chili powder","salt","paprika","boneless skinless chicken breast halves","lime juice"],"ingredientArrayPrice":[1,1,1,1,5,1],"name":"Southwestern Chicken","totalPrice":10,"totalTime":"20 Minutes","url":"http://www.yummly.com/recipe/external/Southwestern-Chicken-TasteOfHome?unitType=metric"},{"directions":"Combine brussels sprouts and shallots and extra-virgin olive oil and ground black pepper and kosher salt and balsamic vinegar","imageUrl":"lh4.ggpht.com/8zuTxsMumFFyK2qd6AKQhXKMYm-JNRR1ViJkmV3YeP7sAaPTHXITbCRvoUon0qrTRkFCxAYuoRNqwXBFiE646Q=s480-c-e365","index":86,"ingredientArrayAmount":["1.36 kilograms","8","59 ml","","","2 tbsps"],"ingredientArrayName":["brussels sprouts","shallots","extra-virgin olive oil","ground black pepper","kosher salt","balsamic vinegar"],"ingredientArrayPrice":[3,1,1,1,1,1],"name":"Roasted Brussels Sprouts and Shallots with Balsamic Vinegar","totalPrice":8,"totalTime":"35 Minutes","url":"http://www.yummly.com/recipe/external/Roasted-Brussels-Sprouts-and-Shallots-with-Balsamic-Vinegar-Serious-Eats-198411?unitType=metric"},{"directions":"Combine ketchup and water and white vinegar and honey and worcestershire sauce and dried minced onion and pepper and garlic powder and cayenne pepper and meatballs","imageUrl":"lh5.ggpht.com/oZXXQqstiAVQkvtbJbTC2vbdAiqDnVCAOZuUVwIJlBlIh451dAwYXhcfFTaIrim02h4kgDFzAYtQqmQuX8UhLNk=s480-c-e365","index":87,"ingredientArrayAmount":["473 ml","118 ml","118 ml","170 grams","2 tbsps","1 tbsp","1/4 tsp","1 dash","1 dash","0.91 kg"],"ingredientArrayName":["ketchup","water","white vinegar","honey","worcestershire sauce","dried minced onion","pepper","garlic powder","cayenne pepper","meatballs"],"ingredientArrayPrice":[1,1,1,4,1,1,1,1,1,5],"name":"Appetizer Meatballs","totalPrice":17,"totalTime":"30 Minutes","url":"http://www.yummly.com/recipe/external/Appetizer-Meatballs-TasteOfHome_1?unitType=metric"},{"directions":"Combine strawberries and Nutella and chopped nuts","imageUrl":"lh3.googleusercontent.com/4m2i2BzIjP_zUFnCRhHhmewbAv7E9GJGAy7paNqn7ZiqKJ2yZsBA_3GSv9qKpSCyQ_6DUDJeDJ3oCndMCf8MpA=s480-c-e365","index":88,"ingredientArrayAmount":["357 grams","197 grams",""],"ingredientArrayName":["strawberries","Nutella","chopped nuts"],"ingredientArrayPrice":[3,3,5],"name":"Nutella Deviled Strawberries","totalPrice":11,"totalTime":"15 Minutes","url":"http://www.yummly.com/recipe/external/Nutella-Deviled-Strawberries-1064780?unitType=metric"},{"directions":"Combine ground beef and condensed cream of chicken soup and green beans and mashed potatoes and shredded cheddar cheese","imageUrl":"lh5.ggpht.com/nh-Rs1BE_IpWJTpb2E9upVnff4LIU5qr-lml6qpeXP57ujUi9wtuVYr7Tn_4JJrIqUuchdwX4sHgHkhdqc1DvQ=s480-c-e365","index":89,"ingredientArrayAmount":["454 grams","305 grams","200 grams","420 grams","57 grams"],"ingredientArrayName":["ground beef","condensed cream of chicken soup","green beans","mashed potatoes","shredded cheddar cheese"],"ingredientArrayPrice":[5,2,3,2,4],"name":"Mashed Potato Hot Dish","totalPrice":16,"totalTime":"35 Minutes","url":"http://www.yummly.com/recipe/external/Mashed-Potato-Hot-Dish-TasteOfHome?unitType=metric"},{"directions":"Combine Rhodes Dinner Rolls and sharp cheddar cheese and jalapeno chilies and cilantro and garlic salt","imageUrl":"lh3.ggpht.com/2cttBxtoDF5mAOheF8-DpAj-9gecd1QSpSv9RRsl5iiMUR1GARbjlzRwG43-TD6COaTwzkwhWdorKWPYjHsZ=s480-c-e365","index":90,"ingredientArrayAmount":["18","170 grams","2","1/2 bunch","1 tsp"],"ingredientArrayName":["Rhodes Dinner Rolls","sharp cheddar cheese","jalapeno chilies","cilantro","garlic salt"],"ingredientArrayPrice":[2,4,1,2,1],"name":"Chopped Jalapeno Cheese Bread","totalPrice":10,"totalTime":"20 Minutes","url":"http://www.yummly.com/recipe/external/Chopped-Jalapeno-Cheese-Bread-757524?unitType=metric"},{"directions":"Combine garlic powder and onion powder and ground ginger and dried thyme and ground allspice and salt and ground nutmeg and ground red pepper and ground black pepper and boneless skinless chicken thighs and cooking spray","imageUrl":"lh6.ggpht.com/4GySZHtaPIuQBLkktbFvy6pySvSvJMSdWYUY68QiVmnW9OM-4WlNUV-Ei2Utc9CoN97XdRsJDZ3IbXhMLF4MOw=s480-c-e365","index":91,"ingredientArrayAmount":["2 tsps","1 tsp","1/2 tsp","1/2 tsp","1/2 tsp","1/4 tsp","1/4 tsp","1/4 tsp","1/8 tsp","8",""],"ingredientArrayName":["garlic powder","onion powder","ground ginger","dried thyme","ground allspice","salt","ground nutmeg","ground red pepper","ground black pepper","boneless skinless chicken thighs","cooking spray"],"ingredientArrayPrice":[1,1,1,1,1,1,1,2,1,4,1],"name":"Jamaican Chicken Thighs","totalPrice":15,"totalTime":"25 Minutes","url":"http://www.yummly.com/recipe/external/Jamaican-Chicken-Thighs-My-Recipes?unitType=metric"},{"directions":"Combine low-fat vanilla ice cream and skim milk and OREO® Cookies and cool whip","imageUrl":"lh6.ggpht.com/9YOXwbjkHHhXKN-feceb_g-y0dzSgVBTuOSv3HC1xuxlGISuS5fUL8Zlnwrf3lNjxpM-CE-d0LpJ6Prxao2FWQ=s480-c-e365","index":92,"ingredientArrayAmount":["264 grams","118 ml","2",""],"ingredientArrayName":["low-fat vanilla ice cream","skim milk","OREO® Cookies","cool whip"],"ingredientArrayPrice":[3,2,2,2],"name":"Oreo Milkshake","totalPrice":9,"totalTime":"5 Minutes","url":"http://www.yummly.com/recipe/external/Oreo-Milkshake-758196?unitType=metric"},{"directions":"Combine vanilla yogurt and fruit","imageUrl":"lh3.googleusercontent.com/i_yr6gA_RHEpVZR_j_DVmb_D5Dtrx2WSevN6er7e_MVjvjUNJxmjFfxfRlk0K1DbFP6uCv0o9SSB0Xj-m5izHQ=s480-c-e365","index":93,"ingredientArrayAmount":["490 grams","360 grams"],"ingredientArrayName":["vanilla yogurt","fruit"],"ingredientArrayPrice":[3,4],"name":"ORGANIC GREEK VANILLA YOGURT BARK WITH FRUIT AND NUT TRAIL MIX","totalPrice":7,"totalTime":"5 Minutes","url":"http://www.yummly.com/recipe/external/ORGANIC-GREEK-VANILLA-YOGURT-BARK-WITH-FRUIT-AND-NUT-TRAIL-MIX-1069302?unitType=metric"},{"directions":"Combine cream of chicken soup and low sodium chicken broth and minute rice and cooked bacon and shredded cheddar cheese and cooked chicken and ranch dressing","imageUrl":"lh3.ggpht.com/8JgDjoCkS4ntss0_0N3jPdVKtFRTvS9q5MEn6ALhI158mWRRsyF8I2Xd0Nz5EqE3vQz5s-3GGS0M4qiOTQ5CPA=s480-c-e365","index":94,"ingredientArrayAmount":["1 can","355 ml","143 grams","30 grams","113 grams","280 grams","28 ml"],"ingredientArrayName":["cream of chicken soup","low sodium chicken broth","minute rice","cooked bacon","shredded cheddar cheese","cooked chicken","ranch dressing"],"ingredientArrayPrice":[2,2,2,6,4,5,1],"name":"Stove-Top Cracked Out Chicken and Rice","totalPrice":22,"totalTime":"30 Minutes","url":"http://www.yummly.com/recipe/external/Stove-Top-Cracked-Out-Chicken-and-Rice-636181?unitType=metric"},{"directions":"Combine ","imageUrl":"lh4.ggpht.com/cXBLt9Q5QJQDMCoiCcm78V5_x4srtWHOnswHY1tTRxycRGK7ox-65aWfni4XJI0Cvjo295_J288ygCGctdps7l4=s480-c-e365","index":95,"name":"Creamy Chipotle Onion Dip","totalPrice":0,"totalTime":"10 Minutes","url":"http://www.yummly.com/recipe/external/Creamy-Chipotle-Onion-Dip-627705?unitType=metric"},{"directions":"Combine zucchini and eggs and panko breadcrumbs","imageUrl":"lh5.ggpht.com/WcULX5bBr1nypIQ_sGhKN7HfzHVrs6WSwkGER8f_R1D2DQE1N-IdQI8fjF1sahtYCLRapJE12a6vvECoB3UvqTs=s480-c-e365","index":96,"ingredientArrayAmount":["4","2","60 grams"],"ingredientArrayName":["zucchini","eggs","panko breadcrumbs"],"ingredientArrayPrice":[3,2,2],"name":"Chunky Zucchini Fries","totalPrice":7,"totalTime":"25 Minutes","url":"http://www.yummly.com/recipe/external/Chunky-Zucchini-Fries-991311?unitType=metric"},{"directions":"Combine purple onion and jalapeno chilies and salt and lime and avocado and cilantro","imageUrl":"lh3.googleusercontent.com/svUkgyvELwy5MItDmKlxwXGjTx7bBBRRKLtuiQz4KpzC3QFSM08eccM0Kq0sCf0P9vT7B0WPbrup4LFP-U75nw=s480-c-e365","index":97,"ingredientArrayAmount":["1/2","2","1 pinch","1","4",""],"ingredientArrayName":["purple onion","jalapeno chilies","salt","lime","avocado","cilantro"],"ingredientArrayPrice":[2,1,1,1,3,2],"name":"Easy Guacamole","totalPrice":10,"totalTime":"15 Minutes","url":"http://www.yummly.com/recipe/external/Easy-Guacamole-1064455?unitType=metric"},{"directions":"Combine tomatoes and avocado and loosely packed fresh basil leaves and feta cheese crumbles and olive oil and red wine vinegar and tortilla chips","imageUrl":"lh4.ggpht.com/u6SmZ_elemMSqIqPQpFNd8x4g8XHQ2ABbA3xB3BGzLaiBD7rCpf07HEV_bwVE6L106rSEtYd_iNNSZpvJVtX4g=s480-c-e365","index":98,"ingredientArrayAmount":["454 grams","3","237 ml","227 grams","2 tbsps","2 tbsps",""],"ingredientArrayName":["tomatoes","avocado","loosely packed fresh basil leaves","feta cheese crumbles","olive oil","red wine vinegar","tortilla chips"],"ingredientArrayPrice":[2,3,1,4,1,2,2],"name":"Avocado-and-Feta Dip","totalPrice":15,"totalTime":"25 Minutes","url":"http://www.yummly.com/recipe/external/Avocado-and-Feta-Dip-580384?unitType=metric"},{"directions":"Combine brown sugar and paprika and onion powder and salt and chili powder and boneless skinless chicken breast halves","imageUrl":"lh6.ggpht.com/CbfqvLtsKvxFxiGBV8G_kH0v39VYOXV56k3wgE9osMqC5B7SifhTKC_mt9IhxGi3bOqz51hH_Z6czciq0GEz=s480-c-e365","index":99,"ingredientArrayAmount":["2 tbsps","1 tbsp","2 tsps","11/2 tsps","1 tsp","5"],"ingredientArrayName":["brown sugar","paprika","onion powder","salt","chili powder","boneless skinless chicken breast halves"],"ingredientArrayPrice":[1,1,1,1,1,5],"name":"Sweet and Spicy Chicken","totalPrice":10,"totalTime":"25 Minutes","url":"http://www.yummly.com/recipe/external/Sweet-and-spicy-grilled-chicken-369699?unitType=metric"}];

    return{
      all: function() {
        return Recipes;
      },
      get: function(id) {
        return Recipes[id];
      }
    }
})

.factory('Ingredients', function(){
    ingreds = { 'mayonnaise': 3,
    'grated parmesan cheese': 4,
    'boneless skinless chicken breasts': 5,
    'italian seasoned dry bread crumbs': 2,
    'carrots': 2,
    'thyme': 1,
    'agave nectar': 2,
    'frozen broccoli': 4,
    'cream of mushroom soup': 2,
    'shredded reduced fat cheddar cheese': 4,
    'asparagus spears': 3,
    'garlic': 0,
    'olive oil': 0,
    'salt': 0,
    'ground black pepper': 0,
    'asparagus': 3,
    'penne': 1,
    'chicken breasts': 5,
    'parmesan cheese': 4,
    'bananas': 1,
    'honey': 4,
    'cinnamon': 2,
    'sweet onion': 2,
    'garlic salt': 0,
    'swiss cheese': 4,
    'fresh parsley': 2,
    'crackers': 2,
    'spaghetti': 1,
    'andouille sausage': 4,
    'onions': 2,
    'grape tomatoes': 3,
    'basil leaves': 2,
    'garlic cloves': 0,
    'kosher salt': 0,
    'shredded Monterey Jack cheese': 4,
    'non-fat sour cream': 2,
    'fresh parmesan cheese': 4,
    'black pepper': 0,
    'artichoke hearts': 0,
    'fat free cream cheese': 4,
    'frozen chopped spinach': 3,
    'noodles': 1,
    'pasta sauce': 1,
    'cream cheese': 4,
    'sour cream': 2,
    'cottage cheese': 3,
    'shredded cheddar cheese': 4,
    'red potato': 1,
    'vegetable oil': 0,
    'rosemary leaves': 3,
    'sourdough bread': 2,
    'monterey jack': 4,
    'butter': 1,
    'green onions': 1,
    'poppy seeds': 1,
    'reduced fat cream cheese': 4,
    'reduced-fat sour cream': 3,
    'hot sauce': 1,
    'cooked chicken breasts': 5,
    'ground beef': 5,
    'pancake': 1,
    'milk': 2,
    'eggs': 2,
    'whole wheat pizza crust': 2,
    'basil pesto': 2,
    'shredded mozzarella cheese': 4,
    'chicken': 5,
    'sun-dried tomatoes in oil': 3,
    'rice': 5,
    'seasoned black beans': 2,
    'pico de gallo': 2,
    'grilled chicken breasts': 5,
    'jack cheese': 4,
    'cilantro': 2,
    'enchilada sauce': 1,
    'tortilla chips': 2,
    'chopped onion': 2,
    'chili sauce': 1,
    'water': 0,
    'prepared mustard': 0,
    'chili powder': 0,
    'hamburger buns': 1,
    'cheddar cheese': 5,
    'cooked chicken': 5,
    'condensed cream of chicken soup': 2,
    'pimentos': 2,
    'pepper': 0,
    'boneless chicken breast': 5,
    'ranch dressing': 1,
    'skinless chicken breasts': 5,
    'garlic powder': 0,
    'onion powder': 0,
    'brussels sprouts': 3,
    'balsamic vinegar': 0,
    'biscuits': 1,
    'dried parsley': 1,
    'yukon gold potatoes': 2,
    'melted butter': 1,
    'oil': 0,
    'flour': 1,
    'cream of chicken soup': 2,
    'soup': 2,
    'chicken broth': 1,
    'seasoning': 0,
    'broccoli florets': 2,
    'cooking spray': 0,
    'extra wide egg noodles': 1,
    'beef': 8,
    'mixed vegetables': 3,
    'diced tomatoes': 1,
    'red enchilada sauce': 0,
    'Mexican cheese blend': 4,
    'sliced green onions': 1,
    'whole wheat tortillas': 2,
    'hummus': 3,
    'ground cumin': 0,
    'california avocado': 4,
    'queso fresco': 3,
    'olive oil cooking spray': 0,
    'frozen chopped broccoli': 3,
    'large eggs': 2,
    'dried oregano': 1,
    'cayenne pepper': 1,
    'sharp cheddar cheese': 4,
    'almond meal': 4,
    'cooked rice': 2,
    'sesame oil': 1,
    'white onion': 2,
    'frozen peas and carrots': 1,
    'soy sauce': 1,
    'parsley': 1,
    'greek yogurt': 1,
    'avocado': 3,
    'lemon': 1,
    'pork': 7,
    'salsa': 2,
    'shredded lettuce': 3,
    'ripe olives': 1,
    'corn tortillas': 3,
    'tomato sauce': 1,
    'pizza crust': 2,
    'vanilla instant pudding': 1,
    'cold milk': 2,
    'sweetened condensed milk': 1,
    'vanilla extract': 1,
    'frozen whipped topping': 2,
    'vanilla wafers': 1,
    'boneless skinless chicken thighs': 4,
    'minced garlic': 0,
    'garbanzo beans': 1,
    'fresh cilantro': 2,
    'mustard': 1,
    'elbow macaroni': 1,
    'french fried onions': 1,
    'cocoa powder': 1,
    'yoghurt': 3,
    'penne pasta': 1,
    'fresh mushrooms': 2,
    'fresh basil': 1,
    'feta cheese crumbles': 4,
    'cream style corn': 2,
    'corn': 2,
    'Jiffy Corn Muffin Mix': 3,
    'cremini': 1,
    'baby spinach leaves': 3,
    'sun-dried tomatoes': 3,
    'asiago': 4,
    'chicken stuffing mix': 1,
    'frozen broccoli florets': 3,
    'broccoli cheese soup': 2,
    'bow-tie pasta': 1,
    'ground turkey': 5,
    'taco seasoning': 0,
    'nonstick spray': 0,
    'cauliflower': 3,
    'part-skim mozzarella cheese': 4,
    'crushed red pepper flakes': 0,
    'fresh basil leaves': 1,
    'Nutella': 3,
    'all-purpose flour': 1,
    'fresh asparagus': 3,
    'olives': 1,
    'tilapia fillets': 4,
    'unsalted butter': 1,
    'oregano': 1,
    'paprika': 0,
    'taco seasoning mix': 0,
    'iceberg lettuce': 2,
    'chopped tomatoes': 3,
    'green bell pepper': 3,
    'black olives': 1,
    'soba': 1,
    'peanut sauce': 3,
    'sesame seeds': 1,
    'Bisquick Baking Mix': 1,
    'tomatoes': 2,
    'extra-virgin olive oil': 0,
    'spicy brown mustard': 1,
    'pickle relish': 0,
    'worcestershire sauce': 0,
    'smoked paprika': 0,
    'russet potatoes': 2,
    'white cake mix': 2,
    'mini chocolate chips': 2,
    'chicken fingers': 4,
    'heavy cream': 2,
    'shrimp scampi': 12,
    'thin pizza crust': 3,
    'Alfredo sauce': 2,
    'roma tomatoes': 3,
    'mozzarella cheese': 4,
    'ground chicken': 4,
    'panko breadcrumbs': 2,
    'poblano peppers': 1,
    'smoked sausage': 5,
    'pasta': 1,
    'cajun seasoning': 0,
    'dry bread crumbs': 1,
    'hot italian turkey sausage': 3,
    'bread crumbs': 1,
    'chiffonade': 1,
    'tomato purée': 1,
    'fingerling potatoes': 2,
    'haricots verts': 1,
    'cucumber': 2,
    'peas': 2,
    'light soy sauce': 1,
    'rotelle': 1,
    'Velveeta': 1,
    'hamburger': 3,
    'sausages': 5,
    'panko': 1,
    'cayenne': 0,
    'bbq sauce': 0,
    'quinoa': 3,
    'walnuts': 4,
    'zucchini': 3,
    'fresh thyme leaves': 2,
    'unsweetened cocoa powder': 2,
    'vanilla': 1,
    'peanut butter': 3,
    'almond milk': 3,
    'ice cubes': 0,
    'canola mayonnaise': 1,
    'chives': 1,
    'center cut bacon': 6,
    'potato chips': 1,
    'Mexican cheese': 4,
    'flour tortillas': 4,
    'cheese tortellini': 4,
    'marinara sauce': 1,
    'flat leaf parsley': 1,
    'fresh mozzarella': 5,
    'medium shrimp': 5,
    'fresh lemon juice': 2,
    'coarse salt': 0,
    'ground pepper': 0,
    'Rhodes Dinner Rolls': 2,
    'extra lean ground beef': 5,
    'pizza sauce': 2,
    'italian seasoning': 0,
    'dried dill': 1,
    'rotel tomatoes': 2,
    'green chile': 1,
    'salad dressing mix': 1,
    'rye bread': 2,
    'tomato soup': 1,
    'pineapple chunks': 3,
    'cocktail cherries': 3,
    'mandarin oranges': 1,
    'mini marshmallows': 1,
    'sweetened coconut flakes': 1,
    'boneless skinless chicken breast halves': 5,
    'canola oil': 0,
    'dried basil': 1,
    'sweet mini bells': 2,
    'smoked gouda': 5,
    'chopped cilantro': 1,
    'no salt added ketchup': 1,
    'barbecue sauce': 1,
    'white vinegar': 0,
    'celery seed': 1,
    'whole wheat hamburger buns': 2,
    'lime juice': 1,
    'shallots': 1,
    'ketchup': 1,
    'dried minced onion': 1,
    'meatballs': 5,
    'strawberries': 3,
    'chopped nuts': 5,
    'green beans': 3,
    'mashed potatoes': 2,
    'jalapeno chilies': 1,
    'ground ginger': 1,
    'dried thyme': 1,
    'ground allspice': 0,
    'ground nutmeg': 0,
    'ground red pepper': 2,
    'low-fat vanilla ice cream': 3,
    'skim milk': 2,
    'OREO® Cookies': 2,
    'cool whip': 2,
    'vanilla yogurt': 3,
    'fruit': 4,
    'low sodium chicken broth': 2,
    'minute rice': 2,
    'cooked bacon': 6,
    'purple onion': 2,
    'lime': 1,
    'loosely packed fresh basil leaves': 1,
    'red wine vinegar': 2,
    'brown sugar': 0 };

    return{
      all: function(){
        return ingreds;
      }
    }
});
