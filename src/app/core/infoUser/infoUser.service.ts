import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { infoUser } from './infoUser.types';
import { environment } from 'environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class infoUserService
{
    private _infoUser: ReplaySubject<infoUser> = new ReplaySubject<infoUser>(1);

    get accessToken(): string { return localStorage.getItem('accessToken') ?? ''; }
    get groupId(): string { return localStorage.getItem('groupId') ?? ''; }
    get userId(): string { return localStorage.getItem('userId') ?? ''; }
    get groupuserRoulesId(): string { return localStorage.getItem('groupuserId') ?? ''; }

    set groupuserId(groupuserId: string) { localStorage.setItem('groupuserId', groupuserId); }

    constructor(private _httpClient: HttpClient) {}

    set user(value: infoUser) {
        // Store the value
        this._infoUser.next(value);
    }

    get user$(): Observable<infoUser> {
        return this._infoUser.asObservable();
    }

    get(): Observable<infoUser> {
        return this._httpClient.post<infoUser>(environment.api + '/userInfo/user', {
            token: this.accessToken,
            groupid: Number(this.groupId),
            userid: Number(this.userId)
        }).pipe(
            tap((infoUser) => {
                this._infoUser.next(infoUser);
                this.groupuserId = String(infoUser.currentGroupuserId);
            })
        );
    }

    navigation(groupId?: number): Observable<any> {
        return this._httpClient.post<any>(environment.api + '/userInfo/navigation', {
            token: this.accessToken,
            userId: Number(this.userId),
            groupId: Number(groupId ?? this.groupId),
        });
    }

}
