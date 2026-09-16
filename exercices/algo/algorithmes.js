// exo 3.1
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(15)


// exo 3.2
function isPalindrome(str) {
    str = str.toLowerCase().replace(/ /g, "");

    let inverse = str.split("").reverse().join("");

    return str === inverse;
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("hello"));


// exo 3.3 

function areAnagrams(str1, str2) {
    str1 = str1.toLowerCase().replace(/ /g, "")
    str2 = str2.toLowerCase().replace(/ /g, "")

    let compare1 = str1.split("").sort().join("")
    let compare2 = str2.split("").sort().join("")

    return compare1 === compare2
}

console.log(areAnagrams("listen", "silent"));

// exo 3.4

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1 ) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); 

// bonus

function fibonacciIterative(n) {
    if (n === 0) return 0;
    if (n === 1 ) return 1;

    for (let i = 0; i <=n; i++) {
        
    }

}

console.log(fibonacci(6)); 

// exo 3.5

function sortArray(arr) {
    
}

function findMax(arr) {
    const max = arr.reduce((a,b) => Math.max(a, b))
    return max
}

console.log(sortArray([3, 1, 4, 1, 5, 9, 2]));
console.log(findMax([3, 1, 4, 1, 5, 9, 2]));

// exo 3.6

const products = [
 { id: 1, name: "Laptop", price: 999, category: "Electronics" },
 { id: 2, name: "Phone", price: 699, category: "Electronics" },
 { id: 3, name: "Desk", price: 299, category: "Furniture" },
 { id: 4, name: "Chair", price: 199, category: "Furniture" },
 { id: 5, name: "Monitor", price: 299, category: "Electronics" }
];

function filterByCategory(products, category) {
    if (category) {
        return products.filter(product => product.category === category)
        .map(product => product.id)
    }

    return products.id;
}

console.log(filterByCategory(products, "Electronics"));

///

function getAveragePrice(products) {

    const prix =  products.map(product => product.price)

    const total = prix.reduce((somme, prix) => somme + prix, 0);

    return total / prix.length;
}

console.log(getAveragePrice(products));

///

function getMostExpensive(products) {
    const prix =  products.map(product => product.price)
    .reduce((a,b) => Math.max(a, b))

    const produit = products.find(product => product.price === prix);

    return produit

}

console.log(getMostExpensive(products));