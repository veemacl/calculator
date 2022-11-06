//window.onload = calculator()

document.getElementById("sum").value = null;

let num = 1; // decides what number is being collated
let num1 = [];
let num2 = [];
let operator = "";

function getNum(val)
{
    if (num == 1)
        {
            num1.push(val); // pushes button value to end of array
            document.getElementById("sum").value = num1.join('');
        }
    else if (num == 2)
        {
            num2.push(val); // pushes button value to end of array
            document.getElementById("sum").value = num2.join('');
        }
}

function getOperator(val)
{
    
    operator = val; // grabs button value and places it in operator
    document.getElementById("sum").value = operator;
    num = 2;
    return operator, num;
}

function calculate()
{
    let num1str = num1.join('');
    let num2str = num2.join('');

    let input = num1str + operator + num2str;
    let result = Function("return " + input)();
    // put this as num1
    document.getElementById("sum").value = result;
    num1 = document.getElementById("sum").value; // unfinished
    num2 = [];
    return num1, num2;
}

function clear() // unfinished
{
    if (num == 1)
    {
        num1 = num1.pop();
        document.getElementById("sum").value = num1.join('');
    }
else if (num == 2)
    {
        num2 = num2.pop();
        document.getElementById("sum").value = num2.join('');
    }
}
