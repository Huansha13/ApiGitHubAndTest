import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SetttingsService } from './services/setttings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  alertUser: boolean = false;
  title = 'test-apiGitHub';
  path: string = "";
  username: string = "";

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private settings: SetttingsService) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.username = this.settings.getUserName() ?? "Huansha13";
    }, 0);
  }

  irUser(esclick: boolean) {
    this.alertUser = false;
    if (this.username == "") {
      this.path = '/user/';
      this.alertUser = true;
      return;
    }
    this.settings.setUserName(this.username);
    this.router.navigate(['/user/', this.username]);
    if (esclick) {
      setTimeout(() => {
        window.location.reload();
      }, 0)
    }
  }

  irRepos() {
    this.alertUser = false;
    if (this.username == "") {
      this.path = '/repo/';
      this.alertUser = true;
      //return;
    }
    //this.router.navigate(['/repo/', this.username])
  }
}
