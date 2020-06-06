import { Component, OnInit } from '@angular/core';
import { ServsampService } from '../servsamp.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  depList=[];
  constructor(private depservice:ServsampService) { }

  ngOnInit(): void {
    this.depList=this.depservice.getdepartment();
  }

}
