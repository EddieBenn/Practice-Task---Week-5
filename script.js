const form = document.querySelector('form');

let selectedRow = null;
function onFormSubmit(event) {
    event.preventDefault();
    const formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }

    resetRecord();
}

form.addEventListener('submit', onFormSubmit);

// onFormSubmit();

// function to retrieve data
function readFormData() {
    const formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}

// Insert the data
function insertNewRecord(data) {
    const table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.productCode;
    cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.product;
    cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.qty;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.price;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='deleteRecord(this)'>Delete</button>`
}

//Edit the data
function onEdit(td) {
    console.log("Hello")
    console.log(td)
    selectedRow = td.parentElement.parentElement;
    document.getElementById('productCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('product').value = selectedRow.cells[1].innerHTML;
    document.getElementById('qty').value = selectedRow.cells[2].innerHTML;
    document.getElementById('price').value = selectedRow.cells[3].innerHTML;
}

//Update data after edit
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.price;
}

//Delete the data
function deleteRecord(td) {
    if (confirm('do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetRecord();
}

//Reset the data
function resetRecord() {
    document.getElementById('productCode').value = '';
    document.getElementById('product').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('price').value = '';
}
