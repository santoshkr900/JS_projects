let accountNumber = 0;
let amt = 0,
    amount = 0;

function bankApplication() {
    var opt = Number(
        prompt(
            "--- Bank Account Menu ---\n1. Create Account\n2. Deposit Money\n3. Withdraw Money\n4. Check Balance\n5. Exit\nEnter your choice: "
        )
    );

    switch (opt) {
        case 1:
            if (!accountNumber) {
                accountNumber = Number(Math.round(Math.random() * 10000000000));
                createAccount();
            } else {
                alert("Account already created");
                bankApplication();
            }

            break;
        case 2:
            depositeMoney();
            break;
        case 3:
            withdrawMoney();
            break;
        case 4:
            checkBalance();
            break;
        case 5:
            alert("Thank you for banking with us.");
            return;
            break;
        default:
            alert("Please choose valid option");
            bankApplication();
            break;
    }
}

// console.log(accountNumber);

function createAccount() {
    amount = Number(prompt("Enter the initial amount to open a bank account"));
    if (amount <= 0) {
        alert("Enter valid amount");
        createAccount();
    } else if (amount < 2000) {
        alert("The initial amount should be minimum 2000");
        createAccount();
    } else {
        alert(
            `your account is created successfully, your account number is ${accountNumber}`
        );
        bankApplication();
    }
}

function depositeMoney() {
    if (!accountNumber) {
        alert("please create account first");
        bankApplication();
    }
    amt = Number(prompt("Enter amount to deposit"));
    if (amt <= 0) {
        alert("Invalid amount to deposit");
        depositeMoney();
    } else {
        amount += amt;
        alert(
            `Rs. ${amt} deposited successfully. Your current balance is: Rs. ${amount}`
        );
        bankApplication();
    }
}

function withdrawMoney() {
    if (accountNumber == 0) {
        alert("please create account first");
        bankApplication();
    }
    amt = Number(prompt("Enter amount to withdraw"));
    if (amt <= 0) {
        alert("Invalid amount to withdraw");
        withdrawMoney();
    }
    if (amt > amount) {
        alert("Insufficient Funds");
        bankApplication();
    } else {
        amount -= amt;
        alert(
            ` Rs. ${amt} withdrawn successfully. Your current balance is: Rs. ${amount} `
        );
        bankApplication();
    }
}

function checkBalance() {
    if (accountNumber == 0) {
        alert("please create account first");
        bankApplication();
    }
    alert(`account number ${accountNumber} total balance ${amount}`);
    bankApplication();
}

bankApplication();
