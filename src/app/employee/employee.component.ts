import { Component, OnInit } from '@angular/core';
import { ServsampService } from '../servsamp.service';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
  
})
export class EmployeeComponent implements OnInit {

  empList=[];
  heroes=[];
 
  constructor(private empservice:ServsampService) { }

  ngOnInit(): void {
    //this.empservice.getdata().subscribe(data=>this.empList=data);
   this.heroes=this.empservice.getheroes();
  }


}
