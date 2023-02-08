
function calcualteTax(cost,tax=18){ //while calling function tax is not defined so it will take
    //default parameter
taxAmount=cost*(tax/100);

    console.log(
`The Total Cost is ₹${cost} 
The Total tax ${tax}% for the Amount is ₹${taxAmount}
The Total netPay Amount is ₹${cost-taxAmount}`)
}

calcualteTax(2000,)