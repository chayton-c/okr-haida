import { Component, OnInit } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import {Organization} from "../../../pojos/organization/organization";
import {SalesTarget} from "../../../pojos/sales-target/salesTarget";
import {HttpUtils} from "../../../shared/utils/utils/http-utils";

@Component({
  selector: 'app-sales-target-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class SalesTargetDetailComponent implements OnInit {
  salesTarget: SalesTarget = {
    executorId: "", executorName: "", hide: 0, id: "", sales: 0, salesTarget: 0, shopName: ""
  };
  loading = false;

  // 提交岗位信息
  executeSalesTarget() {
    this.http.post('/api/backstage/salesTarget/saveOrUpdate', null, HttpUtils.transform(this.salesTarget)).subscribe((res) => {
      if (!res.success) return;

      this.msg.success(res.msg);

      if (this.salesTarget.id)
        this.router.navigate(['/sales-target/edit-list'])
      else
        this.router.navigate(['/sales-target/list'])
    });
  }

  deleteSalesTarget() {
    this.http.post('/api/backstage/salesTarget/delete', null, {
      id: this.salesTarget.id
    }).subscribe((res) => {
      if (!res.success) return;

      this.msg.success(res.msg);

      if (this.salesTarget.id)
        this.router.navigate(['/sales-target/edit-list'])
      else
        this.router.navigate(['/sales-target/list'])
    });
  }

  loadDataFromServer(): void {
    this.http
      .post('/api/backstage/salesTarget/info', null, {
        id: this.salesTarget.id,
      })
      .subscribe((res) => {
        if (!res.success) return;
        this.salesTarget = res.salesTarget;

        this.loading = false;
      });
  }

  constructor(
    public http: _HttpClient,
    private activatedRoute: ActivatedRoute,
    private msg: NzMessageService,
    private router: Router,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    // 获取roleId
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      if (queryParams.id) this.salesTarget.id = queryParams.id;
    });
    // 加载菜单信息
    this.loadDataFromServer();
  }
}
