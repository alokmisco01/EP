import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngMaterialsModule } from './angmaterial';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { TestComponent } from './test/test.component';
import { InterpolationTestComponent } from './interpolation-test/interpolation-test.component';
import { ClassbindingtestComponent } from './classbindingtest/classbindingtest.component';
import { StylebindingtestComponent } from './stylebindingtest/stylebindingtest.component';
import { EventbindingtestComponent } from './eventbindingtest/eventbindingtest.component';
import { TemplateRefeVarTestComponent } from './template-refe-var-test/template-refe-var-test.component';
import { TwowaybindingtestComponent } from './twowaybindingtest/twowaybindingtest.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MaterialDashboardComponent,
    TestComponent,
    InterpolationTestComponent,
    ClassbindingtestComponent,
    StylebindingtestComponent,
    EventbindingtestComponent,
    TemplateRefeVarTestComponent,
    TwowaybindingtestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngMaterialsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
