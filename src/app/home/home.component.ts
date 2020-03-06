import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/Router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
  }
  navigateServer(): void {
    this.router.navigate(['servers'], {relativeTo: this.activatedroute});
  }

}
