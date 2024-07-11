import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Otros componentes y módulos
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { ListRolesComponent } from './components/list-roles/list-roles.component';
import { AddEditCharacterComponent } from './components/add-edit-character/add-edit-character.component';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    
  declarations: [
    AppComponent,
    NavbarComponent,
    ListCharactersComponent,
    ListRolesComponent,
    AddEditCharacterComponent
    
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }


