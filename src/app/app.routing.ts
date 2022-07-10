import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'dashboard'},

    // Redirect signed in user to the '/example'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'dashboard'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
        ]
    },

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            // {path: 'example', loadChildren: () => import('app/modules/admin/example/example.module').then(m => m.ExampleModule)},
            {path: 'dashboard', loadChildren: () => import('app/modules/admin/dashboard/dashboard.module').then(m => m.DashboardModule)},

            {path: 'setgroup/:newgroup/:cgroup', loadChildren: () => import('app/modules/admin/setgroup/setgroup.module').then(m => m.SetgroupModule)},

            {path: 'operazioni', loadChildren: () => import('app/modules/admin/operazioni/operazioni.module').then(m => m.OperazioniModule)},
            {path: 'mod_operazioni/:opId/:clienteId', loadChildren: () => import('app/modules/admin/mod-operazioni/mod-operazioni.module').then(m => m.ModOperazioniModule)},
            {path: 'del_operazioni/:opId/:clienteId', loadChildren: () => import('app/modules/admin/delete-operazioni/delete-operazioni.module').then(m => m.DeleteOperazioniModule)},

            {path: 'sinistri', loadChildren: () => import('app/modules/maintenance/maintenance.module').then(m => m.MaintenanceModule)},

            {path: 'report', loadChildren: () => import('app/modules/admin/report/report.module').then(m => m.ReportModule)},

            {path: 'documenti', loadChildren: () => import('app/modules/admin/file-manager/file-manager.module').then(m => m.FileManagerModule)},
            {path: 'folder', loadChildren: () => import('app/modules/admin/file-manager/folder/folder.module').then(m => m.FoldersModule)},
            {path: 'pdf', loadChildren: () => import('app/modules/admin/file-manager/pdf/pdf.module').then(m => m.PdfsModule)},

            {path: 'utenze', loadChildren: () => import('app/modules/admin/utenze/utenze.module').then(m => m.UtenzeModule)},
            {path: 'modifica_sede/:userId/:groupId/:sede/:roule/:firstName/:lastName', loadChildren: () => import('app/modules/admin/utenze/modifica_sede/modifica_sede.module').then(m => m.Modifica_sedeModule)},
            {path: 'disattiva_utenza/:userId/:groupId/:status/:firstName/:lastName', loadChildren: () => import('app/modules/admin/utenze/disable_utenza/disable_utenza.module').then(m => m.Disable_utenzaModule)},
            {path: 'add_utente', loadChildren: () => import('app/modules/admin/utenze/add_utente/add_utente.module').then(m => m.add_utenteModule)},

            {path: 'doApp', loadChildren: () => import('app/modules/admin/doApp/doApp.module').then(m => m.DoAppModule)},

            {path: 'settings', loadChildren: () => import('app/modules/admin/settings/settings.module').then(m => m.SettingsModule)},
        ]
    }
];
