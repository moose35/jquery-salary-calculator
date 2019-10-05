$(document).ready(onReady);

function onReady(){
    console.log('jQ working');
    
    $('#addInfo').on('click', inputClear);
    
}

function inputClear() {
    $("#employeeFirstName").val("");
    $("#employeeLastName").val("");
    $("#employeeID").val("");
    $("#employeeTitle").val("");
    $("#employeeSalary").val("");
  }