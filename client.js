$(document).ready(onReady);

function onReady(){
    console.log('jQ working');
    $('#addInfo').on('click', getEmployeeInfo);
    $('#addInfo').on('click', inputClear);
    $('')
}

function inputClear() {
    $("#employeeFirstName").val("");
    $("#employeeLastName").val("");
    $("#employeeID").val("");
    $("#employeeTitle").val("");
    $("#employeeSalary").val("");
  }

  function getEmployeeInfo(){
      console.log('in getEmployeeInfo');
      $('#employeeInfo').append('<tr>' + 
            '<td>' + $('#employeeFirstName').val() + '</td>' +
            '<td>' + $('#employeeLastName').val() + '</td>' +
            '<td>' + $('#employeeID').val() + '</td>' +
            '<td>' + $('#employeeTitle').val() + '</td>' +
            '<td>' + $('#employeeSalary').val() + '</td>' +
            '<td><button class="deleteEmployee">Delete</button></td>' +
       '</tr>');
     
  }