import {Component, OnInit, Input} from '@angular/core';

export interface InputDynamicCom1 {
  data1: string;
  data2: string;
}

@Component({
  selector: 'app-dynamic-com1',
  templateUrl: './dynamic-com1.component.html',
  styleUrls: ['./dynamic-com1.component.css']
})
export class DynamicCom1Component implements OnInit {
  @Input() dataRef: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log('datadatadata', this.dataRef);
  }

}
