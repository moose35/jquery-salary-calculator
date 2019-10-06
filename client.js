$(document).ready(onReady);

let annualSalary = [];

function onReady() {
    console.log('jQ working');
    $('#addInfo').on('click', getEmployeeInfo);
    $('#addInfo').on('click', inputClear);
    //$('#addInfo').on('click', calculateMonthly);
    $('tbody').on('click', '.deleteEmployee', handleDelete);
    // $('#addInfo').on('click', storeSalary);
}

$(document).on("change", "#employeeSalary", function() {
    let sum = 0;
    $("#employeeSalary").each(function(){
        sum += +$(this).val();
    });
    $("#monthlyCost").append(sum / 12);
});

function inputClear() {
    $("#employeeFirstName").val("");
    $("#employeeLastName").val("");
    $("#employeeID").val("");
    $("#employeeTitle").val("");
    $("#employeeSalary").val("");
}

function getEmployeeInfo() {
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

function handleDelete(){
    $('.deleteEmployee').on('click', 
    console.log('Delete clicked'));
    $(this).closest('tr').remove();
  }
/*function storeSalary(){
    $('#employeeSalary').add(annualSalary);
    console.log('in storeSalary');
}*/

