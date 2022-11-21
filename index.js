function saveToLocalStorage(event)
{
  event.preventDefault()
    let expenseAmount=event.target.amount.value
    let description=event.target.description.value
    let type=event.target.typeOfExpenses.value

    let expense={
        expenseAmount,
        description,
        type
    }

    //adding to the local storage
    localStorage.setItem(expense.expenseAmount,JSON.stringify(expense))
    showNewExpenseOnScreen(expense)
}
window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const expensesString = localStorageObj[key];
        const expenseDetailsObj = JSON.parse(expensesString);
        showNewExpenseOnScreen(expenseDetailsObj)
    }
})



function showNewExpenseOnScreen(expense)
{
    let parentNode=document.getElementById('listOfExpenses')
    let childHTML=`<li id=${expense.expenseAmount}> ${expense.expenseAmount}- ${expense.description}- ${expense.type}
                        <button onclick=deleteExpense('${expense.expenseAmount}')> Delete Expense </button>
                        <button onclick=editExpenseDetails('${expense.expenseAmount}','${expense.description}','${expense.type}')>Edit Expense </button>
                    </li>`
                    //console.log(childHTML)
    parentNode.innerHTML=parentNode.innerHTML+childHTML
}

//edit
function editExpenseDetails(expenseAmount,description,type)
{
document.getElementById('price').value=expenseAmount
document.getElementById('explain').value=description
document.getElementById('expenseType').value=type

deleteExpense(expenseAmount)
}

//for deletion from localStorage
function deleteExpense(amount){
    localStorage.removeItem(amount);
    removeExpenseFromScreen(amount);
}

//for deletion from screen
function removeExpenseFromScreen(amount){
    const parentNode = document.getElementById('listOfExpenses');
    const childNodeToBeDeleted = document.getElementById(amount);

    parentNode.removeChild(childNodeToBeDeleted)
}

