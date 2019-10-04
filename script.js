function setActualDate()
{
	var today =  new Date().toISOString().substring(0, 10);
	document.getElementById('defaultToday').value = today;
	document.getElementById('defaultToday').max = today;
}

function calculateBalance()
{
	var sumIncomes = document.getElementById("sum-of-incomes").innerText.replace(',','.');
	var sumExpenses = document.getElementById("sum-of-expenses").innerText.replace(',','.');
	var result="Twój bilans: " + (sumIncomes - sumExpenses).toFixed(2).replace('.',',') + " zł";
	if (sumIncomes - sumExpenses >= 0) 
	{
		balance.style.color = "green";
		document.getElementById("balance").innerHTML=result;
		document.getElementById("balanceComment").innerHTML="Gratulacje. Świetnie zarządzasz finansami!";
		
	}
	else if (sumIncomes - sumExpenses < 0) 
	{
		balance.style.color = "red";
		document.getElementById("balance").innerHTML=result;
		document.getElementById("balanceComment").innerHTML="Uważaj, wpadasz w długi!";
	}

}


	
			