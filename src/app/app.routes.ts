import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { authGuard, CartComponent, CheckoutComponent, ConfirmationComponent, ForgotPasswordComponent, LoginComponent, RegisterComponent, ResetPasswordComponent, SingleProductComponent } from 'shop-components'
import { LoyaltyComponent } from './components/loyalty/loyalty.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { BudtenderSalesComponent, DashboardComponent, OrdersComponent, UsersComponent, ToolsComponent, OverviewComponent } from 'admin-dashboard';
import { EventsComponent } from './components/events/events.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { AppDownloadComponent } from './components/app-download/app-download.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: 'shop', component: ShopComponent },
    // { path: 'shop/:id', component: SingleProductComponent },
    {
  path: 'shop',
  children: [
    { path: '', component: ShopComponent },                     // /shop
    { path: ':category', component: ShopComponent },            // /shop/flower
    { path: ':category/:brand', component: ShopComponent },     // /shop/flower/aeterna (brand filter)
    { 
      path: ':category/:brand/:slug', 
      component: SingleProductComponent 
    } // /shop/flower/aeterna/product-slug
  ]
},
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'confirmation', component: ConfirmationComponent },
    { path: 'loyalty', component: LoyaltyComponent },
    { path: 'about', component: AboutComponent },
    { path: 'events', component: EventsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/:id', component: BlogDetailComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard],
        children: [
          { path: 'overview', component: OverviewComponent },
          { path: 'orders', component: OrdersComponent },
          { path: 'users', component: UsersComponent },
          { path: 'budtender-sales', component: BudtenderSalesComponent },
          { path: 'tools', component: ToolsComponent },
          // add more child routes here as needed
          { path: '', redirectTo: 'overview', pathMatch: 'full' }
        ]
      },
      {
        path: 'appdownload',
        component: AppDownloadComponent
      }

];
