"use strict";(self.webpackChunkhr=self.webpackChunkhr||[]).push([[861],{3710:(T,u,s)=>{s.d(u,{r:()=>m});var d=s(94650),g=s(67579),c=s(24280),f=s(80458);let m=(()=>{class e{constructor(r,h){this.viewsService=r,this.router=h,this.loadingService=(0,d.f3M)(g.b),this.UserModules=this.viewsService.UserModules$.getValue(),this.loading=document.getElementById("page-loading")}canActivate(r,h){let p=r.data?.view;if(this.showLoading(),this.UserModules?.length>0){if(this.viewsService.isViewAllowed(p))return this.hideLoading(),!0;this.router.navigateByUrl("/auth/access-denied"),this.hideLoading()}else this.viewsService.UserModules$.subscribe(y=>{if(y?.length>0){if(this.viewsService.isViewAllowed(p))return this.hideLoading(),!0;this.router.navigateByUrl("/auth/access-denied"),this.hideLoading()}})}showLoading(){this.loading.style.display="block",this.loading.style.opacity="1",this.loading.style.zIndex="998"}hideLoading(){this.loading.style.display="none",this.loading.style.opacity="0",this.loading.style.zIndex="0"}}return e.\u0275fac=function(r){return new(r||e)(d.LFG(c.Z),d.LFG(f.F0))},e.\u0275prov=d.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},53861:(T,u,s)=>{s.r(u),s.d(u,{SelfServiceSetupModule:()=>F});var d=s(36895),g=s(80458),c=s(74513),f=s(36162),m=s(3710),e=s(94650);let v=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-template-request"]],decls:2,vars:0,template:function(i,a){1&i&&(e.TgZ(0,"p"),e._uU(1,"template-request works!"),e.qZA())}}),t})();var r=s(95751),h=s(30671),p=s(15602),y=s(69846),L=s(35478),w=s(3855),S=s(73546),I=s(93410),R=s(46896),M=s(29721);const _=[{path:"template_request",data:{view:c.S.ss_template_request},children:[{path:"",redirectTo:"index",pathMatch:f.U.full},{path:"index",component:(()=>{class t extends r.U{constructor(i){super(),this.templatesService=i,this.isLoaded=!1,this.mandatoryColomns=["Ser","en_Name","ar_Name","levels","hR_PendingAction","actions"],this.cellWithHoverList=[{col:"levels",hoverProperty:"hoverLevels",checkProperty:"showHover"}]}onChangeBusinessAndCompanyId(){this.dataSource?.data?.length>0&&(this.dataSource=new h.by(null)),this.checkNoBusinessOrCompany()&&this.getList(this.pageFromUrl>0?this.pageFromUrl:this.firstPage)}ngOnInit(){}getList(i,a){this.dataSource=new h.by(null),this.isLoaded=!1,this.page.pageIndex=i,a&&(this.page.pageSize=a),this.removePageParams(),this.templatesService.GetList({PageNumber:i,pageSize:this.page.pageSize}).pipe(this.cancelRequest()).subscribe(n=>{if(n.message.messageType==p.u.Success){if(0==n.data.length&&i>1)return void this.getList(this.prevPage);this.dataSource=new h.by(function C(t,l){let i=new y.El;return t.map(a=>({...a,levels:0==a.core_SS_Template_Details.length?"":1==a.core_SS_Template_Details.length?(0,L._f)(a.core_SS_Template_Details[0].ar_Name,a.core_SS_Template_Details[0].en_Name):`<span class="item-table-background-blue pointer"> <img src="${i.multi_items}" width="12" />\n                             ${L.M6.translate("multipleLevels",l)}\n                        </span>`,hoverLevels:"<span>"+(a.core_SS_Template_Details.length>0?a.core_SS_Template_Details.map((o,n)=>`${n+1}- `+(0,L._f)(o.ar_Name,o.en_Name)).join("<hr />"):"")+"</span>",showHover:a.core_SS_Template_Details.length>1}))}(n.data,this.languageService)),this.isLoaded=!0,this.page.length=n.meta.totalItemCount,this.page.meta=n.meta}else this.errorList(n?.message?.messages)})}delete(i){this.showLoading(),this.templatesService.Delete(i.id).subscribe(a=>{a.message.messageType==p.u.Success?(this.getList(1==this.dataSource.data.length&&this.currentPage>1?this.prevPage:this.currentPage,this.page.pageSize),this.deleteSuccessfullyMsg("templateRemoved")):this.errorList(a?.message?.messages),this.hideLoading()})}onDelete(i){let a=this.msgTranslate(i.ar_Name,i.en_Name);this.deleteDialog(a).subscribe(o=>{o&&this.delete(i)})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(w.$))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-template-request-index"]],features:[e.qOj],decls:5,vars:7,consts:[[1,"title-no-margin","title-section","fixed-title"],["title","templatesRequests","parentTitle","selfService","TitleHasGlobalFunc","",3,"globalFunctions"],[1,"index-card"],[3,"isLoaded","mandatoryColomns","page","actions","dataSource","cellWithDifferentHoverList","onChangePage","deleteRow"]],template:function(i,a){1&i&&(e.TgZ(0,"mat-card-title",0),e._UZ(1,"page-title",1),e.qZA(),e.TgZ(2,"mat-card",2)(3,"mat-card-content")(4,"app-material-table",3),e.NdJ("onChangePage",function(n){return a.getList(n.pageIndex+1,n.pageSize)})("deleteRow",function(n){return a.onDelete(n)}),e.qZA()()()),2&i&&(e.xp6(1),e.Q6J("globalFunctions",a.globalFunctions),e.xp6(3),e.Q6J("isLoaded",a.isLoaded)("mandatoryColomns",a.mandatoryColomns)("page",a.page)("actions",a.rowFunctions)("dataSource",a.dataSource)("cellWithDifferentHoverList",a.cellWithHoverList))},dependencies:[S.a8,S.dn,S.n5,I.I,R.T,M.X]}),t})(),data:{view:c.S.ss_template_request_index},canActivate:[m.r]},{path:"add",component:v,data:{view:c.S.add_ss_template_request},canActivate:[m.r]},{path:"edit/:id",component:v,data:{view:c.S.add_ss_template_request},canActivate:[m.r]}]}];let A=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.Bz.forChild(_),g.Bz]}),t})();var D=s(86128),U=s(49274);let F=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,A,S.QW,D.m,U.aw]}),t})()}}]);