function getBudget() {
  let budget = document.getElementById('budget').value
  let budgetData = document.getElementById('budget-data')
  budgetData.innerHTML = budget
  document.getElementById('budget').value = ''
}

function getSpent() {
  let spentName = document.getElementById('spentName').value
  let spent = document.getElementById('spent').value
  let tableBody = document.getElementById('table-body')
  let tableRow = document.createElement('tr')
  let tableDataSpent = document.createElement('td')

  tableDataSpent.innerHTML = spent
  tableRow.appendChild(tableDataBudget)
  tableBody.appendChild(tableRow)

  document.getElementById('budget').value = ''
}