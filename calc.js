var numbers = document.getElementsByClassName('number')
var operators = document.getElementsByClassName('operator')
var result; 
var num2;
var opType;
var start;
var eq;

function initialize(){
result= 0; 
num2 = '';
opType = '';
start ='';
eq = '';}

initialize();

for(var n=0;n<numbers.length;n++)
numbers[n].addEventListener('click', function(event){
num2 += this.value;
});

for(var i=0;i<operators.length;i++)
operators[i].addEventListener('click', function(event){
start = num2;
opType =this.value;
num2 = '';
});

document.getElementsByClassName('clear')[0].addEventListener('click', function(event){
    initialize();
  })

document.getElementsByClassName('eq')[0].addEventListener('click', function(event){
    eq = this.value;
    start = parseInt(start);
    num2 = parseInt(num2);
    switch(opType) {
      case "-":
        result = (start - num2);
        break;
        
      case"x":
        result = (start * num2);
        break;
          
      case"/":
        result = (start / num2);
        break;
          
      case"+":
        result = (start + num2);
        break;
    }
  
  })

