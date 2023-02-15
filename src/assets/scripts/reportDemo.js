/**
 * Copyright (c) Jinfonet Inc. 2000-2015, All rights reserved.
 *
 * @File: demo.js
 * @Create: Sep 1, 2015
 */

 (function(){
  var thi$ = self;
  var server = {
      url: new URL('https://dev01:6888/jinfonet/tryView.jsp',J$VM.env['j$vm_uri'].source).toString(),
      authorized_token: "",
      jrd_userinfo:{prefer:{rpt_timezone:"GMT+8"}},

      jrd_prefer:{
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
  },
  wrptRes1 = {name:"/PoC/WorkOrderPoC.wls"},
  catRes1 = {name:"/PoC/ReportPoC.cat"},
  wrptRes2 = {name:"/PoC/BBT.wls"},
  catRes2 = {name:"/PoC/Test01.cat"},
  params = {},
  entryId = "reportDiv";


  var Factory = com.jinfonet.api.AppFactory;

  thi$.openWOReport = function(){
      server.authorized_token = document.getElementById('tempToken').value;
      var app = Factory.runReport(server, wrptRes1, catRes1, params, entryId);
  };

  thi$.openWOReportView = function(){
    server.authorized_token = document.getElementById('tempToken').value;
    server.jrd_prefer.webreport.viewMode = {hasToolbar: false, hasSideArea: false};

    var app = Factory.runReport(server, wrptRes1, catRes1, params, entryId);
  };

  thi$.openChart = function(){
    server.authorized_token = document.getElementById('tempToken').value;
    server.jrd_prefer.webreport.viewMode = {hasToolbar: false, hasSideArea: false};

    var app = Factory.runReport(server, wrptRes2, catRes2, params, entryId);
};

  thi$.closeApp = function(){
      var app = Factory.getApp(entryId);
      if(!app) return;

      app.close(function(){
          var linkPathEle = document.getElementById("linkPath");
          linkPathEle.innerHTML = "";
          linkPathEle.onclick = null;
      });
  };

  thi$.paramDialog = function(){
      var app = Factory.getApp(entryId), rptset;
      if(!app) return;

      rptset = app.getReportSet();
      rptset.paramDialog();
  };

  thi$.openNewWin = function(){
    window.open('https://dev01:6888/jrserver/PoC/Test01.cat/BBT.wls?jrs.cmd=jrs.web_vw&jrs.result_type=1&authorized_token=' + document.getElementById('tempToken').value);
  };





})();
