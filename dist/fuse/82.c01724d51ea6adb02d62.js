"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[82],{6082:(no,v,p)=>{p.r(v),p.d(v,{ModOperazioniModule:()=>to});var _=p(3423),M=p(1095),A=p(7539),f=p(8295),Z=p(6627),C=p(9983),x=p(7441),N=p(4553),T=p(7001),d=p(3220),q=p(2458),b=p(4466),a=p(3679),o=p(7716),z=p(2238),O=p(9110),J=p(9019),U=p(1841);let S=(()=>{class r{constructor(e){this._httpClient=e}get accessToken(){var e;return null!==(e=localStorage.getItem("accessToken"))&&void 0!==e?e:""}get groupId(){var e;return null!==(e=localStorage.getItem("groupId"))&&void 0!==e?e:""}get userId(){var e;return null!==(e=localStorage.getItem("userId"))&&void 0!==e?e:""}get groupuserId(){var e;return null!==(e=localStorage.getItem("groupuserId"))&&void 0!==e?e:""}get(e){return this._httpClient.post(J.N.api+"/clientes/cliente",{token:this.accessToken,id:Number(e)})}}return r.\u0275fac=function(e){return new(e||r)(o.LFG(U.eN))},r.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var h=p(8583),w=p(422);function I(r,m){if(1&r){const e=o.EpF();o.TgZ(0,"button",27),o.NdJ("click",function(){return o.CHM(e),o.oxw().conferma_vita()}),o._uU(1,"Salva Modifiche"),o.qZA()}}function P(r,m){if(1&r){const e=o.EpF();o.TgZ(0,"button",27),o.NdJ("click",function(){return o.CHM(e),o.oxw().conferma_danni()}),o._uU(1,"Salva Modifiche"),o.qZA()}}function Q(r,m){if(1&r){const e=o.EpF();o.TgZ(0,"button",27),o.NdJ("click",function(){return o.CHM(e),o.oxw().conferma_cons()}),o._uU(1,"Salva Modifiche"),o.qZA()}}function y(r,m){if(1&r&&(o.TgZ(0,"option",28),o._uU(1),o.qZA()),2&r){const e=m.$implicit;o.Q6J("value",e),o.xp6(1),o.hij(" ",e," ")}}function k(r,m){if(1&r&&(o.TgZ(0,"option",28),o._uU(1),o.qZA()),2&r){const e=m.$implicit;o.Q6J("value",e),o.xp6(1),o.hij(" ",e," ")}}function H(r,m){if(1&r&&(o.TgZ(0,"option",28),o._uU(1),o.qZA()),2&r){const e=m.$implicit;o.Q6J("value",e),o.xp6(1),o.hij(" ",e," ")}}function F(r,m){if(1&r&&(o.TgZ(0,"option",28),o._uU(1),o.qZA()),2&r){const e=m.$implicit;o.Q6J("value",e),o.xp6(1),o.hij(" ",e," ")}}function L(r,m){if(1&r&&(o.TgZ(0,"option",28),o._uU(1),o.qZA()),2&r){const e=m.$implicit;o.Q6J("value",e),o.xp6(1),o.hij(" ",e," ")}}function Y(r,m){if(1&r&&(o.TgZ(0,"option",28),o._uU(1),o.qZA()),2&r){const e=m.$implicit;o.Q6J("value",e),o.xp6(1),o.hij(" ",e," ")}}function $(r,m){if(1&r&&(o.TgZ(0,"option",28),o._uU(1),o.qZA()),2&r){const e=m.$implicit;o.Q6J("value",e),o.xp6(1),o.hij(" ",e," ")}}function R(r,m){if(1&r){const e=o.EpF();o.TgZ(0,"form",9),o.TgZ(1,"h1",10),o._uU(2,"Vita:"),o.qZA(),o.TgZ(3,"mat-form-field",11),o.TgZ(4,"mat-label"),o._uU(5,"Tipologia:"),o.qZA(),o.TgZ(6,"select",29),o.NdJ("ngModelChange",function(n){return o.CHM(e),o.oxw().tipologiasel=n}),o.YNc(7,F,2,2,"option",16),o.qZA(),o.qZA(),o.TgZ(8,"mat-form-field",11),o.TgZ(9,"mat-label"),o._uU(10,"Compagnia:"),o.qZA(),o.TgZ(11,"select",30,31),o.NdJ("ngModelChange",function(n){return o.CHM(e),o.oxw().compagniasel=n}),o.YNc(13,L,2,2,"option",16),o.qZA(),o.qZA(),o.TgZ(14,"mat-form-field",11),o.TgZ(15,"mat-label"),o._uU(16,"Prodotto:"),o.qZA(),o.TgZ(17,"select",32,33),o.NdJ("ngModelChange",function(n){return o.CHM(e),o.oxw().prodottosel=n}),o.YNc(19,Y,2,2,"option",16),o.qZA(),o.qZA(),o.TgZ(20,"mat-form-field",11),o.TgZ(21,"mat-label"),o._uU(22,"Premio:"),o.qZA(),o.TgZ(23,"input",34,35),o.NdJ("change",function(){o.CHM(e);const n=o.MAs(24),i=o.MAs(39),l=o.MAs(52),s=o.MAs(33);return o.oxw().cgMontante(n.value,i.value,l.value,s.value,"")})("ngModelChange",function(n){return o.CHM(e),o.oxw().premiosel=n}),o.qZA(),o.TgZ(25,"span",36),o._uU(26,"\u20ac\xa0"),o.qZA(),o.TgZ(27,"span",37),o._uU(28,".00"),o.qZA(),o.qZA(),o.TgZ(29,"mat-form-field",11),o.TgZ(30,"mat-label"),o._uU(31,"Frazionamento:"),o.qZA(),o.TgZ(32,"select",38,39),o.NdJ("change",function(){o.CHM(e);const n=o.MAs(24),i=o.MAs(39),l=o.MAs(52),s=o.MAs(33);return o.oxw().cgMontante(n.value,i.value,l.value,s.value,"")})("ngModelChange",function(n){return o.CHM(e),o.oxw().frazionamentosel=n}),o.YNc(34,$,2,2,"option",16),o.qZA(),o.qZA(),o.TgZ(35,"mat-form-field",11),o.TgZ(36,"mat-label"),o._uU(37,"Durata:"),o.qZA(),o.TgZ(38,"input",40,41),o.NdJ("change",function(){o.CHM(e);const n=o.MAs(24),i=o.MAs(39),l=o.MAs(52),s=o.MAs(33);return o.oxw().cgMontante(n.value,i.value,l.value,s.value,"")})("ngModelChange",function(n){return o.CHM(e),o.oxw().duratasel=n}),o.qZA(),o.qZA(),o.TgZ(40,"mat-form-field",11),o.TgZ(41,"mat-label"),o._uU(42,"Montante:"),o.qZA(),o.TgZ(43,"input",42),o.NdJ("ngModelChange",function(n){return o.CHM(e),o.oxw().montantesel=n}),o.qZA(),o.qZA(),o.TgZ(44,"mat-form-field",11),o.TgZ(45,"mat-label"),o._uU(46,"Montante Provvigionale:"),o.qZA(),o.TgZ(47,"input",43),o.NdJ("ngModelChange",function(n){return o.CHM(e),o.oxw().montanteprosel=n}),o.qZA(),o.qZA(),o.TgZ(48,"mat-form-field",11),o.TgZ(49,"mat-label"),o._uU(50,"Provvigione:"),o.qZA(),o.TgZ(51,"input",44,45),o.NdJ("change",function(){o.CHM(e);const n=o.MAs(24),i=o.MAs(39),l=o.MAs(52),s=o.MAs(33);return o.oxw().cgMontante(n.value,i.value,l.value,s.value,"")})("ngModelChange",function(n){return o.CHM(e),o.oxw().provvigionesel=n}),o.qZA(),o.qZA(),o.TgZ(53,"mat-form-field",11),o.TgZ(54,"mat-label"),o._uU(55,"Provvigione in %:"),o.qZA(),o.TgZ(56,"input",46),o.NdJ("ngModelChange",function(n){return o.CHM(e),o.oxw().provvigioneoutpsel=n}),o.qZA(),o.TgZ(57,"span",37),o._uU(58,"%"),o.qZA(),o.qZA(),o.TgZ(59,"mat-form-field",11),o.TgZ(60,"mat-label"),o._uU(61,"Provvigione Lorda Maturata:"),o.qZA(),o.TgZ(62,"input",47),o.NdJ("ngModelChange",function(n){return o.CHM(e),o.oxw().plmtsel=n}),o.qZA(),o.qZA(),o.qZA()}if(2&r){const e=o.MAs(12),t=o.oxw();o.Q6J("formGroup",t.form),o.xp6(6),o.Q6J("ngModel",t.tipologiasel),o.xp6(1),o.Q6J("ngForOf",t.tipologia),o.xp6(4),o.Q6J("ngModel",t.compagniasel),o.xp6(2),o.Q6J("ngForOf",t.compagnia),o.xp6(4),o.Q6J("ngModel",t.prodottosel),o.xp6(2),o.Q6J("ngForOf",t.prod),o.xp6(4),o.Q6J("ngModel",t.premiosel),o.xp6(9),o.Q6J("ngModel",t.frazionamentosel),o.xp6(2),o.Q6J("ngForOf",t.frazionamento),o.xp6(4),o.Q6J("value","Crea"==e.value?1:null)("ngModel",t.duratasel),o.xp6(5),o.Q6J("value",t.montante)("ngModel",t.montantesel),o.xp6(4),o.Q6J("value",t.montantepro)("ngModel",t.montanteprosel),o.xp6(4),o.Q6J("ngModel",t.provvigionesel),o.xp6(5),o.Q6J("value",t.provvigioneoutp)("ngModel",t.provvigioneoutpsel),o.xp6(6),o.Q6J("value",t.plmt)("ngModel",t.plmtsel)}}function j(r,m){if(1&r&&(o.TgZ(0,"option",28),o._uU(1),o.qZA()),2&r){const e=m.$implicit;o.Q6J("value",e),o.xp6(1),o.hij(" ",e," ")}}function E(r,m){if(1&r&&(o.TgZ(0,"option",28),o._uU(1),o.qZA()),2&r){const e=m.$implicit;o.Q6J("value",e),o.xp6(1),o.hij(" ",e," ")}}function D(r,m){if(1&r&&(o.TgZ(0,"option",28),o._uU(1),o.qZA()),2&r){const e=m.$implicit;o.Q6J("value",e),o.xp6(1),o.hij(" ",e," ")}}function G(r,m){if(1&r&&(o.TgZ(0,"option",28),o._uU(1),o.qZA()),2&r){const e=m.$implicit;o.Q6J("value",e),o.xp6(1),o.hij(" ",e," ")}}function B(r,m){if(1&r){const e=o.EpF();o.TgZ(0,"form",9),o.TgZ(1,"h1",10),o._uU(2,"Danni"),o.qZA(),o.TgZ(3,"mat-form-field",11),o.TgZ(4,"mat-label"),o._uU(5,"Tipologia:"),o.qZA(),o.TgZ(6,"select",48,49),o.NdJ("change",function(){o.CHM(e);const n=o.MAs(25),i=o.MAs(40),l=o.MAs(34),s=o.MAs(7);return o.oxw().cgMontante(n.value,i.value,"0",l.value,s.value)})("ngModelChange",function(n){return o.CHM(e),o.oxw().tipologiasel=n}),o.YNc(8,j,2,2,"option",16),o.qZA(),o.qZA(),o.TgZ(9,"mat-form-field",11),o.TgZ(10,"mat-label"),o._uU(11,"Compagnia:"),o.qZA(),o.TgZ(12,"select",30,31),o.NdJ("ngModelChange",function(n){return o.CHM(e),o.oxw().compagniasel=n}),o.YNc(14,E,2,2,"option",16),o.qZA(),o.qZA(),o.TgZ(15,"mat-form-field",11),o.TgZ(16,"mat-label"),o._uU(17,"Prodotto:"),o.qZA(),o.TgZ(18,"select",32,33),o.NdJ("ngModelChange",function(n){return o.CHM(e),o.oxw().prodottosel=n}),o.YNc(20,D,2,2,"option",16),o.qZA(),o.qZA(),o.TgZ(21,"mat-form-field",11),o.TgZ(22,"mat-label"),o._uU(23,"Premio:"),o.qZA(),o.TgZ(24,"input",34,35),o.NdJ("change",function(){o.CHM(e);const n=o.MAs(25),i=o.MAs(40),l=o.MAs(34),s=o.MAs(7);return o.oxw().cgMontante(n.value,i.value,"0",l.value,s.value)})("ngModelChange",function(n){return o.CHM(e),o.oxw().premiosel=n}),o.qZA(),o.TgZ(26,"span",36),o._uU(27,"\u20ac\xa0"),o.qZA(),o.TgZ(28,"span",37),o._uU(29,".00"),o.qZA(),o.qZA(),o.TgZ(30,"mat-form-field",11),o.TgZ(31,"mat-label"),o._uU(32,"Frazionamento:"),o.qZA(),o.TgZ(33,"select",38,39),o.NdJ("change",function(){o.CHM(e);const n=o.MAs(25),i=o.MAs(40),l=o.MAs(34),s=o.MAs(7);return o.oxw().cgMontante(n.value,i.value,"0",l.value,s.value)})("ngModelChange",function(n){return o.CHM(e),o.oxw().frazionamentosel=n}),o.YNc(35,G,2,2,"option",16),o.qZA(),o.qZA(),o.TgZ(36,"mat-form-field",11),o.TgZ(37,"mat-label"),o._uU(38,"Durata:"),o.qZA(),o._UZ(39,"input",50,41),o.qZA(),o.TgZ(41,"mat-form-field",11),o.TgZ(42,"mat-label"),o._uU(43,"Montante:"),o.qZA(),o.TgZ(44,"input",42),o.NdJ("ngModelChange",function(n){return o.CHM(e),o.oxw().montantesel=n}),o.qZA(),o.qZA(),o.TgZ(45,"mat-form-field",11),o.TgZ(46,"mat-label"),o._uU(47,"Montante Provvigionale:"),o.qZA(),o.TgZ(48,"input",43),o.NdJ("ngModelChange",function(n){return o.CHM(e),o.oxw().montanteprosel=n}),o.qZA(),o.qZA(),o.TgZ(49,"mat-form-field",11),o.TgZ(50,"mat-label"),o._uU(51,"Provvigione in %:"),o.qZA(),o.TgZ(52,"input",51,45),o.NdJ("change",function(){o.CHM(e);const n=o.MAs(25),i=o.MAs(40),l=o.MAs(53),s=o.MAs(34),g=o.MAs(7);return o.oxw().cgMontante(n.value,i.value,l.value,s.value,g.value)})("ngModelChange",function(n){return o.CHM(e),o.oxw().provvigioneoutpsel=n}),o.qZA(),o.TgZ(54,"span",37),o._uU(55,"%"),o.qZA(),o.qZA(),o.TgZ(56,"mat-form-field",11),o.TgZ(57,"mat-label"),o._uU(58,"Provvigione Lorda Maturata:"),o.qZA(),o.TgZ(59,"input",47),o.NdJ("ngModelChange",function(n){return o.CHM(e),o.oxw().plmtsel=n}),o.qZA(),o.qZA(),o.qZA()}if(2&r){const e=o.oxw();o.Q6J("formGroup",e.form),o.xp6(6),o.Q6J("ngModel",e.tipologiasel),o.xp6(2),o.Q6J("ngForOf",e.tipologia),o.xp6(4),o.Q6J("ngModel",e.compagniasel),o.xp6(2),o.Q6J("ngForOf",e.compagnia),o.xp6(4),o.Q6J("ngModel",e.prodottosel),o.xp6(2),o.Q6J("ngForOf",e.prod),o.xp6(4),o.Q6J("ngModel",e.premiosel),o.xp6(9),o.Q6J("ngModel",e.frazionamentosel),o.xp6(2),o.Q6J("ngForOf",e.frazionamento),o.xp6(4),o.Q6J("value",e.duratasel),o.xp6(5),o.Q6J("value",e.montante)("ngModel",e.montantesel),o.xp6(4),o.Q6J("value",e.montantepro)("ngModel",e.montanteprosel),o.xp6(4),o.Q6J("value",e.provvigioneoutp)("readonly",!0!==e.utente)("ngModel",e.provvigioneoutpsel),o.xp6(7),o.Q6J("value",e.plmt)("ngModel",e.plmtsel)}}function V(r,m){if(1&r&&(o.TgZ(0,"option",28),o._uU(1),o.qZA()),2&r){const e=m.$implicit;o.Q6J("value",e.nome),o.xp6(1),o.hij(" ",e.nome," ")}}function X(r,m){if(1&r&&(o.TgZ(0,"option",28),o._uU(1),o.qZA()),2&r){const e=m.$implicit;o.Q6J("value",e),o.xp6(1),o.hij(" ",e," ")}}function K(r,m){if(1&r){const e=o.EpF();o.TgZ(0,"form",9),o.TgZ(1,"h1",10),o._uU(2,"Consulenza"),o.qZA(),o.TgZ(3,"mat-form-field",11),o.TgZ(4,"mat-label"),o._uU(5,"Tipologia:"),o.qZA(),o.TgZ(6,"select",29),o.NdJ("ngModelChange",function(n){return o.CHM(e),o.oxw().tipologiasel=n}),o.YNc(7,V,2,2,"option",16),o.ALo(8,"async"),o.qZA(),o.qZA(),o.TgZ(9,"mat-form-field",11),o.TgZ(10,"mat-label"),o._uU(11,"Premio:"),o.qZA(),o.TgZ(12,"input",34,35),o.NdJ("change",function(){o.CHM(e);const n=o.MAs(13),i=o.MAs(40),l=o.MAs(22);return o.oxw().cgMontante(n.value,"1",i.value,l.value,"")})("ngModelChange",function(n){return o.CHM(e),o.oxw().premiosel=n}),o.qZA(),o.TgZ(14,"span",36),o._uU(15,"\u20ac\xa0"),o.qZA(),o.TgZ(16,"span",37),o._uU(17,".00"),o.qZA(),o.qZA(),o.TgZ(18,"mat-form-field",11),o.TgZ(19,"mat-label"),o._uU(20,"Frazionamento:"),o.qZA(),o.TgZ(21,"select",38,39),o.NdJ("change",function(){o.CHM(e);const n=o.MAs(13),i=o.MAs(40),l=o.MAs(22);return o.oxw().cgMontante(n.value,"1",i.value,l.value,"")})("ngModelChange",function(n){return o.CHM(e),o.oxw().frazionamentosel=n}),o.YNc(23,X,2,2,"option",16),o.qZA(),o.qZA(),o.TgZ(24,"mat-form-field",11),o.TgZ(25,"mat-label"),o._uU(26,"Durata:"),o.qZA(),o.TgZ(27,"input",52),o.NdJ("ngModelChange",function(n){return o.CHM(e),o.oxw().duratasel=n}),o.qZA(),o.qZA(),o.TgZ(28,"mat-form-field",11),o.TgZ(29,"mat-label"),o._uU(30,"Montante:"),o.qZA(),o.TgZ(31,"input",42),o.NdJ("ngModelChange",function(n){return o.CHM(e),o.oxw().montanteprosel=n}),o.qZA(),o.qZA(),o.TgZ(32,"mat-form-field",11),o.TgZ(33,"mat-label"),o._uU(34,"Montante Provvigionale:"),o.qZA(),o.TgZ(35,"input",43),o.NdJ("ngModelChange",function(n){return o.CHM(e),o.oxw().montanteprosel=n}),o.qZA(),o.qZA(),o.TgZ(36,"mat-form-field",11),o.TgZ(37,"mat-label"),o._uU(38,"Provvigione:"),o.qZA(),o.TgZ(39,"input",44,45),o.NdJ("change",function(){o.CHM(e);const n=o.MAs(13),i=o.MAs(40),l=o.MAs(22);return o.oxw().cgMontante(n.value,"1",i.value,l.value,"")})("ngModelChange",function(n){return o.CHM(e),o.oxw().provvigionesel=n}),o.qZA(),o.qZA(),o.TgZ(41,"mat-form-field",11),o.TgZ(42,"mat-label"),o._uU(43,"Provvigione in %:"),o.qZA(),o.TgZ(44,"input",46),o.NdJ("ngModelChange",function(n){return o.CHM(e),o.oxw().provvigioneoutpsel=n}),o.qZA(),o.TgZ(45,"span",37),o._uU(46,"%"),o.qZA(),o.qZA(),o.TgZ(47,"mat-form-field",11),o.TgZ(48,"mat-label"),o._uU(49,"Provvigione Lorda Maturata:"),o.qZA(),o.TgZ(50,"input",47),o.NdJ("ngModelChange",function(n){return o.CHM(e),o.oxw().plmtsel=n}),o.qZA(),o.qZA(),o.qZA()}if(2&r){const e=o.oxw();o.Q6J("formGroup",e.form),o.xp6(6),o.Q6J("ngModel",e.tipologiasel),o.xp6(1),o.Q6J("ngForOf",o.lcZ(8,16,e.tipologia)),o.xp6(5),o.Q6J("ngModel",e.premiosel),o.xp6(9),o.Q6J("ngModel",e.frazionamentosel),o.xp6(2),o.Q6J("ngForOf",e.frazionamento),o.xp6(4),o.Q6J("ngModel",e.duratasel),o.xp6(4),o.Q6J("value",e.montante)("ngModel",e.montanteprosel),o.xp6(4),o.Q6J("value",e.montantepro)("ngModel",e.montanteprosel),o.xp6(4),o.Q6J("ngModel",e.provvigionesel),o.xp6(5),o.Q6J("value",e.provvigioneoutp)("ngModel",e.provvigioneoutpsel),o.xp6(6),o.Q6J("value",e.plmt)("ngModel",e.plmtsel)}}let W=(()=>{class r{constructor(e,t,n,i,l,s,g,u){this.snackBar=e,this.route=t,this.router=n,this.dialog=i,this._operation=l,this._cliente=s,this.datepipe=g,this._piker=u,this.fraznumero=0,this.provvigioneout=0,this.plmt=0,this.vramo="",this.operazioneid=[],this.fdata="",this.ftipo="",this.fsoceta="",this.fnome="",this.fco="",this.fclisoceta="",this.framo="",this.ftipologia="",this.fcompagnia="",this.fprodotto="",this.fpremio="",this.ffrazionamneto="",this.fdurata="",this.fmontatnte="",this.fmontanteprov="",this.fprovvigione="",this.fprovvigioneout="",this.fplmt="",this.utentecreazione=[],this.utentemodifica=[],this.utente=!1,this.supervisor=!1,this.usercontrol=5,this.sede="",this.uts=[],this.formreg=new a.cw({fdata:new a.NI("",a.kI.minLength(2)),ftipo:new a.NI("",a.kI.minLength(2)),fsoceta:new a.NI("",a.kI.minLength(2))}),this.formcli=new a.cw({fnome:new a.NI(""),fco:new a.NI(""),fclisoceta:new a.NI("")}),this.formramo=new a.cw({framo:new a.NI("",a.kI.minLength(2))}),this.formcommento=new a.cw({fcommento:new a.NI("")}),this.form=new a.cw({ftipologia:new a.NI("",a.kI.minLength(2)),fcompagnia:new a.NI("",a.kI.minLength(2)),fprodotto:new a.NI("",a.kI.minLength(2)),fpremio:new a.NI("",a.kI.minLength(2)),ffrazionamento:new a.NI("",a.kI.minLength(2)),fdurata:new a.NI("",a.kI.minLength(2)),fmontatnte:new a.NI("",a.kI.minLength(2)),fmontanteprov:new a.NI("",a.kI.minLength(2)),fprovvigione:new a.NI("",a.kI.minLength(2)),fprovvigioneout:new a.NI("",a.kI.minLength(1)),fplmt:new a.NI("",a.kI.minLength(2))}),u.piker("registrazioneTipo").subscribe(c=>{this.tipo=c.value}),u.piker("registrazioneSoceta").subscribe(c=>{this.soceta=c.value}),u.piker("ramo").subscribe(c=>{this.ramo=c.value})}POPUPSuccess(){this.snackBar.open("Caricamento Riuscito!","!",{duration:6e3,horizontalPosition:"center",verticalPosition:"top"})}POPUPMesage(e){this.snackBar.open(e,"!",{duration:6e3,horizontalPosition:"center",verticalPosition:"top"})}popupinfinity(){this.dialog.open(oo).afterClosed().subscribe(t=>{})}edit_operazione(){this._cliente.get(this.clienteId).subscribe(e=>{this.nomesel=e.nome,this.cosel=e.cognome,this.socetclisel=e.societa}),this._operation.get(this.id).subscribe(e=>{this.data=this.datepipe.transform(e.data,"yyyy-MM-dd"),this.tiposel=e.registrazione,this.socetasel=e.societa,this.ramosel=String(e.ramo),this.onRamo(e.ramo),this.tipologiasel=e.tipologia,this.compagniasel=e.compagnia,this.prodottosel=e.prodotto,this.premiosel=e.premio,this.frazionamentosel=e.frazionamento,this.duratasel=e.durata,this.montantesel=e.montante,this.montanteprosel=e.montanteprov,this.provvigionesel=e.provvigione,this.provvigioneoutpsel=String(e.provvigione),this.plmtsel=e.risultato,this.commentosel=String(e.commento),"RCA"===e.tipologia?(this.provvigioneout=Number(e.provvigione)<=0?.05:Number(e.provvigione)/100,this.provvigioneoutp=100*this.provvigioneout):"RE"===e.tipologia?(this.provvigioneout=Number(e.provvigione)<=0?.1:Number(e.provvigione)/100,this.provvigioneoutp=100*this.provvigioneout):(this.provvigioneout=Number(e.provvigione)/100,this.provvigioneoutp=100*this.provvigioneout)})}onRamo(e){this.vramo=e,"Vita"===this.vramo?(this._piker.piker("vitatipologia").subscribe(t=>{this.tipologia=t.value}),this._piker.piker("vitacompagnia").subscribe(t=>{this.compagnia=t.value}),this._piker.piker("vitaprodotto").subscribe(t=>{this.prod=t.value}),this._piker.piker("vitafrazionamento").subscribe(t=>{this.frazionamento=t.value})):"Danni"===this.vramo?(this._piker.piker("dannitipologia").subscribe(t=>{this.tipologia=t.value}),this._piker.piker("dannicompagnia").subscribe(t=>{this.compagnia=t.value}),this._piker.piker("danniprodotto").subscribe(t=>{this.prod=t.value}),this._piker.piker("dannifrazionamento").subscribe(t=>{this.frazionamento=t.value})):"Consulenza"===this.vramo&&(this._piker.piker("consulenzatipologia").subscribe(t=>{this.tipologia=t.value}),this._piker.piker("consulenzafrazionamento").subscribe(t=>{this.frazionamento=t.value}))}cgMontante(e,t,n,i,l){this.montante=Number(e)*Number(t),"RCA"===l?(this.provvigioneout=Number(n)<=0?.05:Number(n)/100,this.provvigioneoutp=100*this.provvigioneout):"RE"===l?(this.provvigioneout=Number(n)<=0?.1:Number(n)/100,this.provvigioneoutp=100*this.provvigioneout):(this.provvigioneout=Number(n)/100,this.provvigioneoutp=100*this.provvigioneout),"Annuale"===i?this.fraznumero=1:"Semestrale"===i?this.fraznumero=2:"Trimestrale"===i?this.fraznumero=4:"Mensile"===i?this.fraznumero=12:this.montantepro=0,this.montantepro=this.montante/Number(this.fraznumero),this.plmt=Number(this.montantepro)*Number(this.provvigioneout)}ngOnInit(){this.id=Number(this.route.snapshot.paramMap.get("opId")),this.clienteId=Number(this.route.snapshot.paramMap.get("clienteId")),this.id&&this.clienteId?this.edit_operazione():this.goreportold()}goreportold(){this.router.navigate(["/report"])}alersu(){this.alert=1,console.log("Operazioni modificata con sucesso!")}alertuploading(){this.alert=1.5,console.log("Modifica in corso! ")}conferma_vita(){if(String(this.formcli.value.fnome).length>0&&String(this.formcli.value.fco).length>0||String(this.formcli.value.fclisoceta).length>0)if(this.formreg.value.fdata.toString().length>2&&this.formreg.value.ftipo.toString().length>2&&this.formreg.value.fsoceta.toString().length>2)if(String(this.form.value.ftipologia).length>2&&String(this.form.value.fcompagnia).length>2&&String(this.form.value.fprodotto).length>2&&String(this.form.value.fpremio).length>0&&String(this.form.value.ffrazionamento).length>0&&String(this.form.value.fdurata).length>0&&String(this.form.value.fprovvigione).length>0)if("Infinity"!=String(this.form.value.ftipologia)&&"infinity"!=String(this.form.value.fcompagnia)&&"infinity"!=String(this.form.value.fprodotto)&&"infinity"!=String(this.form.value.fpremio)&&"infinity"!=String(this.form.value.ffrazionamento)&&"infinity"!=String(this.form.value.fdurata)&&"infinity"!=String(this.form.value.fprovvigione)&&"infinity"!=String(this.form.value.fplmt)){this.alertuploading(),this.alersu(),this.POPUPSuccess();let e=this.formcli.value.fnome,t=this.formcli.value.fco,n=this.formcli.value.fclisoceta;null!==e&&(e=this.formcli.value.fnome.toLowerCase()),null!==t&&(t=this.formcli.value.fco.toLowerCase()),null!==n&&(n=this.formcli.value.fclisoceta.toLowerCase());const s={operation:{commento:String(this.formcommento.value.commento).length>0?this.formcommento.value.fcommento:null,compagnia:this.form.value.fcompagnia,data:`${this.formreg.value.fdata}`,durata:Number(this.form.value.fdurata),frazionamento:this.form.value.ffrazionamento,montante:Number(this.form.value.fdurata)*Number(this.form.value.fpremio),montanteprov:Number(this.form.value.fdurata)*Number(this.form.value.fpremio)/Number(this.fraznumero),premio:Number(this.form.value.fpremio),prodotto:`${this.form.value.fprodotto}`,provvigione:Number(this.form.value.fdurata)*Number(this.form.value.fpremio)*Number(this.form.value.fprovvigione)/100,ramo:this.formramo.value.framo,registrazione:this.formreg.value.ftipo,risultato:Number(this.form.value.fdurata)*Number(this.form.value.fpremio)/Number(this.fraznumero)*(Number(this.form.value.fprovvigione)/100),societa:`${this.formreg.value.fsoceta}`,tipologia:`${this.form.value.ftipologia}`},cliente:{nome:e,cognome:t,societa:n}};this._operation.editOperation(this.id,this.clienteId,s).subscribe(g=>{"ok"==g.status?(this.alersu(),this.montante=0,this.provvigioneout=0,this.montantepro=0,this.plmt=0,this.vramo="",this.goreportold()):(this.montante=0,this.provvigioneout=0,this.montantepro=0,this.plmt=0,this.vramo="",this.POPUPMesage("Caricamento Non Riuscito :("))})}else this.popupinfinity();else this.POPUPMesage(`Compila i campi di ${String(this.formramo.value.framo)}`),console.log(this.form.value);else this.POPUPMesage("Compila i campi della registrazione");else this.POPUPMesage("Compila i campi del Cliente")}conferma_danni(){if(String(this.formcli.value.fnome).length>0&&String(this.formcli.value.fco).length>0||String(this.formcli.value.fclisoceta).length>0)if(this.formreg.value.fdata.toString().length>2&&this.formreg.value.ftipo.toString().length>2&&this.formreg.value.fsoceta.toString().length>2)if(String(this.form.value.ftipologia).length>1&&String(this.form.value.fcompagnia).length>2&&String(this.form.value.fprodotto).length>2&&String(this.form.value.fpremio).length>0&&String(this.form.value.ffrazionamento).length>0)if("Infinity"!=String(this.form.value.ftipologia)&&"infinity"!=String(this.form.value.fcompagnia)&&"infinity"!=String(this.form.value.fprodotto)&&"infinity"!=String(this.form.value.fpremio)&&"infinity"!=String(this.form.value.ffrazionamento)&&"infinity"!=String(this.form.value.fdurata)&&"infinity"!=String(this.form.value.fprovvigione)&&"infinity"!=String(this.form.value.fplmt)){this.alertuploading(),this.alersu(),this.POPUPSuccess();let e=this.formcli.value.fnome,t=this.formcli.value.fco,n=this.formcli.value.fclisoceta;null!==e&&(e=this.formcli.value.fnome.toLowerCase()),null!==t&&(t=this.formcli.value.fco.toLowerCase()),null!==n&&(n=this.formcli.value.fclisoceta.toLowerCase());const s={operation:{commento:String(this.formcommento.value.commento).length>0?this.formcommento.value.fcommento:null,compagnia:this.form.value.fcompagnia,data:`${this.formreg.value.fdata}`,durata:Number(1),frazionamento:this.form.value.ffrazionamento,montante:Number(1)*Number(this.form.value.fpremio),montanteprov:Number(1)*Number(this.form.value.fpremio)/Number(this.fraznumero),premio:Number(this.form.value.fpremio),prodotto:`${this.form.value.fprodotto}`,provvigione:Number("RCA"===this.form.value.ftipologia||"RE"===this.form.value.ftipologia?this.provvigioneoutp:null),ramo:this.formramo.value.framo,registrazione:this.formreg.value.ftipo,risultato:Number(1)*Number(this.form.value.fpremio)/Number(this.fraznumero)*Number("RCA"===this.form.value.ftipologia||"RE"===this.form.value.ftipologia?this.provvigioneout:0),societa:`${this.formreg.value.fsoceta}`,tipologia:`${this.form.value.ftipologia}`},cliente:{nome:e,cognome:t,societa:n}};this._operation.editOperation(this.id,this.clienteId,s).subscribe(g=>{"ok"==g.status?(this.alersu(),this.montante=0,this.provvigioneout=0,this.montantepro=0,this.plmt=0,this.vramo="",this.goreportold()):(this.montante=0,this.provvigioneout=0,this.montantepro=0,this.plmt=0,this.vramo="",this.POPUPMesage("Caricamento Non Riuscito :("))})}else this.popupinfinity();else this.POPUPMesage(`Compila i campi di ${String(this.formramo.value.framo)}`),console.log(this.form.value);else this.POPUPMesage("Compila i campi della registrazione");else this.POPUPMesage("Compila i campi del Cliente")}conferma_cons(){if(String(this.formcli.value.fnome).length>0&&String(this.formcli.value.fco).length>0||String(this.formcli.value.fclisoceta).length>0)if(this.formreg.value.fdata.toString().length>2&&this.formreg.value.ftipo.toString().length>2&&this.formreg.value.fsoceta.toString().length>2)if(String(this.form.value.ftipologia).length>2&&String(this.form.value.fpremio).length>0&&String(this.form.value.ffrazionamento).length>0&&String(this.form.value.fprovvigione).length>0)if("Infinity"!=String(this.form.value.ftipologia)&&"infinity"!=String(this.form.value.fcompagnia)&&"infinity"!=String(this.form.value.fprodotto)&&"infinity"!=String(this.form.value.fpremio)&&"infinity"!=String(this.form.value.ffrazionamento)&&"infinity"!=String(this.form.value.fdurata)&&"infinity"!=String(this.form.value.fprovvigione)&&"infinity"!=String(this.form.value.fplmt)){this.alertuploading(),this.alersu(),this.POPUPSuccess();let e=this.formcli.value.fnome,t=this.formcli.value.fco,n=this.formcli.value.fclisoceta;null!==e&&(e=this.formcli.value.fnome.toLowerCase()),null!==t&&(t=this.formcli.value.fco.toLowerCase()),null!==n&&(n=this.formcli.value.fclisoceta.toLowerCase());const s={operation:{commento:String(this.formcommento.value.commento).length>0?this.formcommento.value.fcommento:null,compagnia:this.form.value.fcompagnia,data:`${this.formreg.value.fdata}`,durata:Number(1),frazionamento:this.form.value.ffrazionamento,montante:Number(1)*Number(this.form.value.fpremio),montanteprov:Number(1)*Number(this.form.value.fpremio)/Number(this.fraznumero),premio:Number(this.form.value.fpremio),prodotto:`${this.form.value.fprodotto}`,provvigione:Number(1)*Number(this.form.value.fpremio)*Number(this.form.value.fprovvigione)/100,ramo:this.formramo.value.framo,registrazione:this.formreg.value.ftipo,risultato:Number(1)*Number(this.form.value.fpremio)/Number(this.fraznumero)*(Number(this.form.value.fprovvigione)/100),societa:`${this.formreg.value.fsoceta}`,tipologia:`${this.form.value.ftipologia}`},cliente:{nome:e,cognome:t,societa:n}};this._operation.editOperation(this.id,this.clienteId,s).subscribe(g=>{"ok"==g.status?(this.alersu(),this.montante=0,this.provvigioneout=0,this.montantepro=0,this.plmt=0,this.vramo="",this.goreportold()):(this.montante=0,this.provvigioneout=0,this.montantepro=0,this.plmt=0,this.vramo="",this.POPUPMesage("Caricamento Non Riuscito :("))})}else this.popupinfinity();else this.POPUPMesage(`Compila i campi di ${String(this.formramo.value.framo)}`),console.log(this.form.value);else this.POPUPMesage("Compila i campi della registrazione");else this.POPUPMesage("Compila i campi del Cliente")}}return r.\u0275fac=function(e){return new(e||r)(o.Y36(T.ux),o.Y36(_.gz),o.Y36(_.F0),o.Y36(z.uw),o.Y36(O.f),o.Y36(S),o.Y36(h.uU),o.Y36(w.e))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-mod-operazioni"]],decls:70,vars:22,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex","flex-shrink-0","items-center","mt-6","sm:mt-0","sm:ml-4"],["mat-raised-button","","class","ml-1 btn-verede","color","warn",3,"click",4,"ngIf"],[1,"flex-auto","p-6","sm:p-10"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-2","gap-6","w-full","min-w-0","ng-star-inserted","mt-4"],[1,"flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden","text-center",3,"formGroup"],[1,"mt-2","mb-2","text-2xl"],[1,"flex","flex-col","gt-xs:flex-row"],["matInput","","type","date","formControlName","fdata","required","",3,"ngModel","ngModelChange"],["matSuffix","",3,"for"],["picker",""],["matNativeControl","","formControlName","ftipo","required","",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["matNativeControl","","formControlName","fsoceta","required","",3,"ngModel","ngModelChange"],["appearance","fill",1,"flex","flex-col","gt-xs:flex-row"],["matInput","","formControlName","fnome",3,"ngModel","ngModelChange"],["matInput","","formControlName","fco",3,"ngModel","ngModelChange"],["matInput","","formControlName","fclisoceta",3,"ngModel","ngModelChange"],["matNativeControl","","formControlName","framo","required","",3,"ngModel","change","ngModelChange"],["vramo",""],["class","flex flex-col flex-auto p-6 bg-card shadow rounded-2xl overflow-hidden text-center",3,"formGroup",4,"ngIf"],[1,"sm:col-span-2","md:col-span-4","lg:col-span-4","flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden","mt-4"],["matInput","","formControlName","fcommento",3,"value"],["mat-raised-button","","color","warn",1,"ml-1","btn-verede",3,"click"],[3,"value"],["matNativeControl","","formControlName","ftipologia","required","",3,"ngModel","ngModelChange"],["matNativeControl","","formControlName","fcompagnia","required","",3,"ngModel","ngModelChange"],["compi",""],["matNativeControl","","formControlName","fprodotto","required","",3,"ngModel","ngModelChange"],["prodotto",""],["matInput","","type","number","formControlName","fpremio","required","",3,"ngModel","change","ngModelChange"],["premio",""],["matPrefix",""],["matSuffix",""],["matNativeControl","","formControlName","ffrazionamento","required","",3,"ngModel","change","ngModelChange"],["fraz",""],["matInput","","type","number","formControlName","fdurata","required","",3,"value","ngModel","change","ngModelChange"],["durata",""],["matInput","","type","number","formControlName","fmontatnte","readonly","",3,"value","ngModel","ngModelChange"],["matInput","","type","number","formControlName","fmontanteprov","readonly","",3,"value","ngModel","ngModelChange"],["matInput","","type","number","formControlName","fprovvigione","required","",3,"ngModel","change","ngModelChange"],["provvigione",""],["matInput","","formControlName","fprovvigioneout","readonly","",3,"value","ngModel","ngModelChange"],["matInput","","formControlName","fplmt","readonly","",3,"value","ngModel","ngModelChange"],["matNativeControl","","formControlName","ftipologia","required","",3,"ngModel","change","ngModelChange"],["tipdan",""],["matInput","","type","number","required","","readonly","",3,"value"],["matInput","","formControlName","fprovvigioneout",3,"value","readonly","ngModel","change","ngModelChange"],["matInput","","type","number","formControlName","fdurata","readonly","",3,"ngModel","ngModelChange"]],template:function(e,t){if(1&e){const n=o.EpF();o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"h2",4),o._uU(5," Modifica Operazione "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(6,"div",5),o.YNc(7,I,2,0,"button",6),o.YNc(8,P,2,0,"button",6),o.YNc(9,Q,2,0,"button",6),o.qZA(),o.qZA(),o.TgZ(10,"div",7),o.TgZ(11,"div",7),o.TgZ(12,"div",8),o.TgZ(13,"form",9),o.TgZ(14,"h1",10),o._uU(15,"Registrazione"),o.qZA(),o.TgZ(16,"mat-form-field",11),o.TgZ(17,"mat-label"),o._uU(18,"Data:"),o.qZA(),o.TgZ(19,"input",12),o.NdJ("ngModelChange",function(l){return t.data=l}),o.qZA(),o._UZ(20,"mat-datepicker-toggle",13),o._UZ(21,"mat-datepicker",null,14),o.qZA(),o.TgZ(23,"mat-form-field",11),o.TgZ(24,"mat-label"),o._uU(25,"Tipo:"),o.qZA(),o.TgZ(26,"select",15),o.NdJ("ngModelChange",function(l){return t.tiposel=l}),o.YNc(27,y,2,2,"option",16),o.qZA(),o.qZA(),o.TgZ(28,"mat-form-field",11),o.TgZ(29,"mat-label"),o._uU(30,"Societ\xe0:"),o.qZA(),o.TgZ(31,"select",17),o.NdJ("ngModelChange",function(l){return t.socetasel=l}),o.YNc(32,k,2,2,"option",16),o.qZA(),o.qZA(),o.qZA(),o.TgZ(33,"form",9),o.TgZ(34,"h1",10),o._uU(35,"Cliente"),o.qZA(),o.TgZ(36,"mat-form-field",18),o.TgZ(37,"mat-label"),o._uU(38,"Nome:"),o.qZA(),o.TgZ(39,"input",19),o.NdJ("ngModelChange",function(l){return t.nomesel=l}),o.qZA(),o.qZA(),o.TgZ(40,"mat-form-field",18),o.TgZ(41,"mat-label"),o._uU(42,"Cognome:"),o.qZA(),o.TgZ(43,"input",20),o.NdJ("ngModelChange",function(l){return t.cosel=l}),o.qZA(),o.qZA(),o.TgZ(44,"mat-label",11),o._uU(45,"Oppure:"),o.qZA(),o.TgZ(46,"mat-form-field",11),o.TgZ(47,"mat-label"),o._uU(48,"Societ\xe0:"),o.qZA(),o.TgZ(49,"input",21),o.NdJ("ngModelChange",function(l){return t.socetclisel=l}),o.qZA(),o.qZA(),o.qZA(),o.TgZ(50,"form",9),o.TgZ(51,"h1",10),o._uU(52,"Ramo:"),o.qZA(),o.TgZ(53,"mat-form-field",11),o.TgZ(54,"mat-label"),o._uU(55,"Ramo:"),o.qZA(),o.TgZ(56,"select",22,23),o.NdJ("change",function(){o.CHM(n);const l=o.MAs(57);return t.onRamo(l.value)})("ngModelChange",function(l){return t.ramosel=l}),o.YNc(58,H,2,2,"option",16),o.qZA(),o.qZA(),o.qZA(),o.YNc(59,R,63,21,"form",24),o.YNc(60,B,60,20,"form",24),o.YNc(61,K,51,18,"form",24),o.qZA(),o.TgZ(62,"div",25),o.TgZ(63,"form",9),o.TgZ(64,"h1",10),o._uU(65,"Commento:"),o.qZA(),o.TgZ(66,"mat-form-field",11),o.TgZ(67,"mat-label"),o._uU(68,"Commento Facoltativo"),o.qZA(),o._UZ(69,"textarea",26),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()}if(2&e){const n=o.MAs(22),i=o.MAs(57);o.xp6(7),o.Q6J("ngIf","Vita"==i.value),o.xp6(1),o.Q6J("ngIf","Danni"==i.value),o.xp6(1),o.Q6J("ngIf","Consulenza"==i.value),o.xp6(4),o.Q6J("formGroup",t.formreg),o.xp6(6),o.Q6J("ngModel",t.data),o.xp6(1),o.Q6J("for",n),o.xp6(6),o.Q6J("ngModel",t.tiposel),o.xp6(1),o.Q6J("ngForOf",t.tipo),o.xp6(4),o.Q6J("ngModel",t.socetasel),o.xp6(1),o.Q6J("ngForOf",t.soceta),o.xp6(1),o.Q6J("formGroup",t.formcli),o.xp6(6),o.Q6J("ngModel",t.nomesel),o.xp6(4),o.Q6J("ngModel",t.cosel),o.xp6(6),o.Q6J("ngModel",t.socetclisel),o.xp6(1),o.Q6J("formGroup",t.formramo),o.xp6(6),o.Q6J("ngModel",t.ramosel),o.xp6(2),o.Q6J("ngForOf",t.ramo),o.xp6(1),o.Q6J("ngIf","Vita"==i.value),o.xp6(1),o.Q6J("ngIf","Danni"==i.value),o.xp6(1),o.Q6J("ngIf","Consulenza"==i.value),o.xp6(2),o.Q6J("formGroup",t.formcommento),o.xp6(6),o.Q6J("value",t.commentosel)}},directives:[h.O5,a._Y,a.JL,a.sg,f.KE,f.hX,C.Nt,a.Fj,a.JJ,a.u,a.Q7,d.nW,f.R9,d.Mq,a.EJ,h.sg,M.lW,a.YN,a.Kr,a.wV,f.qo],pipes:[h.Ov],styles:[".mt-2[_ngcontent-%COMP%]{margin-top:2em}.ml-1[_ngcontent-%COMP%]{margin-left:1em}.mr-1[_ngcontent-%COMP%]{margin-right:1em}.p-4[_ngcontent-%COMP%]{padding:4em}mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center}.main-div[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.btn-verede[_ngcontent-%COMP%]{background-color:#199101!important}.titlecard[_ngcontent-%COMP%]{font-size:xx-large;font-family:Ubuntu-Bold,Serif;color:#000}"]}),r})(),oo=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=o.Xpm({type:r,selectors:[["dialog-content-example-dialog"]],decls:8,vars:0,consts:[["mat-dialog-title",""]],template:function(e,t){1&e&&(o.TgZ(0,"h2",0),o._uU(1,"Errore"),o.qZA(),o.TgZ(2,"h3"),o._uU(3,"ops! Operazione non caricata a causa di un valore Infinito!"),o._UZ(4,"br"),o._uU(5," Controlla l'operazione che vuoi caricare e coreggi."),o.qZA(),o.TgZ(6,"p"),o._uU(7,"Clicca nello spazio vuoto per uscire da questa scermata."),o.qZA())},encapsulation:2}),r})();const eo=[{path:"",component:W}];let to=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[[_.Bz.forChild(eo),M.ot,A.p9,f.lN,Z.Ps,C.c,Z.Ps,x.LD,N.T5,d.FA,T.ZX,q.XK,b.m]]}),r})()}}]);