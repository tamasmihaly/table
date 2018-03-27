import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroFromComponent } from './hero-from/hero-from.component';
import { CrudTableComponent } from './crud-table/crud-table.component';
import { TableComponent } from './table/table.component';
import { CrmethodService } from './crmethod.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroFromComponent,
    CrudTableComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CrmethodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
