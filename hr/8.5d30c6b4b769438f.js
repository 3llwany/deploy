"use strict";(self.webpackChunkhr=self.webpackChunkhr||[]).push([[8],{3710:(z,I,s)=>{s.d(I,{r:()=>d});var m=s(94650),T=s(67579),A=s(24280),g=s(80458);let d=(()=>{class p{constructor(f,_){this.viewsService=f,this.router=_,this.loadingService=(0,m.f3M)(T.b),this.UserModules=this.viewsService.UserModules$.getValue(),this.loading=document.getElementById("page-loading")}canActivate(f,_){let h=f.data?.view;if(this.showLoading(),this.UserModules?.length>0){if(this.viewsService.isViewAllowed(h))return this.hideLoading(),!0;this.router.navigateByUrl("/auth/access-denied"),this.hideLoading()}else this.viewsService.UserModules$.subscribe(v=>{if(v?.length>0){if(this.viewsService.isViewAllowed(h))return this.hideLoading(),!0;this.router.navigateByUrl("/auth/access-denied"),this.hideLoading()}})}showLoading(){this.loading.style.display="block",this.loading.style.opacity="1",this.loading.style.zIndex="998"}hideLoading(){this.loading.style.display="none",this.loading.style.opacity="0",this.loading.style.zIndex="0"}}return p.\u0275fac=function(f){return new(f||p)(m.LFG(A.Z),m.LFG(g.F0))},p.\u0275prov=m.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},63008:(z,I,s)=>{s.r(I),s.d(I,{SapBusinessOneSetupModule:()=>he});var m=s(36895),T=s(92634),A=s(80458),g=s(30671),d=s(15602),p=s(95751),e=s(94650),f=s(44222),_=s(93410),h=s(46896),v=s(29721),u=s(73546);let q=(()=>{class o extends p.U{constructor(a){super(),this.systemInstanceService=a,this.mandatoryColomns=["Ser","id","en_Name","ar_Name","actions"],this.optionalColomns=["serverName","licenseServer","dbUserName","dbPassWord","companyDB","userName","password","unit_Mesaure","enumDbServerType"],this.isLoaded=!1}ngOnInit(){}onChangeBusinessAndCompanyId(){this.dataSource?.data?.length>0&&(this.dataSource=new g.by(null)),this.checkNoBusinessOrCompany()&&this.getList(this.pageFromUrl>0?this.pageFromUrl:this.firstPage)}getList(a,t){this.isLoaded=!1,this.removePageParams(),this.page.pageIndex=a,t&&(this.page.pageSize=t),this.systemInstanceService.getList({PageNumber:a,pageSize:this.page.pageSize}).pipe(this.cancelRequest()).subscribe(i=>{if(i.message.messageType==d.u.Success){if(0==i.data.length&&a>1)return void this.getList(this.prevPage);this.dataSource=new g.by(i.data),this.isLoaded=!0,this.page.length=i.meta.totalItemCount,this.page.meta=i.meta}else this.errorList(i?.message?.messages)})}onDelete(a){let t=this.msgTranslate(a.ar_Name,a.en_Name);this.deleteDialog(t).subscribe(r=>{r&&this.delete(a)})}delete(a){this.showLoading(),this.systemInstanceService.Delete(a.id).subscribe(t=>{t.message.messageType==d.u.Success?(this.deleteSuccessfullyMsg("sapSystemInstanceRemoved"),this.getList(1==this.dataSource.data.length&&this.currentPage>1?this.prevPage:this.currentPage,this.page.pageSize)):this.errorList(t?.message?.messages),this.hideLoading()})}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(f.B))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-system-instance-index"]],features:[e.qOj],decls:6,vars:8,consts:[[1,"row"],[1,"col-12"],[1,"index-card"],["title","sapSystemInstance","TitleHasGlobalFunc","",3,"globalFunctions"],[3,"isLoaded","dataSource","mandatoryColomns","optionalColomns","exportService","page","actions","onChangePage","deleteRow"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"mat-card",2)(3,"mat-card-title"),e._UZ(4,"page-title",3),e.qZA(),e.TgZ(5,"app-material-table",4),e.NdJ("onChangePage",function(i){return t.getList(i.pageIndex+1,i.pageSize)})("deleteRow",function(i){return t.onDelete(i)}),e.qZA()()()()),2&a&&(e.xp6(4),e.Q6J("globalFunctions",t.globalFunctions),e.xp6(1),e.Q6J("isLoaded",t.isLoaded)("dataSource",t.dataSource)("mandatoryColomns",t.mandatoryColomns)("optionalColomns",t.optionalColomns)("exportService",t.systemInstanceService)("page",t.page)("actions",t.rowFunctions))},dependencies:[_.I,h.T,v.X,u.a8,u.n5]}),o})();var F=s(43130),l=s(24006),Z=s(35478),L=s(78937),J=s(18521),y=s(26315);let M=(()=>{class o extends J.K{constructor(){super()}create(a){return this.post("SapB1AccountMapSetup/Create",a)}update(a){return this.post("SapB1AccountMapSetup/Edit",a)}getList(a){return this.get("SapB1AccountMapSetup/GetList",{params:{...a,$expand:y.db.PAY_Variable}})}getAll(){return this.get("SapB1AccountMapSetup/GetAll",{params:{$expand:`${y.db.SAP_IntegrationPurpose},${y.db.core_Org}/${y.db.Core_Org_Structure_Org}`}})}getById(a){return this.get("SapB1AccountMapSetup/GetAll",{params:{$filter:`id eq ${a}`,$expand:`${y.db.SAP_IntegrationPurpose}`}})}Delete(a){return this.delete("SapB1AccountMapSetup/Delete",{params:{Id:a}})}exportExcel(){this.getAll()}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var O=s(25273),Y=s(92393),U=s(12613),G=s(61064),x=s(52682),w=s(56500),V=s(57566),$=s(59549),K=s(21194),X=s(72090),D=s(37034),B=s(38982),W=s(40363),H=s(52013),ee=s(85443),te=s(15362),ae=s(50260),N=s(49274);function oe(o,n){if(1&o&&e._UZ(0,"app-add-new-btn",5),2&o){const a=e.oxw();e.MGl("url","/sap-business-one-setup/",a.moduleId,"/sap-account-map/add"),e.Q6J("params",a.parentParam)}}function se(o,n){if(1&o){const a=e.EpF();e.TgZ(0,"reset-form-btn",40),e.NdJ("click",function(){e.CHM(a);const r=e.oxw();return e.KtG(r.clearForm())}),e.qZA()}}const P=function(o){return{"hidden-field":o}};let Q=(()=>{class o extends p.U{constructor(a){super(),this.sapAccountMapService=a,this.submitted=!1,this.jobTitleRadioList=[{value:!0,label:"jobTitle",cssClass:"col-md-4 col-12"},{value:!1,label:"jobFamily",cssClass:"col-md-4 col-12"},{value:null,label:"none",cssClass:"col-md-4 col-12"}],this.bankRadioList=[{value:!0,label:"bothBankWithInstruction"},{value:!1,label:"cash"}],this.isDebitRadioList=[{value:!0,label:"debit"},{value:!1,label:"credit"}]}ngOnInit(){this.form=this.fb.group({id:[0,{nonNullable:!0}],systemInstanceId:[null,[l.kI.required]],integrationPurpose_ID:[null,[l.kI.required]],payment_ID:[null,[l.kI.required]],variable_ID:[null,[l.kI.required]],accountOrPartnerCode:[null,[l.kI.required,L.w.whiteSpace]],is_vendor:[null],is_Aggregated:[!0],ignoreCostCenters:[null],organizationTypeId:[null],organization_ID:[null],isJobtitleType:[!0],jobTitle_ID:[null,[l.kI.required]],job_Title_Family_ID:[null],bothBankCash:[!0],bank_ID:[null],is_Debit:[!0],defualtOcrCode1:[null],defualtOcrCode2:[null],defualtOcrCode3:[null],defualtOcrCode4:[null],defualtOcrCode5:[null],defualtProj_Code:[null],udF1_Name:[null],udF1_Value:[null],udF2_Name:[null],udF2_Value:[null],udF3_Name:[null],udF3_Value:[null]}),this.activatedRoute.paramMap.subscribe(a=>{this.sapAccountMapId=Number(a.get("sapAccountMapId"))??0})}onChangeBusinessAndCompanyId(){this.sapAccountMapId>0&&this.checkNoBusinessOrCompany()&&this.getById()}get formCtrls(){return this.form.controls}getById(){this.showLoading(),this.sapAccountMapService.getById(this.sapAccountMapId).subscribe(a=>{if(a.message.messageType==d.u.Success){let t=function k(o){return o.map(n=>({...n._I_PAY_Variable_SAP_SystemInstance_AccountNumber_COMM_Bank,organizationTypeId:n.orgTypeId,systemInstanceId:n._I_PAY_Variable_SAP_SystemInstance_AccountNumber_COMM_Bank?.saP_IntegrationPurpose?.systemInstance_ID}))}(a.data);this.sapAccountMapToEdit(t[0])}else this.errorList(a?.message?.messages);this.hideLoading()})}sapAccountMapToEdit(a){this.form.patchValue(a),this.formCtrls.integrationPurpose_ID.setValue(a.integrationPurpose_ID),this.formCtrls.variable_ID.setValue(a.variable_ID),this.formCtrls.organization_ID.setValue(a.organization_ID),setTimeout(()=>{this.formCtrls.jobTitle_ID.setValue(a.jobTitle_ID),this.formCtrls.job_Title_Family_ID.setValue(a.job_Title_Family_ID)},20);let t=null;a.job_Title_Family_ID?t=!1:a.jobTitle_ID&&(t=!0),this.formCtrls.isJobtitleType.setValue(t),this.onChangeIsJobRadio(t,!0)}submit(){if(this.submitted=!0,this.form.valid){const a={ID:this.form.value.id,IntegrationPurpose_ID:this.form.value.integrationPurpose_ID,Payment_ID:this.form.value.payment_ID,Variable_ID:this.form.value.variable_ID,AccountOrPartnerCode:this.form.value.accountOrPartnerCode,Is_vendor:this.form.value.is_vendor??!1,Is_Aggregated:this.form.value.is_Aggregated??!1,IgnoreCostCenters:this.form.value.ignoreCostCenters??!1,Organization_ID:this.form.value.organization_ID,JobTitle_ID:this.form.value.jobTitle_ID,Job_Title_Family_ID:this.form.value.job_Title_Family_ID,BothBankCash:this.form.value.bothBankCash??!1,Bank_ID:this.form.value.bank_ID,Is_Debit:this.form.value.is_Debit??!1,DefualtOcrCode1:this.form.value.defualtOcrCode1,DefualtOcrCode2:this.form.value.defualtOcrCode2,DefualtOcrCode3:this.form.value.defualtOcrCode3,DefualtOcrCode4:this.form.value.defualtOcrCode4,DefualtOcrCode5:this.form.value.defualtOcrCode5,DefualtProj_Code:this.form.value.defualtProj_Code,UDF1_Name:this.form.value.udF1_Name,UDF1_Value:this.form.value.udF1_Value,UDF2_Name:this.form.value.udF2_Name,UDF2_Value:this.form.value.udF2_Value,UDF3_Name:this.form.value.udF3_Name,UDF3_Value:this.form.value.udF3_Value};0==a.ID?this.create(a):this.update(a)}}create(a){this.showLoading(),this.sapAccountMapService.create(a).subscribe(t=>{t?.message?.messageType==d.u.Success?(this.addSuccessfullyMsg("canEditOrRemoveFromIndex","newSapAccountMapAdded"),this.changeDataAfterAddAndEdit(t.data)):this.errorList(t?.message?.messages),this.hideLoading()})}update(a){this.showLoading(),this.sapAccountMapService.update(a).subscribe(t=>{t.message.messageType==d.u.Success?(this.updateSuccessfullyMsg("sapAccountMapUpdated"),this.changeDataAfterAddAndEdit(t.data)):this.errorList(t?.message?.messages),this.hideLoading()})}changeDataAfterAddAndEdit(a){this.sapAccountMapId=a.id,this.formCtrls.id.setValue(this.sapAccountMapId),this.navigateTo(`/sap-business-one-setup/${this.moduleId}/sap-account-map/edit/${this.sapAccountMapId}`),this.formCtrls.is_Aggregated.setValue(a.is_Aggregated)}clearForm(){this.form.reset({id:0,is_Aggregated:!0,isJobtitleType:!0,bothBankCash:!0,is_Debit:!0}),this.submitted=!1}onChangeIsVendor(a){a&&this.formCtrls.is_Aggregated.setValue(!1)}onChangeIsAggregated(a){a&&this.formCtrls.is_vendor.setValue(!1)}onChangeIsJobRadio(a,t=!1){t||(this.formCtrls.jobTitle_ID.reset(),this.formCtrls.job_Title_Family_ID.reset()),1==a?(this.formCtrls.jobTitle_ID.setValidators([l.kI.required]),this.formCtrls.job_Title_Family_ID.clearValidators()):0==a?(this.formCtrls.job_Title_Family_ID.setValidators([l.kI.required]),this.formCtrls.jobTitle_ID.clearValidators()):(this.formCtrls.jobTitle_ID.clearValidators(),this.formCtrls.job_Title_Family_ID.clearValidators()),this.formCtrls.jobTitle_ID.updateValueAndValidity(),this.formCtrls.job_Title_Family_ID.updateValueAndValidity()}onChangeIsBankRadio(a){a||this.formCtrls.bank_ID.setValue(null)}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(M))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-sap-account-map"]],features:[e.qOj],decls:83,vars:97,consts:[[1,"row"],[1,"col-12"],[1,"form-card"],["addTitle","sapAccountMap","editTitle","editSapAccountMap",3,"id"],[3,"url","params",4,"ngIf"],[3,"url","params"],[1,"container-fluid"],[3,"formGroup"],[1,"col-md-6","col-12"],[3,"control","submitted","filter"],[3,"control","systemInstanceControl","submitted","filter"],[3,"control","paymentControl","submitted","filterByPayment"],[1,"col-md-3","col-12"],["label","accountOrPartnerCode",3,"control","submitted"],["label","is_vendor","styleClass","mtop-14",3,"control","onChange"],["label","is_Aggregated","styleClass","mtop-14",3,"control","onChange"],["label","ignoreCostCenters","styleClass","mtop-14",3,"control"],[3,"control","orgTypeControl","submitted","filter"],[1,"col-md-8","col-12"],[1,"mtop-14",3,"control","radioList","submitted","change"],[1,"col-md-4","col-12",3,"ngClass"],[3,"control","organizationControl","organizationControlRequired","submitted","filter"],[1,"col-md-6","col-12",3,"ngClass"],["label","debitOrCredit",3,"control","radioList","submitted"],[1,"col-md-4","col-12"],["label","defualtOcrCode1",3,"control","submitted"],["label","defualtOcrCode2",3,"control","submitted"],["label","defualtOcrCode3",3,"control","submitted"],["label","defualtOcrCode4",3,"control","submitted"],["label","defualtOcrCode5",3,"control","submitted"],["label","defualtProj_Code",3,"control","submitted"],["label","udF1_Name",3,"control","submitted"],["label","udF1_Value",3,"control","submitted"],["label","udF2_Name",3,"control","submitted"],["label","udF2_Value",3,"control","submitted"],["label","udF3_Name",3,"control","submitted"],["label","udF3_Value",3,"control","submitted"],["align","end"],[3,"id","onClick"],[3,"click",4,"ngIf"],[3,"click"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"mat-card",2)(3,"mat-card-title"),e._UZ(4,"page-title",3),e.YNc(5,oe,1,2,"app-add-new-btn",4),e._UZ(6,"app-back-btn",5),e.qZA(),e.TgZ(7,"mat-card-content",6)(8,"div",0)(9,"div",1)(10,"form",7)(11,"div",0)(12,"div",8),e._UZ(13,"app-sap-system-instance-dropdown",9),e.qZA(),e.TgZ(14,"div",8),e._UZ(15,"app-sap-integration-purpose-by-system-instance-dropdown",10),e.qZA(),e.TgZ(16,"div",8),e._UZ(17,"app-payment-dropdown",9),e.qZA(),e.TgZ(18,"div",8),e._UZ(19,"variable-dropdown",11),e.qZA(),e.TgZ(20,"div",12),e._UZ(21,"app-input",13),e.qZA(),e.TgZ(22,"div",12)(23,"app-check-box",14),e.NdJ("onChange",function(i){return t.onChangeIsVendor(i)}),e.qZA()(),e.TgZ(24,"div",12)(25,"app-check-box",15),e.NdJ("onChange",function(i){return t.onChangeIsAggregated(i)}),e.qZA()(),e.TgZ(26,"div",12),e._UZ(27,"app-check-box",16),e.qZA(),e.TgZ(28,"div",8),e._UZ(29,"app-org-types-dropdown-current-structure",9),e.qZA(),e.TgZ(30,"div",8),e._UZ(31,"app-organization-by-org-type-dropdown",17),e.qZA(),e.TgZ(32,"div",18)(33,"app-radio-button",19),e.NdJ("change",function(i){return t.onChangeIsJobRadio(i)}),e.qZA()(),e.TgZ(34,"div",20),e._UZ(35,"app-job-title-by-org-dropdown",21),e.qZA(),e.TgZ(36,"div",20),e._UZ(37,"app-job-family-by-org-dropdown",21),e.qZA(),e.TgZ(38,"div",8)(39,"app-radio-button",19),e.NdJ("change",function(i){return t.onChangeIsBankRadio(i.value)}),e.qZA()(),e.TgZ(40,"div",22),e._UZ(41,"app-bank-dropdown",9),e.qZA(),e.TgZ(42,"div",1),e._UZ(43,"app-radio-button",23),e.qZA(),e.TgZ(44,"div",24),e._UZ(45,"app-input",25),e.qZA(),e.TgZ(46,"div",24),e._UZ(47,"app-input",26),e.qZA(),e.TgZ(48,"div",24),e._UZ(49,"app-input",27),e.qZA(),e.TgZ(50,"div",24),e._UZ(51,"app-input",28),e.qZA(),e.TgZ(52,"div",24),e._UZ(53,"app-input",29),e.qZA(),e.TgZ(54,"div",24),e._UZ(55,"app-input",30),e.qZA(),e.TgZ(56,"div",24)(57,"mat-label"),e._uU(58),e.ALo(59,"translate"),e.qZA()(),e.TgZ(60,"div",24),e._UZ(61,"app-input",31),e.qZA(),e.TgZ(62,"div",24),e._UZ(63,"app-input",32),e.qZA(),e.TgZ(64,"div",24)(65,"mat-label"),e._uU(66),e.ALo(67,"translate"),e.qZA()(),e.TgZ(68,"div",24),e._UZ(69,"app-input",33),e.qZA(),e.TgZ(70,"div",24),e._UZ(71,"app-input",34),e.qZA(),e.TgZ(72,"div",24)(73,"mat-label"),e._uU(74),e.ALo(75,"translate"),e.qZA()(),e.TgZ(76,"div",24),e._UZ(77,"app-input",35),e.qZA(),e.TgZ(78,"div",24),e._UZ(79,"app-input",36),e.qZA()()()()()(),e.TgZ(80,"mat-card-actions",37)(81,"submit-btn",38),e.NdJ("onClick",function(){return t.submit()}),e.qZA(),e.YNc(82,se,1,0,"reset-form-btn",39),e.qZA()()()()),2&a&&(e.xp6(4),e.Q6J("id",t.formCtrls.id.value),e.xp6(1),e.Q6J("ngIf",t.formCtrls.id.value>0),e.xp6(1),e.MGl("url","/sap-business-one-setup/",t.moduleId,"/sap-account-map/index"),e.Q6J("params",t.pageParams),e.xp6(4),e.Q6J("formGroup",t.form),e.xp6(3),e.Q6J("control",t.formCtrls.systemInstanceId)("submitted",t.submitted)("filter",!0),e.xp6(2),e.Q6J("control",t.formCtrls.integrationPurpose_ID)("systemInstanceControl",t.formCtrls.systemInstanceId)("submitted",t.submitted)("filter",!0),e.xp6(2),e.Q6J("control",t.formCtrls.payment_ID)("submitted",t.submitted)("filter",!0),e.xp6(2),e.Q6J("control",t.formCtrls.variable_ID)("paymentControl",t.formCtrls.payment_ID)("submitted",t.submitted)("filterByPayment",!0),e.xp6(2),e.Q6J("control",t.formCtrls.accountOrPartnerCode)("submitted",t.submitted),e.xp6(2),e.Q6J("control",t.formCtrls.is_vendor),e.xp6(2),e.Q6J("control",t.formCtrls.is_Aggregated),e.xp6(2),e.Q6J("control",t.formCtrls.ignoreCostCenters),e.xp6(2),e.Q6J("control",t.formCtrls.organizationTypeId)("submitted",t.submitted)("filter",!0),e.xp6(2),e.Q6J("control",t.formCtrls.organization_ID)("orgTypeControl",t.formCtrls.organizationTypeId)("submitted",t.submitted)("filter",!0),e.xp6(2),e.Q6J("control",t.formCtrls.isJobtitleType)("radioList",t.jobTitleRadioList)("submitted",t.submitted),e.xp6(1),e.Q6J("ngClass",e.VKq(91,P,1!=t.formCtrls.isJobtitleType.value)),e.xp6(1),e.Q6J("control",t.formCtrls.jobTitle_ID)("organizationControl",t.formCtrls.organization_ID)("organizationControlRequired",!1)("submitted",t.submitted)("filter",!0),e.xp6(1),e.Q6J("ngClass",e.VKq(93,P,0!=t.formCtrls.isJobtitleType.value)),e.xp6(1),e.Q6J("control",t.formCtrls.job_Title_Family_ID)("organizationControl",t.formCtrls.organization_ID)("organizationControlRequired",!1)("submitted",t.submitted)("filter",!0),e.xp6(2),e.Q6J("control",t.formCtrls.bothBankCash)("radioList",t.bankRadioList)("submitted",t.submitted),e.xp6(1),e.Q6J("ngClass",e.VKq(95,P,1!=t.formCtrls.bothBankCash.value)),e.xp6(1),e.Q6J("control",t.formCtrls.bank_ID)("submitted",t.submitted)("filter",!0),e.xp6(2),e.Q6J("control",t.formCtrls.is_Debit)("radioList",t.isDebitRadioList)("submitted",t.submitted),e.xp6(2),e.Q6J("control",t.formCtrls.defualtOcrCode1)("submitted",t.submitted),e.xp6(2),e.Q6J("control",t.formCtrls.defualtOcrCode2)("submitted",t.submitted),e.xp6(2),e.Q6J("control",t.formCtrls.defualtOcrCode3)("submitted",t.submitted),e.xp6(2),e.Q6J("control",t.formCtrls.defualtOcrCode4)("submitted",t.submitted),e.xp6(2),e.Q6J("control",t.formCtrls.defualtOcrCode5)("submitted",t.submitted),e.xp6(2),e.Q6J("control",t.formCtrls.defualtProj_Code)("submitted",t.submitted),e.xp6(3),e.Oqu(e.lcZ(59,85,"udF1")),e.xp6(3),e.Q6J("control",t.formCtrls.udF1_Name)("submitted",t.submitted),e.xp6(2),e.Q6J("control",t.formCtrls.udF1_Value)("submitted",t.submitted),e.xp6(3),e.Oqu(e.lcZ(67,87,"udF2")),e.xp6(3),e.Q6J("control",t.formCtrls.udF2_Name)("submitted",t.submitted),e.xp6(2),e.Q6J("control",t.formCtrls.udF2_Value)("submitted",t.submitted),e.xp6(3),e.Oqu(e.lcZ(75,89,"udF3")),e.xp6(3),e.Q6J("control",t.formCtrls.udF3_Name)("submitted",t.submitted),e.xp6(2),e.Q6J("control",t.formCtrls.udF3_Value)("submitted",t.submitted),e.xp6(2),e.Q6J("id",t.formCtrls.id.value),e.xp6(1),e.Q6J("ngIf",0==t.formCtrls.id.value))},dependencies:[m.mk,m.O5,O.a,Y._,U.u,G.a,x.J,w.J,V.p,h.T,$.hX,u.a8,u.dn,u.n5,u.hq,K.s,X.n,D.K,B._,W.y,H.t,ee.A,te.s,ae.v,l._Y,l.JL,l.sg,N.X$],styles:["mat-label[_ngcontent-%COMP%]{display:inline-block;margin-top:20px!important}"]}),o})();var ne=s(4859),ie=s(44850);let re=(()=>{class o extends p.U{constructor(a){super(),this.sapAccountMapService=a,this.mandatoryColomns=["Ser","id","variables","integrationPurpose","accountOrPartnerCode","accountType","actions"],this.optionalColomns=["bothBankCash","is_Aggregated","is_vendor","ignoreCostCenters","defualtOcrCode1","defualtOcrCode2","defualtOcrCode3","defualtOcrCode4","defualtOcrCode5","defualtProj_Code","udF1_Name","udF1_Value","udF2_Name","udF2_Value","udF3_Name","udF3_Value"],this.isLoaded=!1}ngOnInit(){this.form=this.fb.group({systemInstance:[null],integrationPurpose_ID:[null]})}get formCtrls(){return this.form.controls}onChangeBusinessAndCompanyId(){this.dataSource?.data?.length>0&&(this.dataSource=new g.by(null)),this.checkNoBusinessOrCompany()&&this.getList(this.pageFromUrl>0?this.pageFromUrl:this.firstPage)}searchList(){this.form?.value.integrationPurpose_ID?this.getList(this.firstPage,{$filter:`IntegrationPurpose_ID eq ${this.form.value.integrationPurpose_ID}`}):this.warning("chooseIntegrationPurpose")}getList(a,t={},r){this.isLoaded=!1,this.removePageParams(),this.page.pageIndex=a,r&&(this.page.pageSize=r);let i={PageNumber:a,pageSize:this.page.pageSize,...t};this.sapAccountMapService.getList(i).pipe(this.cancelRequest()).subscribe(C=>{if(C.message.messageType==d.u.Success){if(0==C.data.length&&a>1)return void this.getList(this.prevPage);this.dataSource=new g.by(function E(o){return o.map(n=>({...n,integrationPurpose:n.saP_IntegrationPurpose?.name,accountType:n.is_Debit?"Debit":"Credit",variables:(0,Z._f)(n.pay_Variable?.arName,n.pay_Variable?.name),bothBankCash:!(!n.bothBankCash||n.bank_ID)}))}(C.data)),this.isLoaded=!0,this.page.length=C.meta.totalItemCount,this.page.meta=C.meta}else this.errorList(C?.message?.messages)})}onDelete(a){let t=this.msgTranslate(`${a.variables} - ${a.integrationPurpose}`);this.deleteDialog(t).subscribe(r=>{r&&this.delete(a)})}delete(a){this.showLoading(),this.sapAccountMapService.Delete(a.id).subscribe(t=>{t.message.messageType==d.u.Success?(this.deleteSuccessfullyMsg("sapAccountMapRemoved"),this.getList(1==this.dataSource.data.length&&this.currentPage>1?this.prevPage:this.currentPage,this.page.pageSize)):this.errorList(t?.message?.messages),this.hideLoading()})}resetSearch(){this.form.reset(),this.getList(this.firstPage)}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(M))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-sap-account-map-index"]],features:[e.qOj],decls:21,vars:17,consts:[[1,"row"],[1,"col-12"],[1,"index-card"],["title","sapAccountMap","TitleHasGlobalFunc","",3,"globalFunctions"],[1,"container-fluid"],[3,"formGroup"],[1,"col-md-6","col-12"],[3,"control","filter"],[3,"control","systemInstanceControl","filter"],["align","end"],["mat-raised-button","",1,"btn","btn-info","bg-light-info",3,"click"],[3,"click"],[3,"isLoaded","dataSource","mandatoryColomns","optionalColomns","exportService","page","actions","onChangePage","deleteRow"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"mat-card",2)(3,"mat-card-title"),e._UZ(4,"page-title",3),e.qZA(),e.TgZ(5,"mat-card-content",4)(6,"div",0)(7,"div",1)(8,"form",5)(9,"div",0)(10,"div",6),e._UZ(11,"app-sap-system-instance-dropdown",7),e.qZA(),e.TgZ(12,"div",6),e._UZ(13,"app-sap-integration-purpose-by-system-instance-dropdown",8),e.qZA()()()()()(),e.TgZ(14,"mat-card-actions",9)(15,"button",10),e.NdJ("click",function(){return t.searchList()}),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.TgZ(18,"reset-form-btn",11),e.NdJ("click",function(){return t.resetSearch()}),e.qZA()(),e._UZ(19,"mat-divider"),e.TgZ(20,"app-material-table",12),e.NdJ("onChangePage",function(i){return t.getList(i.pageIndex+1,i.pageSize)})("deleteRow",function(i){return t.onDelete(i)}),e.qZA()()()()),2&a&&(e.xp6(4),e.Q6J("globalFunctions",t.globalFunctions),e.xp6(4),e.Q6J("formGroup",t.form),e.xp6(3),e.Q6J("control",t.formCtrls.systemInstance)("filter",!0),e.xp6(2),e.Q6J("control",t.formCtrls.integrationPurpose_ID)("systemInstanceControl",t.formCtrls.systemInstance)("filter",!0),e.xp6(3),e.hij(" ",e.lcZ(17,15,"search")," "),e.xp6(4),e.Q6J("isLoaded",t.isLoaded)("dataSource",t.dataSource)("mandatoryColomns",t.mandatoryColomns)("optionalColomns",t.optionalColomns)("exportService",t.sapAccountMapService)("page",t.page)("actions",t.rowFunctions))},dependencies:[_.I,w.J,h.T,v.X,ne.lW,u.a8,u.dn,u.n5,u.hq,ie.d,D.K,B._,l._Y,l.JL,l.sg,N.X$]}),o})();var R=s(36162),c=s(74513),b=s(3710),S=s(65938);let j=(()=>{class o extends J.K{constructor(){super()}create(a){return this.post("SapB1LoanTypeSetup/Create",a)}update(a){return this.post("SapB1LoanTypeSetup/Edit",a)}getList(a){return this.get("SapB1LoanTypeSetup/GetList",{params:a})}Delete(a){return this.delete("SapB1LoanTypeSetup/Delete",{params:{Id:a}})}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var de=s(26873),ue=s(11526);let pe=(()=>{class o extends p.U{constructor(a,t,r){super(),this.sapLoanTypeAccountService=a,this.dialogRef=t,this.data=r,this.submitted=!1}ngOnInit(){this.form=this.fb.group({id:[0,{nonNullable:!0}],sapSystemId:[null,[l.kI.required]],loanTypeId:[null,[l.kI.required]],debitAccount:[null,[l.kI.required,L.w.whiteSpace]],creditAccount:[null,[l.kI.required,L.w.whiteSpace]],isVendor:[null]}),null!=this.data&&this.sapLoanTypeAccountToEdit(this.data)}get formCtrls(){return this.form.controls}submit(){if(this.submitted=!0,this.form.valid){const a={ID:this.form.value.id,SapSystemId:this.form.value.sapSystemId,LoanTypeId:this.form.value.loanTypeId,DebitAccount:this.form.value.debitAccount,CreditAccount:this.form.value.creditAccount,IsVendor:this.form.value.isVendor??!1};0==a.ID?this.create(a):this.update(a)}}create(a){this.showLoading(),this.sapLoanTypeAccountService.create(a).subscribe(t=>{t?.message?.messageType==d.u.Success?(this.addSuccessfullyMsg("canEditOrRemoveFromIndex","AddSapLoanTypeAccount"),this.dialogRef.close({isUpdate:!0})):this.errorList(t?.message?.messages),this.hideLoading()})}update(a){this.showLoading(),this.sapLoanTypeAccountService.update(a).subscribe(t=>{t.message.messageType==d.u.Success?(this.updateSuccessfullyMsg("updateSapLoanTypeAccount","successfulEdit"),this.dialogRef.close({isUpdate:!0})):this.errorList(t?.message?.messages),this.hideLoading()})}sapLoanTypeAccountToEdit(a){this.form.patchValue(a)}onCloseDialog(){this.dialogRef.close()}clearForm(){this.form.reset({id:0}),this.submitted=!1}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(j),e.Y36(S.so),e.Y36(S.WI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["add-app-sap-loan-type-account"]],features:[e.qOj],decls:22,vars:14,consts:[["mat-dialog-title","",1,"primary-color","font-size-20","m-0","ml-3"],["parentTitle","sapLoanTypeAccount","addTitle","add","editTitle","update",1,"d-inline-block","mtop-10",3,"id"],[1,"container-fluid","mx-0","h-100","mtop-2"],["dialogContainer",""],[1,"row"],[1,"col-12"],[3,"formGroup"],[1,"col-md-12","col-12"],[3,"control","submitted","filter"],["label","debitAccount",3,"control","submitted"],["label","creditAccount",3,"control","submitted"],["label","is_vendor","styleClass","mtop-14",3,"control"],["align","end"],[3,"click"],[3,"id","onClick"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"h4"),e._UZ(2,"page-title",1),e.qZA()(),e.TgZ(3,"mat-dialog-content",2,3)(5,"div",4)(6,"div",5)(7,"form",6)(8,"div",4)(9,"div",7),e._UZ(10,"app-sap-system-instance-dropdown",8),e.qZA(),e.TgZ(11,"div",7),e._UZ(12,"app-loan-types-dropdown",8),e.qZA(),e.TgZ(13,"div",7),e._UZ(14,"app-input",9),e.qZA(),e.TgZ(15,"div",7),e._UZ(16,"app-input",10),e.qZA(),e.TgZ(17,"div",7),e._UZ(18,"app-check-box",11),e.qZA()()()()(),e.TgZ(19,"mat-card-actions",12)(20,"discard-dialog-btn",13),e.NdJ("click",function(){return t.onCloseDialog()}),e.qZA(),e.TgZ(21,"submit-btn",14),e.NdJ("onClick",function(){return t.submit()}),e.qZA()()()),2&a&&(e.xp6(2),e.Q6J("id",t.formCtrls.id.value),e.xp6(5),e.Q6J("formGroup",t.form),e.xp6(3),e.Q6J("control",t.formCtrls.sapSystemId)("submitted",t.submitted)("filter",!0),e.xp6(2),e.Q6J("control",t.formCtrls.loanTypeId)("submitted",t.submitted)("filter",!0),e.xp6(2),e.Q6J("control",t.formCtrls.debitAccount)("submitted",t.submitted),e.xp6(2),e.Q6J("control",t.formCtrls.creditAccount)("submitted",t.submitted),e.xp6(2),e.Q6J("control",t.formCtrls.isVendor),e.xp6(3),e.Q6J("id",t.formCtrls.id.value))},dependencies:[O.a,U.u,V.p,h.T,de.E,u.hq,S.uh,S.xY,D.K,ue.r,l._Y,l.JL,l.sg]}),o})();const me=[{path:"system-instance",data:{view:c.S.system_instance},children:[{path:"",redirectTo:"index",pathMatch:R.U.full},{path:"index",component:q,data:{view:c.S.system_instance_index},canActivate:[b.r]},{path:"add",component:F.x,data:{view:c.S.add_system_instance},canActivate:[b.r]},{path:"edit/:systemInstanceId",component:F.x,data:{view:c.S.add_system_instance},canActivate:[b.r]}]},{path:"sap-account-map",data:{view:c.S.sap_account_map},children:[{path:"",redirectTo:"index",pathMatch:R.U.full},{path:"index",component:re,data:{view:c.S.sap_account_map_index},canActivate:[b.r]},{path:"add",component:Q,data:{view:c.S.add_sap_account_map},canActivate:[b.r]},{path:"edit/:sapAccountMapId",component:Q,data:{view:c.S.add_sap_account_map},canActivate:[b.r]}]},{path:"sap-loan-type-account",component:(()=>{class o extends p.U{constructor(a){super(),this.sapLoanTypeAccountService=a,this.mandatoryColomns=["Ser","id","debitAccount","sapSystem","loanType","actions"],this.optionalColomns=["creditAccount","isVendor"],this.isLoaded=!1}ngOnInit(){}onChangeBusinessAndCompanyId(){this.dataSource?.data?.length>0&&(this.dataSource=new g.by(null)),this.checkNoBusinessOrCompany()&&this.getList(this.firstPage)}getList(a,t){this.isLoaded=!1,this.page.pageIndex=a,t&&(this.page.pageSize=t),this.sapLoanTypeAccountService.getList({PageNumber:a,pageSize:this.page.pageSize}).pipe(this.cancelRequest()).subscribe(i=>{i.message.messageType==d.u.Success?(this.dataSource=new g.by(function le(o){return o.map(n=>({...n,sapSystem:(0,Z._f)(n.saP_SystemInstance?.ar_Name,n.saP_SystemInstance?.en_Name),loanType:(0,Z._f)(n.paY_Loan_TYPE?.ar_Name,n.paY_Loan_TYPE?.en_Name)}))}(i.data)),this.isLoaded=!0,this.page.length=i.meta.totalItemCount,this.page.meta=i.meta):this.errorList(i?.message?.messages)})}onDelete(a){let t=this.msgTranslate(a.debitAccount);this.deleteDialog(t).subscribe(r=>{r&&this.delete(a)})}delete(a){this.showLoading(),this.sapLoanTypeAccountService.Delete(a.id).subscribe(t=>{t.message.messageType==d.u.Success?(this.deleteSuccessfullyMsg("deleteSapLoanTypeAccount","successfulDelete"),this.getList(1==this.dataSource.data.length&&this.currentPage>1?this.prevPage:this.currentPage,this.page.pageSize)):this.errorList(t?.message?.messages),this.hideLoading()})}openAddSapLoanDialog(a){this.dialogsService.addEditDialog(pe,a,{width:"25vw",minWidth:"400px",maxWidth:"500px",maxHeight:"98vh",disableClose:!0,panelClass:"setup-dialog"}).afterClosed().subscribe(t=>{t?.isUpdate&&this.getList(this.firstPage)})}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(j))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-sap-loan-type-account-index"]],features:[e.qOj],decls:6,vars:8,consts:[[1,"row"],[1,"col-12"],[1,"index-card"],["title","sapLoanTypeAccount","TitleHasGlobalFunc","",3,"globalFunctions","action"],[3,"isLoaded","dataSource","mandatoryColomns","optionalColomns","page","exportService","actions","onChangePage","editRow","deleteRow"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"mat-card",2)(3,"mat-card-title")(4,"page-title",3),e.NdJ("action",function(){return t.openAddSapLoanDialog(null)}),e.qZA()(),e.TgZ(5,"app-material-table",4),e.NdJ("onChangePage",function(i){return t.getList(i.pageIndex+1,i.pageSize)})("editRow",function(i){return t.openAddSapLoanDialog(i)})("deleteRow",function(i){return t.onDelete(i)}),e.qZA()()()()),2&a&&(e.xp6(4),e.Q6J("globalFunctions",t.globalFunctions),e.xp6(1),e.Q6J("isLoaded",t.isLoaded)("dataSource",t.dataSource)("mandatoryColomns",t.mandatoryColomns)("optionalColomns",t.optionalColomns)("page",t.page)("exportService",t.sapLoanTypeAccountService)("actions",t.rowFunctions))},dependencies:[_.I,h.T,v.X,u.a8,u.n5]}),o})(),data:{view:c.S.sap_loan_type_account},canActivate:[b.r]}];let ge=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[A.Bz.forChild(me),A.Bz]}),o})(),he=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.ez,ge,T.m]}),o})()}}]);