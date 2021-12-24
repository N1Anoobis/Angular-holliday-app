import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';   
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card'; 
import {MatInputModule} from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { initialState, reducers, effects } from './app.state';
import { RotService } from './rot.service';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { BananaComponent } from './banana/banana.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    CommonModule,
    FormsModule,
    // RotService, 
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    StoreModule.forRoot(reducers, {initialState}),
    EffectsModule.forRoot(effects),
  ],
  declarations: [ 
    AppComponent, 
    BananaComponent 
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
