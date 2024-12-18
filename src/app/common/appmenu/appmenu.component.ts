import { Component, DoCheck } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
// import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';
// import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import {NgIf} from '@angular/common';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import { MatListModule } from "@angular/material/list";
// import { MatMenuModule} from '@angular/material/menu';
// import { MatBadgeModule } from "@angular/material/badge";
import { MaterialModule } from '../../../Material.Module';

@Component({
  selector: 'app-appmenu',
  standalone: true,
  // imports: [MatSidenavModule, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, CommonModule,
  //           MatListModule, MatMenuModule, MatBadgeModule,RouterOutlet,NgIf],

  imports: [MaterialModule,RouterLink,RouterOutlet,NgIf],
  templateUrl: './appmenu.component.html',
  styleUrl: './appmenu.component.css'
})
export class AppmenuComponent implements DoCheck  {

  showFiller = false;

  showmenu=false;

  ifshowmenu() {
    if (this.showmenu  === false)
    {
       // Document.querySelector("#matDrawSideNav");
    }

  }


  badgevisible=false;

  badgevisibility(){
    this.badgevisible=true;
  }

  constructor( private router:Router){

  }
  ngDoCheck(): void {
   let currenturl = this.router.url;
    // console.log(currenturl);
   if(currenturl == '/login' || currenturl == '/register'){
     this.showmenu = false;
   }else{
     this.showmenu = true;
   }
  }
}
