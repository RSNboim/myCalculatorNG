import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-input1history',
  templateUrl: './input1history.component.html',
  styleUrls: ['./input1history.component.css']
})
export class Input1historyComponent implements OnInit {

  constructor(public serv:MyServiceService) { }

  ngOnInit(): void {
  }

}
