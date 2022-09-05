
function creator(){
    let table = document.createElement("table");
    document.getElementById("mazewrapper").appendChild(table);
    
    //create Table
    while (rowIndex<mazeHeight) {
        let tr = document.createElement("tr");
        tr.id = "row " + rowIndex;
        table.appendChild(tr);
        
        while (columnIndex<mazeWidth) {
            let cell = document.createElement("td");
            cell.textContent = "test";
            document.getElementById("row " + rowIndex).appendChild(cell)
            columnIndex++;
        }
        columnIndex = 0;
        rowIndex++;
    }
}


let rowIndex = 0;
let columnIndex = 0;
let mazeWidth = 10;
let mazeHeight = 10;
document.getElementById("startbutton").addEventListener("click", creator);