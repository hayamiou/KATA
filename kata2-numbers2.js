function maxNumber(numbers) {
    var max = numbers[0]; // Initialise max avec le premier élément du tableau
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) { // Si le nombre courant est plus grand que max
            max = numbers[i]; // Met à jour la valeur de max
        }
    }
    return max;
}
var numbers2 = [12, 21, 67, 36, 49, 51];
console.log(maxNumber(numbers2)); // Output: 67
