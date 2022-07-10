import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'environments/environment.prod';
import { Users } from './users.types';
import { Message } from '../message.types';
import { addUser } from './addUser.types';
import { infoUser } from '../infoUser/infoUser.types';
import { UserStatus } from './userStatus.types';
import { UserEdit } from './userEdit.types';

@Injectable({
    providedIn: 'root'
})
export class UsersService
{
    private _Users: ReplaySubject<Users[]> = new ReplaySubject<Users[]>();

    get accessToken(): string { return localStorage.getItem('accessToken') ?? ''; }
    get groupId(): string { return localStorage.getItem('groupId') ?? ''; }
    get userId(): string { return localStorage.getItem('userId') ?? ''; }

    constructor(private _httpClient: HttpClient) {}

    set users(value: Users[]) {
        // Store the value
        this._Users.next(value);
    }

    get users$(): Observable<Users[]> {
        return this._Users.asObservable();
    }

    get(): Observable<Users[]> {
        return this._httpClient.post<Users[]>(environment.api + '/userInfo/users', {
            token: this.accessToken,
            groupId: Number(this.groupId),
            userId: Number(this.userId)
        }).pipe(
            tap((users) => {
                this._Users.next(users);
            })
        );
    }

    addUser(user: addUser): Observable<Message> {
        return this._httpClient.post<Message>(environment.api + '/userInfo/addUser', {
            token: this.accessToken,
            groupId: Number(this.groupId),
            userId: Number(this.userId),
            nome: String(user.nome),
            cognome: String(user.cognome),
            email: String(user.email),
            sede: String(user.sede),
            roule: String(user.roule),
            password: String(user.password),
            image: String(user.image),
        });
    }

    changeStatusUser(user: UserStatus): Observable<Message> {
        return this._httpClient.post<Message>(environment.api + '/userInfo/statusUser', {
            token: this.accessToken,
            groupId: Number(user.groupId),
            userId: Number(user.userId),
            status: Boolean(user.status == 1 ? false : true)
        });
    }

    editUser(user: UserEdit): Observable<Message> {
        return this._httpClient.post<Message>(environment.api + '/userInfo/editUser', {
            token: this.accessToken,
            groupId: Number(user.groupId),
            userId: Number(user.userId),
            newSede: String(user.newSede),
            newRoule: String(user.newRoule),
        });
    }

}
