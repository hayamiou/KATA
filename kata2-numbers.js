function sumOfEvenNumbers(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) { // Vérifie si le nombre est pair
            sum += numbers[i]; // Ajoute le nombre pair à la somme
        }
    }
    return sum;
}
var numbers = [1, 2, 3, 4, 5, 6];
console.log(sumOfEvenNumbers(numbers)); // Output: 12
