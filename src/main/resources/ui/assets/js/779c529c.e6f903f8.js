"use strict";(self.webpackChunkvalidator_frontend=self.webpackChunkvalidator_frontend||[]).push([[118],{6275:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(5833),i=n(7547),l=n(7506);var o=function(e){let{endpoint:t,fileName:n}=e;const{request:o,data:c,error:u,status:d}=(0,l.Z)();return(0,r.useEffect)((()=>{o(t,{headers:{"Content-Type":"application/xml"}})}),[t,o]),r.createElement(r.Fragment,null,d===l.e.Failure&&u&&r.createElement(i.Z,{title:"An error occurred while fetching"},r.createElement(a.Z,null,u.message)),d===l.e.Success&&c&&r.createElement(a.Z,{download:{fileName:n,mime:"application/xml"},enableCopy:!0},c))}},3596:function(e,t,n){n.r(t);var r=n(7294),a=n(8222),i=n(6275);t.default=function(){return r.createElement(a.Z,{title:"Validator configuration",layoutDescription:"The currently loaded validator configuration",headline:"Validator configuration",description:"View the currently loaded validator configuration."},r.createElement(i.Z,{endpoint:"/server/config",fileName:"config.xml"}))}}}]);