/* No Twitch API necessary. Streamlabs raid Message Template MUST be:
   <span class="raid-source">{name}</span><span class="raid-count">{count}</span>
   If a version of Streamlabs strips HTML, set template to "{name} — {count}"
   and the basic caller text will still render, though the count readout
   will not be available separately.
*/
(function(){
  "use strict";
  function install(){
    const message=document.getElementById("alert-message");
    const count=document.querySelector(".raid-count-readout");
    if(!message||!count)return false;
    const apply=()=>{
      const raw=message.querySelector(".raid-count");
      if(raw){
        const n=(raw.textContent||"").trim();
        if(n && n!=="{count}") count.textContent=n+" espectadores";
      }
    };
    new MutationObserver(apply).observe(message,{childList:true,subtree:true,characterData:true});
    apply();
    return true;
  }
  if(!install())document.addEventListener("DOMContentLoaded",install,{once:true});
})();
