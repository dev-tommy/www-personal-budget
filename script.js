function setActualDate()
{
	document.getElementById('defaultToday').value = new Date().toISOString().substring(0, 10);
	document.getElementById('defaultToday').max = document.getElementById('defaultToday').value ;
}	
			