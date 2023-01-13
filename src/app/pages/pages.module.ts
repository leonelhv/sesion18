import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RouterLink } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [CommonModule, RouterLink, DataTablesModule],
  exports: [HomeComponent, DetailsComponent],
})
export class PagesModule {}
