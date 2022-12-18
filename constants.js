var restaurantName="Restaurant";
var primaryColor="orange";
var primaryTextColor="white";
var secondaryColor="black";
var secondaryTextColor="white";
var quantityButtonColor="green";
var logo_image_link="./resources/images/logo.png";
var backend_link="https://node-js-server.onrender.com";

var data = {
    "Pizza Mania":[
        {
            "_id":"id1",
            "type":"model",
            "name":"Veg. Pizza",
            "price":{'value':150},
            "section":"Pizza Mania",
            "description":"Enjoy fresh pan veg pizza with paneer, onion and capsicum toppings",
            "model_link":"resources/models/hotdog2.glb",
            "preview_image":"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            "food_category":"veg",
            "ar_enabled":false
        },
        {
            "_id":"id2",
            "type":"model",
            "name":"Non-Veg. Pizza",
            "price":{'value':150},
            "section":"Pizza Mania",
            "description":"Enjoy fresh pan veg pizza with chicken, onion and capsicum toppings",
            "model_link":"resources/models/fried_egg_sandwich2.glb",
            "preview_image":"https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "food_category":"non_veg",
            "ar_enabled":false
        },
        {
            "_id":"id3",
            "type":"model",
            "name":"Farmhouse Pizza",
            "price":{'value':150},
            "section":"Pizza Mania",
            "description":"Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
            "model_link":"resources/models/turkey_sandwich2.glb",
            "preview_image":"https://www.dominos.co.in//files/items/Farmhouse.jpg",
            "food_category":"veg",
            "ar_enabled":false
        },
    ],
    "Burger Mania":[
        {
            "_id":"id4",
            "type":"model",
            "name":"Veg. Burger",
            "price":{'value':150},
            "section":"Burger Mania",
            "description":"Enjoy fresh pan veg pizza with paneer, onion and capsicum toppings",
            "model_link":"resources/models/hotdog2.glb",
            "preview_image":"https://images.unsplash.com/photo-1550547660-d9450f859349",
            "food_category":"veg",
            "ar_enabled":false
        },
        {
            "_id":"id5",
            "type":"model",
            "name":"Double Patty Burger",
            "price":{'value':150},
            "section":"Burger Mania",
            "description":"First, there's the Double Quarter Pounder with Cheese (QPC). Now, there's still the Double QPC—but with smoky sauce and bacon.",
            "model_link":"resources/models/fried_egg_sandwich2.glb",
            "preview_image":"https://images.unsplash.com/photo-1603064752734-4c48eff53d05",
            "food_category":"non_veg",
            "ar_enabled":false
        },
    ],
    "Breakfast":[
        {
            "_id":"id6",
            "type":"model",
            "name":"Grill Sandwhich",
            "price":{'value':150},
            "section":"Breakfast",
            "description":"Try new fillings and toppings for your sandwiches, wraps and buns. Our next level sarnies include classic club sandwiches, baguettes and picnic favourites.",
            "model_link":"resources/models/sandwitch.glb",
            "preview_image":"resources/images/sandwich.jpeg",
            "food_category":"veg",
            "ar_enabled":true
        },
        {
            "_id":"id7",
            "type":"model",
            "name":"Chicken Wrap",
            "price":{'value':150},
            "section":"Breakfast",
            "description":"It's a wrap! A speedy supper with plenty of spice that's low in calories - the perfect midweek meal",
            "model_link":"resources/models/wrap.glb",
            "preview_image":"resources/images/wrap.jpeg",
            "food_category":"non_veg",
            "ar_enabled":true
        },
    ],
    
}