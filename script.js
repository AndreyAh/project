'esversion: 6';
let money = prompt ("Ваш буджет на месяц", '');
let time = prompt ("Введите дату в формате: YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let questionExpenses1 = prompt("Введите обязательную статью расходов в этом месяце", '');
    questionCost1 = prompt("Во сколько обойдется?", '');
    questionExpenses2 = prompt("Введите обязательную статью расходов в этом месяце", '');
    questionCost2 = prompt("Во сколько обойдется?", '');

appData.expenses.questionExpenses1 = questionCost1;
appData.expenses.questionExpenses2 = questionCost2;

alert(appData.budget / 30);