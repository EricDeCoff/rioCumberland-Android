!function(a){function r(){}window.PhoneGap||window.Cordova||window.cordova;r.prototype.iPadPopupCoordinates=function(){return"-1,-1,-1,-1"},r.prototype.setIPadPopupCoordinates=function(r){a.exec(function(){},this._getErrorCallback(function(){},"setIPadPopupCoordinates"),"SocialSharing","setIPadPopupCoordinates",[r])},r.prototype.available=function(r){a.exec(function(a){r(a?!0:!1)},null,"SocialSharing","available",[])},r.prototype.share=function(r,i,o,e,t,n){a.exec(t,this._getErrorCallback(n,"share"),"SocialSharing","share",[r,i,this._asArray(o),e])},r.prototype.shareViaTwitter=function(r,i,o,e,t){var n=this._asArray(i),s=this._getErrorCallback(t,"shareViaTwitter");n.length>1?s("shareViaTwitter supports max one file"):a.exec(e,s,"SocialSharing","shareViaTwitter",[r,null,n,o])},r.prototype.shareViaFacebook=function(r,i,o,e,t){a.exec(e,this._getErrorCallback(t,"shareViaFacebook"),"SocialSharing","shareViaFacebook",[r,null,this._asArray(i),o])},r.prototype.shareViaFacebookWithPasteMessageHint=function(r,i,o,e,t,n){e=e||"If you like you can paste a message from your clipboard",a.exec(t,this._getErrorCallback(n,"shareViaFacebookWithPasteMessageHint"),"SocialSharing","shareViaFacebookWithPasteMessageHint",[r,null,this._asArray(i),o,e])},r.prototype.shareViaWhatsApp=function(r,i,o,e,t){a.exec(e,this._getErrorCallback(t,"shareViaWhatsApp"),"SocialSharing","shareViaWhatsApp",[r,null,this._asArray(i),o])},r.prototype.shareViaSMS=function(r,i,o,e){var t=r;"string"==typeof r&&(t={message:r}),a.exec(o,this._getErrorCallback(e,"shareViaSMS"),"SocialSharing","shareViaSMS",[t,i])},r.prototype.shareViaEmail=function(r,i,o,e,t,n,s,c){a.exec(s,this._getErrorCallback(c,"shareViaEmail"),"SocialSharing","shareViaEmail",[r,i,this._asArray(o),this._asArray(e),this._asArray(t),this._asArray(n)])},r.prototype.canShareVia=function(r,i,o,e,t,n,s){a.exec(n,this._getErrorCallback(s,"canShareVia"),"SocialSharing","canShareVia",[i,o,this._asArray(e),t,r])},r.prototype.canShareViaEmail=function(r,i){a.exec(r,this._getErrorCallback(i,"canShareViaEmail"),"SocialSharing","canShareViaEmail",[])},r.prototype.shareVia=function(r,i,o,e,t,n,s){a.exec(n,this._getErrorCallback(s,"shareVia"),"SocialSharing","shareVia",[i,o,this._asArray(e),t,r])},r.prototype.saveToPhotoAlbum=function(r,i,o){a.exec(i,this._getErrorCallback(o,"saveToPhotoAlbum"),"SocialSharing","saveToPhotoAlbum",[this._asArray(r)])},r.prototype._asArray=function(a){return null===a?a=[]:"string"==typeof a&&(a=new Array(a)),a},r.prototype._getErrorCallback=function(a,r){return"function"==typeof a?a:function(a){console.log("The injected error callback of '"+r+"' received: "+JSON.stringify(a))}},r.install=function(){return window.plugins||(window.plugins={}),window.plugins.socialsharing=new r,window.plugins.socialsharing},a.addConstructor(r.install)}(window.cordova||window.Cordova||window.PhoneGap);