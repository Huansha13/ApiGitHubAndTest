import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RepoGitHub } from '../interfaces/repo.interface';
import { UserGitHub } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  urlBase: string = "https://api.github.com/users";
  constructor(private http: HttpClient) { }

  getUser(user: string): Observable<UserGitHub> {
    const url = this.urlBase + '/' + user;
    return this.http.get<UserGitHub>(url);
  }

  getRepos(user: string): Observable<RepoGitHub[]> {
    const url = this.urlBase + "/" + user + "/repos";
    return this.http.get<RepoGitHub[]>(url);
  }

}
