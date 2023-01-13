import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [CommonModule, RouterLink],
  exports: [HomeComponent, DetailsComponent],
})
export class PagesModule {}
