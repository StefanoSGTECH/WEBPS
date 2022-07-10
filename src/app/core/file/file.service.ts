import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from 'environments/environment.prod';
import { Documentis } from '../documenti/documenti.types';
import { Filef } from './files.types';
import { Message } from '../message.types';

@Injectable({
    providedIn: 'root'
})
export class FileService
{
    get accessToken(): string { return localStorage.getItem('accessToken') ?? ''; }
    get groupId(): string { return localStorage.getItem('groupId') ?? ''; }
    get userId(): string { return localStorage.getItem('userId') ?? ''; }
    get groupuserRoulesId(): string { return localStorage.getItem('groupuserId') ?? ''; }

    constructor(private _httpClient: HttpClient) {}

    files(folderId: number): Observable<Filef[]> {
        return this._httpClient.post<Filef[]>(environment.api + '/document/files', {
            token: this.accessToken,
            groupId: Number(this.groupId),
            folderId: Number(folderId)
        });
    }

    delete(folderId: number, fileId: number): Observable<Message> {
        return this._httpClient.post<Message>(environment.api + '/document/deletefile', {
            token: this.accessToken,
            groupId: Number(this.groupId),
            folderId: Number(folderId),
            fileId: Number(fileId)
        });
    }

    upload(files: File[], folder: Documentis): Observable<Message> {
  
        // Create form data
        const formData = new FormData(); 

        formData.append("token", this.accessToken);
        formData.append("path", folder.path);
        formData.append("groupId", this.groupId);
        formData.append("folderId", String(folder.id));
          
        for (const file of files) {
            formData.append("file", file, file.name);
        }
          
        return this._httpClient.post<Message>(environment.api + '/document/uploadfile', formData)
    }

}
