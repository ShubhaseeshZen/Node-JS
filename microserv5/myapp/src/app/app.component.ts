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
    this.service.getBills().subscribe( {
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }
    );
  }
}
