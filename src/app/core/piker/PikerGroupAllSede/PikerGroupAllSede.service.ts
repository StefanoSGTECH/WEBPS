import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'environments/environment.prod';
import { Piker } from '../Piker.types';

@Injectable({
    providedIn: 'root'
})
export class PikerSede
{
    get accessToken(): string { return localStorage.getItem('accessToken') ?? ''; }
    get groupId(): string { return localStorage.getItem('groupId') ?? ''; }
    get userId(): string { return localStorage.getItem('userId') ?? ''; }

    constructor(private _httpClient: HttpClient) {}

    pikerGroupAllSede(): Observable<Piker> {
        return this._httpClient.post<Piker>(environment.api + '/pikerGroupSedes/allsedesGroup', {
            token: this.accessToken,
            groupId: this.groupId
        });
    }

}
