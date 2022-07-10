import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { UserService } from 'app/core/user/user.service';
import { environment } from 'environments/environment.prod';

@Injectable()
export class AuthService
{
    private _authenticated: boolean = false;

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
    set accessToken(token: string) { localStorage.setItem('accessToken', token); }
    get accessToken(): string { return localStorage.getItem('accessToken') ?? ''; }

    /**
     * Setter for groupId, userId, groupuserId, password
     */
     set groupId(groupId: string) { localStorage.setItem('groupId', groupId); }
     set userId(userId: string) { localStorage.setItem('userId', userId); }
     set groupuserId(groupuserId: string) { localStorage.setItem('groupuserId', groupuserId); }
    
     /**
     * Setter & getter email e password
     */
     set email(email: string) { localStorage.setItem('email', email); }
     get email(): string { return localStorage.getItem('email') ?? ''; }
     set password(password: string) { localStorage.setItem('password', password); }
     get password(): string { return localStorage.getItem('password') ?? ''; }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Forgot password
     *
     * @param email
     */
    forgotPassword(email: string): Observable<any>
    {
        return this._httpClient.post('api/auth/forgot-password', email);
    }

    /**
     * Sign in
     *
     * @param credentials
     */
    signIn(credentials: { email: string; password: string }): Observable<any>
    {
        // Throw error, if the user is already logged in
        if ( this._authenticated )
        {
            return throwError('User is already logged in.');
        }

        return this._httpClient.post(environment.api+ '/users/login', credentials).pipe(
            switchMap((response: any) => {

                // Store the access token in the local storage
                this.accessToken = response.token;

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this.groupId = response.currentGroupId;
                this.userId = response.id;
                this.groupuserId = response.groupuserRoulesId;
                this.email = credentials.email;
                this.password = credentials.password;

                // Return a new observable with the response
                return of(response);
            })
        );
    }

    /**
     * Sign in using the access token
     */
    signInUsingToken(): Observable<any>
    {
        // Renew token
        return this._httpClient.post(environment.api+ '/users/login', {
            accessToken: this.accessToken,
            email: this.email,
            password: this.password
        }).pipe(
            catchError(() =>

                // Return false
                of(false)
            ),
            switchMap((response: any) => {

                // Store the access token in the local storage
                this.accessToken = response.token;

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this.groupId = response.currentGroupId;
                this.userId = response.id;
                this.groupuserId = response.groupuserRoulesId;
                
                // Return true
                return of(true);
            })
        );
    }

    /**
     * Sign out
     */
    signOut(): Observable<any>
    {
        // Remove the access token from the local storage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('groupId');
        localStorage.removeItem('userId');
        localStorage.removeItem('groupuserId');

        // Set the authenticated flag to false
        this._authenticated = false;

        // Return the observable
        return of(true);
    }

    /**
     * Check the authentication status
     */
    check(): Observable<boolean>
    {
        // Check if the user is logged in
        if ( this._authenticated )
        {
            return of(true);
        }

        // Check the access token availability
        if ( !this.accessToken )
        {
            return of(false);
        }

        // Check the access token expire date
        if ( AuthUtils.isTokenExpired(this.accessToken) )
        {
            return of(false);
        }

        // If the access token exists and it didn't expire, sign in using it
        return this.signInUsingToken();
    }
}
