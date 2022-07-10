import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'environments/environment.prod';
import { ExelUrl, Reportop, Reportv } from './report.types';
import { Colabp, CollaboratorType } from '../GroupCollaboratorPiker/GroupCollaboratorPiker.types';
import { DatePipe } from '@angular/common';
import { Message } from '../message.types';

@Injectable({
    providedIn: 'root'
})
export class Report
{
    get accessToken(): string { return localStorage.getItem('accessToken') ?? ''; }
    get groupId(): string { return localStorage.getItem('groupId') ?? ''; }
    get userId(): string { return localStorage.getItem('userId') ?? ''; }

    constructor(private _httpClient: HttpClient, public datePipe: DatePipe) {}

    private datstringconvserver(date: string) {
        return this.datePipe.transform(date, 'yyyy-MM-dd hh:mm:ss');
    }

    generale(startDate: string, stopDate: string, tipo: string): Observable<Reportv> {
        return this._httpClient.post<Reportv>(environment.api + '/operationClienteUserGroup/reportgenerale', {
            token: this.accessToken,
            groupId: Number(this.groupId),
            startDate: this.datstringconvserver(startDate),
            stopDate: this.datstringconvserver(stopDate),
            tipo: tipo
        });
    }

    generaleSede(startDate: string, stopDate: string, tipo: string, sede: string): Observable<Reportv> {
        return this._httpClient.post<Reportv>(environment.api + '/operationClienteUserGroup/reportgeneralesede', {
            token: this.accessToken,
            groupId: Number(this.groupId),
            userId: Number(this.userId),
            startDate: this.datstringconvserver(startDate),
            stopDate: this.datstringconvserver(stopDate),
            tipo: tipo,
            sede: sede
        });
    }

    personaleGrafici(startDate: string, stopDate: string, tipo: string): Observable<Reportv> {
        return this._httpClient.post<Reportv>(environment.api + '/operationClienteUserGroup/reportpersonalegrafici', {
            token: this.accessToken,
            groupId: Number(this.groupId),
            userId: Number(this.userId),
            startDate: this.datstringconvserver(startDate),
            stopDate: this.datstringconvserver(stopDate),
            tipo: tipo
        });
    }

    personale(startDate: string, stopDate: string, collaboratorev: Array<Colabp>, tipo: string, ramo: string, tipologia: string, compagnia: string): Observable<Reportop> {

        const req = {
            token: this.accessToken,
            groupId: Number(this.groupId),
            userId: Number(this.userId),
            startDate: this.datstringconvserver(startDate),
            stopDate: this.datstringconvserver(stopDate),
            collaboratore: collaboratorev,
            tipo: tipo,
            ramo: ramo,
            tipologia: tipologia,
            compagnia: compagnia
        };

        return this._httpClient.post<Reportop>(environment.api + '/operationClienteUserGroup/reportpersonale', req);
    }

    provvigioni(startDate: string, stopDate: string, collaboratorev: Array<Colabp>, tipo: string, ramo: string, tipologia: string, compagnia: string): Observable<Reportop> {

        const req = {
            token: this.accessToken,
            groupId: Number(this.groupId),
            userId: Number(this.userId),
            startDate: this.datstringconvserver(startDate),
            stopDate: this.datstringconvserver(stopDate),
            collaboratore: collaboratorev,
            tipo: tipo,
            ramo: ramo,
            tipologia: tipologia,
            compagnia: compagnia
        };

        return this._httpClient.post<Reportop>(environment.api + '/operationClienteUserGroup/reportprovvigioni', req);

    }

    cliente(nome: string , co: string, s: string, collaboratorev: Array<Colabp>): Observable<Reportop> {

        const reqs = {
            token: this.accessToken,
            groupId: Number(this.groupId),
            societa: s,
            collaboratore: collaboratorev
        };

        const reqnoco = {
            token: this.accessToken,
            groupId: Number(this.groupId),
            nome: nome,
            cognome: co,
            collaboratore: collaboratorev
        };

        const req = nome.length > 0 && co.length > 0 ? reqnoco : reqs;

        return this._httpClient.post<Reportop>(environment.api + '/operationClienteUserGroup/reportcliente', req);

    }


    personaleexcel(startDate: string, stopDate: string, collaboratorev: Array<Colabp>, tipo: string, ramo: string, tipologia: string, compagnia: string): Observable<ExelUrl> {

        const req = {
            token: this.accessToken,
            groupId: Number(this.groupId),
            userId: Number(this.userId),
            startDate: this.datstringconvserver(startDate),
            stopDate: this.datstringconvserver(stopDate),
            collaboratore: collaboratorev,
            tipo: tipo,
            ramo: ramo,
            tipologia: tipologia,
            compagnia: compagnia
        };

        return this._httpClient.post<ExelUrl>(environment.api + '/operationClienteUserGroup/reportpersonaleexcel', req);
    }

    provvigioniexcel(startDate: string, stopDate: string, collaboratorev: Array<Colabp>, tipo: string, ramo: string, tipologia: string, compagnia: string): Observable<ExelUrl> {

        const req = {
            token: this.accessToken,
            groupId: Number(this.groupId),
            userId: Number(this.userId),
            startDate: this.datstringconvserver(startDate),
            stopDate: this.datstringconvserver(stopDate),
            collaboratore: collaboratorev,
            tipo: tipo,
            ramo: ramo,
            tipologia: tipologia,
            compagnia: compagnia
        };

        return this._httpClient.post<ExelUrl>(environment.api + '/operationClienteUserGroup/reportprovvigioniexcel', req);

    }

    clienteexcel(nome: string , co: string, s: string, collaboratorev: Array<Colabp>): Observable<ExelUrl> {

        const reqs = {
            token: this.accessToken,
            groupId: Number(this.groupId),
            societa: s,
            collaboratore: collaboratorev
        };

        const reqnoco = {
            token: this.accessToken,
            groupId: Number(this.groupId),
            nome: nome,
            cognome: co,
            collaboratore: collaboratorev
        };

        const req = nome.length > 0 && co.length > 0 ? reqnoco : reqs;

        return this._httpClient.post<ExelUrl>(environment.api + '/operationClienteUserGroup/reportclienteexcel', req);

    }

}
