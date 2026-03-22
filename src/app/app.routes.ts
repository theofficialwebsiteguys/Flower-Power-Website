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
import { WebsiteLayoutComponent } from './components/website-layout/website-layout.component';

export const routes: Routes = [

  /* =====================================================
     WEBSITE + SHOP (STYLED BY .website-root)
     ===================================================== */
  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent },

      {
        path: 'shop',
        children: [
          { path: '', component: ShopComponent },
          { path: ':category', component: ShopComponent },
          { path: ':category/:brand', component: ShopComponent },
          {
            path: ':category/:brand/:slug',
            component: SingleProductComponent
          }
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
      { path: 'appdownload', component: AppDownloadComponent }
    ]
  },

  /* =====================================================
     DASHBOARD (NO WEBSITE STYLES)
     ===================================================== */
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
      { path: '', redirectTo: 'overview', pathMatch: 'full' }
    ]
  }
];