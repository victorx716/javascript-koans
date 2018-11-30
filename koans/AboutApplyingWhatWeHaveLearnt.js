var _; // globals

describe("About Applying What We Have Learnt", function() {
  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
      var productsICanEat = [];

      /* solve using filter() & all() / any() */
      var len = products.filter(function(item){
        if (!item.ingredients.includes("mushrooms") && item.containsNuts != true){
          return item
        }
      }).length

      productsICanEat.push(len)



      expect(productsICanEat.length).toBe(len);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    var sum = 0;

    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(sum);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    var sum = [];    /* try chaining range() and     reduce() */
    let count = 999
    while (count > 0){
      sum.push(count)
      count--
    }


    var reduced = sum.filter(function(item) {
      if (item % 3 === 0 || item % 5 === 0) {
        return item
      }
    }).reduce(function(acc, curr){
      return acc+curr
    })


    expect(233168).toBe(reduced);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };
 
    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */
    var flat = (_.flatten(_.map(products, function(item){
      return item.ingredients
    })))
    var reduced = _.reduce(flat, function(memo, num){
      ingredientCount[memo] = (ingredientCount[memo] || 0) + 1 
    }, {})

    expect(ingredientCount['mushrooms']).toBe(reduced);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {
  
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    
  });
  */

  // it("should find the smallest number divisible by each of the numbers 1 to 20", function smallestNumberDivisible() {
  //     var range20 = [];
  //     for (var i = 1; i <= 20; i++) {
  //       range20.push(i);
  //     }
  //     //while loop to increment our initial number by 1 every time it is not divisble by every 
  //     //element of range20.
  //       //return number if remainder of dividing the number by range20[i] is 0
  //     var divisible = 20;
  //     for (var j = 0; j < range.length; j++) {
  //       if (divisible % range[j] === 0 )
  //     } 



  //   expect(smallestNumberDivisible().toBe(FILL_ME_IN))
  // });

  /*
  it("should find the difference between the sum of the squares and the square of the sums", function () {
    
  });

  it("should find the 10001st prime", function () {

  });
  */
});
