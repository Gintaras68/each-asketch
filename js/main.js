columns = 70;
rows = 50;

// generuojame lentelę
table = document.querySelector('tbody');
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
    cell.addEventListener('mouseenter', function (event) {
        if (event.buttons == 1) { event.target.classList.add('pointed'); }
        if (event.buttons == 2) { event.target.classList.remove('pointed'); }
    });
});