import { Component, computed, inject, signal } from '@angular/core';
// import {  RouterOutlet } from '@angular/router';
import { AppmenuComponent } from './common/appmenu/appmenu.component';
import { ResponsiveService } from './services/responsive.service';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet,AppmenuComponent],
  imports: [AppmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'AnularBoat';

  themeSelectorOpen = signal(false);
  componentSelectorOpen = signal(true);
  // themingService = inject(ThemingService);
  responsiveService = inject(ResponsiveService);

  // componentSelectorMode = computed(() => {
  //   if(this.responsiveService.smallWidth()){
  //     return 'side';
  //   }
  //   else{
  //     return 'over';
  //   }

  // }
  // )

  componentSelectorMode = computed(() => {
    if(this.responsiveService.smallWidth()){
      return 'side';
    }
    else{
      return 'over';
    }

  }
  )









}
