import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ReportViewerComponent } from './report-viewer/report-viewer.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
