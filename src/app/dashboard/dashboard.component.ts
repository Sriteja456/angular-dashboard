import { Component } from '@angular/core';
import { Employe } from '../models/employe';
import { EmployeService } from '../services/employe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  records: Employe[] = [];
  constructor(private service: EmployeService) { }
  ngOnInit(): void {
    this.getall();
  }
  getall(): void {
    this.service.getall().subscribe(data => this.records = data);
  }

}
