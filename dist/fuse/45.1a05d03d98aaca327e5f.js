"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[45],{5045:(et,v,i)=>{i.r(v),i.d(v,{FileManagerModule:()=>G});var p=i(3423),m=i(1095),u=i(6627),h=i(3017),_=i(1436),C=i(4466),c=i(3679),g=i(2238),t=i(7716),Z=i(2345),d=i(8583),f=i(7746);function M(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",6),t.TgZ(1,"a",7),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw().addPerson(l.id)}),t.TgZ(2,"mat-icon",8),t._uU(3,"add"),t.qZA(),t.qZA(),t.TgZ(4,"div",9),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw().addPerson(l.id)}),t._UZ(5,"img",10),t.qZA(),t.TgZ(6,"div",11),t.TgZ(7,"div",12),t._uU(8),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=s.$implicit;t.xp6(5),t.Q6J("src",e.urlImage,t.LSH),t.xp6(3),t.AsE(" ",e.firstName," ",e.lastName," ")}}function I(o,s){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Nessuna utenza disponible!"),t.qZA())}let N=(()=>{class o{constructor(e,n,r,l,a){this.dialogRef=e,this.dialog=n,this.data=r,this._folder=l,this.datePipe=a,this.loadSharePersonaddList()}addPerson(e){this._folder.addSharePersonFolder(e,this.data.folderId,this.data.documentId).subscribe(n=>{console.log(n),this.onNoClick()})}loadSharePersonaddList(){this._folder.addSharepersonList(this.data.folderId,this.data.documentId).subscribe(e=>{this.users=e})}onNoClick(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.so),t.Y36(g.uw),t.Y36(g.WI),t.Y36(Z.s),t.Y36(d.uU))},o.\u0275cmp=t.Xpm({type:o,selectors:[["dialog-overview-SettingsFolderAddPersonDialog-dialog"]],decls:7,vars:2,consts:[[1,"flex","flex-col","flex-auto","items-end"],["color","warn","mat-icon-button","",1,"absolute","z-20","w-8","h-8","min-h-8",3,"click"],["mat-list-icon","",1,"icon-size-2"],[1,"grid","grid-cols-4","gap-4","w-full","min-w-0","ng-star-inserted","mt-4"],["class","flex flex-col items-center p-4",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"flex","flex-col","items-center","p-4"],["color","primary","mat-icon-button","",1,"absolute","z-20","ml-26","w-8","h-8","min-h-8",3,"click"],["mat-list-icon","",1,"icon-size-5"],[1,"relative","w-24","h-24",3,"click"],["alt","User avatar",1,"w-full","h-full","rounded-full",3,"src"],[1,"flex","flex-col","items-center","justify-center","w-full","mt-2"],[1,"w-full","whitespace-nowrap","overflow-ellipsis","overflow-hidden","text-center","leading-normal","font-medium","mt-2"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"a",1),t.NdJ("click",function(){return n.onNoClick()}),t.TgZ(2,"mat-icon",2),t._uU(3,"close"),t.qZA(),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,M,9,3,"div",4),t.qZA(),t.qZA(),t.YNc(6,I,2,0,"h1",5)),2&e&&(t.xp6(5),t.Q6J("ngForOf",n.users),t.xp6(1),t.Q6J("ngIf",0==n.users.length))},directives:[m.zs,u.Hw,f.Nh,d.sg,d.O5],encapsulation:2}),o})();function S(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",6),t.TgZ(1,"a",7),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw().removePerson(l.id)}),t.TgZ(2,"mat-icon",8),t._uU(3,"delete"),t.qZA(),t.qZA(),t.TgZ(4,"div",9),t._UZ(5,"img",10),t.qZA(),t.TgZ(6,"div",11),t.TgZ(7,"div",12),t._uU(8),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=s.$implicit;t.xp6(5),t.Q6J("src",e.urlImage,t.LSH),t.xp6(3),t.AsE(" ",e.firstName," ",e.lastName," ")}}let J=(()=>{class o{constructor(e,n,r,l,a){this.dialogRef=e,this.dialog=n,this.data=r,this._folder=l,this.datePipe=a,this.loadSharePerson()}loadSharePerson(){this._folder.shareperson(this.data.folderId,this.data.documentId).subscribe(e=>{this.users=e})}removePerson(e){this._folder.removeSharePerson(e,this.data.folderId,this.data.documentId).subscribe(n=>{console.log(n),this.loadSharePerson()})}addUser(){this.dialog.open(N,{width:"600px",height:"400px",data:this.data}).afterClosed().subscribe(n=>{this.loadSharePerson()})}onNoClick(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.so),t.Y36(g.uw),t.Y36(g.WI),t.Y36(Z.s),t.Y36(d.uU))},o.\u0275cmp=t.Xpm({type:o,selectors:[["dialog-overview-settingsFolderDialog-dialog"]],decls:9,vars:1,consts:[[1,"flex","flex-col","flex-auto","items-end"],["color","primary","mat-icon-button","",1,"absolute","z-20","w-8","mr-10","h-8","min-h-8",3,"click"],["mat-list-icon","",1,"icon-size-2"],["color","warn","mat-icon-button","",1,"absolute","z-20","w-8","h-8","min-h-8",3,"click"],[1,"grid","grid-cols-4","gap-4","w-full","min-w-0","ng-star-inserted","mt-4"],["class","flex flex-col items-center p-4",4,"ngFor","ngForOf"],[1,"flex","flex-col","items-center","p-4"],["color","warn","mat-icon-button","",1,"absolute","z-20","ml-26","w-8","h-8","min-h-8",3,"click"],["mat-list-icon","",1,"icon-size-5"],[1,"relative","w-24","h-24"],["alt","User avatar",1,"w-full","h-full","rounded-full",3,"src"],[1,"flex","flex-col","items-center","justify-center","w-full","mt-2"],[1,"w-full","whitespace-nowrap","overflow-ellipsis","overflow-hidden","text-center","leading-normal","font-medium","mt-2"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"a",1),t.NdJ("click",function(){return n.addUser()}),t.TgZ(2,"mat-icon",2),t._uU(3,"add"),t.qZA(),t.qZA(),t.TgZ(4,"a",3),t.NdJ("click",function(){return n.onNoClick()}),t.TgZ(5,"mat-icon",2),t._uU(6,"close"),t.qZA(),t.qZA(),t.TgZ(7,"div",4),t.YNc(8,S,9,3,"div",5),t.qZA(),t.qZA()),2&e&&(t.xp6(8),t.Q6J("ngForOf",n.users))},directives:[m.zs,u.Hw,f.Nh,d.sg],encapsulation:2}),o})();var T=i(326),U=i(1955),F=i(7898),A=i(7001),x=i(8295),b=i(9983),w=i(4885);function q(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).createDir()}),t._uU(1," Crea "),t.qZA()}}function D(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"form",12),t.TgZ(1,"mat-form-field",13),t.TgZ(2,"mat-label"),t._uU(3,"Nome della Cartella"),t.qZA(),t.TgZ(4,"input",14),t.NdJ("ngModelChange",function(r){return t.CHM(e),t.oxw(2).vnodir=r}),t.qZA(),t.qZA(),t.YNc(5,q,2,0,"button",15),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("formGroup",e.form),t.xp6(4),t.Q6J("ngModel",e.vnodir),t.xp6(1),t.Q6J("ngIf",!e.caric)}}function Y(o,s){1&o&&t._UZ(0,"mat-spinner")}function y(o,s){if(1&o&&(t.TgZ(0,"div",10),t.YNc(1,D,6,3,"form",11),t.YNc(2,Y,1,0,"mat-spinner",9),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",!e.caric),t.xp6(1),t.Q6J("ngIf",e.caric)}}function P(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"a",28),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit;return t.oxw(2).deleteFooter(r.documentId,r.id)}),t.TgZ(1,"mat-icon",29),t._uU(2,"delete"),t.qZA(),t.qZA()}}function k(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"a",30),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit;return t.oxw(2).openShare(r.nome,r.documentId,r.id)}),t.TgZ(1,"mat-icon",29),t._uU(2,"settings"),t.qZA(),t.qZA()}}function z(o,s){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",19),t.YNc(2,P,3,0,"a",20),t.YNc(3,k,3,0,"a",21),t.TgZ(4,"a",22),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).openFolder(l)}),t.TgZ(5,"div",23),t.TgZ(6,"div",24),t._UZ(7,"mat-icon",25),t.qZA(),t.qZA(),t.TgZ(8,"div",26),t.TgZ(9,"div",27),t._uU(10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&o){const e=s.$implicit,n=t.oxw(2);t.xp6(2),t.Q6J("ngIf",!0===n.utente),t.xp6(1),t.Q6J("ngIf",!0===n.utente),t.xp6(4),t.Q6J("svgIcon","iconsmind:folder"),t.xp6(2),t.Q6J("matTooltip",e.name),t.xp6(1),t.Oqu(e.name)}}function Q(o,s){if(1&o&&(t.ynx(0),t.TgZ(1,"div",17),t.YNc(2,z,11,5,"ng-container",18),t.qZA(),t.BQk()),2&o){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.documents)}}const E=function(){return[]};let H=(()=>{class o{constructor(e,n,r,l,a,V,K,tt){this._documet=e,this._infoUser=n,this._document=r,this.eventMqtt=l,this.snackBar=a,this.route=V,this.dialog=K,this.router=tt,this.utente=!1,this.form=new c.cw({nomedir:new c.NI("")}),this.caric=!1,this.loadUserInfo(),this.loadDocument()}openFolder(e){this.router.navigate(["/folder"],{queryParams:e})}openShare(e,n,r){this.dialog.open(J,{width:"800px",height:"600px",data:{folderId:r,documentId:n,nome:e}}).afterClosed().subscribe(a=>{})}deleteFooter(e,n){this._documet.delete(n,e).subscribe(r=>{console.log(r.message)})}createDir(){this.caric=!0,this._document.addFolder(this.form.value.nomedir).subscribe(e=>{console.log(e.message),this.caric=!1})}loadUserInfo(){this._infoUser.get().subscribe(e=>{this.utente="superAdmin"==e.roule})}loadDocument(){this._documet.documenti().subscribe(e=>{this.documents=e})}ngOnInit(){this.subscribeToTopic()}subscribeToTopic(){this.eventMqtt.topic("groupuserroules").subscribe(e=>{"UPDATE"==e.payload.toString()&&(this.loadUserInfo(),this.loadDocument())}),this.eventMqtt.topic("users").subscribe(e=>{"UPDATE"==e.payload.toString()&&(this.loadUserInfo(),this.loadDocument())}),this.eventMqtt.topic("documents").subscribe(e=>{this.loadDocument()}),this.eventMqtt.topic("files").subscribe(e=>{this.loadDocument()}),this.eventMqtt.topic("folders").subscribe(e=>{this.loadDocument()})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T.Z),t.Y36(U.T),t.Y36(T.Z),t.Y36(F.Y),t.Y36(A.ux),t.Y36(p.gz),t.Y36(g.uw),t.Y36(p.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["file-manager"]],decls:13,vars:3,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex-auto","h-full","bg-card","dark:bg-transparent"],[1,"flex","flex-col","bg-gray-100","dark:bg-transparent"],[1,"flex","flex-col","flex-auto"],[1,"flex","flex-col","sm:flex-row","items-start","sm:items-center","sm:justify-between","p-6","sm:py-12","md:px-8","border-b","bg-card","dark:bg-transparent"],[1,"text-4xl","font-extrabold","tracking-tight","leading-none"],[1,"mt-4","sm:mt-0"],["class","p-6 md:p-8 space-y-8 flex",4,"ngIf"],[1,"p-4","grid","grid-cols-1","gap-6","w-full","min-w-0","ng-star-inserted","mt-4"],[4,"ngIf"],[1,"p-6","md:p-8","space-y-8","flex"],["class","p-4 bg-card shadow rounded-2xl overflow-hidden",3,"formGroup",4,"ngIf"],[1,"p-4","bg-card","shadow","rounded-2xl","overflow-hidden",3,"formGroup"],[1,"flex-auto","gt-xs:pr-3",2,"min-width","300px"],["matInput","","type","text","formControlName","nomedir",3,"ngModel","ngModelChange"],["mat-button","","mat-raised-button","","color","primary","class","flex justify-end",3,"click",4,"ngIf"],["mat-button","","mat-raised-button","","color","primary",1,"flex","justify-end",3,"click"],[1,"flex","flex-wrap","m-2","mt-2"],[4,"ngFor","ngForOf"],[1,"relative","w-40","h-40","m-2","p-4","shadow","rounded-2xl","bg-card"],["class","absolute z-20 top-1.5 right-1.5 w-8 h-8 min-h-8","color","warn","mat-icon-button","",3,"click",4,"ngIf"],["class","absolute z-20 top-10 right-1.5 w-8 h-8 min-h-8","color","primary","mat-icon-button","",3,"click",4,"ngIf"],[1,"z-10","absolute","inset-0","flex","flex-col","p-4","cursor-pointer",3,"click"],[1,"aspect-w-9","aspect-h-6"],[1,"flex","items-center","justify-center"],[1,"icon-size-14","text-hint",3,"svgIcon"],[1,"flex","flex-col","flex-auto","justify-center","text-center","text-sm","font-medium"],[1,"truncate",3,"matTooltip"],["color","warn","mat-icon-button","",1,"absolute","z-20","top-1.5","right-1.5","w-8","h-8","min-h-8",3,"click"],["mat-list-icon","",1,"icon-size-5"],["color","primary","mat-icon-button","",1,"absolute","z-20","top-10","right-1.5","w-8","h-8","min-h-8",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-drawer-container",1),t.TgZ(2,"mat-drawer-content",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div"),t.TgZ(6,"div",5),t._uU(7,"I Documenti"),t.qZA(),t.qZA(),t._UZ(8,"div",6),t.qZA(),t.TgZ(9,"div",3),t.YNc(10,y,3,2,"div",7),t.TgZ(11,"div",8),t.YNc(12,Q,3,1,"ng-container",9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(10),t.Q6J("ngIf",!0===n.utente),t.xp6(2),t.Q6J("ngIf",n.documents!=t.DdM(2,E)))},directives:[h.kh,h.LW,d.O5,c._Y,c.JL,c.sg,x.KE,x.hX,b.Nt,c.Fj,c.JJ,c.u,m.lW,w.$g,d.sg,u.Hw,_.gM,m.zs,f.Nh],encapsulation:2}),o})();var O=i(6856),$=i(2255),j=i(2542),R=i(7539),L=i(1769),B=i(3935),X=i(2178);const W=[{path:"",component:H}];let G=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[F.Y],imports:[[p.Bz.forChild(W),d.ez,m.ot,u.Ps,h.SJ,_.AV,w.Cq,x.lN,b.c,f.ie,O.g3,$.J,j.vV,R.p9,L.t,B.Tx,X.Cv,C.m,A.ZX]]}),o})()}}]);