var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var Promise = require('bluebird');
var Firebase = require('../models/Firebase');
var itemcost = { 'mayonnaise': 3,
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
    'brown sugar': 0 }



exports.getQuickAndEasy = function() {

    var url = "http://www.yummly.com/browse/quick-and-easy?max=100";


    return new Promise(function (resolve, reject) {
        request(url, function (error, response, html){
            if (error) {
                reject(error);
            }
            var $ = cheerio.load(html);


            //image url
            var recipes = $(".recipe-image");
            var recipesArray = [];
            recipes.each(function(i, elem) {
                recipesArray[i] = $(this).attr("data-src").substr(2);
                console.log(recipesArray[i]);
                Firebase.setImageUrl(i, recipesArray[i]);
            });

            //name
            var recipeNames = $(".y-title").children();
            var recipesNameArray = [];
            recipeNames.each(function(i, elem) {
                recipesNameArray[i] = $(this).text();
                console.log(recipesNameArray[i]);
                Firebase.setName(i, recipesNameArray[i]);
            });

            //for more information
            var recipeUrl = $(".y-image");
            var recipeUrlArray = [];
            recipeUrl.each(function(i){
                recipeUrlArray[i] = $(this).attr("href");
                console.log(recipeUrlArray[i]);
            });
            var promises = [];
            var externalPromises = [];
            for (var i=0; i<recipeUrlArray.length; i++){
                promises.push(downloadIngredients(recipeUrlArray[i], i));
                //externalPromises.push(downloadDirections(recipeUrlArray[i], i));
            }

            Promise.all(promises).then(function(data) {
                console.log("done1");
                console.log(data);
                var itemCost = {};
                //for (var i=0; i< data.length; i++){
                //    for (var j=0; j<data[i].length; j++){
                //        itemCost[data[i][j]] = "111";
                //    }
                //}
                console.log(itemCost);
            });
            Promise.all(externalPromises).then(function(data) {

            });
        })
    })
}

exports.getYelpPictures = function(bizId) {
    var apiUrl = url + bizId;

    return new Promise(function(resolve, reject) {
        request(apiUrl, function(error, response, html){
            if (error) {
                reject(error);
            }

            var $ = cheerio.load(html);
            var promises = [];
            $(".photo-box-img").each(function(i, elem) {
                var data = $(this).attr("src");

                console.log(data);
                if (data.indexOf("30s.jpg") > -1 ) {
                    return;
                }
                if (i > 8){
                    return;
                }
                var requestUrl = "http://"+data.substr(2);

                promises.push(downloadIngredients(requestUrl));

            });

            Promise.all(promises).then(function(data) {
                console.log("done");
                console.log(data);
            });
        });
    })
}

function downloadIngredients(requestUrl, index) {
    console.log("downloading ingredients from" + requestUrl);
    var apiUrl = "http://www.yummly.com"+ requestUrl + "?unitType=metric";
    console.log(apiUrl);
    return new Promise(function(resolve, reject) {

        request(apiUrl, function(error, response, html) {
            if (error) {
                reject(error);
            }
            var $ = cheerio.load(html);

            var minutes = $(".time-data .ft").text();
            var time = $(".time-data .bd").text();
            var totaltime = time + " " + minutes;
            console.log("TOTAL TIME IS :" + totaltime);
            var ingredientArray = $(".ingredient");
            var ingredientArrayName = [];
            ingredientArray.find(".name").each(function(i){
                ingredientArrayName[i] = $(this).first().text().trim();
            });
            var ingredientArrayAmount = [];
            ingredientArray.find(".amount").each(function(i){
                ingredientArrayAmount[i] = $(this).first().text().trim();
            });

            console.log(ingredientArrayName);
            console.log(ingredientArrayAmount);

            //calcaulte ingredient ArrayCost;
            var ingredientArrayPrice = [];
            //console.log(ingredientArrayName.length);
            for (var i = 0; i < ingredientArrayName.length; i++){
                //find the cost of items..
                //console.log(ingredientArrayName[i]);
                //console.log(itemcost[ingredientArrayName[i]]);
                ingredientArrayPrice[i] = itemcost[ingredientArrayName[i]];
                //console.log("FOUND" + ingredientArrayPrice[i]);
                if (!ingredientArrayPrice[i]) {
                    ingredientArrayPrice[i] = 1;
                }
            }
            var directions = "Combine ";
            var count = 0;
            for(var i=0, n=ingredientArrayPrice.length; i < n; i++)
            {
                count += ingredientArrayPrice[i];
            }

            var myVar2 = ingredientArrayName.join(' and ');
            var directions = "Combine " + myVar2;
            var store = {
                ingredientArrayName: ingredientArrayName,
                ingredientArrayAmount: ingredientArrayAmount,
                ingredientArrayPrice: ingredientArrayPrice,
                totalTime: totaltime,
                totalPrice:count,
                directions: directions,
            }
            Firebase.setIngredients(index, store);
            resolve(ingredientArrayName);
        });

    });
}
function downloadDirections(requestUrl, index) {
    var apiUrl = "http://www.yummly.com"+ requestUrl + "?unitType=metric";
    var apiUrl2 = apiUrl.replace("recipe", "recipe/external")
    console.log(apiUrl2);
    return new Promise(function(resolve, reject) {


        //Firebase.setDirections(index, apiUrl2, "notset");
        resolve("OK");

        //request(apiUrl, function(error, response, html) {
        //    if (error) {
        //        reject(error);
        //    }
        //    var $ = cheerio.load(html);
        //
        //    var store = {
        //        ingredientArrayName: ingredientArrayName,
        //        ingredientArrayAmount: ingredientArrayAmount
        //    }
        //    Firebase.setDirections(index, apiUrl, "notset");
        //    resolve("OK");
        //});

    });
}

function downloadPicture(requestUrl, bizId, i){
    return new Promise(function(resolve,reject) {
        request.get(requestUrl)
            .on("error", function(err){
                console.log(err);
                reject(err);
            })
            .pipe(fs.createWriteStream(__dirname+"/../assets/"+bizId+"_"+i+".jpg"))
            .on("finish", function() {
                console.log("downloaded yelp picture");
                resolve("OK");
            });
    });
}

function writeToFile(fileName, data){
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved! : " + fileName);
    });
}
