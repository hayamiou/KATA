function maxNumber(numbers: number[]): number {
  let max: number = numbers[0];  // Initialise max avec le premier élément du tableau
  for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {  // Si le nombre courant est plus grand que max
          max = numbers[i];  // Met à jour la valeur de max
      }
  }
  return max;
}

const numbers2: number[] = [12, 21, 67, 36, 49, 51];
console.log(maxNumber(numbers2)); // Output: 67
