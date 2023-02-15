import { Component } from '@angular/core';
import { HttpServiceService } from './services/http-service.service';
import { AuthTokenService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'logiReportApp';
  selectedReport:any
  folderName = "webtmaReports"
  reportNames:any
  reportParameters ={
    OpenWorkOrderDetails_03Feb:["StatusCB", "ItemCB", "FacilityCB", "Scheduled Technician CB","RepairCenterCB","WO Type", "LocationCB", "PriorityCB", "TradeCB"], 
    CloseWorkOrderSummaryReport:["Choose Department", "Choose Location", "Choose Facility", "Choose Status", "Choose Item", "Choose Account", "Choose Technician", "Choose Repair Center", "Choose Trade", "Choose Priority"], 
    workorderReport_31_01:["Choose Repair Center", "Choose Facility", "Request Date is on or after","Request Date is on or before", "WO Type contains", "Priority contains", "Status contains","Trade contains","Task contains"]
  }
  selectedReportParameter:any

  constructor(private httpService:HttpServiceService, private auth:AuthTokenService){}

  ngOnInit(): void {
    // this.getAllReports()
  }

  renderReport(report:any){
  let server = {
    url: new URL('http://localhost:8888/jinfonet/tryView.jsp').toString(),
    user: "admin",
    pass: "admin",
    // authorized_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYWRtaW4iLCJ3ZWJ0bWFVc2VySWQiOiI5OTkiLCJleHAiOjE2NzU4NDY0MDYsIm5iZiI6MTY3NTg0MjgwNiwiaWF0IjoxNjc1ODQyODA2fQ.u9NWcWy-Ll8X8Va2Yf0TRig3aw8uVy0NDyoHlP5YPU8",
    jrd_userinfo:{prefer:{rpt_timezone:"GMT+8"}},
    
    jrd_prefer:{
        // For page report
        pagereport:{
            feature_UserInfoBar:false,
            feature_ToolBar: false,
            feature_Toolbox: false,
            feature_DSOTree: false,
            feature_TOCTree: false,
            feature_PopupMenu: false,
            feature_ADHOC: false
        },
        
        // For web report
        webreport:{
            viewMode:{
                hasToolbar: true,
                hasSideArea: false
            }
        }
    },
    jrd_studio_mode: "view",
    "jrs.param_page": true
  }
  // let wrptRes1 = {name:"../My Reports/OpenWorkOrderDetails_03Feb.wls"}
  // let catRes = {name:"../My Reports/WebTMATripund.cat"} 

  let wrptRes1 = {name:`/webtmaReports/${report}.wls`}
  let catRes= {name:"/webtmaReports/WebTMATripund.cat"} 

  // @ts-ignore
  let factory = com.jinfonet.api.AppFactory;
  let params = {};

  // server.authorized_token = this.auth.token;
  factory.runReport(server, wrptRes1, catRes, params,'reportDiv');
  // else if(report==2){
  //   factory.runReport(server, wrptRes3, catRes, params,'reportDiv');
  // }
  // else if(report==3){
  //   factory.runReport(server, wrptRes2, catRes, params,'reportDiv');
  // }
  
}
getReportName(reportName:any){
  this.renderReport(reportName)
  let reportKey = reportName as keyof typeof this.reportParameters
  console.log(reportKey)
  this.selectedReportParameter = this.reportParameters[reportKey]
  console.log(this.selectedReportParameter)
}

// getAllReports(){
//   console.log("token", this.auth.token)
//   this.httpService.getData(`http://localhost:8888/jrserver/api/v1.2/nodes/list?path=/webtmaReports&types=webReport&authorized_token=${encodeURI(this.auth.createToken())}`).subscribe(data=>{
//     console.log(data)
//   })
// }
}
