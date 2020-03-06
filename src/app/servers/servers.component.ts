import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/Router';
import { ServersService } from './servers.service';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
    private activatedroute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  navigateServer() {
    this.router.navigate(['/servers'], {relativeTo: this.activatedroute});
  }

}
