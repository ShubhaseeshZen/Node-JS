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
      data.forEach((element: employee) => {
        this.employeeList.push(element)

        });
        // this.employeeList.push(data);
        // this.raw = JSON.stringify(data);
      }
        //{
        // next: (v) => this.data=v,
        // error: (e) => console.error(e),
        // complete: () => console.info('complete'),
        //}
        );
  }

}
