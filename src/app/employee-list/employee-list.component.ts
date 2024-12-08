import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class EmployeeListComponent implements OnInit {
  employees$!: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.employees$ = this.employeeService.employees$;
  }

  addEmployee() {
    this.router.navigate(['/employee-form/0']);
  }

  editEmployee(id: number) {
    this.router.navigate([`/employee-form/${id}`]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id);
  }
}
