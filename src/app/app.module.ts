import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { NavComponent } from './componentes/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { interceptorProvider } from './service/interceptor-service';

import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditeducacionComponent } from './componentes/educacion/edit-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditHysComponent } from './componentes/hys/edit-hys.component';
import { NewHysComponent } from './componentes/hys/new-hys.component';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';






@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    BannerComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EducacionComponent,
    EditeducacionComponent,
    EditHysComponent,
    NewHysComponent,
    EditAcercaDeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
