import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FeatureModule } from './feature/feature.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthModule } from './auth/auth.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FeatureModule,
    AuthModule,
    ProductModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
