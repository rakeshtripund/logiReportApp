import { Component } from '@angular/core';
import { AuthTokenService } from '../services/auth.service';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-report-viewer',
  templateUrl: './report-viewer.component.html',
  styleUrls: ['./report-viewer.component.css']
})
export class ReportViewerComponent {
  title = 'logiReportApp';
  selectedReport:any
  folderName = "webtmaReports"
  reportNames:any
  selectedReportParameter:any

  constructor(private httpService:HttpServiceService, private auth:AuthTokenService){}

  ngOnInit(): void {
    // this.getAllReports()
  }

  renderReport(report:any){
  let server = {

    // url: new URL('http://20.169.137.208:8888/jinfonet/tryView.jsp').toString(),
    url: new URL('http://localhost:8888/jinfonet/tryView.jsp?').toString(),
    user: "admin",
    pass: "admin",
    // authorized_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYWRtaW4iLCJ3ZWJ0bWFVc2VySWQiOiI5OTkiLCJleHAiOjE2Nzk1NTk3NzMsIm5iZiI6MTY3OTU1NjE3MywiaWF0IjoxNjc5NTU2MTczfQ.mo1y8UuABrwnRvUXwfCT7FtmyFLs17tPPviWX0XhL-A",
    jrd_userinfo:{prefer:{rpt_timezone:"GMT+8"}},

    jrd_prefer:{
        // For page report
        pagereport:{
            feature_UserInfoBar:true,
            feature_ToolBar: true,
            feature_Toolbox: true,
            feature_DSOTree: true,
            feature_TOCTree: true,
            feature_PopupMenu: true,
            feature_ADHOC: true
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
  let wrptRes1 = {name:"../My Reports/testReports/ClosedWOChartByWOType.cls"}
  let catRes = {name:"../My Reports/testReports/WebTMATripund.cat"}
  //Reports
  let openWO = {name:`/Reports/OpenWO/Open Work Order List.cls`}
  let openWODetails = {name:`/Reports/openWODetails/OpenWorkOrderDetails.cls`}
  let closedWO = {name:`/Reports/closedWO/ClosedWorkOrderSummaryPageReport.cls`}
  let closedWODetails = {name:`/Reports/ClosedWODetails/Closed Work Order Details with Tasks.cls`}
  let costWorkHist = {name:`/Reports/CostWorkHistory/CostWorkHistoryReport2.cls`}
  let woCostList = {name:`/Reports/WOCostList/CostWorkOrderList.cls`}
  let closedWOChart = {name:`/Reports/ClosedWOChart/ClosedWOChartByWOType.cls`}
  //KPIs
  let ActiveWOByUser = {name:`/Reports/KPI/ActiveWorkOrderByUsersKPI.wls`}
  let BasicKPICounts = {name:`/Reports/KPI/BasicKPICounts.wls`}
  let LateWOPriority = {name:`/Reports/KPI/lateWorkorderpriority.wls`}
  let MaintainenceBackLog = {name:`/Reports/KPI/MaintainenceBackLog.wls`}
  let PMPercent = {name:`/Reports/KPI/PlannedMaintenancePercentageKPI.wls`}
  let PMCompliance = {name:`/Reports/KPI/PreventiveMaintenanceCompliance.wls`}
  let TechHourFinished = {name:`/Reports/KPI/TechnicianHoursFinishedKPI.wls`}
  let topAssets = {name:`/Reports/KPI/top10AssetsKPI.wls`}
  //catLog
  let catOpenWO = {name:"/Reports/openWo/WebTMATripund.cat"}
  let catOpenWODetails = {name:"/Reports/openWODetails/WebTMATripund.cat"}
  let catClosedWO = {name:"/Reports/closedWO/WebTMATripund.cat"}
  let catClosedWODetails = {name:"/Reports/ClosedWODetails/WebTMATripund.cat"}
  let catCostWorkHist = {name:"/Reports/CostWorkHistory/WebTMATripund.cat"}
  let catWoCostList = {name:"/Reports/WOCostList/WebTMATripund.cat"}
  let catClosedWOChart = {name:"/Reports/ClosedWOChart/WebTMATripund.cat"}
  let catKPI = {name:"/Reports/KPI/WebTMATripund.cat"}

  // @ts-ignore
  let factory = com.jinfonet.api.AppFactory;
  let params = {};

  // server.authorized_token = this.auth.token;
  if(report==1){
    factory.runReport(server, openWO, catOpenWO, params,'reportDiv');
  }

  else if(report==2){
    factory.runReport(server, openWODetails, catOpenWODetails, params,'reportDiv');
  }
  else if(report==3){
    factory.runReport(server, closedWO, catClosedWO, params,'reportDiv');
  }
  else if(report==4){
    factory.runReport(server, closedWODetails, catClosedWODetails, params,'reportDiv');
  }
  else if(report==5){
    factory.runReport(server, costWorkHist, catCostWorkHist, params,'reportDiv');
  }
  else if(report==6){
    factory.runReport(server, woCostList, catWoCostList, params,'reportDiv');
  }
  else if(report==7){
    factory.runReport(server, closedWOChart, catClosedWOChart, params,'reportDiv');
  }
  else if(report==8){
    factory.runReport(server, ActiveWOByUser, catKPI, params,'reportDiv');
  }
  else if(report==9){
    factory.runReport(server, BasicKPICounts, catKPI, params,'reportDiv');
  }
  else if(report==10){
    factory.runReport(server, LateWOPriority, catKPI, params,'reportDiv');
  }
  else if(report==11){
    factory.runReport(server, MaintainenceBackLog, catKPI, params,'reportDiv');
  }
  else if(report==12){
    factory.runReport(server, PMPercent, catKPI, params,'reportDiv');
  }
  else if(report==13){
    factory.runReport(server, PMCompliance, catKPI, params,'reportDiv');
  }
  else if(report==14){
    factory.runReport(server, TechHourFinished, catKPI, params,'reportDiv');
  }
  else if(report==15){
    factory.runReport(server, topAssets, catKPI, params,'reportDiv');
  }
  else if(report==16){
    factory.runReport(server, wrptRes1, catRes, params,'reportDiv');
  }

}
getReportName(value:any){
  this.renderReport(value)
  // let reportKey = reportName as keyof typeof this.reportParameters
  // console.log(reportKey)
  // this.selectedReportParameter = this.reportParameters[reportKey]
  // console.log(this.selectedReportParameter)
}

// getAllReports(){
//   console.log("token", this.auth.token)
//   this.httpService.getData(`http://localhost:8888/jrserver/api/v1.2/nodes/list?path=/webtmaReports&types=webReport&authorized_token=${encodeURI(this.auth.createToken())}`).subscribe(data=>{
//     console.log(data)
//   })
// }

}
