import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserListComponent } from './user-list/user-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent, HomeComponent, AboutComponent, UserListComponent, ContactFormComponent, BookListComponent, BookDetailsComponent, BookEditComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
