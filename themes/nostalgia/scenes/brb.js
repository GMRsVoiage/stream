/* Voya floor calibration. Shape uses canvas coordinates, NOT sprite pixels.
   Zone is an estimate; motion stays DISABLED until OBS screenshot approval. */
(()=>{"use strict";
const p=new URLSearchParams(location.search);
const ZONE=[[330,750],[765,750],[850,838],[810,900],[365,900],[310,830]];
const START=[560,830];
const debug=p.get("debug")==="1";
const host=document.getElementById("voya-character");
const set=(el,point)=>{el.style.left=point[0]/19.2+"%";el.style.top=point[1]/10.8+"%"};
set(host,START);
if(debug){
 const overlay=document.getElementById("voya-debug"),marker=document.getElementById("voya-marker"),note=document.getElementById("voya-debug-note");
 overlay.hidden=marker.hidden=note.hidden=false;
 document.getElementById("walk-boundary").setAttribute("points",ZONE.map(v=>v.join(",")).join(" "));
 document.getElementById("walk-vertices").innerHTML=ZONE.map((a,i)=>'<circle cx="'+a[0]+'" cy="'+a[1]+'" r="8" fill="white"/><text x="'+(a[0]+12)+'" y="'+(a[1]-12)+'" font-size="23" stroke="#24375f" stroke-width=".7" fill="white">'+(i+1)+'</text>').join("");
 set(marker,START);
}
const sprite=p.get("sprite");
if(!sprite)return;
let url;try{url=new URL(sprite,location.href);if(url.origin!==location.origin)return}catch{return}
const img=new Image();img.alt="Voya";img.onload=()=>{host.append(img);host.hidden=false};img.src=url.href;
// Intentionally no walking until floor and approved artwork are calibrated.
})();