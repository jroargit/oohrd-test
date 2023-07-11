// Obtener el botón y agregar un Event Listener al hacer clic
document.getElementById('find-button').addEventListener('click', function() {
    // Obtener el valor ingresado en el campo de entrada
    var numbersInput = document.getElementById('numbers-input').value;

    // Convertir la cadena de números separados por comas en un array de números
    var numbersArray = numbersInput.split(',').map(function(number) {
        return parseInt(number.trim());
    });

    // Llamar a la función findMissingNumber() para encontrar el número faltante
    var missingNumber = findMissingNumber(numbersArray);

    // Mostrar el número faltante en la etiqueta de resultado
    document.getElementById('result-label').textContent = 'El número faltante es: ' + missingNumber;
});

  // Función para encontrar el número faltante en el conjunto de números
function findMissingNumber(numbers) {
    // Encontrar el valor mínimo y máximo en el array de números
    var min = Math.min(...numbers);
    var max = Math.max(...numbers);
    var sum = 0;

    // Calcular la suma de todos los números desde el mínimo hasta el máximo
    for (var i = min; i <= max; i++) {
        sum += i;
    }

    // Calcular la suma real de los números en el array
    var actualSum = numbers.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);

    // Retornar la diferencia entre la suma calculada y la suma real, que es el número faltante
    return sum - actualSum;
}
