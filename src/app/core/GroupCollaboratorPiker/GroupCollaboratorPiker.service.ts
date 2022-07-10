import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'environments/environment.prod';
import { DropdownOptionCollaborator } from './GroupCollaboratorPiker.types';

@Injectable({
    providedIn: 'root'
})
export class GroupCollaboratorPiker
{
    get accessToken(): string { return localStorage.getItem('accessToken') ?? ''; }
    get groupId(): string { return localStorage.getItem('groupId') ?? ''; }
    get groupuserId() { return localStorage.getItem('groupuserId') ?? ''; }
    get userId(): string { return localStorage.getItem('userId') ?? ''; }

    constructor(private _httpClient: HttpClient) {}

    piker(multiple: boolean): Observable<DropdownOptionCollaborator[]> {
        return this._httpClient.post<DropdownOptionCollaborator[]>(environment.api + '/userInfo/collaborator', {
            token: this.accessToken,
            groupId: Number(this.groupId),
            groupuserId: Number(this.groupuserId),
            multiple: multiple
        });
    }
}
