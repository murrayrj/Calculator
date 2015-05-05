var numbers = document.getElementsByClassName('number')
var operators = document.getElementsByClassName('operator')

var num1 = '';
var op1 = '';
var start;

for(var n=0;n<numbers.length;n++)
numbers[n].addEventListener('click', function(event){
num1 += this.value;
});

for(var i=0;i<operators.length;i++)
operators[i].addEventListener('click', function(event){
start = num1;
op1 =this.value;
});
