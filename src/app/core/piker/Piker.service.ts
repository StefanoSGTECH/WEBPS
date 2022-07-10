import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'environments/environment.prod';
import { Piker } from './Piker.types';

@Injectable({
    providedIn: 'root'
})
export class Pikerv
{
    get accessToken(): string { return localStorage.getItem('accessToken') ?? ''; }
    get groupId(): string { return localStorage.getItem('groupId') ?? ''; }
    get userId(): string { return localStorage.getItem('userId') ?? ''; }

    constructor(private _httpClient: HttpClient) {}

    piker(name: string): Observable<Piker> {
        return this._httpClient.post<Piker>(environment.api + '/pikerGroup/pikers', {
            token: this.accessToken,
            groupId: this.groupId,
            userId: this.userId,
            name: name
        });
    }

}
