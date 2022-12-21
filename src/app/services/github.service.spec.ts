import { TestBed } from '@angular/core/testing';

import { GithubService } from './github.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {UserGitHub} from "../interfaces/user.interface";

describe('GithubService', () => {
  let service: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GithubService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // Despues de cada prueba
  // Libera si existe peticiones pendientes.
  afterEach(() => {
    httpMock.verify();
  })

  it('should be created GithubService', () => {
    expect(service).toBeTruthy();
  });

  it('Muestra el retorno de la informacion por username', () => {
    const expectedResponse: UserGitHub = {
      "login": "Huansha13",
      "id": 52809045,
      "node_id": "MDQ6VXNlcjUyODA5MDQ1",
      "avatar_url": "https://avatars.githubusercontent.com/u/52809045?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Huansha13",
      "html_url": "https://github.com/Huansha13",
      "followers_url": "https://api.github.com/users/Huansha13/followers",
      "following_url": "https://api.github.com/users/Huansha13/following{/other_user}",
      "gists_url": "https://api.github.com/users/Huansha13/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Huansha13/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Huansha13/subscriptions",
      "organizations_url": "https://api.github.com/users/Huansha13/orgs",
      "repos_url": "https://api.github.com/users/Huansha13/repos",
      "events_url": "https://api.github.com/users/Huansha13/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Huansha13/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Yefer Frank Huansha Leyva",
      "company": null,
      "blog": "https://ingyfhl.netlify.app/",
      "location": "Huaura, Lima",
      "email": null,
      "hireable": null,
      "bio": "Mi objetivo profesional es convertirme en un Full Stack Web Developer de alto nivel, actualmente manejo, Git, Html5 & Css, Angular Cli, Spring Boot, Sql y otras",
      "twitter_username": null,
      "public_repos": 29,
      "public_gists": 0,
      "followers": 1,
      "following": 0,
      "created_at": new Date("2019-07-12T03:01:36Z"),
      "updated_at": new Date("2022-12-21T02:08:47Z")
    };

    const responseObj: UserGitHub = {
      "login": "Huansha13",
      "id": 52809045,
      "node_id": "MDQ6VXNlcjUyODA5MDQ1",
      "avatar_url": "https://avatars.githubusercontent.com/u/52809045?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Huansha13",
      "html_url": "https://github.com/Huansha13",
      "followers_url": "https://api.github.com/users/Huansha13/followers",
      "following_url": "https://api.github.com/users/Huansha13/following{/other_user}",
      "gists_url": "https://api.github.com/users/Huansha13/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Huansha13/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Huansha13/subscriptions",
      "organizations_url": "https://api.github.com/users/Huansha13/orgs",
      "repos_url": "https://api.github.com/users/Huansha13/repos",
      "events_url": "https://api.github.com/users/Huansha13/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Huansha13/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Yefer Frank Huansha Leyva",
      "company": null,
      "blog": "https://ingyfhl.netlify.app/",
      "location": "Huaura, Lima",
      "email": null,
      "hireable": null,
      "bio": "Mi objetivo profesional es convertirme en un Full Stack Web Developer de alto nivel, actualmente manejo, Git, Html5 & Css, Angular Cli, Spring Boot, Sql y otras",
      "twitter_username": null,
      "public_repos": 29,
      "public_gists": 0,
      "followers": 1,
      "following": 0,
      "created_at": new Date("2019-07-12T03:01:36Z"),
      "updated_at": new Date("2022-12-21T02:08:47Z")
    };

    service.getUser('huansha13').subscribe((data) => {
      console.log("-> data", data);
      expect(data).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne('https://api.github.com/users/huansha13');
    req.flush(responseObj);
  })
});
