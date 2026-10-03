/* Fullscreen Raid: dynamic nickname and viewer count are inserted by
 * Streamlabs message template. Never alter real mouse, OBS or network.
 * Template:
 * <span class="raid-source">{name}</span><span class="raid-count">{count}</span>
 */
(function(){
 "use strict";
 function setup(){
  const message=document.getElementById("alert-message");
  if(!message)return false;
  const sourceToast=document.querySelector(".sk-toast-name");
  const sourceCopy=document.querySelector(".sk-source-copy");
  const countCopy=document.querySelector(".sk-count-copy");
  const update=()=>{
   const source=message.querySelector(".raid-source");
   const count=message.querySelector(".raid-count");
   const name=source?source.textContent.trim():"";
   const viewers=count?count.textContent.trim():"";
   if(name && name!=="{name}"){
    sourceToast.textContent=name;
    sourceCopy.textContent=name;
   }
   if(/^\d{1,7}$/.test(viewers)){
    countCopy.textContent=viewers;
   }
  };
  new MutationObserver(update).observe(message,{subtree:true,childList:true,characterData:true});
  update();
  return true;
 }
 if(!setup()) document.addEventListener("DOMContentLoaded",setup,{once:true});
})();