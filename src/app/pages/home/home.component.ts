import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  todos$!: Observable<any>;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.todos$ = this.dataService.getAll();
  }
}
