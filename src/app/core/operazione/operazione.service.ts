import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'environments/environment.prod';
import { OperationResponse, Operazione } from './operazione.types';
import { Message } from '../message.types';

@Injectable({
    providedIn: 'root'
})
export class OperationService
{
    get accessToken(): string { return localStorage.getItem('accessToken') ?? ''; }
    get groupId(): string { return localStorage.getItem('groupId') ?? ''; }
    get userId(): string { return localStorage.getItem('userId') ?? ''; }
    get groupuserId() { return localStorage.getItem('groupuserId') ?? ''; }

    constructor(private _httpClient: HttpClient) {}

    get(operationId: number): Observable<any> {
        return this._httpClient.post<any>(environment.api + '/operations/operation', {
            token: this.accessToken,
            id: Number(operationId)
        });
    }

    addOperation(operation: Operazione): Observable<OperationResponse> {
        return this._httpClient.post<OperationResponse>(environment.api + '/operationClienteUserGroup/addoperations', {
            token: this.accessToken,
            userGroupId: Number(this.groupuserId),
            operation: operation.operation,
            cliente: operation.cliente,
        });
    }

    editOperation(opId: number, clienteId: number, operation: Operazione): Observable<OperationResponse> {
        return this._httpClient.post<OperationResponse>(environment.api + '/operationClienteUserGroup/editoperations', {
            token: this.accessToken,
            userGroupId: Number(this.groupuserId),
            operation: operation.operation,
            cliente: operation.cliente,
            opId: opId,
            clienteId: clienteId
        });
    }

    delete(operationId: number, clientId: number): Observable<Message> {

        const req = {
            token: this.accessToken,
            operationId: Number(operationId),
            clientId: Number(clientId),
        };

        return this._httpClient.post<Message>(environment.api + '/operationClienteUserGroup/deleteoperation', req);
    }

}
