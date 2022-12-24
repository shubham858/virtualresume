import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-operation',
  templateUrl: './start-operation.component.html',
  styleUrls: ['./start-operation.component.css']
})
export class StartOperationComponent implements OnInit {

 vsras = "00:00:00";

  constructor() { }



  ngOnInit(): void {
    setTimeout(() =>{
      this.vsras = "00:00:00";
    }, 1000);
  }

}
