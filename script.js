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

function setDate(fromInputDateId, toInputDateId, period)
{
	if (period == 'currentMonth') 
	{
		document.getElementById(fromInputDateId).value = '2019-10-01';
		document.getElementById(toInputDateId).value = '2019-10-31';
		document.getElementById("periodBalanceCaption").innerHTML="Bilans z bieżącego miesiąca:";
		
	}
	else if (period == 'previousMonth') 
	{
		document.getElementById(fromInputDateId).value = '2019-09-01';
		document.getElementById(toInputDateId).value = '2019-09-30';
		document.getElementById("periodBalanceCaption").innerHTML="Bilans z poprzedniego miesiąca:";
	}
	else if (period == 'currentYear') 
	{
		document.getElementById(fromInputDateId).value = '2019-01-01';
		document.getElementById(toInputDateId).value = new Date().toISOString().substring(0, 10);
		document.getElementById("periodBalanceCaption").innerHTML="Bilans z bieżącego roku:";
	}
	document.getElementById('setBalanceDates').disabled = true;
}

function enableButton()
{
	document.getElementById('setBalanceDates').disabled = false;
	
}

function showBalance(fromInputDateId, toInputDateId)
{
	var title="Bilans z okresu: od ";
	title += document.getElementById(fromInputDateId).value;
	title += " do ";
	title += document.getElementById(toInputDateId).value;
	title += " : ";
	document.getElementById("periodBalanceCaption").innerHTML=title;
}


	
			