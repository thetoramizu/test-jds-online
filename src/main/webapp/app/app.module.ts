import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TestJdsOnlineSharedModule } from 'app/shared/shared.module';
import { TestJdsOnlineCoreModule } from 'app/core/core.module';
import { TestJdsOnlineAppRoutingModule } from './app-routing.module';
import { TestJdsOnlineHomeModule } from './home/home.module';
import { TestJdsOnlineEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TestJdsOnlineSharedModule,
    TestJdsOnlineCoreModule,
    TestJdsOnlineHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TestJdsOnlineEntityModule,
    TestJdsOnlineAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class TestJdsOnlineAppModule {}
