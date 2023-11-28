function appendToScreen(value) {
    document.getElementById('inputBox').value += value;
  }
  
  function clearScreen() {
    document.getElementById('inputBox').value = '';
  }
  
  function deleteLastChar() {
    const inputBox = document.getElementById('inputBox');
    inputBox.value = inputBox.value.slice(0, -1);
  }
  
  function calculate() {
    const inputBox = document.getElementById('inputBox');
    try {
      inputBox.value = eval(inputBox.value);
    } catch (error) {
      inputBox.value = 'Error';
    }
  }
  
  function sqrt() {
    const inputBox = document.getElementById('inputBox');
    inputBox.value = Math.sqrt(eval(inputBox.value));
  }
  
  function power() {
    const inputBox = document.getElementById('inputBox');
    inputBox.value = Math.pow(eval(inputBox.value), 2);
  }
  
  function factorial() {
    const inputBox = document.getElementById('inputBox');
    let num = eval(inputBox.value);
    if (num < 0) {
      inputBox.value = 'Undefined';
    } else {
      let result = 1;
      for (let i = 1; i <= num; i++) {
        result *= i;
      }
      inputBox.value = result;
    }
  }

  function sin() {
    const inputBox = document.getElementById('inputBox');
    const result = Math.sin(eval(inputBox.value));
    inputBox.value = result;
  }
  
  function cos() {
    const inputBox = document.getElementById('inputBox');
    const result = Math.cos(eval(inputBox.value));
    inputBox.value = result;
  }
  
  function tan() {
    const inputBox = document.getElementById('inputBox');
    const result = Math.tan(eval(inputBox.value));
    inputBox.value = result;
  }
  
  let memory = 0;
  
  function addToMemory() {
    const inputBox = document.getElementById('inputBox');
    memory += parseFloat(inputBox.value);
  }
  
  function recallMemory() {
    const inputBox = document.getElementById('inputBox');
    inputBox.value = memory;
  }
  
  function clearMemory() {
    memory = 0;
  }
    
  document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (!isNaN(key) || key === '.' || key === '/' || key === '*' || key === '-' || key === '+') {
      appendToScreen(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Escape') {
      clearScreen();
    } else if (key === 'Backspace') {
      deleteLastChar();
    }
  });
  