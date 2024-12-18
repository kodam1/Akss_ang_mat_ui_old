import { Component } from '@angular/core';
import { MaterialModule } from '../../../Material.Module';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  showFiller = false;
}
