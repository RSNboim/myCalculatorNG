import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.css']
})
export class Input1Component implements OnInit {
  num: any = ''
  equation: string = ''
  result: string = ''
  constructor(public serv: MyServiceService) { }

  ngOnInit(): void {
  }
  sendValue(value: any) {
    if (value != '=') {
      this.num += value
    }
    if (value == '=') {
      this.equation = this.num
      this.result = eval(this.equation);
      console.log(this.result)
      this.num = this.result
      this.serv.arrHistory.push(this.equation + " =" + this.num);

    }
    if (value == 'C') {
      this.num = ''
    }
  }
  myHistory(): void {
    for (let i of this.serv.arrHistory) {
      this.serv.arr.push(i)
    }

  }
}
