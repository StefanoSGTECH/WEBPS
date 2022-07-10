"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[772],{8772:(L,p,e)=>{e.r(p),e.d(p,{DashboardModule:()=>R});var l=e(8583),f=e(3423),g=e(6627),d=e(2238),t=e(7716),m=e(9890);let Z=(()=>{class i{constructor(o,n,s,c){this.dialogRef=o,this.id=n,this._notification=s,this.datePipe=c,this._notification.notificationContent(n).subscribe(r=>{this.operation=r,this.operation.data=this.datePipe.transform(r.data,"dd-MM-yyyy")})}onNoClick(){this.dialogRef.close()}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(d.so),t.Y36(d.WI),t.Y36(m.g),t.Y36(l.uU))},i.\u0275cmp=t.Xpm({type:i,selectors:[["dialog-overview-operationDialog-dialog"]],decls:56,vars:18,consts:[[1,"flex","flex-col","items-center","w-full","p-4"],[1,"relative","w-24","h-24"],["alt","User avatar",1,"w-full","h-full","rounded-full",3,"src"],[1,"flex","flex-col","items-center","justify-center","w-full","mt-2"],[1,"w-full","mt-0.5","whitespace-nowrap","overflow-ellipsis","overflow-hidden","text-center","text-md","leading-normal","font-medium","text-secondary"],[1,"w-full","whitespace-nowrap","overflow-ellipsis","overflow-hidden","text-center","leading-normal","text-2xl","font-medium","mt-2"],[1,"font-medium","font-bold","pl-18","pr-18",2,"text-align","left","color","green"],[2,"float","right","color","blue"],[1,"font-medium","font-bold","pl-2","pr-2","pt-6",2,"text-align","left"],[1,"font-normal",2,"float","right"],[1,"font-medium","font-bold","pl-2","pr-2","pt-2",2,"text-align","left"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t._uU(5),t.qZA(),t.TgZ(6,"div",5),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"p",6),t._uU(9),t.TgZ(10,"span",7),t._uU(11),t.qZA(),t.qZA(),t.TgZ(12,"p",8),t._uU(13," Tipo: "),t.TgZ(14,"span",9),t._uU(15),t.qZA(),t.qZA(),t.TgZ(16,"p",10),t._uU(17," Ramo: "),t.TgZ(18,"span",9),t._uU(19),t.qZA(),t.qZA(),t.TgZ(20,"p",10),t._uU(21," Tipologia: "),t.TgZ(22,"span",9),t._uU(23),t.qZA(),t.qZA(),t.TgZ(24,"p",10),t._uU(25," Premio: "),t.TgZ(26,"span",9),t._uU(27),t.qZA(),t.qZA(),t.TgZ(28,"p",10),t._uU(29," Frazionamento: "),t.TgZ(30,"span",9),t._uU(31),t.qZA(),t.qZA(),t.TgZ(32,"p",10),t._uU(33," Durata: "),t.TgZ(34,"span",9),t._uU(35),t.qZA(),t.qZA(),t.TgZ(36,"p",10),t._uU(37," Montante: "),t.TgZ(38,"span",9),t._uU(39),t.qZA(),t.qZA(),t.TgZ(40,"p",10),t._uU(41," Montante Provvigionale: "),t.TgZ(42,"span",9),t._uU(43),t.qZA(),t.qZA(),t.TgZ(44,"p",10),t._uU(45," Provvigione: "),t.TgZ(46,"span",9),t._uU(47),t.qZA(),t.qZA(),t.TgZ(48,"p",10),t._uU(49," Provvigione in %: "),t.TgZ(50,"span",9),t._uU(51),t.qZA(),t.qZA(),t.TgZ(52,"p",10),t._uU(53," Risultato: "),t.TgZ(54,"span",9),t._uU(55),t.qZA(),t.qZA()),2&o&&(t.xp6(2),t.Q6J("src",n.operation.creatorimage,t.LSH),t.xp6(3),t.hij(" ",n.operation.creatorSede," "),t.xp6(2),t.AsE(" ",n.operation.creatorNome," ",n.operation.creatorCognome," "),t.xp6(2),t.hij(" ",n.operation.data," "),t.xp6(2),t.AsE(" ",n.operation.clientNome," ",n.operation.clientCognome," "),t.xp6(4),t.hij(" ",n.operation.registrazione," "),t.xp6(4),t.hij(" ",n.operation.ramo," "),t.xp6(4),t.hij(" ",n.operation.tipologia," "),t.xp6(4),t.hij(" ",n.operation.premio," "),t.xp6(4),t.hij(" ",n.operation.frazionamento," "),t.xp6(4),t.hij(" ",n.operation.durata," "),t.xp6(4),t.hij(" ",n.operation.montante," "),t.xp6(4),t.hij(" ",n.operation.montanteprov," "),t.xp6(4),t.hij(" ",n.operation.provvigione," "),t.xp6(4),t.hij(" ",n.operation.provvigioneperc," "),t.xp6(4),t.hij(" ",n.operation.provvigionelordmat," "))},encapsulation:2}),i})();var v=e(1955),u=e(7001),h=e(7898),_=e(1095);function x(i,a){if(1&i){const o=t.EpF();t.TgZ(0,"div",12),t.TgZ(1,"mat-icon",13),t.NdJ("click",function(){return t.CHM(o),t.oxw().showNotification()}),t._uU(2,"close"),t.qZA(),t.qZA()}}function T(i,a){if(1&i){const o=t.EpF();t.TgZ(0,"mat-icon",16),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).showNotification()}),t._uU(1,"notifications"),t.qZA()}if(2&i){const o=t.oxw(2);t.Q6J("matBadge",o.notifications.length)}}function A(i,a){if(1&i){const o=t.EpF();t.TgZ(0,"mat-icon",13),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).showNotification()}),t._uU(1,"notifications"),t.qZA()}}function b(i,a){if(1&i&&(t.TgZ(0,"div",12),t.YNc(1,T,2,1,"mat-icon",14),t.YNc(2,A,2,0,"mat-icon",15),t.qZA()),2&i){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.notifications.length>0),t.xp6(1),t.Q6J("ngIf",o.notifications.length<=0)}}function U(i,a){if(1&i&&(t.TgZ(0,"div",17),t.TgZ(1,"div",18),t._uU(2),t.qZA(),t.qZA()),2&i){const o=t.oxw();t.xp6(2),t.hij("Ci sono ",o.notifications.length," notifiche!")}}function q(i,a){1&i&&(t.TgZ(0,"div",19),t.TgZ(1,"div",20),t._uU(2,'"Impadronisciti della tecnica e scomparir\xe0 nella spontaneit\xe0 di un gesto quasi perfetto"'),t.qZA(),t.qZA())}function C(i,a){if(1&i){const o=t.EpF();t.TgZ(0,"div",21),t.TgZ(1,"button",22),t.NdJ("click",function(){return t.CHM(o),t.oxw().readAllNotification()}),t._uU(2,"Leggi Tutte"),t.qZA(),t.qZA()}}function N(i,a){1&i&&(t.TgZ(0,"mat-icon"),t._uU(1,"folder"),t.qZA())}function w(i,a){1&i&&(t.TgZ(0,"mat-icon"),t._uU(1,"add"),t.qZA())}function y(i,a){1&i&&(t.TgZ(0,"mat-icon"),t._uU(1,"update"),t.qZA())}function D(i,a){1&i&&(t.TgZ(0,"mat-icon"),t._uU(1,"file"),t.qZA())}function I(i,a){1&i&&(t.TgZ(0,"mat-icon"),t._uU(1,"person"),t.qZA())}function M(i,a){if(1&i){const o=t.EpF();t.ynx(0),t.TgZ(1,"div",27),t.YNc(2,N,2,0,"mat-icon",28),t.YNc(3,w,2,0,"mat-icon",28),t.YNc(4,y,2,0,"mat-icon",28),t.YNc(5,D,2,0,"mat-icon",28),t.YNc(6,I,2,0,"mat-icon",28),t.TgZ(7,"div",29),t.NdJ("click",function(){const c=t.CHM(o).$implicit,r=t.oxw(2);return"newOperation"==c.topic?r.openOperation(c.docId):r.openNull()}),t.TgZ(8,"div",30),t._uU(9),t.qZA(),t.TgZ(10,"div",31),t._uU(11),t.qZA(),t.TgZ(12,"div",32),t._uU(13),t.ALo(14,"date"),t.qZA(),t.qZA(),t.TgZ(15,"button",33),t.NdJ("click",function(){const c=t.CHM(o).$implicit;return t.oxw(2).readnot(c.notificationId)}),t.TgZ(16,"mat-icon"),t._uU(17,"check"),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&i){const o=a.$implicit;t.xp6(2),t.Q6J("ngIf","newFolder"==o.topic),t.xp6(1),t.Q6J("ngIf","newOperation"==o.topic),t.xp6(1),t.Q6J("ngIf","updateApp"==o.topic),t.xp6(1),t.Q6J("ngIf","newFile"==o.topic),t.xp6(1),t.Q6J("ngIf","editUser"==o.topic),t.xp6(3),t.Oqu(o.title),t.xp6(2),t.Oqu(o.body),t.xp6(2),t.Oqu(t.xi3(14,8,o.date,"dd/MM/yyyy"))}}function Y(i,a){if(1&i&&(t.TgZ(0,"div",23),t.TgZ(1,"div",24),t.TgZ(2,"div",25),t.YNc(3,M,18,11,"ng-container",26),t.qZA(),t.qZA(),t.qZA()),2&i){const o=t.oxw();t.xp6(3),t.Q6J("ngForOf",o.notifications)("ngForTrackBy",o.trackByFn)}}let J=(()=>{class i{constructor(o,n,s,c,r,z){this.router=o,this._infoUser=n,this._notification=s,this.snackBar=c,this.dialog=r,this.eventMqtt=z,this.userFullName="",this.notificationsShow=!1,this.notifications=[],this.loadUser(),this.loadNotification()}ngOnInit(){this.subscribeToTopic()}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}showNotification(){this.notificationsShow=!this.notificationsShow}POPUPMesage(o){this.snackBar.open(o,"!",{duration:6e3,horizontalPosition:"center",verticalPosition:"top"})}readnot(o){this._notification.readAll([o]).subscribe(n=>{this.POPUPMesage(n.message)})}readAllNotification(){this.POPUPMesage("Leggo tutte le notifiche..."),this._notification.readAll(this.notifications.map(o=>o.notificationId)).subscribe(o=>{this.POPUPMesage(o.message)})}openOperation(o){null!=o&&(console.log("open Operation"),this.dialog.open(Z,{width:"600px",height:"600px",data:o}).afterClosed().subscribe(s=>{this.readnot(o)}))}openNull(){}loadUser(){this._infoUser.get().subscribe(o=>{this.userFullName=o.firstName+" "+o.lastName})}loadNotification(){this._notification.loadNotifications().subscribe(o=>{this.notifications=o,this.notificationsShow=o.length>0})}subscribeToTopic(){this.eventMqtt.topic("notifications").subscribe(o=>{this.loadNotification()}),this.eventMqtt.topic("notificationusergroups").subscribe(o=>{this.loadNotification()}),this.eventMqtt.topic("groupuserroules").subscribe(o=>{"UPDATE"==o.payload.toString()&&this.loadUser()}),this.eventMqtt.topic("users").subscribe(o=>{"UPDATE"==o.payload.toString()&&this.loadUser()})}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(f.F0),t.Y36(v.T),t.Y36(m.g),t.Y36(u.ux),t.Y36(d.uw),t.Y36(h.Y))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-dashboard"]],decls:16,vars:7,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex-auto","p-6","sm:p-10"],["class","flex items-end justify-end",4,"ngIf"],[1,"flex","items-center","justify-center","mt-8"],[1,"text-7xl","font-bold","leading-none","ng-tns-c140-3","text-center"],[1,""],[2,"color","#3f51b5"],[1,"flex","items-center","justify-center","mt-2"],["class","text-2xl leading-none ng-tns-c140-3",4,"ngIf"],["class","text-4xl leading-none ng-tns-c140-3 text-center",4,"ngIf"],["class","flex items-start justify-start m-4",4,"ngIf"],["class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full min-w-0",4,"ngIf"],[1,"flex","items-end","justify-end"],[3,"click"],["matBadgeColor","warn",3,"matBadge","click",4,"ngIf"],[3,"click",4,"ngIf"],["matBadgeColor","warn",3,"matBadge","click"],[1,"text-2xl","leading-none","ng-tns-c140-3"],[1,"ng-tns-c140-3"],[1,"text-4xl","leading-none","ng-tns-c140-3","text-center"],[1,"ng-tns-c140-3",2,"font-family","Xanh_Mono"],[1,"flex","items-start","justify-start","m-4"],["mat-button","","matStepperPrevious","","mat-raised-button","","color","primary",3,"click"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-4","gap-6","w-full","min-w-0"],[1,"sm:col-span-2","md:col-span-4","lg:col-span-4","flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","flex-col","divide-y"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","flex-row","items-center","justify-between","py-4","px-0.5"],[4,"ngIf"],[1,"flex","flex-col","flex-auto","ml-4",3,"click"],[1,"font-medium","font-bold"],[1,"font-medium"],[1,"font-"],["mat-icon-button","",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,x,3,0,"div",2),t.YNc(3,b,3,2,"div",2),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.TgZ(7,"b",6),t._uU(8,"Ciao!"),t.qZA(),t._uU(9),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",7),t.YNc(11,U,3,1,"div",8),t.qZA(),t.TgZ(12,"div",3),t.YNc(13,q,3,0,"div",9),t.qZA(),t.YNc(14,C,3,0,"div",10),t.YNc(15,Y,4,2,"div",11),t.qZA(),t.qZA()),2&o&&(t.xp6(2),t.Q6J("ngIf",n.notificationsShow),t.xp6(1),t.Q6J("ngIf",!n.notificationsShow),t.xp6(6),t.hij(" ",n.userFullName,""),t.xp6(2),t.Q6J("ngIf",n.notificationsShow),t.xp6(2),t.Q6J("ngIf",!n.notificationsShow),t.xp6(1),t.Q6J("ngIf",n.notificationsShow&&n.notifications.length>0),t.xp6(1),t.Q6J("ngIf",n.notificationsShow))},directives:[l.O5,g.Hw,_.lW,l.sg],pipes:[l.uU],styles:["\n  @font-face {\n    font-family: Xanh_Mono;\n    src: url('../../../../assets/fonts/Xanh_Mono/XanhMono-Italic.ttf');\n  }\n"],encapsulation:2}),i})();var j=e(2542),P=e(1769),F=e(3935),O=e(2178),Q=e(2458),S=e(3017),B=e(1494),k=e(2789),E=e(5939),H=e(8394);const X=[{path:"",component:J}];let R=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[h.Y],imports:[[f.Bz.forChild(X),l.ez,_.ot,j.vV,P.t,g.Ps,F.Tx,O.Cv,Q.si,S.SJ,B.JX,k.p0,E.Nh,H.y4,u.ZX]]}),i})()}}]);