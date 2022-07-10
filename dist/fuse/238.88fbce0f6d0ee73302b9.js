"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[238],{7468:(Y,u,s)=>{s.r(u),s.d(u,{UtenzeModule:()=>C});var l=s(3423),d=s(1095),c=s(7539),f=s(8295),i=s(6627),g=s(9983),v=s(7441),p=s(4553),x=s(7001),Z=s(3220),h=s(2458),T=s(4466),e=s(7716),A=s(5919),m=s(7898),a=s(8583);function U(o,n){if(1&o&&e._UZ(0,"img",21),2&o){const t=e.oxw().$implicit;e.Q6J("src",t.urlImage,e.LSH)}}function b(o,n){1&o&&e._UZ(0,"mat-icon",22),2&o&&e.Q6J("svgIcon","heroicons_solid:user-circle")}const z=function(o){return{"background-color":o}};function I(o,n){if(1&o&&(e.TgZ(0,"div",9),e.TgZ(1,"div",10),e.ynx(2),e.TgZ(3,"div",11),e.TgZ(4,"div",12),e.TgZ(5,"div",13),e.YNc(6,U,1,1,"img",14),e.YNc(7,b,1,1,"mat-icon",15),e.qZA(),e.qZA(),e.TgZ(8,"div",16),e.TgZ(9,"div",17),e._uU(10),e.qZA(),e.TgZ(11,"div",18),e._uU(12),e.qZA(),e.TgZ(13,"div",18),e._uU(14),e.qZA(),e.qZA(),e.TgZ(15,"button",19),e.TgZ(16,"mat-icon"),e._uU(17,"domain"),e.qZA(),e.qZA(),e.TgZ(18,"button",20),e.TgZ(19,"mat-icon"),e._uU(20,"person_off"),e.qZA(),e.qZA(),e.qZA(),e.BQk(),e.qZA(),e.qZA()),2&o){const t=n.$implicit,r=e.oxw();e.xp6(3),e.Q6J("ngStyle",e.VKq(18,z,1==t.disable?"#afafaf52":"")),e.xp6(3),e.Q6J("ngIf",t.urlImage),e.xp6(1),e.Q6J("ngIf",!t.urlImage),e.xp6(3),e.AsE("",t.firstName," ",t.lastName,""),e.xp6(2),e.Oqu(t.sedeName),e.xp6(2),e.Oqu(r.rouleString(t.roule)),e.xp6(1),e.pbR("routerLink","/modifica_sede/",t.userId,"/",t.groupId,"/",t.sedeName,"/",t.roule,"/",t.firstName,"/",t.lastName,""),e.xp6(3),e.XOb("routerLink","/disattiva_utenza/",t.userId,"/",t.groupId,"/",t.disable,"/",t.firstName,"/",t.lastName,"")}}let y=(()=>{class o{constructor(t,r,S){this.router=t,this._users=r,this.eventMqtt=S,this.collaboratore=[],this.utente=!1,this.supervisor=!1,this.usercontrol=!0,this.sede="",this.uid="",this.uts=[],this.loadUser()}ngOnInit(){this.subscribeToTopic()}rouleString(t){return"superAdmin"==t?"Super Amministratore":"admin"==t?"Amministratore":"supervisor"==t?"Supervisore":"user"==t?"Utente Normale":void 0}loadUser(){this._users.get().subscribe(t=>{this.collaboratore=t})}subscribeToTopic(){this.eventMqtt.topic("groupuserroules").subscribe(t=>{this.loadUser()}),this.eventMqtt.topic("users").subscribe(t=>{this.loadUser()})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.F0),e.Y36(A.f),e.Y36(m.Y))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-utenze"]],decls:12,vars:1,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex","flex-shrink-0","items-center","mt-6","sm:mt-0","sm:ml-4"],["color","primary","mat-raised-button","","routerLink","/add_utente",1,"mr-2"],[1,"flex-auto","p-6","sm:p-10"],["class","sm:col-span-2 md:col-span-4 lg:col-span-4 flex flex-col flex-auto p-6 bg-card shadow rounded-2xl overflow-hidden m-4",4,"ngFor","ngForOf"],[1,"sm:col-span-2","md:col-span-4","lg:col-span-4","flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden","m-4"],[1,"flex","flex-col","divide-y"],[1,"flex","flex-row","items-center","justify-between","py-4","px-0.5","rounded-2xl",2,"border","0!important",3,"ngStyle"],[1,"flex","ml-2"],[1,"relative","w-24","h-24"],["class","w-full h-full rounded-full","alt","User avatar",3,"src",4,"ngIf"],["class","icon-size-24",3,"svgIcon",4,"ngIf"],[1,"flex","flex-col","flex-auto","ml-6"],[1,"text-2xl","md:text-3xl"],[1,"font-medium"],["mat-raised-button","","color","primary",1,"m-2",3,"routerLink"],["mat-raised-button","",1,"m-2",3,"routerLink"],["alt","User avatar",1,"w-full","h-full","rounded-full",3,"src"],[1,"icon-size-24",3,"svgIcon"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"h2",4),e._uU(5," Gestione Utenze: "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div",5),e.TgZ(7,"button",6),e.TgZ(8,"mat-icon"),e._uU(9,"add"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"div",7),e.YNc(11,I,21,20,"div",8),e.qZA(),e.qZA()),2&t&&(e.xp6(11),e.Q6J("ngForOf",r.collaboratore))},directives:[d.lW,l.rH,i.Hw,a.sg,a.PC,a.O5],encapsulation:2}),o})();var N=s(2789);const q=[{path:"",component:y}];let C=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[m.Y],imports:[[l.Bz.forChild(q),d.ot,c.p9,f.lN,i.Ps,g.c,i.Ps,v.LD,p.T5,Z.FA,x.ZX,h.XK,N.p0,T.m]]}),o})()}}]);