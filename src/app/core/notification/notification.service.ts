import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'environments/environment.prod';
import { Message } from '../message.types';
import { Notifications, NotificationTopicResponse, OperazioneResponse } from './notification.types';

@Injectable({
    providedIn: 'root'
})
export class NotificationService
{
    private _notification: ReplaySubject<Notifications[]> = new ReplaySubject<Notifications[]>();

    get accessToken(): string { return localStorage.getItem('accessToken') ?? ''; }
    get groupuserRoulesId(): string { return localStorage.getItem('groupuserId') ?? ''; }

    constructor(private _httpClient: HttpClient) {}

    set notification(value: Notifications[]) {
        // Store the value
        this._notification.next(value);
    }

    get notification$(): Observable<Notifications[]> {
        return this._notification.asObservable();
    }

    loadNotifications(): Observable<Notifications[]> {
        return this._httpClient.post<Notifications[]>(environment.api + '/notificationUserGroup/mynotifications', {
            token: this.accessToken,
            groupuserId: Number(this.groupuserRoulesId)
        }).pipe(
            tap((notification) => {
                this._notification.next(notification);
            })
        );
    }

    readAll(notificationId: number[]): Observable<Message> {
        return this._httpClient.post<Message>(environment.api + '/notificationUserGroup/readallnotifications', {
            token: this.accessToken,
            notificationId: notificationId,
            groupuserId: Number(this.groupuserRoulesId)
        });
    }

    loadNotificationTopicGroup(): Observable<NotificationTopicResponse[]> {
        return this._httpClient.post<NotificationTopicResponse[]>(environment.api + '/notificationtopicgroup/topic', {
            token: this.accessToken,
            groupuserId: Number(this.groupuserRoulesId)
        });
    }

    loadNotificationTopic(): Observable<NotificationTopicResponse[]> {
        return this._httpClient.post<NotificationTopicResponse[]>(environment.api + '/notificationtopic/mytopic', {
            token: this.accessToken,
            groupuserId: Number(this.groupuserRoulesId)
        });
    }

    addTopic(name: string): Observable<Message> {
        return this._httpClient.post<Message>(environment.api + '/notificationtopic/addtopic', {
            token: this.accessToken,
            groupuserId: Number(this.groupuserRoulesId),
            name: name
        });
    }

    removeTopic(name: string): Observable<Message> {
        return this._httpClient.post<Message>(environment.api + '/notificationtopic/removetopic', {
            token: this.accessToken,
            groupuserId: Number(this.groupuserRoulesId),
            name: name
        });
    }

    notificationContent(docId: number): Observable<OperazioneResponse> {
        return this._httpClient.post<OperazioneResponse>(environment.api + '/notificationcontent/operation', {
            token: this.accessToken,
            docId: docId
        });
    }

}
