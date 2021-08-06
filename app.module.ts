import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ZooService } from './zoo.service';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
const routeConfig:Routes =[
  {
    path:'',redirectTo:'animals',pathMatch:'full'
  },
  {
    path:'animals',component:AnimalComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routeConfig,{useHash:true}),
    MatListModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [ZooService],
  bootstrap: [AppComponent]
})
export class AppModule { }
