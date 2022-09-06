
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
            cell.textContent = "-";
            if (columnIndex<1 && rowIndex<1) {
                cell.id = 0
            }    
            decideBorders(cell);
            cell.style.width = "30px";
            cell.style.height= "30px";
            document.getElementById("row " + rowIndex).appendChild(cell)
            columnIndex++;
            let cellidnum = cell.id + 1;
            console.log(cellidnum);
            
        }
        columnIndex = 0;
        rowIndex++;
    }
    
    function decideBorders(cell){
        if (cell.id == 0) {
            cell.style.borderTop = "solid black 2px";
            cell.style.borderBottom = "solid black 2px";
            cell.className = "0";
        }
        else{
            cell.style.borderTop = "solid green 2px";
                cell.style.borderBottom = "solid green 2px";
            }
        }
    }





let rowIndex = 0;
let columnIndex = 0;
let mazeWidth = 10;
let mazeHeight = 10;
document.getElementById("startbutton").addEventListener("click", creator);