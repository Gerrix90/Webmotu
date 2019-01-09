import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { ProjectsService } from './pages/projects/projects.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ProjectsModule } from './pages/projects/projects.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    WhoWeAreComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'webmotu-app'),
    AngularFirestoreModule,
    ProjectsModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
