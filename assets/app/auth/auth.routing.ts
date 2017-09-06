import { SignoutComponent } from './signout.component';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';

import { Routes, RouterModule } from "@angular/router";

export const AUTH_ROUTES: Routes=[
    {path: "", redirectTo: "signin", pathMatch: "full" },
    {path: "signup", component: SignupComponent},
    {path: "signin", component: SigninComponent},
    {path: "signout", component: SignoutComponent}
];


