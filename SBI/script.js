let accountNumber = 0;
let currentBalance = 0;

function bankApplication() {
    let running = true;

    while (running) {
        const opt = Number(
            prompt(
                "--- Bank Account Menu ---\n" +
                    "1. Create Account\n" +
                    "2. Deposit Money\n" +
                    "3. Withdraw Money\n" +
                    "4. Check Balance\n" +
                    "5. Exit\n" +
                    "Enter your choice: "
            )
        );

        switch (opt) {
            case 1:
                createAccount();
                break;
            case 2:
                depositMoney();
                break;
            case 3:
                withdrawMoney();
                break;
            case 4:
                checkBalance();
                break;
            case 5:
                alert("Thank you for banking with us.");
                running = false;
                break;
            default:
                alert("Please choose a valid option.");
                break;
        }
    }
}

function createAccount() {
    if (accountNumber) {
        alert("Account already created.");
        return;
    }

    const initialDeposit = Number(
        prompt(
            "Enter the initial amount to open a bank account (Minimum: 2000):"
        )
    );

    if (isNaN(initialDeposit) || initialDeposit <= 0) {
        alert("Enter a valid amount.");
    } else if (initialDeposit < 2000) {
        alert("The initial amount should be at least 2000.");
    } else {
        accountNumber = String(Math.floor(Math.random() * 10 ** 10)).padStart(
            10,
            "0"
        );
        currentBalance = initialDeposit;
        alert(
            `Account created successfully! Your account number is ${accountNumber}.`
        );
    }
}

function depositMoney() {
    if (!accountNumber) {
        alert("Please create an account first.");
        return;
    }

    const depositAmount = Number(prompt("Enter the amount to deposit:"));

    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Invalid amount to deposit.");
    } else {
        currentBalance += depositAmount;
        alert(
            `Rs. ${depositAmount} deposited successfully. Your current balance is Rs. ${currentBalance}.`
        );
    }
}

function withdrawMoney() {
    if (!accountNumber) {
        alert("Please create an account first.");
        return;
    }

    const withdrawAmount = Number(prompt("Enter the amount to withdraw:"));

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Invalid amount to withdraw.");
    } else if (withdrawAmount > currentBalance) {
        alert("Insufficient funds.");
    } else {
        currentBalance -= withdrawAmount;
        alert(
            `Rs. ${withdrawAmount} withdrawn successfully. Your current balance is Rs. ${currentBalance}.`
        );
    }
}

function checkBalance() {
    if (!accountNumber) {
        alert("Please create an account first.");
        return;
    }

    alert(
        `Account Number: ${accountNumber}\nTotal Balance: Rs. ${currentBalance}`
    );
}

bankApplication();
