import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from 'environments/environment.prod';
import { map, tap } from 'rxjs/operators';
import { CurrentGroupsUserResponse } from './group.types';

@Injectable({
    providedIn: 'root'
})
export class GroupService
{
    get accessToken(): string { return localStorage.getItem('accessToken') ?? ''; }
    get groupId(): string { return localStorage.getItem('groupId') ?? ''; }
    get userId(): string { return localStorage.getItem('userId') ?? ''; }
    get groupuserRoulesId(): string { return localStorage.getItem('groupuserId') ?? ''; }

    set groupId(groupId: string) { localStorage.setItem('groupId', groupId); }
    set groupuserId(groupuserId: string) { localStorage.setItem('groupuserId', groupuserId); }

    constructor(private _httpClient: HttpClient) {}

    updategroup(newgroup: number): Observable<CurrentGroupsUserResponse> {
        return this._httpClient.post<CurrentGroupsUserResponse>(environment.api + '/userInfo/updateCurrentUserGroup', {
            token: this.accessToken,
            groupId: Number(newgroup),
            userId: Number(this.userId)
        }).pipe(
            tap((resp) => {
                this.groupId = String(resp.currentGroupId);
            })
        );
    }

}
