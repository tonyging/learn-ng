import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/new', component: BookEditComponent },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: 'books/:id/edit', component: BookEditComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
