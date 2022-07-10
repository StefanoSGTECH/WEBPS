import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'environments/environment.prod';
import { Message } from '../message.types';

@Injectable({
    providedIn: 'root'
})
export class ClienteService
{
    get accessToken(): string { return localStorage.getItem('accessToken') ?? ''; }
    get groupId(): string { return localStorage.getItem('groupId') ?? ''; }
    get userId(): string { return localStorage.getItem('userId') ?? ''; }
    get groupuserId() { return localStorage.getItem('groupuserId') ?? ''; }

    constructor(private _httpClient: HttpClient) {}

    get(clientId: number): Observable<any> {
        return this._httpClient.post<any>(environment.api + '/clientes/cliente', {
            token: this.accessToken,
            id: Number(clientId)
        });
    }

}
