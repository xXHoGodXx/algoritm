//Сортировка пузырьком

function bubbleSort(arr) {
    let swap;
    
    do{
      swap = false;
      
      for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i + 1]) {
          
          temp = arr[i];
          
          arr[i] = arr[i + 1];
          
          arr[i + 1] = temp;
                
          swap = true;
        }
      }
      
    }
    while(swap);
  }
  
  let arr = [1,435,3,7,83,2,-1,-344];

  bubbleSort(arr);

  console.log(arr); 

 



// Создать цикл который будет выводить цифры фибоначчи и должно остановиться на той цифре которую напишите в промпте  


function fibonacci(arr) {
  
    if (arr <= 1) {
      return arr;
    } else {
      return fibonacci(arr - 1) + fibonacci(arr - 2);
    }
  }

  let stopnum = parseInt(prompt("Введите число"))

  let cur_fib = 0
  let cur_index = 0

  while (cur_fib< stopnum) {
    cur_fib = fibonacci(cur_index)
    console.log(cur_fib);
    cur_index++
  }


