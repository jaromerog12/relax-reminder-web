import { Component, OnInit } from '@angular/core';
import {TitleService} from "../../utils/TitleService";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  pageTitle: string = 'Dashboard';

  constructor(private dataService: TitleService) { }

  ngOnInit(): void {
    this.dataService.data$.subscribe(data => {
      if (data != null) {
        setTimeout(() => {
          this.pageTitle = data.title;
        });
      }
    });
  }
}
