function sumOfEvenNumbers(numbers: number[]): number {
  let sum: number = 0;
  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {  // Vérifie si le nombre est pair
          sum += numbers[i];  // Ajoute le nombre pair à la somme
      }
  }
  return sum;
}

const numbers: number[] = [1, 2, 3, 4, 5, 6];
console.log(sumOfEvenNumbers(numbers)); // Output: 12
