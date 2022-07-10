import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { FuseNavigationItem, FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { Navigation } from 'app/core/navigation/navigation.types';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { infoUser } from 'app/core/infoUser/infoUser.types';
import { infoUserService } from 'app/core/infoUser/infoUser.service';
import { IMqttMessage } from 'ngx-mqtt';
import { EventMqttService } from 'app/core/mqtt/event.mqtt.service';

@Component({
    selector     : 'classy-layout',
    templateUrl  : './classy.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ClassyLayoutComponent implements OnInit, OnDestroy
{
    isScreenSmall: boolean;
    navigation: Navigation;
    infoUser: infoUser;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /*defaultNavigation: FuseNavigationItem[] = [
        {
            id      : 'group',
            title   : 'Gruppo:',
            type    : 'collapsable',
            icon    : 'heroicons_outline:user-group',
            badge: {
                title  : 'Gruppo 1',
                classes: 'px-2 bg-blue-600 text-white rounded-full'
            },
            children: [
                {
                    id   : 'group.1',
                    title: 'Gruppo 1',
                    type : 'basic',
                    link : 'group1',
                    badge: {
                        title  : 'Corrente',
                        classes: 'px-2 bg-blue-600 text-white rounded-full'
                    }
                },
                {
                    id   : 'group.2',
                    title: 'Gruppo 2',
                    type : 'basic',
                    link : 'group2'
                }
            ]
        },
        {
            id      : 'user-interface',
            title   : 'Pagine',
            subtitle: '',
            type    : 'group',
            icon    : '',
            children: [
            {
                id   : 'dashboard',
                title: 'Home',
                type : 'basic',
                icon : 'home',
                link : '/dashboard'
            },
            {
                id   : 'operazioni',
                title: 'Operazioni',
                type : 'basic',
                icon : 'add',
                link : '/operazioni'
            },
            {
                id   : 'sinistri',
                title: 'Sinistri',
                type : 'basic',
                icon : 'taxi_alert',
                link : '/sinistri'
            },
            {
                id   : 'report',
                title: 'Report',
                type : 'basic',
                icon : 'pie_chart',
                link : '/report'
            },
            {
                id   : 'documenti',
                title: 'Documenti',
                type : 'basic',
                icon : 'folder',
                link : '/documenti'
            },
            {
                id   : 'doApp',
                title: 'App IOS',
                type : 'basic',
                icon : 'phone_iphone',
                link : '/doApp'
            }
            ]
        }
    ];

    defaultNavigationadmins: FuseNavigationItem[] = [
        {
            id      : 'group',
            title   : 'Gruppo:',
            type    : 'collapsable',
            icon    : 'heroicons_outline:user-group',
            badge: {
                title  : 'Gruppo 1',
                classes: 'px-2 bg-blue-600 text-white rounded-full'
            },
            children: [
                {
                    id   : 'group.1',
                    title: 'Gruppo 1',
                    type : 'basic',
                    link : 'group1',
                    badge: {
                        title  : 'Corrente',
                        classes: 'px-2 bg-blue-600 text-white rounded-full'
                    }
                },
                {
                    id   : 'group.2',
                    title: 'Gruppo 2',
                    type : 'basic',
                    link : 'group2'
                }
            ]
        },
        {
            id      : 'user-interface',
            title   : 'Pagine',
            subtitle: '',
            type    : 'group',
            icon    : '',
            children: [
                {
                    id   : 'dashboard',
                    title: 'Home',
                    type : 'basic',
                    icon : 'home',
                    link : '/dashboard'
                },
                {
                    id   : 'operazioni',
                    title: 'Operazioni',
                    type : 'basic',
                    icon : 'add',
                    link : '/operazioni'
                },
                {
                    id   : 'sinistri',
                    title: 'Sinistri',
                    type : 'basic',
                    icon : 'taxi_alert',
                    link : '/sinistri'
                },
                {
                    id   : 'report',
                    title: 'Report',
                    type : 'basic',
                    icon : 'pie_chart',
                    link : '/report'
                },
                {
                    id   : 'documenti',
                    title: 'Documenti',
                    type : 'basic',
                    icon : 'folder',
                    link : '/documenti'
                },
                {
                    id   : 'utenze',
                    title: 'Utenze',
                    type : 'basic',
                    icon : 'people',
                    link : '/utenze'
                },
                {
                    id   : 'doApp',
                    title: 'App IOS',
                    type : 'basic',
                    icon : 'phone_iphone',
                    link : '/doApp'
                }
            ]
        }
    ];*/

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _navigationService: NavigationService,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _fuseNavigationService: FuseNavigationService,
        public _infoUser: infoUserService,
        private readonly eventMqtt: EventMqttService) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for current year
     */
    get currentYear(): number
    {
        return new Date().getFullYear();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.subscribeToTopic();

        // Subscribe to the user service
        this.reload();

        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Check if the screen is small
                this.isScreenSmall = !matchingAliases.includes('md');
            });

        /*this._router.events
            .subscribe((event: NavigationEnd) => {
              this.reload();
            });*/
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle navigation
     *
     * @param name
     */
    toggleNavigation(name: string): void
    {
        // Get the navigation
        const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

        if ( navigation )
        {
            // Toggle the opened status
            navigation.toggle();
        }
    }

    reload() {
        this._infoUser.get().subscribe((user) => {
            this.infoUser = user; 

            this._infoUser.navigation(user.currentGroupId).subscribe((resp) => {
                this.navigation = resp.navigation; 
            });
        });
    }

    private subscribeToTopic() {
        this.eventMqtt.topic('groupuserroules').subscribe((data: IMqttMessage) => {
          if (data.payload.toString() == "UPDATE") {
            this.reload();
          }
        });
    
        this.eventMqtt.topic('users').subscribe((data: IMqttMessage) => {
          if (data.payload.toString() == "UPDATE") {
            this.reload();
          }
        });
      }
}
