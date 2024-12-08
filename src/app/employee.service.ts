import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Employee {
  id: number;
  name: string;
  position: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'Alice', position: 'Developer' },
    { id: 2, name: 'Bob', position: 'Designer' },
  ];
  private employeesSubject = new BehaviorSubject<Employee[]>(this.employees);
  employees$ = this.employeesSubject.asObservable();

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.employeesSubject.next(this.employees);
  }

  updateEmployee(id: number, updatedEmployee: Employee) {
    const index = this.employees.findIndex((e) => e.id === id);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
      this.employeesSubject.next(this.employees);
    }
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter((e) => e.id !== id);
    this.employeesSubject.next(this.employees);
  }

  getEmployeeById(id: number): Employee | undefined {
    return this.employees.find((e) => e.id === id);
  }
}
