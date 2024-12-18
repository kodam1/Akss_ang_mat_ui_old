import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  value :any;
  submenu:any;
  constructor(public route : ActivatedRoute)
  {

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.value = this.route.snapshot.paramMap.get('id');
    this.submenu = this.route.snapshot.paramMap.get('submenu');
    console.log(this.value);
    console.log(this.submenu);

  }

}
