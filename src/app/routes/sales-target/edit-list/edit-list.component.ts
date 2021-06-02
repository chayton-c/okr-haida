import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {_HttpClient, MenuService} from '@delon/theme';
import {SalesTarget} from "../../../pojos/sales-target/salesTarget";
import {NzMessageService} from "ng-zorro-antd/message";
import {OnboardingService} from "@delon/abc/onboarding";
import {Platform} from "@angular/cdk/platform";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sales-target-edit-list',
  templateUrl: './edit-list.component.html',
  styles: [
    `
      /deep/ .my-list .spe .am-list-extra {
        flex-basis: initial;
      }
    `
  ]
})
export class SalesTargetEditListComponent implements OnInit {
  todoData = [
    {
      completed: true,
      avatar: '1',
      name: '苏先生',
      content: `请告诉我，我应该说点什么好？`,
    },
    {
      completed: false,
      avatar: '2',
      name: 'はなさき',
      content: `ハルカソラトキヘダツヒカリ`,
    },
    {
      completed: false,
      avatar: '3',
      name: 'cipchk',
      content: `this world was never meant for one as beautiful as you.`,
    },
    {
      completed: false,
      avatar: '4',
      name: 'Kent',
      content: `my heart is beating with hers`,
    },
    {
      completed: false,
      avatar: '5',
      name: 'Are you',
      content: `They always said that I love beautiful girl than my friends`,
    },
    {
      completed: false,
      avatar: '6',
      name: 'Forever',
      content: `Walking through green fields ，sunshine in my eyes.`,
    },
  ];

  webSite!: any[];
  salesData!: any[];
  offlineChartData!: any[];
  salesTargets: SalesTarget[] = [];

  constructor(private http: _HttpClient,
              private router: Router,
              private msg: NzMessageService,
              private cdr: ChangeDetectorRef, private obSrv: OnboardingService, private platform: Platform) {
    // TODO: Wait for the page to load
    setTimeout(() => this.genOnboarding(), 1000);
  }

  ngOnInit(): void {
    this.http.get('/chart').subscribe((res) => {
      this.webSite = res.visitData.slice(0, 10);
      this.salesData = res.salesData;
      this.offlineChartData = res.offlineChartData;
      this.cdr.detectChanges();
    });

    const params = {
      pageSize: 999999,
      pageIndex: 1
    }

    this.http.post('/api/backstage/salesTarget/getList', null, params).subscribe((res) => {
      if (!res.success) return;

      // this.msg.success(res.msg);

      this.salesTargets = res.salesTargets;
      console.log(this.salesTargets);
    });
  }

  jump2detail(id: string):void {
    this.router.navigate(['/sales-target/detail'], {
      queryParams: {
        id: id,
      },
    });
  }

  private genOnboarding(): void {
    const KEY = 'on-boarding';
    if (!this.platform.isBrowser || localStorage.getItem(KEY) === '1') {
      return;
    }
    this.http.get(`./assets/tmp/on-boarding.json`).subscribe((res) => {
      this.obSrv.start(res);
      localStorage.setItem(KEY, '1');
    });
  }
}
