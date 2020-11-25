import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MyMovieComponent } from './pages/my-movie/my-movie.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../shared/material/material.module';
import { RoomPipe } from './pipes/room.pipe';



@NgModule({
  declarations: [HomeComponent, MyMovieComponent, RoomPipe],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class MovieModule { }
