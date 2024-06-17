import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UjkomponensComponent } from './ujkomponens/ujkomponens.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
{path: "ujkomponens", component: UjkomponensComponent},
{path: "fooldal", component: FooldalComponent},
{path: "rolunk", component: RolunkComponent},

{path: "", redirectTo: "/fooldal", pathMatch: "full"}, //alapertelmezett oldal

{path: "**", component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
