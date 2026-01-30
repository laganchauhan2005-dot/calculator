let operation= "";
    document.getElementById("add").onclick = function(){
        operation ="+";
    }
    document.getElementById("subtract").onclick = function(){
        operation ="-";
    }
    document.getElementById("multiply").onclick = function(){
        operation ="*";
    }
    document.getElementById("divide").onclick = function(){
        operation ="/";
    }
    
function getResult(){
    let num1= Number(document.getElementById("num1").value);
    let num2= Number(document.getElementById("num2").value);
    let result;
    if(operation==="+"){
        result=num1+num2;
    }
    else if(operation==="-"){
        result=num1-num2;
    }
    else if(operation==="*"){
        result=num1*num2;
    }
    else if(operation==="/"){
        if(num2==0){
            result="Cannot divide by 0";
        }else{
            result=num1/num2;
        }
    }
    else{
        result="Select an operation";
    }
    document.getElementById("result").innerText=result;
}