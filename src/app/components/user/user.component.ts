import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SetttingsService } from 'src/app/services/setttings.service';
import { UserGitHub } from '../../interfaces/user.interface';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userGitHub!: UserGitHub;
  username!: string | null;
  variableInterna: string[] = [];
  constructor(private githubService: GithubService,
    private activatedRoute: ActivatedRoute,
    settings: SetttingsService) {
      this.username =  this.activatedRoute.snapshot.paramMap.get('username')??"";
      settings.setUserName(this.username);
    }

  ngOnInit(): void {
    console.log("🚀 ~ file: user.component.ts:19 ~ UserComponent ~ ngOnInit ~ this.username", this.username)
    this.obtenerInfoByUserName();
  }

  obtenerInfoByUserName() {
    this.githubService.getUser(this.username??"").subscribe((data) => {
      console.log("🚀 ~ file: user.component.ts:21 ~ UserComponent ~ this.githubService.getUser ~ data", data)
      this.userGitHub = data;
    });
  }

  suma(num1: number, num2: number) {
    return num1 + num2;
  }

}
