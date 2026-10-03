/* Deliberately idle until approved public character art exists.
   Same-origin URL parameter allows replacing the sprite without editing code.
   No network polling or dynamic events, no character placeholder displayed. */
(()=>{
 "use strict";
 const sprite=new URLSearchParams(location.search).get("sprite");
 if(!sprite)return;
 let resolved;
 try{
  resolved=new URL(sprite,location.href);
  if(resolved.origin!==location.origin)return;
 }catch{return;}
 const parent=document.getElementById("voya-character");
 if(!parent)return;
 const image=new Image();
 image.alt="Voya";
 image.onload=()=>{parent.append(image);parent.hidden=false};
 image.src=resolved.href;
})();
