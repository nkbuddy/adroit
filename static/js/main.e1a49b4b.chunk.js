(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(32)},32:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(9),i=t.n(r);t(24);var o=function(){return n.a.createElement("header",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg bg-body-tertiary rounded","aria-label":"Thirteenth navbar example"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarsExample11","aria-controls":"navbarsExample11","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse d-lg-flex",id:"navbarsExample11"},n.a.createElement("a",{className:"navbar-brand col-lg-3 me-0",href:"nav"},n.a.createElement("img",{src:"https://adroitmanufacturing.allmoxy.com/data/header/Adroit_logo_3d-01-01.png",alt:"adroit-manufacturing-logo",width:120,height:50})),n.a.createElement("ul",{className:"navbar-nav col-lg-6 justify-content-lg-center"},n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link dropdown-toggle",href:"dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},n.a.createElement("i",{class:"bi bi-star-fill"})),n.a.createElement("ul",{className:"dropdown-menu"},n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"dropdown"},"Action")),n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"dropdown"},"Another action")),n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"dropdown"},"Something else here")))),n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link dropdown-toggle",href:"dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},n.a.createElement("i",{class:"bi bi-cart-fill"})),n.a.createElement("ul",{className:"dropdown-menu"},n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"dropdown"},"Action")),n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"dropdown"},"Another action")),n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"dropdown"},"Something else here")))),n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link dropdown-toggle",href:"dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},n.a.createElement("i",{class:"bi bi-pie-chart-fill"})),n.a.createElement("ul",{className:"dropdown-menu"},n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"dropdown"},"Action")),n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"dropdown"},"Another action")),n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"dropdown"},"Something else here")))),n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link dropdown-toggle",href:"dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},n.a.createElement("i",{class:"bi bi-gear-fill"})),n.a.createElement("ul",{className:"dropdown-menu"},n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"dropdown"},"Action")),n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"dropdown"},"Another action")),n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"dropdown"},"Something else here")))),n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link dropdown-toggle",href:"dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},n.a.createElement("i",{class:"bi bi-bell-fill"})),n.a.createElement("ul",{className:"dropdown-menu"},n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"dropdown"},"Action")),n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"dropdown"},"Another action")),n.a.createElement("li",null,n.a.createElement("a",{className:"dropdown-item",href:"dropdown"},"Something else here"))))),n.a.createElement("div",{className:"d-lg-flex col-lg-3 justify-content-lg-end"},n.a.createElement("i",{class:"bi bi-person-circle btn",style:{"font-size":"28px"}}))))))},c=t(2),m=t(4),d=t(1);var s=function(){return n.a.createElement("thead",{className:"table-success"},n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"2",className:"text-center"}),n.a.createElement("th",{className:"text-center"},"Item#"),n.a.createElement("th",{className:"text-center"},"Panel Finish"),n.a.createElement("th",{className:"text-center"},"Panel ID"),n.a.createElement("th",{className:"text-center"},"Qty"),n.a.createElement("th",{className:"text-center"},"Width(inch)"),n.a.createElement("th",{className:"text-center"},"Height(inch)"),n.a.createElement("th",{className:"text-center"},"Hinge Hole"),n.a.createElement("th",{className:"text-center"},"Wood grand"),n.a.createElement("th",{className:"text-center"},"Miter cut"),n.a.createElement("th",{className:"text-center"},"Price"),n.a.createElement("th",{className:"text-center"},"Subtotal")))},u=t(13);var E=function(e){var a=e.items,t=Object(l.useState)(1),r=Object(d.a)(t,2),i=r[0],o=r[1],c=0,m=0;for(var s in a)c+=Number(a[s].subtotal),m+=Number(a[s].qty);return c=+(Math.round(c+"e+2")+"e-2"),n.a.createElement("tfoot",null,n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"5",align:"right"},"total items"),n.a.createElement("td",null,m),n.a.createElement("td",{colSpan:"7",align:"right"},"$",c)),n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"3"},n.a.createElement("div",{class:"input-group"},n.a.createElement("i",{className:"bi bi-plus-circle-fill btn btn-secondary",onClick:function(){return a=i,void e.onAdd(a);var a}},"add row"),n.a.createElement("input",{type:"number",name:"NumOfRow",className:"form-control",value:i,onChange:function(e){return function(e){var a=e.target.value;o(a)}(e)},style:{width:"5em"}}))),n.a.createElement("td",{colSpan:"4"},n.a.createElement("i",{class:"bi bi-file-earmark-pdf-fill btn btn-primary",onClick:e.printPDF,style:{color:"white",borderStyle:"solid"}},"PDF"),n.a.createElement(u.CSVLink,{data:e.items,filename:"my-file.csv",target:"_blank"},n.a.createElement("i",{class:"bi bi-filetype-csv btn btn-primary",style:{color:"white",borderStyle:"solid"}},"CSV")))))};var h=function(e){var a=e.item,t=e.handleDeleteClick,r=e.handleCopyClick;return e.ItemNum,n.a.createElement(l.Fragment,null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("i",{className:"bi bi-x-circle-fill",onClick:function(){return t(a.id)}})),n.a.createElement("td",null,n.a.createElement("i",{className:"bi bi-files",onClick:function(){return r(a.id)}})),n.a.createElement("td",null,a.id),n.a.createElement("td",null,a.panelFinish),n.a.createElement("td",null,a.panelId),n.a.createElement("td",null,a.qty),n.a.createElement("td",null,a.width),n.a.createElement("td",null,a.height),n.a.createElement("td",null,n.a.createElement("input",{class:"form-check-input",type:"checkbox",id:"exampleCheckbox",checked:a.hingeHole})),n.a.createElement("td",null,n.a.createElement("input",{class:"form-check-input",type:"checkbox",id:"exampleCheckbox",checked:a.woodGrand})),n.a.createElement("td",null,a.miterCut),n.a.createElement("td",null,a.price),n.a.createElement("td",null,a.subtotal)))},p=t(3),b=[{value:18,label:"Arctic (White) HG",id:"MDAC2001-182S90",des:"18mm Arctic (White) HG 2S MR MDF 4x8"},{value:18,label:"Alabaster 2S HG",id:"MDAC2061-182S90",des:"18mm Alabaster 2S HG MR MDF 4x8"},{value:10.85,label:"Pearl White HG",id:"MDPE3004-181S90",des:"3/4 (18mm) Pearl White High Gloss PET MDF Core 4x8"},{value:11.85,label:"Stone Grey (Dark Grey) HG",id:"MDPE3020-181S36",des:"3/4 (18mm)  Stone Grey (Dark Grey) Super Matte PET MDF Core 4x8"},{value:11.85,label:"Stone Grey (Dark Grey) Super Matte",id:"MDPE3020-181S90",des:"3/4 (18mm) Stone Grey (Dark Grey) HG PET MDF Core 4x8"},{value:11.85,label:"Eclipse (Black) Super Matte",id:"MDPE3023-181S36",des:"3/4 (18mm) Eclipse (Black) Super Matte PET MDF Core 4x8"},{value:11.85,label:"Eclipse (Black) HG",id:"MDPE3023-181S90",des:"3/4 (18mm) Eclipse (Black) HG PET MDF Core 4x8"},{value:11.85,label:"Sun Grey Super Matte",id:"MDPE3033-181S36",des:"3/4 (18.5mm) Sun Grey Super Matte PET MDF 4x8"},{value:11.85,label:"Sun Grey High Gloss",id:"MDPE3033-181S90",des:"3/4 (18.5mm) Sun Grey High Gloss PET MDF 4x8"},{value:11.85,label:"Winter Frost (White) Super Matte",id:"MDPE3035-181S36",des:"3/4 (18mm) Winter Frost (White) Super Matte PET MDF Core 4x8"},{value:11.85,label:"Royal Blue Super Matte",id:"MDPE3070-181S36",des:"3/4 (18mm) Royal Blue Super Matte PET MDF Core 4x8"},{value:11.85,label:"Royal Blue High Gloss",id:"MDPE3070-181S90",des:"3/4 (18mm) Royal Blue High Gloss PET MDF Core 4x8"},{value:11.85,label:"Majestic Super Matte",id:"MDPE3074-181S36",des:"3/4 (18mm) Majestic Super Matte PET MDF Core 4x8"},{value:11.85,label:"Majestic High Gloss",id:"MDPE3074-181S90",des:"3/4 (18mm) Majestic High Gloss PET MDF Core 4x8"},{value:9.85,label:"White Concrete",id:"PBME0F01-181S72",des:"18mm (3/4) #01 White Concrete TFL PB 4x9'"},{value:9.85,label:"Grey Concrete",id:"PBME0F02-181S72",des:"18mm (3/4) #02 Grey Concrete TFL PB 4x9'"},{value:7.85,label:"Brushed Aluminum",id:"PBME0474T-192S58",des:"19mm (3/4) L474 Brushed Aluminum (Crystalite) Matte Frosted 2S TFL PB 4x8"},{value:7.85,label:"River Rock (Alto)",id:"PBME0538T-192S75",des:"19mm (3/4) L538 River Rock (Alto) Texture Type 3  2S TFL PB 4x8"},{value:7.85,label:"Sheer Beauty (Karisma)",id:"PBME0581T-192S774",des:"19mm (3/4) L581 Sheer Beauty (Karisma) 2S TFL PB 49x97"},{value:7.85,label:"Fashionista (Karisma)",id:"PBME0582T-192S77",des:"19mm (3/4) L582 Fashionista (Karisma) 2S TFL PB 49x97"},{value:7.85,label:"The Chameleon (Karisma)",id:"PBME0584T-192S77",des:"19mm (3/4) L584 The Chameleon (Karisma)  2S TFL PB 49x97"},{value:8.85,label:"Weekend Getaway (Viva)",id:"PBME2003T-192S12",des:"19mm (3/4)  M2003 Weekend Getaway (Viva) Synchronized 2S TFL PB 4x8..TSCA Title VI Compliant"},{value:8.85,label:"Winter Fun (Viva)",id:"PBME2004T-192S12",des:"19mm (3/4)  M2004 Winter Fun (Viva) Synchronized 2S TFL PB  4x8 ..TSCA Title VI Compliant"},{value:8.85,label:"Casting at First Light (Viva)",id:"PBME2007T-192S12",des:"19mm (3/4) M2007 Casting at First Light (Viva) Synchronized 2S TFL PB  4x8..TSCA Title VI Compliant"},{value:8.85,label:"Sugar on Ice (Viva)",id:"PBME2014T-192S12",des:"19mm (3/4) M2014 Sugar on Ice (Viva) Synchronized 2S TFL PB 4x8..TSCA Title VI Compliant"},{value:11.85,label:"Gris Nube HG",id:"MDMENUBEA-181S90",des:"18mm (3/4) Gris Nube HG 1S MDF  (4'x9').."},{value:11.85,label:"Olmo HG",id:"MDMEOLMOA-181S90",des:"18mm (3/4) Olmo HG  1S MDF (4'x9').."},{value:9,label:"Como Ash 01 1S",id:"PBMECA01A-181S12",des:"18mm (3/4) Como Ash 01 1S PB (4'x9')."},{value:9,label:"Como Ash  03 1S",id:"PBMECA03A-181S12",des:"18mm (3/4) Como Ash  03 1S PB (4'x9').."},{value:8.85,label:"Ida 01 2S",id:"PBMEID01A-182S12",des:"18mm (3/4) Ida 01 2S PB  (4'x9').."},{value:8.85,label:"Ida 03 2S",id:"PBMEID03A-182S12",des:"18mm (3/4) Ida 03 2S PB (4'x9').."},{value:8.85,label:"Muratti 01 2S",id:"PBMEMU01A-182S12",des:"18mm (3/4) Muratti 01 2S PB (4'x9').."},{value:8.85,label:"Muratti 04 2S",id:"PBMEMU04A-182S12",des:"18mm (3/4) Muratti 04 2S PB (4'x9').."},{value:11.85,label:"Gris Nube SM 1S",id:"MDMENUBEA-181S36",des:"18mm (3/4) Gris Nube SM 1S MDF (4'x9').."},{value:11.85,label:"Albedo Collection Door Set",id:"AlbedoDoor",des:"Albedo Collection Door Set (per sqft).."},{value:10.85,label:"Pearl White HG PET Albedo Collection Door Set ",id:"AlbedoDoor-W-HG",des:"Pearl White HG (MDPE3004-181S90) PET Albedo Collection Door Set (per sqft)...."},{value:9.85,label:"White Chocolate (Urbania)",id:"PBME0492T-192S73",des:"19mm (3/4) L492 White Chocolate (Urbania) Texture Type 2 2S TFL PB 4x8"},{value:9.85,label:"Egger Sand Gladstone Oak",id:"PBME3309E-192S12-60110",des:"19mm (3/4) Egger H3309-ST28 Sand Gladstone Oak  60 X110-1/4"},{value:9.85,label:"Egger Grey-Beige Gladstone Oak",id:"PBME3326E-192S28-60110",des:"19mm (3/4) Egger H3326-ST28 Grey-Beige Gladstone Oak  60 X110-1/4"},{value:9.85,label:"Egger Brown Tossini Elm",id:"PBME1212E-192S33-60110",des:"19mm (3/4) Egger H1212-ST33 Brown Tossini Elm  60 X110-1/4 "},{value:9.85,label:"Egger Tobacco Gladstone Oak",id:"PBME3325E-192S28-60110",des:"19mm (3/4) Egger H3325-ST28 Tobacco Gladstone Oak  60 X110-1/4 "},{value:9.85,label:"Egger Tobacco Halifax Oak",id:"PBME1181E-192S37-60110",des:"19mm (3/4) Egger H1181-ST37 Tobacco Halifax Oak  60 X110-1/4 "},{value:9.85,label:"Egger Black Halifax Oak",id:"PBME3182E-192S37-60110",des:"19mm (3/4) Egger H3182-ST37 Black Halifax Oak   60 X110-1/4 "},{value:9.85,label:"Egger Natural Halifax Oak",id:"PBME1180E-192S37-60110",des:"19mm (3/4) Egger H1180-ST37 Natural Halifax Oak  60 X110-1/4 "},{value:9.85,label:"Egger White Halifax Oak",id:"PBME1176E-192S37-60110",des:"19mm (3/4) Egger H1176-ST37 White Halifax Oak  60 X110-1/4 "}];var g=function(e){var a=e.item,t=e.ItemNum,r=e.handleDeleteClick,i=e.handleCopyClick,o=e.handleEditAllInOne,c=e.handleEditTwo,m=Object(l.useState)(!0),s=Object(d.a)(m,2),u=s[0],E=s[1],h=Object(l.useState)(!0),p=Object(d.a)(h,2),g=p[0],v=p[1],f=Object(l.useState)(!0),S=Object(d.a)(f,2),N=S[0],w=S[1],y=Object(l.useState)(!0),M=Object(d.a)(y,2),x=M[0],C=M[1],P=Object(l.useState)(!0),k=Object(d.a)(P,2),T=k[0],B=k[1];function G(e){return/^\d+(\.\d{1,3})?$/.test(e)}return Object(l.useEffect)(function(){var e;a.width<=0||a.width>47.875?E(!1):E(!0),a.height<=0||a.height>95.875?v(!1):v(!0),G(a.width)?w(!0):isNaN(a.width)?w(!0):w(!1),G(a.height)?C(!0):isNaN(a.height)?C(!0):C(!1),e=a.qty,/^[1-9]\d*$/.test(e)?B(!0):isNaN(a.qty)?B(!0):B(!1)},[a.width,a.height,a.qty]),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("i",{className:"bi bi-x-circle-fill btn",onClick:function(){return r(a.id)}})),n.a.createElement("td",null,n.a.createElement("i",{className:"bi bi-files btn",onClick:function(){return i(a.id)}})),n.a.createElement("td",{className:"text-center"},t+1),n.a.createElement("td",null,n.a.createElement("input",{type:"text",list:"data",className:"form-control",style:{width:"18em"},placeholder:"select panel",name:"panelFinish",value:a.panelFinish,onChange:function(e){return c(e,a.id,a)}}),n.a.createElement("datalist",{id:"data"},b.map(function(e,a){return n.a.createElement("option",{key:a,value:e.label})}))),n.a.createElement("td",null,n.a.createElement("input",{type:"text",list:"data2",className:"form-control",placeholder:"select panel ID",name:"panelId",value:a.panelId,onChange:function(e){return c(e,a.id,a)}}),n.a.createElement("datalist",{id:"data2"},b.map(function(e,a){return n.a.createElement("option",{key:a,value:e.id})}))),n.a.createElement("td",null,n.a.createElement("input",{type:"number",name:"qty",className:!1===T?"form-control is-invalid":"form-control",value:a.qty,onChange:function(e){return o(e,a.id,a)},style:{width:"5em"}}),!1===T&&n.a.createElement("div",{className:"invalid-feedback"},"Please enter non zero hole number")),n.a.createElement("td",null,n.a.createElement("input",{type:"number",name:"width",className:!1===u?"form-control is-invalid":"form-control",value:a.width,style:{width:"6em"},onChange:function(e){return o(e,a.id,a)}}),!1===u&&n.a.createElement("div",{className:"invalid-feedback"},"Please enter value not zero and less than 47.875"),!1===N&&n.a.createElement("div",{className:"invalid-feedback"},"Please enter less than 4 decimal place")),n.a.createElement("td",null,n.a.createElement("input",{type:"number",name:"height",className:!1===g?"form-control is-invalid":"form-control",value:a.height,style:{width:"6em"},onChange:function(e){return o(e,a.id,a)}}),!1===g&&n.a.createElement("div",{className:"invalid-feedback"},"Please enter value not zero and less than 95.875"),!1===x&&n.a.createElement("div",{className:"invalid-feedback"},"Please enter less than 4 decimal place")),n.a.createElement("td",null,n.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"defaultCheck1",name:"hingeHole",checked:a.hingeHole,onChange:function(e){return o(e,a.id,a)}})),n.a.createElement("td",null,n.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"defaultCheck2",name:"woodGrand",checked:a.woodGrand,onChange:function(e){return o(e,a.id,a)}})),n.a.createElement("td",null,n.a.createElement("select",{id:"inlineFormCustomSelectPref",className:"form-select w-auto",name:"miterCut",value:a.miterCut,onChange:function(e){return o(e,a.id,a)}},n.a.createElement("option",{defaultValue:"None"},"None"),n.a.createElement("option",{value:"Top"},"Top"),n.a.createElement("option",{value:"1H"},"1H"),n.a.createElement("option",{value:"Bot"},"Bot"))),n.a.createElement("td",null,n.a.createElement("input",{name:"price",type:"number",className:"form-control bg-light rounded-pill",value:a.price,style:{width:"6em"},readOnly:!0,disabled:!0})),n.a.createElement("td",null,n.a.createElement("input",{name:"Subtotal",className:"form-control bg-light rounded-pill",type:"number",value:a.subtotal,style:{width:"6em"},readOnly:!0,disabled:!0})))},v=t(14);var f=function(){var e=Object(l.useState)([{id:0,panelFinish:"Arctic (White) HG",panelId:"MDAC2001-182S90",qty:1,width:43,height:87,hingeHole:!1,woodGrand:!1,miterCut:"Top",price:100,subtotal:100},{id:1,panelFinish:"Stone Grey (Dark Grey) Super Matte",panelId:"MDPE3020-181S90",qty:2,width:20,height:32,hingeHole:!0,woodGrand:!1,miterCut:"1H",price:200,subtotal:400},{id:2,panelFinish:"Egger Brown Tossini Elm",panelId:"PBME1212E-192S33-60110",qty:3,width:44,height:65,hingeHole:!0,woodGrand:!0,miterCut:"Bot",price:300,subtotal:900}]),a=Object(d.a)(e,2),t=a[0],r=a[1];function i(e,a){var t=Number(a.height),l=Number(a.width),n=Number(a.qty),r=0,i=0,o=1,c=e.findIndex(function(e){return e.label==a.panelFinish||e.id==a.panelId});-1!=c&&(r=Number(e[c].value)),a.hingeHole&&(t<38.875?i+=2:t<64.375?i+=3:t<79.375?i+=4:t<95.875&&(i+=5)),a.woodGrand&&(i+=15),"None"!=a.miterCut&&(i+=15);var m=l*t/144;m<=1.5&&(m=1.5);var d=n*(i+=r*m);return m>3&&m<=6?o=.9:m>6&&m<=9?o=.85:m>9&&m<=13?o=.8:m>13&&m<=30&&(o=.75),d*=o,i=(d=Math.round(100*d)/100)/a.qty,i=Math.round(100*i)/100,(l<=0||l>47.875)&&(i=NaN,d=NaN),(t<=0||t>95.875)&&(i=NaN,d=NaN),n<=0&&(i=NaN,d=NaN),[i,d]}function o(e,a,l){var n,o=e.target.getAttribute("name");n="hingeHole"==o||"woodGrand"==o?e.target.checked:e.target.value;var d=Object(m.a)({},l);d[o]=n;var s=i(b,d);d.price=s[0],d.subtotal=s[1];var u={id:a,panelFinish:d.panelFinish,panelId:d.panelId,qty:d.qty,width:d.width,height:d.height,hingeHole:d.hingeHole,woodGrand:d.woodGrand,miterCut:d.miterCut,price:d.price,subtotal:d.subtotal},E=Object(c.a)(t);E[t.findIndex(function(e){return e.id===a})]=u,r(E)}function u(e,a,l){console.log(e);var n=Object(m.a)({},l),o=e.target.getAttribute("name"),d=e.target.value,s=b.findIndex(function(e){return e.label==d||e.id==d});"panelFinish"===o?(n.panelFinish=d,-1!=s&&(n.panelId=b[s].id)):"panelId"===o&&(n.panelId=d,-1!=s&&(n.panelFinish=b[s].label));var u=i(b,n);n.price=u[0],n.subtotal=u[1];var E={id:a,panelFinish:n.panelFinish,panelId:n.panelId,qty:n.qty,width:n.width,height:n.height,hingeHole:n.hingeHole,woodGrand:n.woodGrand,miterCut:n.miterCut,price:n.price,subtotal:n.subtotal},h=Object(c.a)(t);h[t.findIndex(function(e){return e.id===a})]=E,r(h)}function f(e){var a=Object(c.a)(t),l=t.findIndex(function(a){return a.id===e});a.splice(l,1),r(a)}function S(e){var a=Object(c.a)(t),l=t.findIndex(function(a){return a.id===e}),n=a[l],i={id:0,panelFinish:n.panelFinish,panelId:n.panelId,qty:n.qty,width:n.width,height:n.height,hingeHole:n.hingeHole,woodGrand:n.woodGrand,miterCut:n.miterCut,price:n.price,subtotal:n.subtotal};i.id=Object(p.a)(),a.splice(l,0,i),r(a)}function N(e){for(var a=[],l=0;l<e;l++){var n={panelFinish:"",panelId:"",qty:NaN,width:NaN,height:NaN,hingeHole:!1,woodGrand:!1,miterCut:"None",price:NaN,subtotal:NaN,id:Object(p.a)()};a.push(n)}var i=[].concat(Object(c.a)(t),a);r(i)}var w=Object(l.useRef)(),y=Object(v.useReactToPrint)({content:function(){return w.current},documentTile:"UserData"});return n.a.createElement(l.Fragment,null,n.a.createElement("table",{className:"table table-hover table-sm table-responsive-sm",id:"my-table"},n.a.createElement(s,null),n.a.createElement("tbody",null,t.map(function(e,a){return n.a.createElement(g,{key:a,ItemNum:a,item:e,handleDeleteClick:f,handleCopyClick:S,handleEditAllInOne:o,handleEditTwo:u})})),n.a.createElement(E,{items:t,onAdd:N,printPDF:y})),n.a.createElement("table",{className:"table table-hover table-sm table-responsive-sm",ref:w},n.a.createElement(s,null),n.a.createElement("tbody",null,t.map(function(e,a){return n.a.createElement(h,{key:a,ItemNum:a,item:e,handleDeleteClick:f,handleCopyClick:S})})),n.a.createElement(E,{items:t,onAdd:N,printPDF:y})),n.a.createElement("input",{type:"file",accept:".xlsx, .xls .csv",className:"form-control bg-light rounded-pill"}))};var S=function(){return n.a.createElement("div",{id:"mySidenav",className:"sidenav"},n.a.createElement("a",{href:"a"},"SEND TO"),n.a.createElement("div",null,n.a.createElement("i",{className:"bi bi-printer-fill",style:{color:"white"}}),n.a.createElement("span",{style:{color:"white"}},"print")),n.a.createElement("a",{href:"b"},"ORDER INFO"),n.a.createElement("div",null,n.a.createElement("input",{className:"form-control",placeholder:"Order Name"}),n.a.createElement("textarea",{className:"form-control",placeholder:"Description"}),n.a.createElement("input",{className:"form-control",type:Date,placeholder:"date"})),n.a.createElement("a",{href:"c"},"BILLING"),n.a.createElement("div",null,n.a.createElement("input",{className:"form-control",placeholder:"Enter a new address"}),n.a.createElement("input",{className:"form-control",placeholder:"Attn:"}),n.a.createElement("input",{className:"form-control",placeholder:"Street"}),n.a.createElement("input",{className:"form-control",placeholder:"Line2"}),n.a.createElement("input",{className:"form-control",placeholder:"Line3"}),n.a.createElement("input",{className:"form-control",placeholder:"City"}),n.a.createElement("input",{className:"form-control",placeholder:"Country"}),n.a.createElement("input",{className:"form-control",placeholder:"State/province"}),n.a.createElement("input",{className:"form-control",placeholder:"Zip"})),n.a.createElement("a",{href:"d"},"SHIPPING"),n.a.createElement("div",null,n.a.createElement("textarea",{className:"form-control",placeholder:"Shipping Instructions"})),n.a.createElement("div",null,n.a.createElement("i",{class:"bi bi-save-fill btn btn-primary",style:{color:"white",borderStyle:"solid"}},"Save Changes"),n.a.createElement("br",null),n.a.createElement("i",{class:"bi bi-send btn btn-primary",style:{color:"white",borderStyle:"solid"}},"Submite Order"),n.a.createElement("br",null),n.a.createElement("span",{style:{color:"white"}},"By submitting this order you agree to our terms and conditions")))};var N=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(o,null),n.a.createElement(S,null),n.a.createElement("div",{id:"main"},n.a.createElement(f,null)))};i.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)))}},[[16,2,1]]]);
//# sourceMappingURL=main.e1a49b4b.chunk.js.map