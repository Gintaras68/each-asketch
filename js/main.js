columns = 10;
rows = 10;

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