import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoinUsPospComponent } from './join-us-posp/join-us-posp.component';
import { FooterComponent } from './footer/footer.component';
import { DiscoverTheBestComponent } from './discover-the-best/discover-the-best.component';
import { HowWeTakeCareComponent } from './how-we-take-care/how-we-take-care.component';
import { QuestionsComponent } from './questions/questions.component';
import { HeaderComponent } from './header/header.component';
import { OurpartnerscardsComponent } from './ourpartnerscards/ourpartnerscards.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    JoinUsPospComponent,
    FooterComponent,
    DiscoverTheBestComponent,
    HowWeTakeCareComponent,
    QuestionsComponent,
    HeaderComponent,
    OurpartnerscardsComponent,
    AboutusComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
