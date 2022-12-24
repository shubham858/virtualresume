import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartOperationComponent } from './start-operation/start-operation.component';




@NgModule({
  declarations: [
    StartOperationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StartOperationComponent
  ]
})
export class OperationbbModule { }
