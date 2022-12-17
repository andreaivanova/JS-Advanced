function solve(fruit, grams, pricePerKG) {
    console.log(`I need $${((grams / 1000) * pricePerKG).toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${fruit}.`);


}
solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);
