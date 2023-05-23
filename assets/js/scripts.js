// Defino Variables globales de Gastos totales y de presupuesto.
let totalSpent = []
let budget = 0
// funcion que obtiene el presupuesto ingresado en el input y lo agrega a la tabla.
function getBudget() {
  budget = parseInt(document.getElementById('budget').value)
  let budgetData = document.getElementById('budget-data')
  budgetData.innerHTML = `$${budget}`
  getBalance()
}

// funcion que crea una nueva row en la tabla con el gasto (con nombre y precio) ingresado en el input.
function getSpent() {
  let spentName = document.getElementById('spentName').value
  let spent = document.getElementById('spent').value
  let tableBody = document.getElementById('table-body')
  let tableRow = document.createElement('tr')
  let tableDataSpentName = document.createElement('td')
  let tableDataSpent = document.createElement('td')
  let tableDataDelete = document.createElement('td')
  let buttonDelete = document.createElement('button')
  let icon = document.createElement('i')

  buttonDelete.className = 'btn btn-danger ms-3'
  buttonDelete.onclick = (tableRow) => deleteSpent(tableRow)
  icon.className = 'fa fa-trash'
  tableDataSpentName.innerHTML = spentName
  tableDataSpent.innerHTML = `$${spent}`
  tableRow.appendChild(tableDataSpentName)
  tableRow.appendChild(tableDataSpent)
  tableRow.appendChild(tableDataDelete)
  tableDataDelete.appendChild(buttonDelete)
  buttonDelete.appendChild(icon)
  tableBody.appendChild(tableRow)

  document.getElementById('spentName').value = ''
  document.getElementById('spent').value = ''

  // Una vez ingresado el dato de gasto, lo pusheo al array global de gastos Totales
  totalSpent.push(parseInt(spent))
  getSpentTotal()
}

// funcion para borrar una row completa de la tabla de gastos
function deleteSpent(element) {
  let row = element.target.parentNode.parentNode
  let td = parseInt(row.getElementsByTagName('td')[1].innerHTML)
  const index = totalSpent.indexOf(td)
  totalSpent.splice(index,1)
  getSpentTotal()
  row.parentNode.removeChild(row)
}
// funcion para obtener la suma de todos los gastos que se ingresaron al array de totalSpent y mostrarlo en 'gastos'
function getSpentTotal() {
  const spentData = totalSpent.reduce((partialSum, a) => partialSum + a, 0)
  document.getElementById('spent-data').innerHTML = `$${spentData}`
  getBalance()
}
// funcion para obtener la diferencia entre el presupuesto y los gastos totales. Y mostrarlo en 'Saldo'
function getBalance() {
  const spentData = totalSpent.reduce((partialSum, a) => partialSum + a, 0)
  let balance = document.getElementById('balance')
  let balanceTotal = (budget - spentData)
  console.log(budget, spentData)
  balance.innerHTML = `$${balanceTotal}`
}
