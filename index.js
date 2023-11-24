// Write your solution in this file!

const employee = {
    name: 'Frank',
    streetAddress: 'covington',
}

function updateEmployeeWithKeyAndValue(employee, name, firstName) {
    return {
        ...employee,
        [name]: firstName,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, firstName) {
    employee[name] = firstName
    return employee
}

function deleteFromEmployeeByKey(employee, name, firstName) {
    return {
        ...employee,
        [name]: firstName,
        
    }
    delete employee.name
}

function destructivelyDeleteFromEmployeeByKey(employee, name, firstName) {
    employee[name] = firstName
    return employee
    delete employee.name
}
