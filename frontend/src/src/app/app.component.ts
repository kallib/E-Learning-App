import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  title: string;

  constructor() { 
    this.title = 'Spring Boot - Angular Application'
  }

  ngOnInit(): void {
    
    
  }


}
