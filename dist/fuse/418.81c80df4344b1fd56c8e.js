"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[418],{7418:(B,v,n)=>{n.r(v),n.d(v,{add_utenteModule:()=>H});var g=n(3423),h=n(1095),C=n(7539),d=n(8295),f=n(6627),T=n(9983),I=n(7441),q=n(4553),x=n(7001),_=n(3220),y=n(2458),J=n(4466),M=n(2789),a=n(3679),e=n(7716),F=n(5919),N=n(5891),b=n(422),U=n(8583);function S(t,r){if(1&t&&e._UZ(0,"img",32),2&t){const o=e.oxw();e.Q6J("src",o.urlImage,e.LSH)}}function Q(t,r){1&t&&e._UZ(0,"mat-icon",33),2&t&&e.Q6J("svgIcon","heroicons_solid:user-circle")}function Y(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Si prega di inserire un indirizzo email valido "),e.qZA())}function P(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," L'email \xe8 "),e.TgZ(2,"strong"),e._uU(3,"richiesta"),e.qZA(),e._uU(4,"! "),e.qZA())}function z(t,r){if(1&t&&(e.TgZ(0,"option",34),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.Q6J("value",o),e.xp6(1),e.hij(" ",o," ")}}function E(t,r){if(1&t&&(e.TgZ(0,"option",34),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.Q6J("value",o),e.xp6(1),e.hij(" ",o," ")}}function k(t,r){1&t&&e._UZ(0,"mat-icon",35),2&t&&e.Q6J("svgIcon","heroicons_solid:eye")}function O(t,r){1&t&&e._UZ(0,"mat-icon",35),2&t&&e.Q6J("svgIcon","heroicons_solid:eye-off")}class w{isErrorState(r,o){return!!(r&&r.invalid&&(r.dirty||r.touched||o&&o.submitted))}}const j=[{path:"",component:(()=>{class t{constructor(o,i,l,c,s,m){this.router=o,this._users=i,this._pikerSede=l,this._piker=c,this.route=s,this.snackBar=m,this.urlImage="https://lh3.googleusercontent.com/d/172A0SF_9kPuO4CB0fTRkF_nRO67J6ssu",this.emailFormControl=new a.NI("",[a.kI.required,a.kI.email]),this.matcher=new w,this._pikerSede.pikerGroupAllSede().subscribe(u=>{this.sede=u.value}),this._piker.piker("rouleusers").subscribe(u=>{this.roules=u.value})}ngOnInit(){}POPUPMesage(o){this.snackBar.open(o,"!",{duration:6e3,horizontalPosition:"center",verticalPosition:"top"})}adduser(o,i,l,c,s,m,u){null!=m&&this._users.addUser({nome:o,cognome:i,email:l,sede:c,roule:"Super Amministratore"==s?"superAdmin":"Amministratore"==s?"admin":"Supervisore"==s?"supervisor":"Utente Normale"==s?"user":"error",password:m,image:u}).subscribe(p=>{p.message.length>0?(this.POPUPMesage(p.message),this.router.navigate(["/utenze"])):this.router.navigate(["/add_utente"])})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(g.F0),e.Y36(F.f),e.Y36(N.w),e.Y36(b.e),e.Y36(g.gz),e.Y36(x.ux))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-add_utente"]],decls:61,vars:10,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex","flex-shrink-0","items-center","mt-6","sm:mt-0","sm:ml-4"],["mat-raised-button","","color","primary","routerLink","/utenze"],[1,"flex-auto","p-6","sm:p-10"],[1,"p-4","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"text-2xl","text-center","m-4","justify-center","flex"],[1,"relative","w-24","h-24"],["class","w-full h-full rounded-full","alt","User avatar",3,"src",4,"ngIf"],["class","icon-size-24",3,"svgIcon",4,"ngIf"],[1,"text-2xl","text-center"],[1,"flex","flex-col","gt-xs:flex-row"],["matInput","","placeholder","Nome","required",""],["nome",""],["matInput","","placeholder","Cognome","required",""],["co",""],["type","email","matInput","","placeholder","Ex. nome@example.com","required","",3,"formControl","errorStateMatcher"],["email",""],[4,"ngIf"],["matNativeControl","","required",""],["fsede",""],[3,"value",4,"ngFor","ngForOf"],["fdati",""],["id","password","matInput","","type","password","value","grppassword","required",""],["password","","passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"flex","justify-end"],["mat-raised-button","","color","primary",3,"click"],["alt","User avatar",1,"w-full","h-full","rounded-full",3,"src"],[1,"icon-size-24",3,"svgIcon"],[3,"value"],[1,"icon-size-5",3,"svgIcon"]],template:function(o,i){if(1&o){const l=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"h2",4),e._uU(5," Aggiungi Utenza "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div",5),e.TgZ(7,"button",6),e._uU(8,"Torna alle utenze"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"div",7),e.TgZ(10,"div",8),e.TgZ(11,"div",9),e.TgZ(12,"div",10),e.YNc(13,S,1,1,"img",11),e.YNc(14,Q,1,1,"mat-icon",12),e.qZA(),e.qZA(),e.TgZ(15,"div",13),e.TgZ(16,"mat-form-field",14),e.TgZ(17,"mat-label"),e._uU(18,"Nome"),e.qZA(),e._UZ(19,"input",15,16),e.qZA(),e.TgZ(21,"mat-form-field",14),e.TgZ(22,"mat-label"),e._uU(23,"Cognome"),e.qZA(),e._UZ(24,"input",17,18),e.qZA(),e.qZA(),e.TgZ(26,"div",13),e.TgZ(27,"mat-form-field",14),e.TgZ(28,"mat-label"),e._uU(29,"Email"),e.qZA(),e._UZ(30,"input",19,20),e.YNc(32,Y,2,0,"mat-error",21),e.YNc(33,P,5,0,"mat-error",21),e.qZA(),e.TgZ(34,"mat-form-field",14),e.TgZ(35,"mat-label"),e._uU(36,"Sede:"),e.qZA(),e.TgZ(37,"select",22,23),e.YNc(39,z,2,2,"option",24),e.qZA(),e.qZA(),e.qZA(),e.TgZ(40,"div",13),e.TgZ(41,"mat-form-field",14),e.TgZ(42,"mat-label"),e._uU(43,"Visibilit\xe0 Dati:"),e.qZA(),e.TgZ(44,"select",22,25),e.YNc(46,E,2,2,"option",24),e.qZA(),e.qZA(),e.TgZ(47,"mat-form-field",14),e.TgZ(48,"mat-label"),e._uU(49,"Password"),e.qZA(),e._UZ(50,"input",26,27),e.TgZ(53,"button",28),e.NdJ("click",function(){e.CHM(l);const s=e.MAs(52);return s.type="password"===s.type?"text":"password"}),e.YNc(54,k,1,1,"mat-icon",29),e.YNc(55,O,1,1,"mat-icon",29),e.qZA(),e.TgZ(56,"mat-error"),e._uU(57," La password \xe8 richiesta "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(58,"div",30),e.TgZ(59,"button",31),e.NdJ("click",function(){e.CHM(l);const s=e.MAs(20),m=e.MAs(25),u=e.MAs(31),Z=e.MAs(38),A=e.MAs(45),p=e.MAs(51);return i.adduser(s.value,m.value,u.value,Z.value,A.value,p.value,i.urlImage)}),e._uU(60,"Aggiungi Utente"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const l=e.MAs(52);e.xp6(13),e.Q6J("ngIf",i.urlImage),e.xp6(1),e.Q6J("ngIf",!i.urlImage),e.xp6(16),e.Q6J("formControl",i.emailFormControl)("errorStateMatcher",i.matcher),e.xp6(2),e.Q6J("ngIf",i.emailFormControl.hasError("email")&&!i.emailFormControl.hasError("required")),e.xp6(1),e.Q6J("ngIf",i.emailFormControl.hasError("required")),e.xp6(6),e.Q6J("ngForOf",i.sede),e.xp6(7),e.Q6J("ngForOf",i.roules),e.xp6(8),e.Q6J("ngIf","password"===l.type),e.xp6(1),e.Q6J("ngIf","text"===l.type)}},directives:[h.lW,g.rH,U.O5,d.KE,d.hX,T.Nt,a.Fj,a.Q7,a.JJ,a.oH,U.sg,d.R9,d.TO,f.Hw,a.YN,a.Kr],encapsulation:2}),t})()}];let H=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.Bz.forChild(j),h.ot,C.p9,d.lN,f.Ps,T.c,f.Ps,I.LD,q.T5,_.FA,x.ZX,y.XK,M.p0,J.m]]}),t})()}}]);