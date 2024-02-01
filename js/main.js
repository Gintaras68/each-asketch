defaultColumns = 180;
defaultRows = 80;

controlBlock = document.querySelector('.control');
columnsInput = controlBlock.querySelector('.inputColumns');
rowsInput = controlBlock.querySelector('.inputRows');
button = controlBlock.querySelector('button');
colValue = document.getElementById('colOutput');
rowValue = document.getElementById('rowOutput');
table = document.querySelector('tbody');

console.log(columnsInput.value);
console.log(rowsInput.value);
console.log(button);

// priskliriam reikšmes pagal nutylėjimą valdymo įrankiams
columnsInput.value = defaultColumns;
colValue.innerHTML = defaultColumns;
rowsInput.value = defaultRows;
rowValue.innerHTML = defaultRows;


createTable(defaultColumns, defaultRows);

button.addEventListener('click', (event) => {
    console.log("Paspausta");
    event.preventDefault();
    columns = columnsInput.value;
    rows = rowsInput.value;
    // button.setAttribute('disabled', 'true');

    createTable(columns, rows);
});




// formuojama lentelė ir kiekvienam elementui - įvykių stebėtoją
function createTable(columns, rows) {
    innerCode = '';
    for (let i = 0; i < rows; i++) {
        cells = '';
        for (let j = 0; j < columns; j++) {
            cells += "<td></td>";
        }
        innerCode += "<tr>" + cells + "</tr>"
    }
    table.innerHTML = innerCode;
    
    // kiekvienam <td> elementui - įvykių stebėtoją
    tableBody = document.querySelector('tbody');
    cells = tableBody.querySelectorAll('td');
    cells.forEach(cell => {
        cell.addEventListener('mousemove', function (event) {
            if (event.buttons == 1) { event.target.classList.add('pointed'); }
            if (event.buttons == 2) { event.target.classList.remove('pointed'); }
        });
    });
}