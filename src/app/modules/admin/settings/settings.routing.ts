import { Route } from '@angular/router';
import { SettingsNotificationsComponent } from './notifications/notifications.component';

export const settingsRoutes: Route[] = [
    {
        path     : '',
        component: SettingsNotificationsComponent
    }
];