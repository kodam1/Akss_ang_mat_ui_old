import { Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { AboutComponent } from './common/about/about.component';
import { ContactComponent } from './common/contact/contact.component';
import { CustomerComponent } from './common/customer/customer.component';
import { AddComponent } from './common/add/add.component';
import { StatusComponent } from './common/status/status.component';
import { authGuard } from './guard/auth.guard';
import { childauthGuard } from './guard/childauth.guard';
import { authdGuard } from './guard/authd.guard';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';
import { ProductComponent } from './common/product/product.component';
import { CardComponent } from './common/card/card.component';
import { SliderComponent } from './common/slider/slider.component';
import { TableComponent } from './common/table/table.component';
import { FormdesignComponent } from './common/formdesign/formdesign.component';
import { PopupComponent } from './common/popup/popup.component';
import { AutocompleteComponent } from './common/autocomplete/autocomplete.component';
import { InputComponent } from './common/input/input.component';
import { ToolbarComponent } from './common/toolbar/toolbar.component';
import { ClientRegistrationComponent } from './common/client-registration/client-registration.component';
import { ViewClientsComponent } from './common/view-clients/view-clients.component';
import { ChipComponent } from './common/chip/chip.component';
import { PageNotFoundComponentComponent } from './common/page-not-found-component/page-not-found-component.component';

export const routes: Routes = [
  {path:'', component: HomeComponent,canActivate:[authGuard]},
  {path:'about', component: AboutComponent,canActivate:[authGuard]},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  { path:'autocomplete', component:AutocompleteComponent },
  { path:'input', component:InputComponent },
  { path:'toolbar', component:ToolbarComponent },
  { path:'card', component:CardComponent },
  { path:'slider', component:SliderComponent },
  { path:'table', component:TableComponent },
  { path:'form', component:FormdesignComponent },
  { path:'popup', component:PopupComponent },
  {path: 'client-registration', component: ClientRegistrationComponent},
  {path: 'view-clients', component: ViewClientsComponent},
  {path: 'chips', component: ChipComponent},


  {path:'about/:id', component: AboutComponent,canActivate:[authGuard]},
  {path:'about/:submenu/:id', component: AboutComponent,canActivate:[authGuard]},
  // {path:'contact', component: ContactComponent},
  {path:'contact', loadComponent:()=>import('./common/contact/contact.component').then(m=>m.ContactComponent),
    canActivate:[authGuard]},
  {path:'customer', component: CustomerComponent,
    canActivate:[authGuard],
    canActivateChild:[childauthGuard],
    canDeactivate:[authdGuard],
    children: [
    {path: 'add', component: AddComponent,canActivate:[authGuard]},
    {path: 'edit/:id', component: AddComponent}
   ]

  },
  {path:'product', component: ProductComponent},
  // {
  //   path: '**',
  //   component: StatusComponent
  // },

  // { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  // Wildcard route for a 404 page
  {path: '**', component: PageNotFoundComponentComponent },


];
