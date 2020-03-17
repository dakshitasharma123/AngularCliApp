import { Component, OnInit, OnChanges } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Mytodo} from '../mytodo.model';
import { MytodoService } from '../mytodo.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  showDetail: Mytodo;


  constructor(private mytodoservie: MytodoService, private activatedroute: ActivatedRoute) {
  }


  ngOnInit() {
   const id = this.activatedroute.snapshot.params['id'];
   this.showDetail = this.mytodoservie.getTodoList(id - 1);
    this.activatedroute.params
    .subscribe((param) => {
      this.showDetail = this.mytodoservie.getTodoList(param['id'] - 1);
    });
  }
}

