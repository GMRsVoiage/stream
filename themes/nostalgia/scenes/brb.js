/* Voya floor calibration. Shape uses canvas coordinates, NOT sprite pixels.
   Zone is an estimate; motion stays DISABLED until OBS screenshot approval. */
(()=>{"use strict";
const p=new URLSearchParams(location.search);
// Derived from user-marked 16:9 scene: green = floor, purple = landscape,
// yellow = chat window. This polygon is a CONSERVATIVE floor inset (feet only).
// It intentionally does not encompass the entire visible green painted area.
// Verify in OBS debug mode; sprite body collision remains a separate check.
const ZONE=[[500,765],[1015,747],[1275,777],[1510,819],[1575,875],[1460,942],[1165,1000],[740,995],[490,891],[452,836]];
// Start on the left portion of the rug to keep the future sprite away from chat.
const START=[750,860];
// Safe initial corridor for future route planning, pending character dimensions.
const INITIAL_ROUTE=[[660,852],[800,847],[945,838],[1030,854]];
const debug=p.get("debug")==="1";
const host=document.getElementById("voya-character");
const set=(el,point)=>{el.style.left=point[0]/19.2+"%";el.style.top=point[1]/10.8+"%"};
set(host,START);
if(debug){
 const overlay=document.getElementById("voya-debug"),marker=document.getElementById("voya-marker"),note=document.getElementById("voya-debug-note");
 overlay.hidden=marker.hidden=note.hidden=false;
 note.innerHTML="CALIBRAÇÃO: VERDE = CHÃO · ROXO = PAISAGEM · AMARELO = CHAT<br/>Voya permanece parada até validarmos o tamanho do sprite.";
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