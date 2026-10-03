/* Streamlabs donation alert: message fallback and safe, bounded text sizing.
 * No API calls. Does not depend on onEventReceived: simulated alerts supported.
 */
(function () {
  "use strict";
  function setup() {
    const payment=document.getElementById("alert-message");
    const userMessage=document.getElementById("alert-user-message");
    const speech=document.querySelector(".speech");
    if(!payment||!userMessage||!speech)return false;
    function refresh(){
      const text=(userMessage.textContent||"").trim();
      const hasEmote=!!userMessage.querySelector("img");
      speech.classList.toggle("empty",!text&&!hasEmote);
      const chequeText=(payment.textContent||"").trim();
      if(chequeText && chequeText!=="{messageTemplate}"){
        const long=chequeText.length>65;
        payment.style.setProperty("font-size",long?"15px":chequeText.length>38?"17px":"20px","important");
      }
    }
    const observer=new MutationObserver(refresh);
    observer.observe(payment,{subtree:true,childList:true,characterData:true});
    observer.observe(userMessage,{subtree:true,childList:true,characterData:true});
    refresh();
    return true;
  }
  if(!setup())document.addEventListener("DOMContentLoaded",setup,{once:true});
})();
