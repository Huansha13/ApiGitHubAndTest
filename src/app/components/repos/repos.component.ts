import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepoGitHub } from 'src/app/interfaces/repo.interface';
import { GithubService } from 'src/app/services/github.service';
import { SetttingsService } from 'src/app/services/setttings.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  username!: string;
  listRepos: RepoGitHub[] = [];
  constructor(settings: SetttingsService, 
    private activatedRoute: ActivatedRoute,
    private gitHubService: GithubService) {
    this.username =  this.activatedRoute.snapshot.paramMap.get('username')??"";
    settings.setUserName(this.username);
  }

  ngOnInit(): void {
    this.getRepoByUserName();
  }

  getRepoByUserName() {
    this.gitHubService.getRepos(this.username).subscribe((data) => {
      this.listRepos = data;
      console.log("🚀 ~ file: repos.component.ts:25 ~ ReposComponent ~ this.gitHubService.getRepos ~ data", data)
    })
  }

}
