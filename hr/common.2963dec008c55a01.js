"use strict";(self.webpackChunkhr=self.webpackChunkhr||[]).push([[592],{63733:(_,o,r)=>{r.d(o,{y:()=>s});var i=r(18521),u=r(21854),p=r(94650);let s=(()=>{class e extends i.K{constructor(){super()}create(t){return this.post("HRSetup/Governorate/Create",t)}update(t){return this.post("HRSetup/Governorate/Edit",t)}getList(t){return this.get("HRSetup/Governorate/GetList",{params:{...t,$expand:u.db.comm_Country}})}getAll(){return this.get("HRSetup/Governorate/GetAll")}getAllByCountryId(t){return this.get("HRSetup/Governorate/GetAll",{params:{$filter:`countrY_ID eq ${t}`}})}Delete(t){return this.delete("HRSetup/Governorate/Delete",{params:{Id:t}})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},36540:(_,o,r)=>{r.d(o,{q:()=>s});var i=r(18521),u=r(24850),p=r(94650);let s=(()=>{class e extends i.K{constructor(){super()}create(t){return this.post("HRSetup/IdentityType/Create",t)}update(t){return this.post("HRSetup/IdentityType/Edit",t)}getList(t){return this.get("HRSetup/IdentityType/GetList",{params:t})}getAll(){return this.get("HRSetup/IdentityType/GetAll").pipe((0,u.U)(t=>(t.data.map(a=>{a.id=a.identity_TypeID,a.ar_Name=a.identity_TypeTital,a.en_Name=a.identity_TypeTital}),t)))}Delete(t){return this.delete("HRSetup/IdentityType/Delete",{params:{Id:t}})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},583:(_,o,r)=>{r.d(o,{b:()=>p});var i=r(18521),u=r(94650);let p=(()=>{class s extends i.K{constructor(){super()}create(n){return this.post("HRSetup/Institution/Create",n)}update(n){return this.post("HRSetup/Institution/Edit",n)}getList(n){return this.get("HRSetup/Institution/GetList",{params:n})}getALL(){return this.get("HRSetup/Institution/GetAll")}Delete(n){return this.delete("HRSetup/Institution/Delete",{params:{Id:n}})}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);