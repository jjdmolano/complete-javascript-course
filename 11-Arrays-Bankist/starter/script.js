'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Creating DOM Elements
const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';

    const movSort = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movSort.forEach((mov, i) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${
            i + 1
        } ${type}</div>
                <div class="movements__value">${mov}€</div>
            </div>`;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}€`;

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter(int => int >= 1)
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${Math.round(interest)}€`;
};

// Computing Usernames
const createUsernames = function (accounts) {
    accounts.forEach(function (account) {
        account.username = account.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
};
createUsernames(accounts);

const updateUI = function (account3) {
    // Display movements
    displayMovements(currentAccount.movements);
    // Display balance
    calcDisplayBalance(currentAccount);
    // Display summary
    calcDisplaySummary(currentAccount);
};

// Event handlers

// Implementing login
let currentAccount;
btnLogin.addEventListener('click', function (e) {
    e.preventDefault();

    currentAccount = accounts.find(
        acc => acc.username === inputLoginUsername.value
    );

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // Display UI and message
        labelWelcome.textContent = `Welcome back, ${
            currentAccount.owner.split(' ')[0]
        }`;
        containerApp.style.opacity = 100;
        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        // Update UI
        updateUI(currentAccount);
    }
});

// Implementing transfers
btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
        acc => acc.username === inputTransferTo.value
    );

    // Clear input fields
    inputTransferAmount.value = inputTransferTo.value = '';

    if (
        amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username
    ) {
        // Implementing transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    }
});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (
        amount > 0 &&
        currentAccount.movements.some(mov => mov >= amount * 0.1)
    ) {
        currentAccount.movements.push(amount);
        updateUI(currentAccount);
    }
});

// Close account
btnClose.addEventListener('click', function (e) {
    e.preventDefault();

    if (
        inputCloseUsername.value === currentAccount.username &&
        Number(inputClosePin.value) === currentAccount.pin
    ) {
        const index = accounts.findIndex(
            acc => acc.username === currentAccount.username
        );

        // Delete account
        accounts.splice(index, 1);

        // Hide UI
        containerApp.style.opacity = 0;
    }

    // Clear input fields
    inputCloseUsername.value = inputClosePin.value = '';
});

// Sort movements
let sorted = false;
btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
// For Each
movements.forEach(function (mov, i, arr) {
    if (mov > 0) {
        console.log(`Movement ${i + 1}: You deposited ${mov}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
    }
})

currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
    console.log(`${value}: ${value}`);
});

// map
const eurToUsd = 1.1;
const movementsUSD = movements.map(movement => Math.round(movement * eurToUsd));
console.log(movements);
console.log(movementsUSD);

const movementsDescriptions = movements.map(
    (mov, i) =>
        `Movement ${i + 1}: You ${
            mov > 0 ? 'deposited' : 'withdrew'
        } ${Math.abs(mov)}`
);

console.log(movementsDescriptions);

// filter
const deposits = movements.filter(movement => movement > 0);
console.log(deposits);
const withdrawals = movements.filter(movement => movement < 0);
console.log(withdrawals);

// reduce
console.log(movements);
const balance = movements.reduce(
    (accumulator, movement) => accumulator + movement,
    0
);
console.log(balance);

// Maximum value
const max = movements.reduce((acc, mov) =>
    acc = acc > mov ? acc : mov
)
console.log(max);

// Chaining methods
const eurToUsd = 1.1;
const totalDepositsUSD = Math.round(
    movements
        .filter(mov => mov > 0)
        .map(mov => mov * eurToUsd)
        .reduce((acc, mov) => acc + mov, 0)
);
// console.log(totalDepositsUSD);

// Find
const firstWithdrawal = movements.find(mov => mov < 0)
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(account);

// findIndex
// Check close account event handler

// includes - uses equality
console.log(movements);
console.log(movements.includes(-130));

// some - can use conditions
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 1500)
console.log(anyDeposits);

// every - returns true if all elements satisfy the condition
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.every(deposit));
console.log(account4.movements.every(deposit));

// flat
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const overallBalance = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//flatMap - only goes 1 level deep, if you need deeper levels, use map then flat
const overallBalance2 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

// sort
// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

// return > 0, B, A (switch order)
// return < 0, A, B (keep order)

// Ascending
console.log(movements.sort((a, b) => a - b));

// Descending
console.log(movements.sort((a, b) => b - a));

// More ways of creating and filling arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({length: 7}, (_, i) => i + 1)
console.log(z);

// can create arrays from iterables such as maps or sets

// creating array from document
labelBalance.addEventListener('click', function (e) {
    e.preventDefault();
    const movementsUI = Array.from(
        document.querySelectorAll('.movements__value'),
        el => el.textContent.replace('€', '')
    );
    console.log(movementsUI);
});
*/

/* Choosing which array method to use

I WANT:

To mutate an array:
    Add to original: .push, .shift
    Remove from original: .pop, .shift, .splice
    Others: .reverse, .sort, .fill

A new array:
    Computed from original: .map (loops over original)
    Filtered using condition: .filter
    Portion of original: .slice
    Adding original to other: .concat
    Flattening the original: .flat, .flatMap

An array index:
    Based on value: .indexOf
    Based on test condition: .findIndex

An array element:
    Based on test condition: .find

To know if array includes: (returns boolean)
    Based on value: .includes
    Based on test condition: .some, .every

A new string:
    Based on separator string: .join

To transform to value:
    Based on accumulator: .reduce

To just loop array: (does not create new array, just loops over it)
    Based on callback: .forEach
*/

// #6 DONE
function solution(A) {
    const velocity = [];
    let stableCount = 0;

    for(let i = 0; i < A.length - 1; i++) {
        velocity.push(A[i + 1] - A[i]);
    }

    for(let i = 0; i < velocity.length - 1; i++) {
        velocity[i + 1] === velocity[i] ? stableCount++ : -1;
    }

    for(let i = 0; i < velocity.length - 1; i++) {
        velocity[i + 1] === velocity[i] && velocity[i + 2] === velocity[i] ? stableCount++ : -1;
    }

    return result = stableCount <= 1000000000 ? stableCount : -1;
}

// console.log(solution([-1, 1, 3, 3, 3, 2, 3, 2, 1, 0]));