import { Component, OnInit } from '@angular/core';
import { MyService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'myapp';

  constructor(private service: MyService) {}

  ngOnInit() {
    this.getBillsFromApi();
  }
  getBillsFromApi() {
    this.service.getBills().subscribe(
      (response) => {
        console.log('Response from API is ', response);
      },
      (error) => {
        console.log('Error is ', error);
      }
    );
  }
}
