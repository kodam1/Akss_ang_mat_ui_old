import { Component } from '@angular/core';
import { MaterialModule } from '../../../Material.Module';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  selectedvalue=25;
  startvalue= 30;
  endvalue=80;

}
