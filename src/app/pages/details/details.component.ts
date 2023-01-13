import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { todo } from 'src/app/interfaces/todo.interface';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  todo!: todo;
  id!: string;
  constructor(
    public routeActive: ActivatedRoute,
    public dataService: DataService
  ) {}

  ngOnInit(): void {
    this.routeActive.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.dataService.getDetail(this.id).subscribe((res) => {
      this.todo = res;
    });
  }
}
