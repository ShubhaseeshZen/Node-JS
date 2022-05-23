import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { employee } from '../interface/employee';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  employeeList: employee[] = [];
  raw: string = '';

  constructor(public appService: AppService) {}

  ngOnInit(): void {
    this.appService
      .getEmployee('http://localhost:3000/users')
      .subscribe(data => {
        this.employeeList = data.employees_list;
      }
        //{
        // next: (v) => this.data=v,
        // error: (e) => console.error(e),
        // complete: () => console.info('complete'),
        //}
        );
  }

}
