var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(g){var window=this;var Msa=function(a,b){return g.Ub(a,b)},Y5=function(a,b,c){a.w.set(b,c)},Z5=function(a){Y5(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,g.H)()).toString(36));
return a},$5=function(a,b,c){g.Ha(c)||(c=[String(c)]);
g.cn(a.w,b,c)},Nsa=function(a,b){var c=[];
g.jk(b,function(d){try{var e=g.ho.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.go(e)&&c.push(d)},a);
return c},Osa=function(a,b){var c=Nsa(a,b);
(0,g.y)(c,function(d){g.ho.prototype.remove.call(this,d)},a)},Psa=function(a,b){g.Xa(a,b)||a.push(b)},a6=function(a){var b=0,c;
for(c in a)b++;return b},Qsa=function(a,b){var c=b instanceof g.yc?b:g.Cc(b,/^data:image\//i.test(b));
a.src=g.zc(c)},b6=function(){},Rsa=function(a){try{return g.v.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},Ssa=function(a){if(a.zd&&"function"==typeof a.zd)return a.zd();
if("string"===typeof a)return a.split("");if(g.Ia(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Qb(a)},Tsa=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Ia(a)||"string"===typeof a)(0,g.y)(a,b,void 0);else{if(a.qe&&"function"==typeof a.qe)var c=a.qe();else if(a.zd&&"function"==typeof a.zd)c=void 0;else if(g.Ia(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Rb(a);d=Ssa(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},Usa=function(a,b,c,d){var e=new g.Rm(null,void 0);
a&&g.Sm(e,a);b&&g.Tm(e,b);c&&g.Um(e,c);d&&(e.u=d);return e},c6=function(a,b){g.No[a]=!0;
var c=g.Lo();c&&c.publish.apply(c,arguments);g.No[a]=!1},d6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.w=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Om;this.o=this.u="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",Vsa(this,a.capabilities||""),Wsa(this,a.experiments||""),this.u=a.remoteControllerUrl||"",this.o=a.localChannelEncryptionKey||
"")},Vsa=function(a,b){a.capabilities.clear();
(0,g.Xd)(b.split(","),g.Na(Msa,Xsa)).forEach(function(c){a.capabilities.add(c)})},Wsa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},e6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},f6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},Ysa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},Zsa=function(a){return new e6(a)},$sa=function(a){return g.Ha(a)?(0,g.Hc)(a,Zsa):[]},g6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},h6=function(a){return g.Ha(a)?"["+(0,g.Hc)(a,g6).join(",")+"]":"null"},i6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},ata=function(a){return(0,g.Hc)(a,function(b){return{key:b.id,
name:b.name}})},j6=function(a,b){return g.Ua(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},k6=function(a,b){return g.Ua(a,function(c){return f6(c,b)})},l6=function(a){try{var b=(0,g.os)(),c=(0,g.ns)();
b&&b.remove(a);c&&c.remove(a)}catch(d){}},bta=function(){var a=(0,g.ns)();
a&&Osa(a,a.o.Df(!0))},m6=function(){var a=g.rs("yt-remote-connected-devices")||[];
g.pb(a);return a},cta=function(a){if(g.Ya(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.Hc)(a,function(d,e){return 0==e?d:d.substring(c.length)})},dta=function(a){g.ps("yt-remote-connected-devices",a,86400)},o6=function(){if(n6)return n6;
var a=g.rs("yt-remote-device-id");a||(a=i6(),g.ps("yt-remote-device-id",a,31536E3));for(var b=m6(),c=1,d=a;g.Xa(b,d);)c++,d=a+"#"+c;return n6=d},p6=function(){var a=m6(),b=o6();
g.Xa(a,b);g.ts()&&g.rb(a,b);a=cta(a);if(g.Ya(a))try{g.br("remote_sid")}catch(c){}else try{g.ar("remote_sid",a.join(","),-1)}catch(c){}},eta=function(){return g.rs("yt-remote-session-browser-channel")},fta=function(){return g.rs("yt-remote-local-screens")||[]},gta=function(){g.ps("yt-remote-lounge-token-expiration",!0,86400)},hta=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.Hc)(fta(),function(d){return d.loungeToken}),c=(0,g.Hc)(a,function(d){return d.loungeToken});
(0,g.pi)(c,function(d){return!g.Xa(b,d)})&&gta();
g.ps("yt-remote-local-screens",a,31536E3)},ita=function(a,b){g.ps("yt-remote-session-browser-channel",a);
g.ps("yt-remote-session-screen-id",b);var c=m6(),d=o6();g.Xa(c,d)||c.push(d);dta(c);p6()},q6=function(a){a||(l6("yt-remote-session-screen-id"),l6("yt-remote-session-video-id"));
p6();a=m6();g.cb(a,o6());dta(a)},jta=function(){if(!r6){var a=g.ro();
a&&(r6=new g.$n(a))}return r6?!!r6.get("yt-remote-use-staging-server"):!1},kta=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},lta=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},s6=function(a){a.length?mta(a.shift(),function(){s6(a)}):t6()},nta=function(a){return"chrome-extension://"+a+"/cast_sender.js"},mta=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)},t6=function(){var a=lta();
a&&a(!1,"No cast extension found")},pta=function(){if(ota){var a=2,b=lta(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;mta("//web.archive.org/web/20200204215155/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",t6,c)}},qta=function(){pta();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);s6(["//web.archive.org/web/20200204215155/https://www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//web.archive.org/web/20200204215155/https://www.gstatic.com/eureka/clank/cast_sender.js"])},u6=function(){},rta=function(){},tta=function(a){return(a=sta(a))?new ActiveXObject(a):new XMLHttpRequest},sta=function(a){if(!a.u&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.u=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.u},v6=function(a,b,c){g.A.call(this);
this.w=null!=c?(0,g.x)(a,c):a;this.nd=b;this.u=(0,g.x)(this.FE,this);this.o=[]},w6=function(a){a.Ha=g.yf(a.u,a.nd);
a.w.apply(null,a.o)},x6=function(a,b,c,d){this.o=a;
this.w=b;this.G=c;this.F=d||1;this.B=45E3;this.A=new g.w1(this);this.u=new g.xf;this.u.setInterval(250)},vta=function(a,b,c){a.Gi=1;
a.sg=Z5(b.clone());a.Vh=c;a.C=!0;uta(a,null)},y6=function(a,b,c,d,e){a.Gi=1;
a.sg=Z5(b.clone());a.Vh=null;a.C=c;e&&(a.cB=!1);uta(a,d)},uta=function(a,b){a.sj=(0,g.H)();
z6(a);a.Yg=a.sg.clone();$5(a.Yg,"t",a.F);a.Pl=0;a.Gc=a.o.cq(a.o.Bl()?b:null);0<a.Lq&&(a.Bo=new v6((0,g.x)(a.gC,a,a.Gc),a.Lq));a.A.ga(a.Gc,"readystatechange",a.GN);var c=a.Ah?g.$b(a.Ah):{};a.Vh?(a.fp="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Gc.send(a.Yg,a.fp,a.Vh,c)):(a.fp="GET",a.cB&&!g.Md&&(c.Connection="close"),a.Gc.send(a.Yg,a.fp,null,c));a.o.Oe(1)},yta=function(a,b,c){for(var d=!0;!a.kh&&a.Pl<c.length;){var e=wta(a,c);
if(e==A6){4==b&&(a.Dg=4,B6(15),d=!1);break}else if(e==xta){a.Dg=4;B6(16);d=!1;break}else C6(a,e)}4==b&&0==c.length&&(a.Dg=1,B6(17),d=!1);a.Pe=a.Pe&&d;d||(D6(a),E6(a))},wta=function(a,b){var c=a.Pl,d=b.indexOf("\n",c);
if(-1==d)return A6;c=Number(b.substring(c,d));if(isNaN(c))return xta;d+=1;if(d+c>b.length)return A6;var e=b.substr(d,c);a.Pl=d+c;return e},Ata=function(a,b){a.sj=(0,g.H)();
z6(a);var c=b?window.location.hostname:"";a.Yg=a.sg.clone();Y5(a.Yg,"DOMAIN",c);Y5(a.Yg,"t",a.F);try{a.Te=new ActiveXObject("htmlfile")}catch(n){D6(a);a.Dg=7;B6(22);E6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in F6)k=F6[l];else if(l in zta)k=F6[l]=zta[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=m.toString(16).toUpperCase()}k=
F6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.Uc(g.pc("b/12014412"),d+"</body></html>");a.Te.open();a.Te.write(g.Pc(c));a.Te.close();a.Te.parentWindow.m=(0,g.x)(a.aN,a);a.Te.parentWindow.d=(0,g.x)(a.kA,a,!0);a.Te.parentWindow.rpcClose=(0,g.x)(a.kA,a,!1);c=a.Te.createElement("DIV");a.Te.parentWindow.document.body.appendChild(c);d=g.Bc(a.Yg.toString());d=g.ad(g.zc(d));d=g.Uc(g.pc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Vc(c,d);a.o.Oe(1)},z6=function(a){a.gu=(0,g.H)()+a.B;
Bta(a,a.B)},Bta=function(a,b){if(null!=a.Fj)throw Error("WatchDog timer not null");
a.Fj=G6((0,g.x)(a.hN,a),b)},H6=function(a){a.Fj&&(g.v.clearTimeout(a.Fj),a.Fj=null)},E6=function(a){a.o.Rw()||a.kh||a.o.so(a)},D6=function(a){H6(a);
g.je(a.Bo);a.Bo=null;a.u.stop();g.y1(a.A);if(a.Gc){var b=a.Gc;a.Gc=null;b.abort();b.dispose()}a.Te&&(a.Te=null)},C6=function(a,b){try{a.o.eA(a,b),a.o.Oe(4)}catch(c){}},Dta=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;Cta(a,b,function(k){k?c(!0):g.v.setTimeout(function(){Dta(a,b,c,d,f)},f)})}},Cta=function(a,b,c){var d=new Image;
d.onload=function(){try{I6(d),c(!0)}catch(e){}};
d.onerror=function(){try{I6(d),c(!1)}catch(e){}};
d.onabort=function(){try{I6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{I6(d),c(!1)}catch(e){}};
g.v.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
Qsa(d,a)},I6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},J6=function(){},Eta=function(a){this.o=a;
this.u=new J6},Fta=function(a){var b=K6(a.o,a.Pj,"/mail/images/cleardot.gif");
Z5(b);Dta(b.toString(),5E3,(0,g.x)(a.AD,a),3,2E3);a.Oe(1)},M6=function(a){var b=a.o.H;
if(null!=b)B6(5),b?(B6(11),L6(a.o,a,!1)):(B6(12),L6(a.o,a,!0));else if(a.Ld=new x6(a,void 0,void 0,void 0),a.Ld.Ah=a.Jq,b=a.o,b=K6(b,b.Bl()?a.lk:null,a.Kq),B6(5),!g.Kd||g.od(10))$5(b,"TYPE","xmlhttp"),y6(a.Ld,b,!1,a.lk,!1);else{$5(b,"TYPE","html");var c=a.Ld;a=!!a.lk;c.Gi=3;c.sg=Z5(b.clone());Ata(c,a)}},N6=function(a){if(g.v.JSON)try{return g.v.JSON.parse(a)}catch(b){}return Rsa(a)},O6=function(a){g.Je.call(this);
this.headers=new g.Om;this.T=a||null;this.w=!1;this.O=this.o=null;this.da=this.H="";this.C=0;this.A="";this.B=this.Z=this.G=this.U=!1;this.F=0;this.M=null;this.na="";this.J=this.Y=!1},Gta=function(a){return g.Kd&&g.nd(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout},Hta=function(a){return"content-type"==a.toLowerCase()},Jta=function(a,b){a.w=!1;
a.o&&(a.B=!0,a.o.abort(),a.B=!1);a.A=b;a.C=5;Ita(a);P6(a)},Ita=function(a){a.U||(a.U=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},Lta=function(a){if(a.w&&"undefined"!=typeof g.E1)if(a.O[1]&&4==Q6(a)&&2==a.getStatus())R6(a,"Local request error detected and ignored");
else if(a.G&&4==Q6(a))g.yf(a.Tw,0,a);else if(a.dispatchEvent("readystatechange"),4==Q6(a)){R6(a,"Request complete");a.w=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.Pg(1,String(a.H));if(!f&&g.v.self&&g.v.self.location){var k=g.v.self.location.protocol;f=k.substr(0,k.length-1)}e=!Kta.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.C=6;try{var l=2<Q6(a)?a.o.statusText:""}catch(m){l=""}a.A=l+" ["+a.getStatus()+"]";Ita(a)}}finally{P6(a)}}},P6=function(a,b){if(a.o){Mta(a);
var c=a.o,d=a.O[0]?g.Ea:null;a.o=null;a.O=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},Mta=function(a){a.o&&a.J&&(a.o.ontimeout=null);
a.M&&(g.v.clearTimeout(a.M),a.M=null)},Q6=function(a){return a.o?a.o.readyState:0},S6=function(a){try{return a.o?a.o.responseText:""}catch(b){return""}},R6=function(a,b){return b+" ["+a.da+" "+a.H+" "+a.getStatus()+"]"},T6=function(a,b,c){this.o=1;
this.u=[];this.A=[];this.B=new J6;this.G=a||null;this.H=null!=b?b:null;this.C=c||!1},Nta=function(a,b){this.o=a;
this.map=b;this.context=null},Ota=function(a){g.le.call(this,"statevent",a)},Pta=function(a,b){g.le.call(this,"timingevent",a);
this.size=b},Qta=function(a){g.le.call(this,"serverreachability",a)},Tta=function(a){Rta(a);
if(3==a.o){var b=a.al++,c=a.Um.clone();Y5(c,"SID",a.w);Y5(c,"RID",b);Y5(c,"TYPE","terminate");U6(a,c);b=new x6(a,a.w,b,void 0);b.Gi=2;b.sg=Z5(c.clone());Qsa(new Image,b.sg.toString());b.sj=(0,g.H)();z6(b)}Sta(a)},Uta=function(a){a.XD(1,0);
a.Um=K6(a,null,a.Iq);V6(a)},Rta=function(a){a.wg&&(a.wg.abort(),a.wg=null);
a.ac&&(a.ac.cancel(),a.ac=null);a.Gf&&(g.v.clearTimeout(a.Gf),a.Gf=null);W6(a);a.Fd&&(a.Fd.cancel(),a.Fd=null);a.Ag&&(g.v.clearTimeout(a.Ag),a.Ag=null)},Vta=function(a,b){if(0==a.o)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new Nta(a.sJ++,b));2!=a.o&&3!=a.o||V6(a)},V6=function(a){a.Fd||a.Ag||(a.Ag=G6((0,g.x)(a.jA,a),0),a.zi=0)},Xta=function(a,b){if(1==a.o){if(!b){a.al=Math.floor(1E5*Math.random());
var c=a.al++,d=new x6(a,"",c,void 0);d.Ah=null;var e=X6(a),f=a.Um.clone();Y5(f,"RID",c);Y5(f,"CVER","1");U6(a,f);vta(d,f,e);a.Fd=d;a.o=2}}else 3==a.o&&(b?Wta(a,b):0==a.u.length||a.Fd||Wta(a))},Wta=function(a,b){if(b)if(6<a.lh){a.u=a.A.concat(a.u);
a.A.length=0;var c=a.al-1;var d=X6(a)}else c=b.G,d=b.Vh;else c=a.al++,d=X6(a);var e=a.Um.clone();Y5(e,"SID",a.w);Y5(e,"RID",c);Y5(e,"AID",a.Ti);U6(a,e);c=new x6(a,a.w,c,a.zi+1);c.Ah=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Fd=c;vta(c,e,d)},U6=function(a,b){if(a.kd){var c=a.kd.ow();
c&&g.Kb(c,function(d,e){Y5(b,e,d)})}},X6=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.lh&&0<b){var d=a.u[0].o;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.u[e].o,k=a.u[e].map;f=6>=a.lh?e:f-d;try{g.Kb(k,function(l,m){c.push("req"+f+"_"+m+"="+encodeURIComponent(l))})}catch(l){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.A=a.A.concat(a.u.splice(0,b));
return c.join("&")},Yta=function(a){a.ac||a.Gf||(a.F=1,a.Gf=G6((0,g.x)(a.iA,a),0),a.ri=0)},Y6=function(a){if(a.ac||a.Gf||3<=a.ri)return!1;
a.F++;a.Gf=G6((0,g.x)(a.iA,a),Zta(a,a.ri));a.ri++;return!0},L6=function(a,b,c){a.cp=c;
a.cf=b.Sf;a.C||Uta(a)},W6=function(a){null!=a.ph&&(g.v.clearTimeout(a.ph),a.ph=null)},Zta=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},Z6=function(a,b){if(2==b||9==b){var c=null;
a.kd&&(c=null);var d=(0,g.x)(a.rO,a);c||(c=new g.Rm("//web.archive.org/web/20200204215155/https://www.google.com/images/cleardot.gif"),Z5(c));Cta(c.toString(),1E4,d)}else B6(2);$ta(a,b)},$ta=function(a,b){a.o=0;
a.kd&&a.kd.Dv(b);Sta(a);Rta(a)},Sta=function(a){a.o=0;
a.cf=-1;if(a.kd)if(0==a.A.length&&0==a.u.length)a.kd.Up();else{g.fb(a.A);var b=g.fb(a.u);a.A.length=0;a.u.length=0;a.kd.Up(b)}},K6=function(a,b,c){var d=g.Zm(c);
if(""!=d.o)b&&g.Tm(d,b+"."+d.o),g.Um(d,d.B);else{var e=window.location;d=Usa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.ak&&g.Kb(a.ak,function(f,k){Y5(d,k,f)});
Y5(d,"VER",a.lh);U6(a,d);return d},G6=function(a,b){if(!g.Ja(a))throw Error("Fn must not be null and must be a function");
return g.v.setTimeout(function(){a()},b)},B6=function(a){$6.dispatchEvent(new Ota($6,a))},aua=function(){},a7=function(a,b,c){g.A.call(this);
this.C=null!=c?(0,g.x)(a,c):a;this.nd=b;this.B=(0,g.x)(this.EE,this);this.o=!1;this.u=0;this.w=this.Ha=null;this.A=[]},bua=function(){this.o=[];
this.u=[]},cua=function(a,b){this.action=a;
this.params=b||{}},b7=function(a,b){g.A.call(this);
this.o=new g.L(this.RM,0,this);g.B(this,this.o);this.nd=5E3;this.u=0;if(g.Ja(a))b&&(a=(0,g.x)(a,b));else if(a&&g.Ja(a.handleEvent))a=(0,g.x)(a.handleEvent,a);else throw Error("Invalid listener argument");this.w=a},c7=function(a,b,c){this.M=a;
this.C=b;this.w=new g.Zn;this.u=new b7(this.VN,this);this.o=null;this.tb=!1;this.B=null;this.H="";this.G=this.A=0;this.F=[];this.J=c||!1},dua=function(a){return{firstTestResults:[""],
secondTestResults:!a.o.cp,sessionId:a.o.w,arrayId:a.o.Ti}},eua=function(a,b){a.G=b||0;
a.u.stop();a.o&&(3==a.o.o&&Xta(a.o),Tta(a.o));a.G=0},d7=function(a){return!!a.o&&3==a.o.o},fua=function(a,b){(a.C.loungeIdToken=b)||a.u.stop()},e7=function(a){this.port=this.domain="";
this.o="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.Pg(4,a))||"";b&&(this.port=":"+b);this.domain=g.Qg(a)||"";a=g.Ib;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Hb(a,"10.0")&&(this.u=!1))},f7=function(a,b){var c=a.o;
a.u&&(c="https://"+a.domain+a.port+a.o);return g.Zg(c+b,{})},g7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Na(a.A,d,!0),onError:g.Na(a.w,e),Hd:g.Na(a.B,e)};c&&(a.yb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Kp(b,a)},jua=function(){var a=gua;
hua();h7.push(a);iua(h7)},i7=function(a,b){hua();
var c=h7,d=kua(a,String(b));g.Ya(c)?lua(d):(iua(c),(0,g.y)(c,function(e){e(d)}))},hua=function(){h7||(h7=g.w("yt.mdx.remote.debug.handlers_")||[],g.Da("yt.mdx.remote.debug.handlers_",h7,void 0))},lua=function(a){var b=(j7+1)%50;
j7=b;k7[b]=a;l7||(l7=49==b)},iua=function(a){var b=k7;
if(b[0]){var c=j7,d=l7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.y)(a,function(f){f(e)})}while(d!=c);
k7=Array(50);j7=-1;l7=!1}},kua=function(a,b){var c=((0,g.H)()-mua)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},m7=function(a){g.Q.call(this);
this.F=a;this.o=[]},nua=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.o.push(b);return!0},oua=function(a,b){var c=a.o.length!=b.length;
a.o=(0,g.Xd)(a.o,function(f){return!!j6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=nua(a,b[d])||c;return c},pua=function(a,b){var c=a.o.length;
a.o=(0,g.Xd)(a.o,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.o.length<c},n7=function(a,b,c,d){g.Q.call(this);
this.C=a;this.B=b;this.w=c;this.A=d;this.u=0;this.o=null;this.Ha=NaN},p7=function(a){m7.call(this,"LocalScreenService");
this.w=a;this.u=NaN;o7(this);this.info("Initializing with "+h6(this.o))},qua=function(a){if(a.o.length){var b=(0,g.Hc)(a.o,function(d){return d.id}),c=f7(a.w,"/pairing/get_lounge_token_batch");
g7(a.w,c,{screen_ids:b.join(",")},(0,g.x)(a.OE,a),(0,g.x)(a.NE,a))}},o7=function(a){var b=$sa(fta());
b=(0,g.Xd)(b,function(c){return!c.uuid});
return oua(a,b)},q7=function(a,b){hta((0,g.Hc)(a.o,Ysa));
b&&gta()},s7=function(a,b){g.Q.call(this);
this.C=b;var c=g.rs("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Xa(c,l)}this.o=d;this.B=a;this.w=this.A=NaN;this.u=null;r7("Initialized with "+g.Lk(this.o))},rua=function(a,b,c){var d=f7(a.B,"/pairing/get_screen_availability");
g7(a.B,d,{lounge_token:b.token},(0,g.x)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.x)(function(){c(!1)},a))},t7=function(a,b){a:if(a6(b)!=a6(a.o))var c=!1;
else{c=g.Rb(b);for(var d=0,e=c.length;d<e;++d)if(!a.o[c[d]]){c=!1;break a}c=!0}c||(r7("Updated online screens: "+g.Lk(a.o)),a.o=b,a.S("screenChange"));sua(a)},u7=function(a){isNaN(a.w)||g.Ko(a.w);
a.w=g.Io((0,g.x)(a.qt,a),0<a.A&&a.A<(0,g.H)()?2E4:1E4)},r7=function(a){i7("OnlineScreenService",a)},tua=function(a){var b={};
(0,g.y)(a.C(),function(c){c.token?b[c.token]=c.id:this.Sb("Requesting availability of screen w/o lounge token.")});
return b},sua=function(a){a=g.Rb(g.Lb(a.o,function(b){return b}));
g.pb(a);a.length?g.ps("yt-remote-online-screen-ids",a.join(","),60):l6("yt-remote-online-screen-ids")},v7=function(a){m7.call(this,"ScreenService");
this.C=a;this.u=this.w=null;this.A=[];this.B={};uua(this)},wua=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var k=a.Yd();if(k=(c?k6(k,c):null)||k6(k,b)){k.uuid=b;var l=w7(a,k);rua(a.u,l,function(m){e(m?l:null)})}else c?vua(a,c,(0,g.x)(function(m){var n=w7(this,new e6({name:d,
screenId:c,loungeToken:m,dialId:b||""}));rua(this.u,n,function(q){e(q?n:null)})},a),f):e(null)},xua=function(a,b){for(var c=0,d=a.o.length;c<d;++c)if(a.o[c].name==b)return a.o[c];
return null},vua=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={yb:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){var l=k&&k.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Kp(f7(a.C,"/pairing/get_lounge_token_batch"),e)},yua=function(a){a.o=a.w.Yd();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.o.length;b<d;++b){var e=a.o[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+h6(a.o))},uua=function(a){x7(a);
a.w=new p7(a.C);a.w.subscribe("screenChange",(0,g.x)(a.WE,a));yua(a);a.A=$sa(g.rs("yt-remote-automatic-screen-cache")||[]);x7(a);a.info("Initializing automatic screens: "+h6(a.A));a.u=new s7(a.C,(0,g.x)(a.Yd,a,!0));a.u.subscribe("screenChange",(0,g.x)(function(){this.S("onlineScreenChange")},a))},w7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=k6(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.ps("yt-remote-automatic-screen-cache",(0,g.Hc)(a.A,Ysa)));x7(a);a.B[b.uuid]=b.id;g.ps("yt-remote-device-id-map",a.B,31536E3);return b},x7=function(a){a.B=g.rs("yt-remote-device-id-map")||{}},y7=function(a,b,c){g.Q.call(this);
this.O=c;this.H=a;this.u=b;this.w=null},z7=function(a,b){i7(a.O,b)},A7=function(a,b){y7.call(this,a,b,"CastSession");
this.o=null;this.A=0;this.C=(0,g.x)(this.bP,this);this.B=(0,g.x)(this.pN,this);this.A=g.Io((0,g.x)(function(){zua(this,null)},this),12E4)},Aua=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Lk(void 0));
var b={type:"getMdxSessionStatus"};a.o?a.o.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.Ea,(0,g.x)(function(){z7(this,"Failed to send message: getMdxSessionStatus.")},a)):z7(a,"Sending yt message without session: "+g.Lk(b))},zua=function(a,b){g.Ko(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.w||a.w.id!=b){var c=(0,g.x)(a.vo,a),d=(0,g.x)(a.ee,a);a.Jw(b,c,d,5)}}else a.ee(Error("Waiting for session status timed out."))},B7=function(a,b,c){y7.call(this,a,b,"DialSession");
this.A=this.G=null;this.M="";this.T=c;this.B=null;this.F=g.Ea;this.C=NaN;this.J=(0,g.x)(this.eP,this);this.o=g.Ea},Bua=function(a){a.o=a.H.mC(a.M,a.u.label,a.u.friendlyName,(0,g.x)(function(b){this.o=g.Ea;
this.vo(b)},a),(0,g.x)(function(b){this.o=g.Ea;
this.ee(b)},a))},Cua=function(a){var b={};
b.pairingCode=a.M;b.theme=a.T;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}jta()&&(b.env_useStageMdx=1);return g.Xg(b)},C7=function(a,b){y7.call(this,a,b,"ManualSession");
this.o=g.Io((0,g.x)(this.Ui,this,null),150)},D7=function(a,b,c,d){g.Q.call(this);
this.u=a;this.F=b||"233637DE";this.C=c||"cl";this.G=d||!1;this.o=null;this.B=!1;this.w=[];this.A=(0,g.x)(this.aM,this)},Dua=function(a,b){return b?g.Ua(a.w,function(c){return f6(b,c.label)},a):null},E7=function(a){i7("Controller",a)},gua=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},F7=function(a){return a.B||!!a.w.length||!!a.o},G7=function(a,b,c){b!=a.o&&(g.je(a.o),(a.o=b)?(c?a.S("yt-remote-cast2-receiver-resumed",b.u):a.S("yt-remote-cast2-receiver-selected",
b.u),b.subscribe("sessionScreen",(0,g.x)(a.hA,a,b)),b.w?a.S("yt-remote-cast2-session-change",b.w):c&&a.o.Ui(null)):a.S("yt-remote-cast2-session-change",null))},Eua=function(a){var b=a.u.lC(),c=a.o&&a.o.u;
a=(0,g.Hc)(b,function(d){c&&f6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=Dua(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},Kua=function(a,b,c,d,e,f,k){Fua()?Gua(b,e,f,k)&&(I7(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Hua(a,c):(window.__onGCastApiAvailable=function(l,m){l?Hua(a,c):(J7("Failed to load cast API: "+m),K7(!1),I7(!1),l6("yt-remote-cast-available"),l6("yt-remote-cast-receiver"),Iua(),c(!1))},d?g.Vo("https://web.archive.org/web/20200204215155/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):
0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?qta():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?t6():(pta(),s6(Jua.map(nta))))):H7("Cannot initialize because not running Chrome")},Iua=function(){H7("dispose");
var a=L7();a&&a.dispose();g.Da("yt.mdx.remote.cloudview.instance_",null,void 0);Lua(!1);g.Qo(M7);M7.length=0},N7=function(){return!!g.rs("yt-remote-cast-installed")},Mua=function(){var a=g.rs("yt-remote-cast-receiver");
return a?a.friendlyName:null},Nua=function(){H7("clearCurrentReceiver");
l6("yt-remote-cast-receiver")},Oua=function(){return N7()?L7()?L7().getCastSession():(J7("getCastSelector: Cast is not initialized."),null):(J7("getCastSelector: Cast API is not installed!"),null)},P7=function(){N7()?L7()?O7()?(H7("Requesting cast selector."),L7().requestSession()):(H7("Wait for cast API to be ready to request the session."),M7.push(g.Po("yt-remote-cast2-api-ready",P7))):J7("requestCastSelector: Cast is not initialized."):J7("requestCastSelector: Cast API is not installed!")},Q7=
function(a,b){O7()?L7().setConnectedScreenStatus(a,b):J7("setConnectedScreenStatus called before ready.")},Fua=function(){var a=0<=g.Ib.search(/ (CrMo|Chrome|CriOS)\//);
return g.Fv||a},Pua=function(a,b){L7().init(a,b)},Gua=function(a,b,c,d){var e=!1;
L7()||(a=new D7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){g.ps("yt-remote-cast-available",f);c6("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){H7("onReceiverSelected: "+f.friendlyName);
g.ps("yt-remote-cast-receiver",f);c6("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){H7("onReceiverResumed: "+f.friendlyName);
g.ps("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){H7("onSessionChange: "+g6(f));
f||l6("yt-remote-cast-receiver");c6("yt-remote-cast2-session-change",f)}),g.Da("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
H7("cloudview.createSingleton_: "+e);return e},L7=function(){return g.w("yt.mdx.remote.cloudview.instance_")},Hua=function(a,b){K7(!0);
I7(!1);Pua(a,function(c){c?(Lua(!0),g.So("yt-remote-cast2-api-ready")):(J7("Failed to initialize cast API."),K7(!1),l6("yt-remote-cast-available"),l6("yt-remote-cast-receiver"),Iua());b(c)})},H7=function(a){i7("cloudview",a)},J7=function(a){i7("cloudview",a)},K7=function(a){H7("setCastInstalled_ "+a);
g.ps("yt-remote-cast-installed",a)},O7=function(){return!!g.w("yt.mdx.remote.cloudview.apiReady_")},Lua=function(a){H7("setApiReady_ "+a);
g.Da("yt.mdx.remote.cloudview.apiReady_",a,void 0)},I7=function(a){g.Da("yt.mdx.remote.cloudview.initializing_",a,void 0)},R7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.C=this.F=0;this.o=null;this.hasNext=this.df=!1;this.H=this.G=this.u=this.A=0;this.w=NaN;this.B=!1;this.reset(a)},S7=function(a){a.audioTrackId=null;
a.o=null;a.playerState=-1;a.df=!1;a.hasNext=!1;a.F=0;a.C=(0,g.H)();a.A=0;a.u=0;a.G=0;a.H=0;a.w=NaN;a.B=!1},T7=function(a){return 1==a.playerState?((0,g.H)()-a.C)/1E3:0},U7=function(a,b){a.F=b;
a.C=(0,g.H)()},V7=function(a){switch(a.playerState){case 1:case 1081:return((0,g.H)()-a.C)/1E3+a.F;
case -1E3:return 0}return a.F},W7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&S7(a)},X7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.ac(a.o);b.hasPrevious=a.df;b.hasNext=a.hasNext;b.playerTime=a.F;b.playerTimeAt=a.C;b.seekableStart=a.A;b.seekableEnd=a.u;b.duration=a.G;b.loadedTime=a.H;b.liveIngestionTime=a.w;return b},Z7=function(a,b){g.Q.call(this);
this.o=0;this.A=a;this.C=[];this.B=new bua;this.w=this.u=null;this.H=(0,g.x)(this.aK,this);this.F=(0,g.x)(this.fl,this);this.G=(0,g.x)(this.ZJ,this);this.M=(0,g.x)(this.mK,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.ju,this),Qua(this))):c=3;0!=c&&(b?this.ju(c):g.Io((0,g.x)(function(){this.ju(c)},this),0));
var d=Oua();d&&Y7(this,d);this.subscribe("yt-remote-cast2-session-change",this.M)},$7=function(a){return new R7(a.A.getPlayerContextData())},Qua=function(a){(0,g.y)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.C.push(this.A.subscribe(b,g.Na(this.XL,b),this))},a)},Rua=function(a){(0,g.y)(a.C,function(b){this.A.unsubscribeByKey(b)},a);
a.C.length=0},a8=function(a,b){var c=a.B;
50>c.o.length+c.u.length&&a.B.u.push(b)},c8=function(a,b,c){var d=$7(a);
U7(d,c);-1E3!=d.playerState&&(d.playerState=b);b8(a,d)},d8=function(a,b,c){a.A.sendMessage(b,c)},b8=function(a,b){Rua(a);
a.A.setPlayerContextData(X7(b));Qua(a)},Y7=function(a,b){a.w&&(a.w.removeUpdateListener(a.H),a.w.removeMediaListener(a.F),a.fl(null));
a.w=b;a.w&&(i7("CP","Setting cast session: "+a.w.sessionId),a.w.addUpdateListener(a.H),a.w.addMediaListener(a.F),a.w.media.length&&a.fl(a.w.media[0]))},Sua=function(a){var b=a.u.media,c=a.u.customData;
if(b&&c){var d=$7(a);b.contentId!=d.videoId&&i7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;U7(d,a.u.getEstimatedTime());b8(a,d)}else i7("CP","No cast media video. Ignoring state update.")},e8=function(a,b,c){return(0,g.x)(function(d){this.Sb("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Sb("Retrying "+b+" using MDx browser channel."),d8(this,b,c))},a)},f8=function(a,b,c){g.Q.call(this);
this.B=NaN;this.J=!1;this.G=this.F=this.H=this.M=NaN;this.O=[];this.A=this.C=this.w=this.Ra=this.o=null;this.U=a;this.O.push(g.Eq(window,"beforeunload",(0,g.x)(this.HE,this)));this.u=[];this.Ra=new R7;this.T=b.id;this.o=Tua(this,c);this.o.subscribe("handlerOpened",this.eK,this);this.o.subscribe("handlerClosed",this.bK,this);this.o.subscribe("handlerError",this.cK,this);this.o.subscribe("handlerMessage",this.dK,this);fua(this.o,b.token);this.subscribe("remoteQueueChange",function(){var d=this.Ra.videoId;
g.ts()&&g.ps("yt-remote-session-video-id",d)},this)},g8=function(a){i7("conn",a)},Tua=function(a,b){return new c7(f7(a.U,"/bc"),b)},h8=function(a,b){a.S("proxyStateChange",b)},Uua=function(a){a.B=g.Io((0,g.x)(function(){g8("Connecting timeout");
this.yi(1)},a),2E4)},i8=function(a){g.Ko(a.B);
a.B=NaN},j8=function(a){g.Ko(a.M);
a.M=NaN},Vua=function(a){k8(a);
a.H=g.Io((0,g.x)(function(){l8(this,"getNowPlaying")},a),2E4)},k8=function(a){g.Ko(a.H);
a.H=NaN},Xua=function(a,b){b&&(i8(a),j8(a));
b==(d7(a.o)&&isNaN(a.B))?b&&(h8(a,1),l8(a,"getSubtitlesTrack")):b?(a.Hw()&&a.Ra.reset(),h8(a,1),l8(a,"getNowPlaying"),Wua(a)):a.yi(1)},Yua=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Ra.videoId&&(g.Xb(b.params)?a.Ra.o=null:a.Ra.o=b.params,a.S("remotePlayerChange"))},Zua=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.Ra.listId=b.params.listId||a.Ra.listId;W7(a.Ra,c,d);a.S("remoteQueueChange")},ava=function(a,b){b.params=b.params||{};
Zua(a,b);$ua(a,b);a.S("autoplayDismissed")},$ua=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
U7(a.Ra,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.Ra.playerState&&(c=-1E3);a.Ra.playerState=c;c=Number(b.params.loadedTime);a.Ra.H=isNaN(c)?0:c;c=Number(b.params.duration);a.Ra.G=isNaN(c)?0:c;c=a.Ra;var d=Number(b.params.liveIngestionTime);c.w=d;c.B=isNaN(d)?!1:!0;c=a.Ra;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.A=isNaN(d)?0:d;c.u=isNaN(e)?0:e;1==a.Ra.playerState?Vua(a):k8(a);a.S("remotePlayerChange")},bva=function(a,b){if(-1E3!=
a.Ra.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Ra.playerState=c;c=parseInt(b.params.currentTime,10);U7(a.Ra,isNaN(c)?0:c);a.S("remotePlayerChange")}},cva=function(a,b){var c="true"==b.params.muted;
a.Ra.volume=parseInt(b.params.volume,10);a.Ra.muted=c;a.S("remotePlayerChange")},dva=function(a,b){a.C=b.params.videoId;
a.S("nowAutoplaying",parseInt(b.params.timeout,10))},eva=function(a,b){var c="true"==b.params.hasNext;
a.Ra.df="true"==b.params.hasPrevious;a.Ra.hasNext=c;a.S("previousNextChange")},Wua=function(a){g.Ko(a.G);
a.G=g.Io((0,g.x)(a.yi,a,1),864E5)},l8=function(a,b,c){c?g8("Sending: action="+b+", params="+g.Lk(c)):g8("Sending: action="+b);
a.o.sendMessage(b,c)},m8=function(a){m7.call(this,"ScreenServiceProxy");
this.md=a;this.u=[];this.u.push(this.md.$_s("screenChange",(0,g.x)(this.ZO,this)));this.u.push(this.md.$_s("onlineScreenChange",(0,g.x)(this.CL,this)))},jva=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.N("MDX_CONFIG")||b;bta();p6();n8||(n8=new e7(b?b.loungeApiHost:void 0),jta()&&(n8.o="/api/loungedev"));o8||(o8=g.w("yt.mdx.remote.deferredProxies_")||[],g.Da("yt.mdx.remote.deferredProxies_",o8,void 0));fva();var c=p8();if(!c){var d=new v7(n8);g.Da("yt.mdx.remote.screenService_",d,void 0);c=p8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);Kua(a,d,function(m){m?q8()&&Q7(q8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){c6("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.w("yt.mdx.remote.initialized_")&&(g.Da("yt.mdx.remote.initialized_",!0,void 0),r8("Initializing: "+g.Lk(b)),s8.push(g.Po("yt-remote-cast2-availability-change",function(){c6("yt-remote-receiver-availability-change")})),s8.push(g.Po("yt-remote-cast2-receiver-selected",function(){t8(null);
c6("yt-remote-auto-connect","cast-selector-receiver")})),s8.push(g.Po("yt-remote-cast2-receiver-resumed",function(){c6("yt-remote-receiver-resumed","cast-selector-receiver")})),s8.push(g.Po("yt-remote-cast2-session-change",gva)),s8.push(g.Po("yt-remote-connection-change",function(m){m?Q7(q8(),"YouTube TV"):u8()||(Q7(null,null),Nua())})),a=v8(),b.isAuto&&(a.id+="#dial"),g.Ap("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),r8(" -- with channel params: "+
g.Lk(a)),hva(a),c.start(),q8()||iva())},lva=function(){var a=kva();
N7()&&g.rs("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},kva=function(){var a=p8().md.$_gos();
var b=w8();b&&x8()&&(j6(a,b)||a.push(b));return ata(a)},y8=function(){var a=mva();
!a&&N7()&&Mua()&&(a={key:"cast-selector-receiver",name:Mua()});return a},mva=function(){var a=kva(),b=w8();
b||(b=u8());return g.Ua(a,function(c){return b&&f6(b,c.key)?!0:!1})},w8=function(){var a=q8();
if(!a)return null;var b=p8().Yd();return k6(b,a)},gva=function(a){r8("remote.onCastSessionChange_: "+g6(a));
if(a){var b=w8();b&&b.id==a.id?Q7(b.id,"YouTube TV"):(b&&z8(),A8(a,1))}else x8()&&z8()},z8=function(){O7()?L7().stopSession():J7("stopSession called before API ready.");
var a=x8();a&&(a.disconnect(1),B8(null))},C8=function(){var a=x8();
return!!a&&3!=a.getProxyState()},r8=function(a){i7("remote",a)},p8=function(){if(!D8){var a=g.w("yt.mdx.remote.screenService_");
D8=a?new m8(a):null}return D8},q8=function(){return g.w("yt.mdx.remote.currentScreenId_")},nva=function(a){g.Da("yt.mdx.remote.currentScreenId_",a,void 0)},ova=function(){return g.w("yt.mdx.remote.connectData_")},t8=function(a){g.Da("yt.mdx.remote.connectData_",a,void 0)},x8=function(){return g.w("yt.mdx.remote.connection_")},B8=function(a){var b=x8();
t8(null);a||nva("");g.Da("yt.mdx.remote.connection_",a,void 0);o8&&((0,g.y)(o8,function(c){c(a)}),o8.length=0);
b&&!a?c6("yt-remote-connection-change",!1):!b&&a&&c6("yt-remote-connection-change",!0)},u8=function(){var a=g.ts();
if(!a)return null;var b=p8().Yd();return k6(b,a)},A8=function(a,b){q8();
w8()&&w8();if(E8)F8=a;else{nva(a.id);var c=new f8(n8,a,v8());c.connect(b,ova());c.subscribe("beforeDisconnect",function(d){c6("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){x8()&&(x8(),B8(null))});
B8(c)}},iva=function(){var a=u8();
a?(r8("Resume connection to: "+g6(a)),A8(a,0)):(q6(),Nua(),r8("Skipping connecting because no session screen found."))},fva=function(){var a=v8();
if(g.Xb(a)){a=o6();var b=g.rs("yt-remote-session-name")||"",c=g.rs("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Da("yt.mdx.remote.channelParams_",a,void 0)}},v8=function(){return g.w("yt.mdx.remote.channelParams_")||{}},hva=function(a){a?(g.ps("yt-remote-session-app",a.app),g.ps("yt-remote-session-name",a.name)):(l6("yt-remote-session-app"),l6("yt-remote-session-name"));
g.Da("yt.mdx.remote.channelParams_",a,void 0)},G8=function(a,b,c){g.A.call(this);
this.B=a;this.u=b;this.w=new g.P(this);g.B(this,this.w);this.w.L(b,"onCaptionsTrackListChanged",this.XK);this.w.L(b,"captionschanged",this.YJ);this.w.L(b,"captionssettingschanged",this.xB);this.w.L(b,"videoplayerreset",this.wo);this.w.L(b,"mdxautoplaycancel",this.zD);this.T=this.w.L(b,"onVolumeChange",this.Pz);this.G=!1;this.o=c;c.subscribe("proxyStateChange",this.dA,this);c.subscribe("remotePlayerChange",this.kl,this);c.subscribe("remoteQueueChange",this.wo,this);c.subscribe("autoplayUpNext",this.Fz,
this);c.subscribe("previousNextChange",this.aA,this);c.subscribe("nowAutoplaying",this.Wz,this);c.subscribe("autoplayDismissed",this.Ez,this);this.suggestion=null;this.H=new g.mD(64);this.A=new g.L(this.tB,500,this);g.B(this,this.A);this.C=new g.L(this.uB,1E3,this);g.B(this,this.C);this.J=new a7(this.BO,0,this);g.B(this,this.J);this.F={};this.O=new g.L(this.YB,1E3,this);g.B(this,this.O);this.M=new v6(this.zH,1E3,this);g.B(this,this.M);this.U=g.Ea;this.xB();this.wo();this.kl()},H8=function(a,b){var c=
a.B,d=a.u.getVideoData().lengthSeconds;
c.O=b||0;c.player.S("progresssync",b,d)},pva=function(a){H8(a,0);
a.A.stop();I8(a,new g.mD(64))},K8=function(a,b){if(J8(a)&&!a.G){var c=null;
b&&(c={style:a.u.getSubtitlesUserSettings()},g.cc(c,b));a.o.iB(a.u.getVideoData(1).videoId,c);a.F=$7(a.o).o}},L8=function(a,b){var c=a.u.getPlaylist();
if(c){var d=c.Va;var e=c.listId.toString()}c=a.u.getVideoData(1);a.o.playVideo(c.videoId,b,d,e,c.playerParams,c.gf,g.vB(c));I8(a,new g.mD(1))},qva=function(a,b){if(b){var c=a.u.getOption("captions","tracklist",{VS:1});
c&&c.length?(a.u.setOption("captions","track",b),a.G=!1):(a.u.loadModule("captions"),a.G=!0)}else a.u.setOption("captions","track",{})},J8=function(a){return $7(a.o).videoId==a.u.getVideoData(1).videoId},I8=function(a,b){a.C.stop();
var c=a.H;if(!g.sD(c,b)){var d=g.W(b,2);d!=g.W(a.H,2)&&g.QS(a.u.app,d);a.H=b;rva(a.B,c,b)}},M8=function(){g.V.call(this,{D:"div",
I:"ytp-mdx-popup-dialog",N:{role:"dialog"},K:[{D:"div",I:"ytp-mdx-popup-dialog-inner-content",K:[{D:"div",I:"ytp-mdx-popup-title",V:"You're signed out"},{D:"div",I:"ytp-mdx-popup-description",V:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{D:"div",I:"ytp-mdx-privacy-popup-buttons",K:[{D:"button",W:["ytp-button","ytp-mdx-privacy-popup-cancel"],V:"Cancel"},{D:"button",W:["ytp-button","ytp-mdx-privacy-popup-confirm"],
V:"Confirm"}]}]}]});this.u=new g.XL(this,250);g.B(this,this.u);this.C=this.o["ytp-mdx-privacy-popup-cancel"];this.L(this.C,"click",this.w);this.A=this.o["ytp-mdx-privacy-popup-confirm"];this.L(this.A,"click",this.B)},N8=function(a){g.V.call(this,{D:"div",
I:"ytp-remote",K:[{D:"div",I:"ytp-remote-display-status",K:[{D:"div",I:"ytp-remote-display-status-icon",K:[g.ZL()]},{D:"div",I:"ytp-remote-display-status-text",V:"{{statustext}}"}]}]});this.u=new g.XL(this,250);g.B(this,this.u);this.w=a;this.L(a,"presentingplayerstatechange",this.A);sva(this,g.lL(a))},sva=function(a,b){if(3==a.w.getPresentingPlayerType()){var c={RECEIVER_NAME:a.w.getOption("remote","currentReceiver").name};
c=g.W(b,128)?g.CM("Error on $RECEIVER_NAME",c):g.tD(b)||g.W(b,4)?g.CM("Playing on $RECEIVER_NAME",c):g.CM("Connected to $RECEIVER_NAME",c);a.ha("statustext",c);a.u.show()}else a.u.hide()},O8=function(a,b){g.lO.call(this,"Play on",0,a,b);
this.u=a;this.C={};this.L(a,"onMdxReceiversChange",this.J);this.L(a,"presentingplayerstatechange",this.J);this.J()},P8=function(a){g.uP.call(this,a);
this.u={key:i6(),name:"This computer"};this.B=null;this.A=[];this.T=this.o=null;this.M=[this.u];this.w=this.u;this.F=new g.mD(64);this.O=0;this.H=-1;this.C=null;if(!g.Hx(this.player.P())){a=this.player;var b=g.TC(a);b&&(b=b.Tk())&&(b=new O8(a,b),g.B(this,b));b=new N8(a);g.B(this,b);g.DL(a,b.element,4);this.C=new M8;g.B(this,this.C);g.DL(a,this.C.element,4);this.J=!!u8()}this.G=null},Q8=function(a){a.G&&(a.player.removeEventListener("presentingplayerstatechange",a.G),a.G=null)},rva=function(a,b,c){a.F=
c;
a.player.S("presentingplayerstatechange",new g.yD(c,b))},R8=function(a,b){if(b.key!=a.w.key)if(b.key==a.u.key)z8();
else{var c;(c=!g.R(a.player.P().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.N("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.N("SESSION_INDEX")&&!g.N("LOGGED_IN")))||a.J||!a.C);if(c?0:g.Qx(a.player.P())||"WEB_EMBEDDED_PLAYER"==a.player.P().deviceParams.c)g.tD(g.lL(a.player))?a.player.pauseVideo():(a.G=(0,g.x)(a.uN,a),a.player.addEventListener("presentingplayerstatechange",a.G)),a.C&&a.C.u.show(),x8()||(E8=!0);a.w=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);
var e=c.videoId;if(!d&&!e||(2==a.player.app.U||1==a.player.app.U)&&g.R(a.player.P().experiments,"should_clear_video_data_on_player_cued_unstarted"))c=null;else{var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.wa(l).videoId}else k=[e];f=a.player.getCurrentTime(1);d={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.gf,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0==f?void 0:f};(c=g.vB(c))&&(d.locationInfo=c);c=d}r8("Connecting to: "+
g.Lk(b));"cast-selector-receiver"==b.key?(t8(c||null),c=c||null,O7()?L7().setLaunchParams(c):J7("setLaunchParams called before ready.")):!c&&C8()&&q8()==b.key?c6("yt-remote-connection-change",!0):(z8(),t8(c||null),c=p8().Yd(),(c=k6(c,b.key))&&A8(c,1))}},zta={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},F6={"'":"\\'"},tva={},Xsa={CP:"atp",hS:"ska",WR:"que",pR:"mus",gS:"sus",BQ:"dsp",dS:"seq"};
d6.prototype.xg=function(){var a=new d6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.w=this.w;a.u=this.u;a.o=this.o};
var r6,n6="",ota=kta("loadCastFramework")||kta("loadCastApplicationFramework"),Jua=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];u6.prototype.o=null;u6.prototype.getOptions=function(){var a;(a=this.o)||(a={},sta(this)&&(a[0]=!0,a[1]=!0),a=this.o=a);return a};var S8;g.Pa(rta,u6);S8=new rta;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Pa(v6,g.A);g.h=v6.prototype;g.h.Fi=!1;g.h.kk=0;g.h.Ha=null;g.h.Qw=function(a){this.o=arguments;this.Ha||this.kk?this.Fi=!0:w6(this)};
g.h.stop=function(){this.Ha&&(g.v.clearTimeout(this.Ha),this.Ha=null,this.Fi=!1,this.o=[])};
g.h.pause=function(){this.kk++};
g.h.resume=function(){this.kk--;this.kk||!this.Fi||this.Ha||(this.Fi=!1,w6(this))};
g.h.X=function(){v6.Db.X.call(this);this.stop()};
g.h.FE=function(){this.Ha=null;this.Fi&&!this.kk&&(this.Fi=!1,w6(this))};g.h=x6.prototype;g.h.Ah=null;g.h.Pe=!1;g.h.Fj=null;g.h.gu=null;g.h.sj=null;g.h.Gi=null;g.h.sg=null;g.h.Yg=null;g.h.Vh=null;g.h.Gc=null;g.h.Pl=0;g.h.Te=null;g.h.fp=null;g.h.Dg=null;g.h.mk=-1;g.h.cB=!0;g.h.kh=!1;g.h.Lq=0;g.h.Bo=null;var xta={},A6={};g.h=x6.prototype;g.h.setTimeout=function(a){this.B=a};
g.h.GN=function(a){a=a.target;var b=this.Bo;b&&3==Q6(a)?b.Qw():this.gC(a)};
g.h.gC=function(a){try{if(a==this.Gc)a:{var b=Q6(this.Gc),c=this.Gc.C,d=this.Gc.getStatus();if(g.Kd&&!g.od(10)||g.Md&&!g.nd("420+")){if(4>b)break a}else if(3>b||3==b&&!g.rh&&!S6(this.Gc))break a;this.kh||4!=b||7==c||(8==c||0>=d?this.o.Oe(3):this.o.Oe(2));H6(this);var e=this.Gc.getStatus();this.mk=e;var f=S6(this.Gc);(this.Pe=200==e)?(4==b&&D6(this),this.C?(yta(this,b,f),g.rh&&this.Pe&&3==b&&(this.A.ga(this.u,"tick",this.AN),this.u.start())):C6(this,f),this.Pe&&!this.kh&&(4==b?this.o.so(this):(this.Pe=
!1,z6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.Dg=3,B6(13)):(this.Dg=0,B6(14)),D6(this),E6(this))}}catch(k){this.Gc&&S6(this.Gc)}finally{}};
g.h.AN=function(){var a=Q6(this.Gc),b=S6(this.Gc);this.Pl<b.length&&(H6(this),yta(this,a,b),this.Pe&&4!=a&&z6(this))};
g.h.aN=function(a){G6((0,g.x)(this.ZM,this,a),0)};
g.h.ZM=function(a){this.kh||(H6(this),C6(this,a),z6(this))};
g.h.kA=function(a){G6((0,g.x)(this.YM,this,a),0)};
g.h.YM=function(a){this.kh||(D6(this),this.Pe=a,this.o.so(this),this.o.Oe(4))};
g.h.cancel=function(){this.kh=!0;D6(this)};
g.h.hN=function(){this.Fj=null;var a=(0,g.H)();0<=a-this.gu?(2!=this.Gi&&this.o.Oe(3),D6(this),this.Dg=2,B6(18),E6(this)):Bta(this,this.gu-a)};
g.h.getLastError=function(){return this.Dg};J6.prototype.stringify=function(a){return g.v.JSON.stringify(a,void 0)};
J6.prototype.parse=function(a){return g.v.JSON.parse(a,void 0)};g.h=Eta.prototype;g.h.Jq=null;g.h.Ld=null;g.h.Co=!1;g.h.Sw=null;g.h.Sm=null;g.h.wr=null;g.h.Kq=null;g.h.te=null;g.h.Sf=-1;g.h.lk=null;g.h.Pj=null;g.h.connect=function(a){this.Kq=a;a=K6(this.o,null,this.Kq);B6(3);this.Sw=(0,g.H)();var b=this.o.G;null!=b?(this.lk=b[0],(this.Pj=b[1])?(this.te=1,Fta(this)):(this.te=2,M6(this))):($5(a,"MODE","init"),this.Ld=new x6(this,void 0,void 0,void 0),this.Ld.Ah=this.Jq,y6(this.Ld,a,!1,null,!0),this.te=0)};
g.h.AD=function(a){if(a)this.te=2,M6(this);else{B6(4);var b=this.o;b.cf=b.wg.Sf;Z6(b,9)}a&&this.Oe(2)};
g.h.cq=function(a){return this.o.cq(a)};
g.h.abort=function(){this.Ld&&(this.Ld.cancel(),this.Ld=null);this.Sf=-1};
g.h.Rw=function(){return!1};
g.h.eA=function(a,b){this.Sf=a.mk;if(0==this.te)if(b){try{var c=this.u.parse(b)}catch(d){c=this.o;c.cf=this.Sf;Z6(c,2);return}this.lk=c[0];this.Pj=c[1]}else c=this.o,c.cf=this.Sf,Z6(c,2);else if(2==this.te)if(this.Co)B6(7),this.wr=(0,g.H)();else if("11111"==b){if(B6(6),this.Co=!0,this.Sm=(0,g.H)(),c=this.Sm-this.Sw,!g.Kd||g.od(10)||500>c)this.Sf=200,this.Ld.cancel(),B6(12),L6(this.o,this,!0)}else B6(8),this.Sm=this.wr=(0,g.H)(),this.Co=!1};
g.h.so=function(){this.Sf=this.Ld.mk;if(this.Ld.Pe)0==this.te?this.Pj?(this.te=1,Fta(this)):(this.te=2,M6(this)):2==this.te&&((!g.Kd||g.od(10)?!this.Co:200>this.wr-this.Sm)?(B6(11),L6(this.o,this,!1)):(B6(12),L6(this.o,this,!0)));else{0==this.te?B6(9):2==this.te&&B6(10);var a=this.o;this.Ld.getLastError();a.cf=this.Sf;Z6(a,2)}};
g.h.Bl=function(){return this.o.Bl()};
g.h.isActive=function(){return this.o.isActive()};
g.h.Oe=function(a){this.o.Oe(a)};g.Pa(O6,g.Je);var Kta=/^https?$/i,uva=["POST","PUT"];g.h=O6.prototype;
g.h.send=function(a,b,c,d){if(this.o)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+a);b=b?b.toUpperCase():"GET";this.H=a;this.A="";this.C=0;this.da=b;this.U=!1;this.w=!0;this.o=this.T?tta(this.T):tta(S8);this.O=this.T?this.T.getOptions():S8.getOptions();this.o.onreadystatechange=(0,g.x)(this.Tw,this);try{b6(R6(this,"Opening Xhr")),this.Z=!0,this.o.open(b,String(a),!0),this.Z=!1}catch(f){b6(R6(this,"Error opening Xhr: "+f.message));Jta(this,f);return}a=c||
"";var e=this.headers.clone();d&&Tsa(d,function(f,k){e.set(k,f)});
d=g.Ua(e.qe(),Hta);c=g.v.FormData&&a instanceof g.v.FormData;!g.Xa(uva,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,k){this.o.setRequestHeader(k,f)},this);
this.na&&(this.o.responseType=this.na);"withCredentials"in this.o&&this.o.withCredentials!==this.Y&&(this.o.withCredentials=this.Y);try{Mta(this),0<this.F&&(this.J=Gta(this.o),b6(R6(this,"Will abort after "+this.F+"ms if incomplete, xhr2 "+this.J)),this.J?(this.o.timeout=this.F,this.o.ontimeout=(0,g.x)(this.Uw,this)):this.M=g.yf(this.Uw,this.F,this)),b6(R6(this,"Sending request")),this.G=!0,this.o.send(a),this.G=!1}catch(f){b6(R6(this,"Send error: "+f.message)),Jta(this,f)}};
g.h.Uw=function(){"undefined"!=typeof g.E1&&this.o&&(this.A="Timed out after "+this.F+"ms, aborting",this.C=8,R6(this,this.A),this.dispatchEvent("timeout"),this.abort(8))};
g.h.abort=function(a){this.o&&this.w&&(R6(this,"Aborting"),this.w=!1,this.B=!0,this.o.abort(),this.B=!1,this.C=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),P6(this))};
g.h.X=function(){this.o&&(this.w&&(this.w=!1,this.B=!0,this.o.abort(),this.B=!1),P6(this,!0));O6.Db.X.call(this)};
g.h.Tw=function(){this.ka()||(this.Z||this.G||this.B?Lta(this):this.ZL())};
g.h.ZL=function(){Lta(this)};
g.h.isActive=function(){return!!this.o};
g.h.getStatus=function(){try{return 2<Q6(this)?this.o.status:-1}catch(a){return-1}};
g.h.getLastError=function(){return"string"===typeof this.A?this.A:String(this.A)};g.h=T6.prototype;g.h.ak=null;g.h.Fd=null;g.h.ac=null;g.h.Iq=null;g.h.Um=null;g.h.lv=null;g.h.jn=null;g.h.al=0;g.h.sJ=0;g.h.kd=null;g.h.Ag=null;g.h.Gf=null;g.h.ph=null;g.h.wg=null;g.h.cp=null;g.h.Ti=-1;g.h.Fx=-1;g.h.cf=-1;g.h.zi=0;g.h.ri=0;g.h.lh=8;var $6=new g.Je;g.Pa(Ota,g.le);g.Pa(Pta,g.le);g.Pa(Qta,g.le);g.h=T6.prototype;g.h.connect=function(a,b,c,d,e){B6(0);this.Iq=b;this.ak=c||{};d&&void 0!==e&&(this.ak.OSID=d,this.ak.OAID=e);this.C?(G6((0,g.x)(this.Jv,this,a),100),Uta(this)):this.Jv(a)};
g.h.Jv=function(a){this.wg=new Eta(this);this.wg.Jq=null;this.wg.u=this.B;this.wg.connect(a)};
g.h.Rw=function(){return 0==this.o};
g.h.jA=function(a){this.Ag=null;Xta(this,a)};
g.h.iA=function(){this.Gf=null;this.ac=new x6(this,this.w,"rpc",this.F);this.ac.Ah=null;this.ac.Lq=0;var a=this.lv.clone();Y5(a,"RID","rpc");Y5(a,"SID",this.w);Y5(a,"CI",this.cp?"0":"1");Y5(a,"AID",this.Ti);U6(this,a);if(!g.Kd||g.od(10))Y5(a,"TYPE","xmlhttp"),y6(this.ac,a,!0,this.jn,!1);else{Y5(a,"TYPE","html");var b=this.ac,c=!!this.jn;b.Gi=3;b.sg=Z5(a.clone());Ata(b,c)}};
g.h.eA=function(a,b){if(0!=this.o&&(this.ac==a||this.Fd==a))if(this.cf=a.mk,this.Fd==a&&3==this.o)if(7<this.lh){try{var c=this.B.parse(b)}catch(f){c=null}if(g.Ha(c)&&3==c.length)if(0==c[0])a:{if(!this.Gf){if(this.ac)if(this.ac.sj+3E3<this.Fd.sj)W6(this),this.ac.cancel(),this.ac=null;else break a;Y6(this);B6(19)}}else this.Fx=c[1],0<this.Fx-this.Ti&&37500>c[2]&&this.cp&&0==this.ri&&!this.ph&&(this.ph=G6((0,g.x)(this.UJ,this),6E3));else Z6(this,11)}else b!=tva.ZP.o&&Z6(this,11);else if(this.ac==a&&
W6(this),!g.wb(b)){c=this.B.parse(b);g.Ha(c);for(var d=0;d<c.length;d++){var e=c[d];this.Ti=e[0];e=e[1];2==this.o?"c"==e[0]?(this.w=e[1],this.jn=e[2],e=e[3],null!=e?this.lh=e:this.lh=6,this.o=3,this.kd&&this.kd.Fv(),this.lv=K6(this,this.Bl()?this.jn:null,this.Iq),Yta(this)):"stop"==e[0]&&Z6(this,7):3==this.o&&("stop"==e[0]?Z6(this,7):"noop"!=e[0]&&this.kd&&this.kd.Ev(e),this.ri=0)}}};
g.h.UJ=function(){null!=this.ph&&(this.ph=null,this.ac.cancel(),this.ac=null,Y6(this),B6(20))};
g.h.so=function(a){if(this.ac==a){W6(this);this.ac=null;var b=2}else if(this.Fd==a)this.Fd=null,b=1;else return;this.cf=a.mk;if(0!=this.o)if(a.Pe)1==b?(b=(0,g.H)()-a.sj,$6.dispatchEvent(new Pta($6,a.Vh?a.Vh.length:0,b,this.zi)),V6(this),this.A.length=0):Yta(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.cf)){if(d=1==b)this.Fd||this.Ag||1==this.o||2<=this.zi?d=!1:(this.Ag=G6((0,g.x)(this.jA,this,a),Zta(this,this.zi)),this.zi++,d=!0);d=!(d||2==b&&Y6(this))}if(d)switch(c){case 1:Z6(this,
5);break;case 4:Z6(this,10);break;case 3:Z6(this,6);break;case 7:Z6(this,12);break;default:Z6(this,2)}}};
g.h.XD=function(a){if(!g.Xa(arguments,this.o))throw Error("Unexpected channel state: "+this.o);};
g.h.rO=function(a){a?B6(2):(B6(1),$ta(this,8))};
g.h.cq=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new O6;a.Y=!1;return a};
g.h.isActive=function(){return!!this.kd&&this.kd.isActive(this)};
g.h.Oe=function(a){$6.dispatchEvent(new Qta($6,a))};
g.h.Bl=function(){return!(!g.Kd||g.od(10))};
g.h=aua.prototype;g.h.Fv=function(){};
g.h.Ev=function(){};
g.h.Dv=function(){};
g.h.Up=function(){};
g.h.ow=function(){return{}};
g.h.isActive=function(){return!0};g.Pa(a7,g.A);g.h=a7.prototype;g.h.DE=function(a){this.A=arguments;this.o=!1;this.Ha?this.w=(0,g.H)()+this.nd:this.Ha=g.yf(this.B,this.nd)};
g.h.stop=function(){this.Ha&&(g.v.clearTimeout(this.Ha),this.Ha=null);this.w=null;this.o=!1;this.A=[]};
g.h.pause=function(){++this.u};
g.h.resume=function(){this.u&&(--this.u,!this.u&&this.o&&(this.o=!1,this.C.apply(null,this.A)))};
g.h.X=function(){this.stop();a7.Db.X.call(this)};
g.h.EE=function(){this.w?(this.Ha=g.yf(this.B,this.w-(0,g.H)()),this.w=null):(this.Ha=null,this.u?this.o=!0:(this.o=!1,this.C.apply(null,this.A)))};g.h=bua.prototype;g.h.isEmpty=function(){return g.Ya(this.o)&&g.Ya(this.u)};
g.h.clear=function(){this.o=[];this.u=[]};
g.h.contains=function(a){return g.Xa(this.o,a)||g.Xa(this.u,a)};
g.h.remove=function(a){var b=this.o;var c=(0,g.koa)(b,a);0<=c?(g.ab(b,c),b=!0):b=!1;return b||g.cb(this.u,a)};
g.h.zd=function(){for(var a=[],b=this.o.length-1;0<=b;--b)a.push(this.o[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.Pa(b7,g.A);g.h=b7.prototype;g.h.RM=function(){this.nd=Math.min(3E5,2*this.nd);this.w();this.u&&this.start()};
g.h.start=function(){var a=this.nd+15E3*Math.random();g.Rn(this.o,a);this.u=(0,g.H)()+a};
g.h.stop=function(){this.o.stop();this.u=0};
g.h.isActive=function(){return this.o.isActive()};
g.h.reset=function(){this.o.stop();this.nd=5E3};g.Pa(c7,aua);g.h=c7.prototype;g.h.subscribe=function(a,b,c){return this.w.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.w.unsubscribe(a,b,c)};
g.h.eg=function(a){return this.w.Bh(a)};
g.h.S=function(a,b){return this.w.S.apply(this.w,arguments)};
g.h.dispose=function(){this.tb||(this.tb=!0,g.je(this.w),eua(this),g.je(this.u),this.u=null)};
g.h.ka=function(){return this.tb};
g.h.connect=function(a,b,c){if(!this.o||2!=this.o.o){this.H="";this.u.stop();this.B=a||null;this.A=b||0;a=this.M+"/test";b=this.M+"/bind";var d=new T6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.J),e=this.o;e&&(e.kd=null);d.kd=this;this.o=d;e?this.o.connect(a,b,this.C,e.w,e.Ti):c?this.o.connect(a,b,this.C,c.sessionId,c.arrayId):this.o.connect(a,b,this.C)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.cc(c,b);this.u.isActive()||2==(this.o?this.o.o:0)?this.F.push(c):d7(this)&&Vta(this.o,c)};
g.h.Fv=function(){this.u.reset();this.B=null;this.A=0;if(this.F.length){var a=this.F;this.F=[];for(var b=0,c=a.length;b<c;++b)Vta(this.o,a[b])}this.S("handlerOpened")};
g.h.Dv=function(a){var b=2==a&&401==this.o.cf;4==a||b||this.u.start();this.S("handlerError",a)};
g.h.Up=function(a){if(!this.u.isActive())this.S("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.F.push(d)}};
g.h.ow=function(){var a={v:2};this.H&&(a.gsessionid=this.H);0!=this.A&&(a.ui=""+this.A);0!=this.G&&(a.ui=""+this.G);this.B&&g.cc(a,this.B);return a};
g.h.Ev=function(a){"S"==a[0]?this.H=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),Tta(this.o)):this.S("handlerMessage",new cua(a[0],a[1]))};
g.h.VN=function(){this.u.isActive();var a=this.o,b=0;a.ac&&b++;a.Fd&&b++;0==b&&this.connect(this.B,this.A)};e7.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
e7.prototype.w=function(a,b){a(Error("Request error: "+b.status))};
e7.prototype.B=function(a){a(Error("request timed out"))};var mua=(0,g.H)(),h7=null,k7=Array(50),j7=-1,l7=!1;g.Pa(m7,g.Q);m7.prototype.Yd=function(){return this.o};
m7.prototype.contains=function(a){return!!j6(this.o,a)};
m7.prototype.get=function(a){return a?k6(this.o,a):null};
m7.prototype.info=function(a){i7(this.F,a)};g.r(n7,g.Q);g.h=n7.prototype;g.h.start=function(){!this.o&&isNaN(this.Ha)&&this.kC()};
g.h.stop=function(){this.o&&(this.o.abort(),this.o=null);isNaN(this.Ha)||(g.Ko(this.Ha),this.Ha=NaN)};
g.h.X=function(){this.stop();g.Q.prototype.X.call(this)};
g.h.kC=function(){this.Ha=NaN;this.o=g.Kp(f7(this.C,"/pairing/get_screen"),{method:"POST",yb:{pairing_code:this.B},timeout:5E3,onSuccess:(0,g.x)(this.XO,this),onError:(0,g.x)(this.WO,this),Hd:(0,g.x)(this.YO,this)})};
g.h.XO=function(a,b){this.o=null;var c=b.screen||{};c.dialId=this.w;c.name=this.A;this.S("pairingComplete",new e6(c))};
g.h.WO=function(a){this.o=null;a.status&&404==a.status?this.u>=vva.length?this.S("pairingFailed",Error("DIAL polling timed out")):(a=vva[this.u],this.Ha=g.Io((0,g.x)(this.kC,this),a),this.u++):this.S("pairingFailed",Error("Server error "+a.status))};
g.h.YO=function(){this.o=null;this.S("pairingFailed",Error("Server not responding"))};
var vva=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Pa(p7,m7);g.h=p7.prototype;g.h.start=function(){o7(this)&&this.S("screenChange");!g.rs("yt-remote-lounge-token-expiration")&&qua(this);g.Ko(this.u);this.u=g.Io((0,g.x)(this.start,this),1E4)};
g.h.add=function(a,b){o7(this);nua(this,a);q7(this,!1);this.S("screenChange");b(a);a.token||qua(this)};
g.h.remove=function(a,b){var c=o7(this);pua(this,a)&&(q7(this,!1),c=!0);b(a);c&&this.S("screenChange")};
g.h.Yo=function(a,b,c,d){var e=o7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,q7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.S("screenChange")};
g.h.X=function(){g.Ko(this.u);p7.Db.X.call(this)};
g.h.OE=function(a){o7(this);var b=this.o.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}q7(this,!b);b&&i7(this.F,"Missed "+b+" lounge tokens.")};
g.h.NE=function(a){i7(this.F,"Requesting lounge tokens failed: "+a)};g.r(s7,g.Q);g.h=s7.prototype;g.h.start=function(){var a=parseInt(g.rs("yt-remote-fast-check-period")||"0",10);(this.A=(0,g.H)()-144E5<a?0:a)?u7(this):(this.A=(0,g.H)()+3E5,g.ps("yt-remote-fast-check-period",this.A),this.qt())};
g.h.isEmpty=function(){return g.Xb(this.o)};
g.h.update=function(){r7("Updating availability on schedule.");var a=this.C(),b=g.Lb(this.o,function(c,d){return c&&!!k6(a,d)},this);
t7(this,b)};
g.h.X=function(){g.Ko(this.w);this.w=NaN;this.u&&(this.u.abort(),this.u=null);g.Q.prototype.X.call(this)};
g.h.qt=function(){g.Ko(this.w);this.w=NaN;this.u&&this.u.abort();var a=tua(this);if(a6(a)){var b=f7(this.B,"/pairing/get_screen_availability");this.u=g7(this.B,b,{lounge_token:g.Rb(a).join(",")},(0,g.x)(this.vM,this,a),(0,g.x)(this.uM,this))}else t7(this,{}),u7(this)};
g.h.vM=function(a,b){this.u=null;var c=g.Rb(tua(this));if(g.qb(c,g.Rb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;t7(this,d);u7(this)}else this.Sb("Changing Screen set during request."),this.qt()};
g.h.uM=function(a){this.Sb("Screen availability failed: "+a);this.u=null;u7(this)};
g.h.Sb=function(a){i7("OnlineScreenService",a)};g.Pa(v7,m7);g.h=v7.prototype;g.h.start=function(){this.w.start();this.u.start();this.o.length&&(this.S("screenChange"),this.u.isEmpty()||this.S("onlineScreenChange"))};
g.h.add=function(a,b,c){this.w.add(a,b,c)};
g.h.remove=function(a,b,c){this.w.remove(a,b,c);this.u.update()};
g.h.Yo=function(a,b,c,d){this.w.contains(a)?this.w.Yo(a,b,c,d):(a="Updating name of unknown screen: "+a.name,i7(this.F,a),d(Error(a)))};
g.h.Yd=function(a){return a?this.o:g.eb(this.o,(0,g.Xd)(this.A,function(b){return!this.contains(b)},this))};
g.h.lC=function(){return(0,g.Xd)(this.Yd(!0),function(a){return!!this.u.o[a.id]},this)};
g.h.mC=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new n7(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.x)(function(k){g.je(f);d(w7(this,k))},this));
f.subscribe("pairingFailed",function(k){g.je(f);e(k)});
f.start();return(0,g.x)(f.stop,f)};
g.h.aP=function(a,b,c,d){g.Kp(f7(this.C,"/pairing/get_screen"),{method:"POST",yb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.x)(function(e,f){var k=new e6(f.screen||{});if(!k.name||xua(this,k.name)){a:{var l=k.name;for(var m=2,n=b(l,m);xua(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}k.name=l}c(w7(this,k))},this),
onError:(0,g.x)(function(e){d(Error("pairing request failed: "+e.status))},this),
Hd:(0,g.x)(function(){d(Error("pairing request timed out."))},this)})};
g.h.X=function(){g.je(this.w);g.je(this.u);v7.Db.X.call(this)};
g.h.WE=function(){yua(this);this.S("screenChange");this.u.update()};
v7.prototype.dispose=v7.prototype.dispose;g.Pa(y7,g.Q);g.h=y7.prototype;g.h.vo=function(a){this.w=a;this.S("sessionScreen",this.w)};
g.h.ee=function(a){this.ka()||(a&&z7(this,""+a),this.w=null,this.S("sessionScreen",null))};
g.h.info=function(a){i7(this.O,a)};
g.h.oC=function(){return null};
g.h.Et=function(a){var b=this.u;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.x)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.x)(function(){z7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.X=function(){this.Et("");y7.Db.X.call(this)};g.Pa(A7,y7);g.h=A7.prototype;g.h.Dt=function(a){if(this.o){if(this.o==a)return;z7(this,"Overriding cast sesison with new session object");this.o.removeUpdateListener(this.C);this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.o=a;this.o.addUpdateListener(this.C);this.o.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);Aua(this)};
g.h.Ui=function(a){this.info("launchWithParams no-op for Cast: "+g.Lk(a))};
g.h.stop=function(){this.o?this.o.stop((0,g.x)(function(){this.ee()},this),(0,g.x)(function(){this.ee(Error("Failed to stop receiver app."))},this)):this.ee(Error("Stopping cast device witout session."))};
g.h.Et=g.Ea;g.h.X=function(){this.info("disposeInternal");g.Ko(this.A);this.A=0;this.o&&(this.o.removeUpdateListener(this.C),this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.o=null;A7.Db.X.call(this)};
g.h.pN=function(a,b){if(!this.ka())if(b){var c=N6(b);if(g.Ka(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Lk(c));switch(d){case "mdxSessionStatus":zua(this,c.screenId);break;default:z7(this,"Unknown youtube message: "+d)}}else z7(this,"Unable to parse message.")}else z7(this,"No data in message.")};
g.h.Jw=function(a,b,c,d){wua(this.H,this.u.label,a,this.u.friendlyName,(0,g.x)(function(e){e?b(e):0<=d?(z7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.Io((0,g.x)(this.Jw,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.oC=function(){return this.o};
g.h.bP=function(a){this.ka()||a||(z7(this,"Cast session died."),this.ee())};g.Pa(B7,y7);g.h=B7.prototype;g.h.Dt=function(a){this.A=a;this.A.addUpdateListener(this.J)};
g.h.Ui=function(a){this.B=a;this.F()};
g.h.stop=function(){this.o();this.o=g.Ea;g.Ko(this.C);this.A?this.A.stop((0,g.x)(this.ee,this,null),(0,g.x)(this.ee,this,"Failed to stop DIAL device.")):this.ee()};
g.h.X=function(){this.o();this.o=g.Ea;g.Ko(this.C);this.A&&this.A.removeUpdateListener(this.J);this.A=null;B7.Db.X.call(this)};
g.h.eP=function(a){this.ka()||a||(z7(this,"DIAL session died."),this.o(),this.o=g.Ea,this.ee())};
g.h.Xq=function(a){this.M=i6();if(this.B){var b=new chrome.cast.DialLaunchResponse(!0,Cua(this));a(b);Bua(this)}else this.F=(0,g.x)(function(){g.Ko(this.C);this.F=g.Ea;this.C=NaN;var c=new chrome.cast.DialLaunchResponse(!0,Cua(this));a(c);Bua(this)},this),this.C=g.Io((0,g.x)(function(){this.F()},this),100)};
g.h.pF=function(a,b,c){wua(this.H,this.G.receiver.label,a,this.u.friendlyName,(0,g.x)(function(d){d&&d.token?(this.vo(d),b(new chrome.cast.DialLaunchResponse(!1))):this.Xq(b,c)},this),(0,g.x)(function(d){z7(this,"Failed to get DIAL screen: "+d);
this.Xq(b,c)},this))};g.Pa(C7,y7);C7.prototype.stop=function(){this.ee()};
C7.prototype.Dt=g.Ea;C7.prototype.Ui=function(){g.Ko(this.o);this.o=NaN;var a=k6(this.H.Yd(),this.u.label);a?this.vo(a):this.ee(Error("No such screen"))};
C7.prototype.X=function(){g.Ko(this.o);this.o=NaN;C7.Db.X.call(this)};g.Pa(D7,g.Q);g.h=D7.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.F);this.G||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=(0,g.x)(this.eM,this);c=new chrome.cast.ApiConfig(c,(0,g.x)(this.gA,this),f,d,e);c.customDialLaunchCallback=(0,g.x)(this.tK,this);chrome.cast.initialize(c,(0,g.x)(function(){this.ka()||
(chrome.cast.addReceiverActionListener(this.A),jua(),this.u.subscribe("onlineScreenChange",(0,g.x)(this.nC,this)),this.w=Eua(this),chrome.cast.setCustomReceivers(this.w,g.Ea,(0,g.x)(function(k){this.Sb("Failed to set initial custom receivers: "+g.Lk(k))},this)),this.S("yt-remote-cast2-availability-change",F7(this)),b(!0))},this),(0,g.x)(function(k){this.Sb("Failed to initialize API: "+g.Lk(k));
b(!1)},this))};
g.h.dO=function(a,b){E7("Setting connected screen ID: "+a+" -> "+b);if(this.o){var c=this.o.w;if(!a||c&&c.id!=a)E7("Unsetting old screen status: "+this.o.u.friendlyName),G7(this,null)}if(a&&b){if(!this.o){c=k6(this.u.Yd(),a);if(!c){E7("setConnectedScreenStatus: Unknown screen.");return}var d=Dua(this,c);d||(E7("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.w.push(d),chrome.cast.setCustomReceivers(this.w,
g.Ea,(0,g.x)(function(e){this.Sb("Failed to set initial custom receivers: "+g.Lk(e))},this)));
E7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);G7(this,new C7(this.u,d),!0)}this.o.Et(b)}else E7("setConnectedScreenStatus: no screen.")};
g.h.eO=function(a){this.ka()?this.Sb("Setting connection data on disposed cast v2"):this.o?this.o.Ui(a):this.Sb("Setting connection data without a session")};
g.h.dP=function(){this.ka()?this.Sb("Stopping session on disposed cast v2"):this.o?(this.o.stop(),G7(this,null)):E7("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.x)(this.gA,this),(0,g.x)(this.zM,this))};
g.h.X=function(){this.u.unsubscribe("onlineScreenChange",(0,g.x)(this.nC,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.A);var a=gua,b=g.w("yt.mdx.remote.debug.handlers_");g.cb(b||[],a);g.je(this.o);D7.Db.X.call(this)};
g.h.Sb=function(a){i7("Controller",a)};
g.h.hA=function(a,b){this.o==a&&(b||G7(this,null),this.S("yt-remote-cast2-session-change",b))};
g.h.aM=function(a,b){if(!this.ka())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),E7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.o)if(this.o.u.label!=a.label)E7("onReceiverAction_: Stopping active receiver: "+this.o.u.friendlyName),this.o.stop();else{E7("onReceiverAction_: Casting to active receiver.");this.o.w&&this.S("yt-remote-cast2-session-change",this.o.w);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:G7(this,
new C7(this.u,a));break;case chrome.cast.ReceiverType.DIAL:G7(this,new B7(this.u,a,this.C));break;case chrome.cast.ReceiverType.CAST:G7(this,new A7(this.u,a));break;default:this.Sb("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.o&&this.o.u.label==a.label?this.o.stop():this.Sb("Stopping receiver w/o session: "+a.friendlyName)}else this.Sb("onReceiverAction_ called without receiver.")};
g.h.tK=function(a){if(this.ka())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Sb("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.o?this.o.u:null;if(!c||c.label!=b.label)return this.Sb("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.o.w)return E7("Reselecting dial screen."),
this.S("yt-remote-cast2-session-change",this.o.w),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Sb('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);G7(this,new B7(this.u,b,this.C))}b=this.o;b.G=a;return b.G.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.x)(b.pF,b,(b.G.extraData||{}).screenId||null)):new Promise((0,g.x)(b.Xq,b))};
g.h.gA=function(a){if(!this.ka()){E7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.o)if(b.receiverType==chrome.cast.ReceiverType.CAST)E7("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),G7(this,new A7(this.u,b),!0);else{this.Sb("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.o.u,d=k6(this.u.Yd(),c.label);d&&f6(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(E7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.je(this.o),this.o=new A7(this.u,b),this.o.subscribe("sessionScreen",(0,g.x)(this.hA,this,this.o)),this.o.Ui(null));this.o.Dt(a)}}};
g.h.cP=function(){return this.o?this.o.oC():null};
g.h.zM=function(a){this.ka()||(this.Sb("Failed to estabilish a session: "+g.Lk(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&G7(this,null))};
g.h.eM=function(a){E7("Receiver availability updated: "+a);if(!this.ka()){var b=F7(this);this.B=a==chrome.cast.ReceiverAvailability.AVAILABLE;F7(this)!=b&&this.S("yt-remote-cast2-availability-change",F7(this))}};
g.h.nC=function(){this.ka()||(this.w=Eua(this),E7("Updating custom receivers: "+g.Lk(this.w)),chrome.cast.setCustomReceivers(this.w,g.Ea,(0,g.x)(function(){this.Sb("Failed to set custom receivers.")},this)),this.S("yt-remote-cast2-availability-change",F7(this)))};
D7.prototype.setLaunchParams=D7.prototype.eO;D7.prototype.setConnectedScreenStatus=D7.prototype.dO;D7.prototype.stopSession=D7.prototype.dP;D7.prototype.getCastSession=D7.prototype.cP;D7.prototype.requestSession=D7.prototype.requestSession;D7.prototype.init=D7.prototype.init;D7.prototype.dispose=D7.prototype.dispose;var M7=[];R7.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";S7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.o=a.trackData,this.df=a.hasPrevious,this.hasNext=a.hasNext,this.F=a.playerTime,this.C=a.playerTimeAt,this.A=a.seekableStart,this.u=a.seekableEnd,this.G=a.duration,this.H=a.loadedTime,this.w=a.liveIngestionTime,this.B=
!isNaN(this.w))};
R7.prototype.isAdPlaying=function(){return 1081==this.playerState};
R7.prototype.getDuration=function(){return this.B?this.G+T7(this):this.G};
R7.prototype.clone=function(){return new R7(X7(this))};g.r(Z7,g.Q);g.h=Z7.prototype;g.h.play=function(){1==this.o?(this.u?this.u.play(null,g.Ea,e8(this,"play")):d8(this,"play"),c8(this,1,V7($7(this))),this.S("remotePlayerChange")):a8(this,this.play)};
g.h.pause=function(){1==this.o?(this.u?this.u.pause(null,g.Ea,e8(this,"pause")):d8(this,"pause"),c8(this,2,V7($7(this))),this.S("remotePlayerChange")):a8(this,this.pause)};
g.h.seekTo=function(a){if(1==this.o){if(this.u){var b=$7(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.playerState||3==b.playerState?chrome.cast.media.ResumeState.PLAYBACK_START:chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.u.seek(c,g.Ea,e8(this,"seekTo",{newTime:a}))}else d8(this,"seekTo",{newTime:a});c8(this,3,a);this.S("remotePlayerChange")}else a8(this,g.Na(this.seekTo,a))};
g.h.stop=function(){if(1==this.o){this.u?this.u.stop(null,g.Ea,e8(this,"stopVideo")):d8(this,"stopVideo");var a=$7(this);a.index=-1;a.videoId="";S7(a);b8(this,a);this.S("remotePlayerChange")}else a8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.o){var c=$7(this);if(this.w){if(c.volume!=a){var d=Math.round(a)/100;this.w.setReceiverVolumeLevel(d,(0,g.x)(function(){i7("CP","set receiver volume: "+d)},this),(0,g.x)(function(){this.Sb("failed to set receiver volume.")},this))}c.muted!=b&&this.w.setReceiverMuted(b,(0,g.x)(function(){i7("CP","set receiver muted: "+b)},this),(0,g.x)(function(){this.Sb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);d8(this,"setVolume",e)}c.muted=b;c.volume=a;b8(this,c)}else a8(this,g.Na(this.setVolume,a,b))};
g.h.iB=function(a,b){if(1==this.o){var c=$7(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.Lk(b.style),g.cc(d,c.o));d8(this,"setSubtitlesTrack",d);b8(this,c)}else a8(this,g.Na(this.iB,a,b))};
g.h.setAudioTrack=function(a,b){if(1==this.o){var c=b.getLanguageInfo().getId();d8(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=$7(this);d.audioTrackId=c;b8(this,d)}else a8(this,g.Na(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){var l=$7(this);c=c||0;var m={videoId:a,currentIndex:c};W7(l,a,c);void 0!==b&&(U7(l,b),m.currentTime=b);void 0!==d&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=k&&(m.locationInfo=g.Lk(k));d8(this,"setPlaylist",m);d||b8(this,l)};
g.h.jC=function(a,b){if(1==this.o){if(a&&b){var c=$7(this);W7(c,a,b);b8(this,c)}d8(this,"previous")}else a8(this,g.Na(this.jC,a,b))};
g.h.nextVideo=function(a,b){if(1==this.o){if(a&&b){var c=$7(this);W7(c,a,b);b8(this,c)}d8(this,"next")}else a8(this,g.Na(this.nextVideo,a,b))};
g.h.Rv=function(){1==this.o?d8(this,"dismissAutoplay"):a8(this,this.Rv)};
g.h.dispose=function(){if(3!=this.o){var a=this.o;this.o=3;this.S("proxyStateChange",a,this.o)}g.Q.prototype.dispose.call(this)};
g.h.X=function(){Rua(this);this.A=null;this.B.clear();Y7(this,null);g.Q.prototype.X.call(this)};
g.h.ju=function(a){if((a!=this.o||2==a)&&3!=this.o&&0!=a){var b=this.o;this.o=a;this.S("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)b=a=this.B,g.Ya(b.o)&&(b.o=b.u,b.o.reverse(),b.u=[]),a.o.pop().apply(this);else 3==a&&this.dispose()}};
g.h.XL=function(a,b){this.S(a,b)};
g.h.aK=function(a){if(!a)this.fl(null),Y7(this,null);else if(this.w.receiver.volume){a=this.w.receiver.volume;var b=$7(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)i7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,b8(this,b)}};
g.h.fl=function(a){i7("CP","Cast media: "+!!a);this.u&&this.u.removeUpdateListener(this.G);if(this.u=a)this.u.addUpdateListener(this.G),Sua(this),this.S("remotePlayerChange")};
g.h.ZJ=function(a){a?(Sua(this),this.S("remotePlayerChange")):this.fl(null)};
g.h.mK=function(){var a=Oua();a&&Y7(this,a)};
g.h.Sb=function(a){i7("CP",a)};g.r(f8,g.Q);g.h=f8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;void 0!==m&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);void 0!==k&&(l.currentIndex=k);c&&(this.Ra.listId=c);this.Ra.videoId=d;this.Ra.index=k||0;this.Ra.state=3;U7(this.Ra,m);this.A="UNSUPPORTED";g8("Connecting with setPlaylist and params: "+g.Lk(l));this.o.connect({method:"setPlaylist",
params:g.Lk(l)},a,eta())}else g8("Connecting without params"),this.o.connect({},a,eta());Uua(this)};
g.h.dispose=function(){this.ka()||(this.S("beforeDispose"),h8(this,3));g.Q.prototype.dispose.call(this)};
g.h.X=function(){i8(this);k8(this);j8(this);g.Ko(this.F);this.F=NaN;g.Ko(this.G);this.G=NaN;this.w=null;g.Fq(this.O);this.O.length=0;this.o.dispose();g.Q.prototype.X.call(this);this.A=this.C=this.u=this.Ra=this.o=null};
g.h.HE=function(){this.yi(2)};
g.h.eK=function(){g8("Channel opened");this.J&&(this.J=!1,j8(this),this.M=g.Io((0,g.x)(function(){g8("Timing out waiting for a screen.");this.yi(1)},this),15E3));
ita(dua(this.o),this.T)};
g.h.bK=function(){g8("Channel closed");isNaN(this.B)?q6(!0):q6();this.dispose()};
g.h.cK=function(a){q6();isNaN(this.fk())?(g8("Channel error: "+a+" without reconnection"),this.dispose()):(this.J=!0,g8("Channel error: "+a+" with reconnection in "+this.fk()+" ms"),h8(this,2))};
g.h.dK=function(a){a.params?g8("Received: action="+a.action+", params="+g.Lk(a.params)):g8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=N6(a.params.devices);this.u=(0,g.Hc)(a,function(c){return new d6(c)});
a=!!g.Ua(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
Xua(this,a);break;case "loungeScreenDisconnected":g.db(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
Xua(this,!1);break;case "remoteConnected":var b=new d6(N6(a.params.device));g.Ua(this.u,function(c){return b?c.id==b.id:!1})||Psa(this.u,b);
break;case "remoteDisconnected":b=new d6(N6(a.params.device));g.db(this.u,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":Zua(this,a);break;case "nowPlaying":ava(this,a);break;case "onStateChange":$ua(this,a);break;case "onAdStateChange":bva(this,a);break;case "onVolumeChanged":cva(this,a);break;case "onSubtitlesTrackChanged":Yua(this,a);break;case "nowAutoplaying":dva(this,a);break;case "autoplayDismissed":this.S("autoplayDismissed");break;case "autoplayUpNext":this.C=a.params.videoId||null;this.S("autoplayUpNext",this.C);break;case "onAutoplayModeChanged":this.A=
a.params.autoplayMode;this.S("autoplayModeChange",this.A);"DISABLED"==this.A&&this.S("autoplayDismissed");break;case "onHasPreviousNextChanged":eva(this,a);break;case "requestAssistedSignIn":this.S("assistedSignInRequested",a.params.authCode);break;default:g8("Unrecognized action: "+a.action)}};
g.h.RN=function(){if(this.w){var a=this.w;this.w=null;this.Ra.videoId!=a&&l8(this,"getNowPlaying")}};
g.h.wE=function(){var a=3;this.ka()||(a=0,isNaN(this.fk())?d7(this.o)&&isNaN(this.B)&&(a=1):a=2);return a};
g.h.yi=function(a){g8("Disconnecting with "+a);i8(this);this.S("beforeDisconnect",a);1==a&&q6();eua(this.o,a);this.dispose()};
g.h.vE=function(){var a=this.Ra;this.w&&(a=this.Ra.clone(),W7(a,this.w,a.index));return X7(a)};
g.h.fO=function(a){var b=new R7(a);b.videoId&&b.videoId!=this.Ra.videoId&&(this.w=b.videoId,g.Ko(this.F),this.F=g.Io((0,g.x)(this.RN,this),5E3));var c=[];this.Ra.listId==b.listId&&this.Ra.videoId==b.videoId&&this.Ra.index==b.index||c.push("remoteQueueChange");this.Ra.playerState==b.playerState&&this.Ra.volume==b.volume&&this.Ra.muted==b.muted&&V7(this.Ra)==V7(b)&&g.Lk(this.Ra.o)==g.Lk(b.o)||c.push("remotePlayerChange");this.Ra.reset(a);(0,g.y)(c,function(d){this.S(d)},this)};
g.h.Hw=function(){var a=this.o.C.id,b=g.Ua(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.fk=function(){var a=this.o;return a.u.isActive()?a.u.u-(0,g.H)():NaN};
g.h.kE=function(){return this.A||"UNSUPPORTED"};
g.h.lE=function(){return this.C||""};
g.h.VO=function(){if(!isNaN(this.fk())){var a=this.o.u;g.Sn(a.o);a.start()}};
g.h.aO=function(a,b){l8(this,a,b);Wua(this)};
f8.prototype.subscribe=f8.prototype.subscribe;f8.prototype.unsubscribeByKey=f8.prototype.eg;f8.prototype.getProxyState=f8.prototype.wE;f8.prototype.disconnect=f8.prototype.yi;f8.prototype.getPlayerContextData=f8.prototype.vE;f8.prototype.setPlayerContextData=f8.prototype.fO;f8.prototype.getOtherConnectedRemoteId=f8.prototype.Hw;f8.prototype.getReconnectTimeout=f8.prototype.fk;f8.prototype.getAutoplayMode=f8.prototype.kE;f8.prototype.getAutoplayVideoId=f8.prototype.lE;f8.prototype.reconnect=f8.prototype.VO;
f8.prototype.sendMessage=f8.prototype.aO;g.r(m8,m7);g.h=m8.prototype;g.h.Yd=function(a){return this.md.$_gs(a)};
g.h.contains=function(a){return!!this.md.$_c(a)};
g.h.get=function(a){return this.md.$_g(a)};
g.h.start=function(){this.md.$_st()};
g.h.add=function(a,b,c){this.md.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.md.$_r(a,b,c)};
g.h.Yo=function(a,b,c,d){this.md.$_un(a,b,c,d)};
g.h.X=function(){for(var a=0,b=this.u.length;a<b;++a)this.md.$_ubk(this.u[a]);this.u.length=0;this.md=null;m7.prototype.X.call(this)};
g.h.ZO=function(){this.S("screenChange")};
g.h.CL=function(){this.S("onlineScreenChange")};
v7.prototype.$_st=v7.prototype.start;v7.prototype.$_gspc=v7.prototype.aP;v7.prototype.$_gsppc=v7.prototype.mC;v7.prototype.$_c=v7.prototype.contains;v7.prototype.$_g=v7.prototype.get;v7.prototype.$_a=v7.prototype.add;v7.prototype.$_un=v7.prototype.Yo;v7.prototype.$_r=v7.prototype.remove;v7.prototype.$_gs=v7.prototype.Yd;v7.prototype.$_gos=v7.prototype.lC;v7.prototype.$_s=v7.prototype.subscribe;v7.prototype.$_ubk=v7.prototype.eg;var F8=null,E8=!1,n8=null,o8=null,D8=null,s8=[];g.r(G8,g.A);g.h=G8.prototype;
g.h.X=function(){g.A.prototype.X.call(this);this.A.stop();this.C.stop();this.J.stop();this.U();this.o.unsubscribe("proxyStateChange",this.dA,this);this.o.unsubscribe("remotePlayerChange",this.kl,this);this.o.unsubscribe("remoteQueueChange",this.wo,this);this.o.unsubscribe("autoplayUpNext",this.Fz,this);this.o.unsubscribe("previousNextChange",this.aA,this);this.o.unsubscribe("nowAutoplaying",this.Wz,this);this.o.unsubscribe("autoplayDismissed",this.Ez,this);this.o=this.B=null};
g.h.Ey=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.o.o)if(J8(this)){if(!$7(this.o).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":1==$7(this.o).playerState?this.o.pause():this.o.play();break;case "control_play":this.o.play();break;case "control_pause":this.o.pause();break;case "control_seek":this.M.Qw(c[0],c[1]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":c=c[0],J8(this)&&this.o.setAudioTrack(this.u.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.u.getCurrentTime();L8(this,0==c?void 0:c);break;case "control_seek":L8(this,c[0]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":c=c[0],J8(this)&&this.o.setAudioTrack(this.u.getVideoData(1).videoId,c)}};
g.h.YJ=function(a){this.J.DE(a)};
g.h.BO=function(a){this.Ey("control_subtitles_set_track",g.Xb(a)?null:a)};
g.h.xB=function(){var a=this.u.getOption("captions","track");g.Xb(a)||K8(this,a)};
g.h.Pz=function(a){if(J8(this)){this.o.unsubscribe("remotePlayerChange",this.kl,this);var b=Math.round(a.volume);a=!!a.muted;var c=$7(this.o);if(b!=c.volume||a!=c.muted)this.o.setVolume(b,a),this.O.start();this.o.subscribe("remotePlayerChange",this.kl,this)}};
g.h.XK=function(){g.Xb(this.F)||qva(this,this.F);this.G=!1};
g.h.dA=function(a,b){this.C.stop();2==b&&this.uB()};
g.h.kl=function(){if(J8(this)){this.A.stop();var a=$7(this.o);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.B.H=1;break;case 1082:case 1083:this.B.H=0;break;default:this.B.H=-1}switch(a.playerState){case 1081:case 1:I8(this,new g.mD(8));this.tB();break;case 1085:case 3:I8(this,new g.mD(9));break;case 1083:case 0:I8(this,new g.mD(2));this.M.stop();H8(this,this.u.getVideoData().lengthSeconds);break;case 1084:I8(this,new g.mD(4));break;case 2:I8(this,new g.mD(4));H8(this,V7(a));
break;case -1:I8(this,new g.mD(64));break;case -1E3:I8(this,new g.mD(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=$7(this.o).o;var b=this.F;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.F=a,qva(this,a));a=$7(this.o);-1==a.volume||Math.round(this.u.getVolume())==a.volume&&this.u.isMuted()==a.muted||this.O.isActive()||this.YB()}else pva(this)};
g.h.aA=function(){this.u.S("mdxpreviousnextchange")};
g.h.wo=function(){J8(this)||pva(this)};
g.h.zD=function(){this.o.Rv()};
g.h.Fz=function(){};
g.h.Wz=function(a){isNaN(a)||this.u.S("mdxnowautoplaying",a)};
g.h.Ez=function(){this.u.S("mdxautoplaycanceled")};
g.h.zH=function(a,b){-1==$7(this.o).playerState?L8(this,a):b&&this.o.seekTo(a)};
g.h.YB=function(){if(J8(this)){var a=$7(this.o);this.w.Wa(this.T);a.muted?this.u.mute():this.u.unMute();this.u.setVolume(a.volume);this.T=this.w.L(this.u,"onVolumeChange",this.Pz)}};
g.h.tB=function(){this.A.stop();if(!this.o.ka()){var a=$7(this.o);1==a.playerState&&I8(this,new g.mD(8));H8(this,V7(a));this.A.start()}};
g.h.uB=function(){this.C.stop();this.A.stop();var a=this.o.A.getReconnectTimeout();2==this.o.o&&!isNaN(a)&&this.C.start()};g.r(M8,g.V);M8.prototype.w=function(){c6("mdx-privacy-popup-cancel");this.u.hide()};
M8.prototype.B=function(){c6("mdx-privacy-popup-confirm");this.u.hide()};g.r(N8,g.V);N8.prototype.A=function(a){sva(this,a.state)};g.r(O8,g.lO);O8.prototype.J=function(){var a=this.u.getOption("remote","receivers");a&&1<a.length&&!this.u.getOption("remote","quickCast")?(this.C=g.sb(a,this.B,this),g.nO(this,(0,g.Hc)(a,this.B)),a=this.u.getOption("remote","currentReceiver"),this.xe(this.B(a)),this.enable(!0)):this.enable(!1)};
O8.prototype.B=function(a){return a.key};
O8.prototype.Me=function(a){return"cast-selector-receiver"==a?"Cast...":this.C[a].name};
O8.prototype.Yc=function(a){g.lO.prototype.Yc.call(this,a);this.u.setOption("remote","currentReceiver",this.C[a]);this.w.ib()};g.r(P8,g.uP);g.h=P8.prototype;
g.h.create=function(){jva(g.yx(this.player.P()));this.A.push(g.Po("yt-remote-before-disconnect",this.VJ,this));this.A.push(g.Po("yt-remote-connection-change",this.fM,this));this.A.push(g.Po("yt-remote-receiver-availability-change",this.bA,this));this.A.push(g.Po("yt-remote-auto-connect",this.dM,this));this.A.push(g.Po("yt-remote-receiver-resumed",this.cM,this));this.A.push(g.Po("mdx-privacy-popup-confirm",this.DN,this));this.A.push(g.Po("mdx-privacy-popup-cancel",this.CN,this));this.bA()};
g.h.load=function(){this.player.cancelPlayback();g.uP.prototype.load.call(this);this.B=new G8(this,this.player,this.o);var a=(a=ova())?a.currentTime:0;var b=C8()?new Z7(x8(),void 0):null;0==a&&b&&(a=V7($7(b)));0!=a&&(this.O=a||0,this.player.S("progresssync",a,void 0));rva(this,this.F,this.F);g.WS(this.player.app,6)};
g.h.unload=function(){this.player.S("mdxautoplaycanceled");this.w=this.u;g.ke(this.B,this.o);this.o=this.B=null;g.uP.prototype.unload.call(this);g.WS(this.player.app,5);Q8(this)};
g.h.X=function(){g.Qo(this.A);g.uP.prototype.X.call(this)};
g.h.Rk=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.B.Ey.apply(this.B,[a].concat(g.ea(c)))};
g.h.getAdState=function(){return this.H};
g.h.yE=function(){return this.loaded?this.B.suggestion:null};
g.h.df=function(){return this.o?$7(this.o).df:!1};
g.h.hasNext=function(){return this.o?$7(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.O};
g.h.getProgressState=function(){var a=$7(this.o),b=this.player.getVideoData();return{allowSeeking:g.R(this.player.P().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.Oc():!a.isAdPlaying()&&this.player.Oc(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.B?a.w+T7(a):a.w,isAtLiveHead:1>=(a.B?a.u+T7(a):a.u)-this.getCurrentTime(),loaded:a.H,seekableEnd:a.B?a.u+T7(a):a.u,seekableStart:0<a.A?a.A+T7(a):
a.A}};
g.h.nextVideo=function(){this.o&&this.o.nextVideo()};
g.h.cH=function(){this.o&&this.o.jC()};
g.h.VJ=function(a){1==a&&(this.T=this.o?$7(this.o):null)};
g.h.fM=function(){var a=C8()?new Z7(x8(),void 0):null;if(a){var b=this.w;this.loaded&&this.unload();this.o=a;this.T=null;b.key!=this.u.key&&(this.w=b,this.load())}else g.je(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.T)&&a.videoId==this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,V7(a)));this.player.S("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.bA=function(){this.M=[this.u].concat(lva());var a=y8()||this.u;R8(this,a);this.player.la("onMdxReceiversChange")};
g.h.uN=function(a){!this.J&&g.AD(a,8)&&(this.player.pauseVideo(),Q8(this))};
g.h.dM=function(){var a=y8();R8(this,a)};
g.h.cM=function(){this.w=y8()};
g.h.DN=function(){this.J=!0;Q8(this);E8=!1;F8&&A8(F8,1);F8=null};
g.h.CN=function(){this.J=!1;Q8(this);R8(this,this.u);this.w=this.u;E8=!1;F8=null;this.player.playVideo()};
g.h.Jc=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.M;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?P7():R8(this,b)),this.loaded?this.w:this.u;case "quickCast":return 2==this.M.length&&"cast-selector-receiver"==this.M[1].key?(b&&P7(),!0):!1}};
g.h.dH=function(){d8(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.vf=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.JP.remote=P8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 21:51:55 Feb 04, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:16:19 Jul 20, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  load_resource: 109.97
  LoadShardBlock: 98.679 (3)
  exclusion.robots.policy: 0.147
  exclusion.robots: 0.158
  esindex: 0.014
  captures_list: 951.999
  RedisCDXSource: 710.573
  PetaboxLoader3.resolve: 23.484
  PetaboxLoader3.datanode: 70.126 (4)
  CDXLines.iter: 34.39 (3)
*/