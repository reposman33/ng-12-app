import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss'],
})
export class AccessComponent implements OnInit {
  referrer: string;

  constructor(
    public activatedRoute: ActivatedRoute,
    private securityService: SecurityService,
    private router: Router
  ) {
    this.referrer = this.activatedRoute.snapshot.queryParams.return;
  }

  ngOnInit(): void {}

  signIn(userName: string, password: string): void {
    this.securityService
    .signInWithEmailAndPassword(userName, password)
    .then((res) => {
      if(!!res.user) {
        this.router.navigate([this.referrer])
      }
    })
    .catch((e) => console.log('ERROR SigningIn: ', e));
  }
}
