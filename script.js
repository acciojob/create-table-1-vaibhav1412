
function insert_Row() {
    //Write your code here

	//let cell1= document.createElement("tr")

	let cell=document.createElement("tr");
	let cell1=document.createElement("td");
	let cell2=document.createElement("td");
	cell1.textContent="New Cell1";
	cell2.textContent="New Cell2";
	let table=document.querySelector("#sampleTable tbody")
	cell.append(cell1,cell2)
	table.prepend(cell)
	
  
  
}

//let input=document.querySelector("input")

