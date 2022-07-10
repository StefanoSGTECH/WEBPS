import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from 'environments/environment.prod';
import { Documentis } from '../documenti/documenti.types';
import { Message } from '../message.types';
import { SharePerson } from './folder.types';

@Injectable({
    providedIn: 'root'
})
export class FolderService
{
    get accessToken(): string { return localStorage.getItem('accessToken') ?? ''; }
    get groupId(): string { return localStorage.getItem('groupId') ?? ''; }
    get userId(): string { return localStorage.getItem('userId') ?? ''; }
    get groupuserRoulesId(): string { return localStorage.getItem('groupuserId') ?? ''; }

    constructor(private _httpClient: HttpClient) {}

    documenti(folderId: number): Observable<Documentis[]> {
        return this._httpClient.post<Documentis[]>(environment.api + '/document/folders', {
            token: this.accessToken,
            groupuserId: Number(this.groupuserRoulesId),
            folderId: Number(folderId)
        });
    }


    delete(folderId: number): Observable<Message> {
        return this._httpClient.post<Message>(environment.api + '/document/deletefolder', {
            token: this.accessToken,
            folderId: Number(folderId)
        });
    }
    
    addFolder(name: string, namePath: string, folderId: number): Observable<Message> {
        return this._httpClient.post<Message>(environment.api + '/document/addfolder', {
            token: this.accessToken,
            groupuserId: Number(this.groupuserRoulesId),
            groupId: Number(this.groupId),
            name: name,
            namePath: namePath,
            folderId: folderId
        });
    }

    shareperson(folderId: number, documentId: number): Observable<SharePerson[]> {
        var request = {
            token: this.accessToken,
            folderId: folderId
        }
        var requestdoc = {
            token: this.accessToken,
            folderId: folderId,
            documentId: documentId
        }
        return this._httpClient.post<SharePerson[]>(environment.api + '/document/shareperson', documentId == null ? request : requestdoc);
    }

    removeSharePerson(collabId: number, folderId: number, documentId: number): Observable<Message> {
        var request = {
            token: this.accessToken,
            collabId: collabId,
            folderId: folderId
        }
        var requestdoc = {
            token: this.accessToken,
            collabId: collabId,
            folderId: folderId,
            documentId: documentId
        }
        return this._httpClient.post<Message>(environment.api + '/document/removeshareperson', documentId == null ? request : requestdoc);
    }

    addSharepersonList(folderId: number, documentId: number): Observable<SharePerson[]> {
        var request = {
            token: this.accessToken,
            groupId: Number(this.groupId),
            folderId: folderId
        }
        var requestdoc = {
            token: this.accessToken,
            groupId: Number(this.groupId),
            folderId: folderId,
            documentId: documentId
        }
        return this._httpClient.post<SharePerson[]>(environment.api + '/document/addlistshareperson', documentId == null ? request : requestdoc);
    }

    addSharePersonFolder(userId: number, folderId: number, documentId: number): Observable<Message> {
        var request = {
            token: this.accessToken,
            userId:userId,
            folderId: folderId
        }
        var requestdoc = {
            token: this.accessToken,
            userId:userId,
            folderId: folderId,
            documentId: documentId
        }
        return this._httpClient.post<Message>(environment.api + '/document/addshareperson', documentId == null ? request : requestdoc);
    }

}
