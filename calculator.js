let number1 = parseFloat( document.querySelector("#number1").value) || 0 ;
let number2 = parseFloat(document.querySelector("#number2").value) || 0 ;



function add(firstNumber , secondNumber){
   
   return firstNumber + secondNumber ;
   
  
}

function subtract(firstNumber , secondNumber){
   let result = firstNumber - secondNumber;
   
    return result ;
   
 }
 function multiply(firstNumber , secondNumber){
   
    return firstNumber * secondNumber ;
   
 }
 function divide(firstNumber , secondNumber){
   
    return firstNumber / secondNumber ;
   
 }








document.getElementById('add').addEventListener('click', function() {
    
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('subtract').addEventListener('click', function() {
    
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('multiply').addEventListener('click', function() {
    
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('divide').addEventListener('click', function() {
    
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
 






