import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movies/components/movie-details/movie-details.component';
import { MoviesModule } from './movies/movies.module';
import { MovieListComponent } from './movies/components/movie-list/movie-list.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe }from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
