import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class EmployeeFormComponent {
  id!: number;
  name = '';
  position = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {
    this.id = +this.route.snapshot.params['id'];
    if (this.id !== 0) {
      const employee = this.employeeService.getEmployeeById(this.id);
      if (employee) {
        this.name = employee.name;
        this.position = employee.position;
      }
    }
  }

  save() {
    const employee = { id: this.id || Date.now(), name: this.name, position: this.position };
    if (this.id === 0) {
      this.employeeService.addEmployee(employee);
    } else {
      this.employeeService.updateEmployee(this.id, employee);
    }
    this.router.navigate(['/employees']);
  }
}
