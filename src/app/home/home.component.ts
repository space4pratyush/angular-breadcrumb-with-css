import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isParentRout!:boolean;

  constructor(private router:Router){
  }

  ngOnInit(): void {
    this.router.events.subscribe((event:any) =>{
      if(event instanceof NavigationStart){
        console.log(event.url);
        if(event.url=='/home'){
          this.isParentRout=true;
        }
        else{
          this.isParentRout=false;
        }
      }
      
    })
    // if(this.router.url=='/home'){
    //   this.isParentRout = true;
    // }
  }

}
