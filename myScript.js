function displayCoffee() {
    var myObj = {
        "Blenz":[
            { "product_name": "Black Coffee", "unit_cost": "$10.47" },
            { "product_name": "French Vanilla", "unit_cost": "$8.74" },
            { "product_name": "Green Coffee", "unit_cost": "$20.53" }
        ],
        "StarBucks":[
            { "product_name": "Black Coffee", "unit_cost": "$10.47" },
            { "product_name": "French Vanilla", "unit_cost": "$8.74" },
            { "product_name": "Green Coffee", "unit_cost": "$20.53" }
        ]
    
    }
    document.getElementById("store_name").innerHTML = "Blenz";
    document.getElementById("coffee_name").innerHTML = myObj.Blenz[1].product_name;
    document.getElementById("price").innerHTML = myObj.Blenz[1].unit_cost;
  }

  