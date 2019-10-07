$(document).ready(onReady);

let annualSalary = [];
let cost = 0;

function onReady() {
    console.log('jQ working');
    $('#addInfo').on('click', getEmployeeInfo);
    $('#addInfo').on('click', inputClear);
    $('tbody').on('click', '.deleteEmployee', handleDelete);
    $('#monthlyCost').on('change', maxBudget);

}

$(document).on("change", '.employeeSalary', function () {
        
        //$('.employeeSalary').each(function () {
            cost+= +$(this).closest('.employeeSalary').val();
            console.log(cost);
        
    
        $('#monthlyCost').text(cost/ 12)
});
    


function inputClear() {
    $('#employeeFirstName').val("");
    $('#employeeLastName').val("");
    $('#employeeID').val("");
    $('#employeeTitle').val("");
    $('.employeeSalary').val("");
}

function getEmployeeInfo() {
    console.log('in getEmployeeInfo');
    $('#employeeInfo').append('<tr>' +
        '<td>' + $('#employeeFirstName').val() + '</td>' +
        '<td>' + $('#employeeLastName').val() + '</td>' +
        '<td>' + $('#employeeID').val() + '</td>' +
        '<td>' + $('#employeeTitle').val() + '</td>' +
        '<td class="forTotalCost">' + $('.employeeSalary').val() + '</td>' +
        '<td><button class="deleteEmployee">Delete</button></td>' +
        '</tr>');
}

function handleDelete() {
    $('.deleteEmployee').on('click',
        console.log('Delete clicked'));
    $(this).closest('tr').remove();
}

function maxBudget() {
    i = $('#monthlyCost');
    if (i > 1000) {
        $('#footer').css('background-color', 'red');
    }
    else console.log('Within spending limit');
}

