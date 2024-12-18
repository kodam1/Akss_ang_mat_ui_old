import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../Material.Module';
import { map, Observable, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css'
})
export class AutocompleteComponent implements OnInit {

  colorarray = ["Red", "Green", "Yellow"];
  filteroptions!:Observable<string[]>;
  formcontrol = new FormControl('');

  ngOnInit(): void {
    this.filteroptions = this.formcontrol.valueChanges.pipe(
      startWith(''), map(value => this._FILTER(value||'') )
    )
  }

  private _FILTER(value : string) : string[]{
    const searchvalue = value.toLowerCase();
    return this.colorarray.filter(option => option.toLowerCase().includes(searchvalue));

  }


}
