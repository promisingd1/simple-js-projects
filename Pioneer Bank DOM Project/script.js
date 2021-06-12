// Login Button Event Handler
const loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', function(){
	const loginArea = document.getElementById('login-area');
	loginArea.style.display = 'none';

	const transactionArea = document.getElementById('transaction-area');
	transactionArea.style.display = 'block';
})



// Deposit Button Event Handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {
	const depositAmount = document.getElementById('depositAmount').value;
	const depositNumber = parseFloat(depositAmount);

	updateNumber('currentDeposit', depositNumber);
	updateNumber('currentBalance', depositNumber);
	document.getElementById('depositAmount').value = '';
});
	

// Withdraw Button Event Handler
const withDrawBtn = document.getElementById('addWithdraw');
withDrawBtn.addEventListener('click', function () {
	const withdrawAmount = document.getElementById('withdrawAmount').value;
	const withdrawNumber = parseFloat(withdrawAmount);

	updateNumber('currentWithdraw', withdrawNumber);
	updateNumber('currentBalance', -1 * withdrawNumber);
	document.getElementById('withdrawAmount').value = '';
})

function updateNumber (id, number) {
	const currentAmount = document.getElementById(id).innerText;
	const currentAmountNumber = parseFloat(currentAmount);

	totalAmount = number + currentAmountNumber;
	document.getElementById(id).innerText = totalAmount;
}

