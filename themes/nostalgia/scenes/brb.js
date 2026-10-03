/*
  Temporary buddy roaming on the BRB floor.
  No requestAnimationFrame or browser/network API polling.
  Waypoints are conservative estimates in artwork's 1920x1080 coordinates;
  both endpoints and intermediate path samples must remain within ZONE.
  Replace viewer_idle.svg with approved Voya sprite later.
*/
(() => {
  "use strict";
  const params = new URLSearchParams(location.search);
  const debug = document.documentElement.dataset.debug === "1" || params.get("debug") === "1";
  const host = document.getElementById("voya-character");
  if (!host) return;
  // User screenshot: GREEN = floor; purple = distant landscape, yellow = independent chat.
  // Floor region inset from green drawing; feet are position reference.
  const ZONE = [
    [500,765],[1015,747],[1275,777],[1510,819],[1575,875],
    [1460,942],[1165,1000],[740,995],[490,891],[452,836]
  ];
  // Loop within the middle/front-left of the rug. Avoid scenery and chat.
  const ROUTE = [
    [750,905],[900,895],[1040,900],[1190,922],
    [1060,953],[880,947],[680,901]
  ];
  const place = (node, point) => {
    node.style.left = point[0] / 1920 * 100 + "%";
    node.style.top = point[1] / 1080 * 100 + "%";
  };
  function onFloor(point){
    let inside = false;
    for(let i=0,j=ZONE.length-1;i<ZONE.length;j=i++){
      const a=ZONE[i],b=ZONE[j], cross=(point[0]-a[0])*(b[1]-a[1])-(point[1]-a[1])*(b[0]-a[0]);
      if(Math.abs(cross)<.0001 &&
         (point[0]-a[0])*(point[0]-b[0])+(point[1]-a[1])*(point[1]-b[1])<=0)return true;
      if((a[1]>point[1]) !== (b[1]>point[1]) &&
          point[0] < (b[0]-a[0])*(point[1]-a[1])/(b[1]-a[1])+a[0])inside=!inside;
    }
    return inside;
  }
  function safeSegment(from,to){
    for(let i=0;i<=32;i++){
      const t=i/32;
      if(!onFloor([from[0]+(to[0]-from[0])*t,from[1]+(to[1]-from[1])*t]))return false;
    }
    return true;
  }
  // In debug mode show an actual route + vertex numbers. The regular file remains transparent.
  if(debug){
    const overlay=document.getElementById("voya-debug");
    const marker=document.getElementById("voya-marker");
    const note=document.getElementById("voya-debug-note");
    if(overlay && marker && note){
      overlay.hidden=marker.hidden=note.hidden=false;
      const polygon=document.getElementById("walk-boundary");
      polygon.setAttribute("points",ZONE.map(p=>p.join(",")).join(" "));
      const group=document.getElementById("walk-vertices");
      group.innerHTML=ZONE.map((p,i)=>'<circle cx="'+p[0]+'" cy="'+p[1]+'" r="10" fill="white" stroke="#1d9259" stroke-width="3"/><text x="'+(p[0]+14)+'" y="'+(p[1]-12)+'" font-size="24" font-weight="bold" fill="white" stroke="#274168" stroke-width="1">'+(i+1)+'</text>').join("")+
        '<polyline points="'+ROUTE.map(p=>p.join(",")).join(" ")+'" fill="none" stroke="#fcf55a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>'+
        ROUTE.map((p,i)=>'<circle cx="'+p[0]+'" cy="'+p[1]+'" r="9" fill="#fff350"/><text x="'+(p[0]+11)+'" y="'+(p[1]-14)+'" font-size="24" fill="#fff350" stroke="#553664" stroke-width="1">'+String.fromCharCode(65+i)+'</text>').join("");
      place(marker,ROUTE[0]);
      note.innerHTML="TESTE BRB — VERDE: chão permitido<br>AMARELO: trajeto do Buddy<br>ROXO: paisagem (fora dos limites)<br>CHAT: independente do brb.html";
    }
  }
  // An explicit sprite may be supplied as a relative same-origin file.
  // Without one, use an existing PUBLIC buddy graphic from the repository.
  const override = params.get("sprite");
  let sprite = "../../../buddy/viewer_idle.svg";
  if(override){
    try {
      const proposed = new URL(override, location.href);
      if(proposed.origin !== location.origin)return;
      sprite = proposed.href;
    } catch {return;}
  }
  const img = new Image();
  img.alt = override ? "Voya" : "Buddy temporário";
  img.onerror = () => { if(debug) console.warn("BRB sprite not found:",sprite); };
  img.onload = () => {
    host.append(img);
    host.hidden = false;
    place(host,ROUTE[0]);
    // Guard against accidentally editing the route into unsafe terrain.
    if(!ROUTE.every(onFloor) || !ROUTE.slice(1).every((p,i)=>safeSegment(ROUTE[i],p)))return;
    // Reduced-motion users and unapproved final sprite: leave stationary.
    if(matchMedia("(prefers-reduced-motion: reduce)").matches || override)return;
    let current = 0;
    function walk(){
      const next=(current+1)%ROUTE.length;
      const a=ROUTE[current],b=ROUTE[next];
      if(!safeSegment(a,b))return;
      const duration=Math.max(2500,Math.hypot(b[0]-a[0],b[1]-a[1])/52*1000);
      host.style.transitionDuration=duration+"ms";
      host.dataset.walking="1";
      place(host,b);
      current=next;
      setTimeout(()=>{host.dataset.walking="0";setTimeout(walk,1100+Math.floor(Math.random()*1300))},duration);
    }
    setTimeout(walk,1500);
  };
  img.src=sprite;
})();
