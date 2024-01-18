 const employee = {} ;
employee.name = "Sam";
employee.streetAddress = "11 Broadway";
employee;
function updateEmployeeWithKeyAndValue(employee, key,value) {
    const employees = {...employee};
    employees.streetAddress = "11 Broadway";
        return employees; 
    
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



