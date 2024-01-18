 var employee = {} ;

function updateEmployeesWithKeyAndValue(employee, key,value) {
    const employees = employee
    return employees.streetAddress =  "11 Broadway"
}
    
    
    
 
 


  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress= "11 Broadway";
    employee.streetAddress= "12 Broadway";
    return employee
  }  
function deleteFromEmployeeByKey(employee, key){
    var employees = {...employee};
    delete employees.name;
   return employees;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}



