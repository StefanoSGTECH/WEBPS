import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from 'environments/environment.prod';
import { Documentis } from './documenti.types';
import { Message } from '../message.types';

@Injectable({
    providedIn: 'root'
})
export class DocumentService
{
    get accessToken(): string { return localStorage.getItem('accessToken') ?? ''; }
    get groupId(): string { return localStorage.getItem('groupId') ?? ''; }
    get userId(): string { return localStorage.getItem('userId') ?? ''; }
    get groupuserRoulesId(): string { return localStorage.getItem('groupuserId') ?? ''; }

    constructor(private _httpClient: HttpClient) {}

    documenti(): Observable<Documentis[]> {
        return this._httpClient.post<Documentis[]>(environment.api + '/document/documents', {
            token: this.accessToken,
            groupId: Number(this.groupId),
            groupuserId: Number(this.groupuserRoulesId),
        });
    }

    delete(folderId: number, documentId: number): Observable<Message> {
        return this._httpClient.post<Message>(environment.api + '/document/deletefolder', {
            token: this.accessToken,
            folderId: Number(folderId),
            documentId: Number(documentId)
        });
    }

    addFolder(name: string): Observable<Message> {
        return this._httpClient.post<Message>(environment.api + '/document/addfolder', {
            token: this.accessToken,
            groupuserId: Number(this.groupuserRoulesId),
            groupId: Number(this.groupId),
            name: name
        });
    }

}
