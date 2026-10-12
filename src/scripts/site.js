/** BYBOOP Meme Lab: browser-only image compositing; no uploads, analytics or AI API. */
const canvas = document.getElementById('meme-canvas');
const buttons = [...document.querySelectorAll('[data-mood]')];
if (canvas && buttons.length) {
  const ctx = canvas.getContext('2d');
  const top = document.getElementById('meme-top');
  const bottom = document.getElementById('meme-bottom');
  const save = document.getElementById('download-meme');
  const share = document.getElementById('share-meme');
  const random = document.getElementById('surprise-me');
  const status = document.getElementById('lab-status');
  const cache = new Map();
  let mood = 'smug';
  let requestNumber = 0;
  const captions = [
    ['I HAD A PLAN', 'THEN I SAW A GREEN CANDLE'],
    ['AI REMOVED HUMAN EMOTION', 'I PUT IT BACK'],
    ['I ANALYZED 20,000 CANDLES', 'AND BOUGHT THE TOP'],
    ['MY RISK MODEL SAID STOP', 'BUT MY HEART SAID MEOW'],
    ['BUILT TO OUTSMART HUMANS', 'ACCIDENTALLY BECAME ONE'],
    ['IT WAS NOT FINANCIAL ADVICE', 'IT WAS A MEOW'],
    ['99.9% INTELLIGENCE', '100% FOMO'],
    ['THE AI IS LEARNING', 'PLEASE STOP TEACHING IT'],
  ];
  const report = (message) => { status.textContent = message; };
  function loadImage(key){
    if(cache.has(key)) return cache.get(key);
    const promise = new Promise((resolve,reject)=>{
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('Failed to load sticker'));
      img.src = `/assets/stickers/${key}.webp`;
    });
    cache.set(key,promise);
    return promise;
  }
  function linesFor(text, maxWidth, size){
    const words = text.toUpperCase().trim().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    let rows=[], current='';
    for(const word of words){
      const tryLine = current ? current+' '+word : word;
      if(ctx.measureText(tryLine).width > maxWidth && current){ rows.push(current); current=word; }
      else current=tryLine;
    }
    if(current) rows.push(current);
    return rows.slice(0,4);
  }
  function writeCaption(text, isTop){
    const words = text.trim(); if(!words) return;
    const available=770;
    let size=70;
    ctx.font=`900 ${size}px 'Arial Black', Arial, sans-serif`;
    while(size>34 && linesFor(words,available,size).length>3){size-=4;ctx.font=`900 ${size}px 'Arial Black', Arial, sans-serif`;}
    const rows=linesFor(words,available,size);
    const step=size*1.12;
    const start=isTop?90:805-(rows.length-1)*step;
    ctx.lineJoin='round';ctx.textBaseline='middle';ctx.textAlign='center';
    ctx.strokeStyle='#141b20';ctx.fillStyle='#fffef5';ctx.lineWidth=Math.max(7,size*.14);
    rows.forEach((row,i)=>{const y=start+i*step;ctx.strokeText(row,450,y,790);ctx.fillText(row,450,y,790);});
  }
  function stickerBase(img){
    ctx.clearRect(0,0,900,900);
    ctx.fillStyle='#f9f0df';ctx.fillRect(0,0,900,900);
    // Imperfect comic print margin and blue offset corner marks.
    ctx.strokeStyle='#242626';ctx.lineWidth=10;ctx.strokeRect(12,12,876,876);
    ctx.fillStyle='#2865c7';ctx.fillRect(18,18,230,16);
    ctx.fillStyle='#e34e57';ctx.fillRect(656,866,224,14);
    const scale=Math.min(700/img.naturalWidth,700/img.naturalHeight);
    const w=img.naturalWidth*scale,h=img.naturalHeight*scale;
    ctx.drawImage(img,(900-w)/2,122,w,h);
    ctx.fillStyle='#192126';ctx.font='900 26px Arial, sans-serif';ctx.textBaseline='alphabetic';ctx.textAlign='left';
    ctx.fillText('BYBOOP.EXE',36,865);
    ctx.textAlign='right';ctx.fillText('ETH / MEME NO. 001',862,865);
  }
  async function render(){
    const myRequest=++requestNumber;
    report('RENDERING THE CAT...');
    try{
      const img=await loadImage(mood);
      if(myRequest!==requestNumber)return;
      stickerBase(img);
      writeCaption(top.value,true);
      writeCaption(bottom.value,false);
      report(`READY: ${mood.toUpperCase()} MODE • 900 × 900 PNG`);
    }catch(e){report('COULD NOT LOAD IMAGE. REFRESH AND TRY AGAIN.');}
  }
  buttons.forEach(button=>button.addEventListener('click',()=>{
    mood=button.dataset.mood;
    buttons.forEach(b=>{const selected=b===button;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',selected?'true':'false');});
    render();
  }));
  for(const input of [top,bottom])input.addEventListener('input',()=>{render();});
  random?.addEventListener('click',()=>{const idea=captions[Math.floor(Math.random()*captions.length)];top.value=idea[0];bottom.value=idea[1];buttons[Math.floor(Math.random()*buttons.length)].click();});
  save?.addEventListener('click',()=>{
    if(!ctx)return;
    const a=document.createElement('a'); a.download=`BYBOOP-${mood}-meme.png`;a.href=canvas.toDataURL('image/png');document.body.appendChild(a);a.click();a.remove();report('PNG SAVED. MAKE YOUR FRIENDS REGRET IT.');
  });
  share?.addEventListener('click',async()=>{
    try{
      const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
      if(!blob)throw new Error('Could not prepare PNG');
      const file=new File([blob],`BYBOOP-${mood}.png`,{type:'image/png'});
      if(navigator.canShare?.({files:[file]})){
        await navigator.share({files:[file],title:'BYBOOP meme',text:'The AI learned the worst habits of crypto traders.'});
        report('SENT INTO THE INTERNET.');
      }else if(navigator.clipboard?.write){
        await navigator.clipboard.write([new ClipboardItem({'image/png':blob})]);
        report('MEME IMAGE COPIED TO CLIPBOARD.');
      }else{
        save.click(); report('IMAGE SAVED. YOU CAN SHARE IT NOW.');
      }
    }catch(error){
      if(error.name!=='AbortError'){save.click();report('SAVE THE PNG AND SHARE IT ANYWHERE.');}
    }
  });
  render();
}
function scrollToFirstPage(event){
  event.preventDefault();
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({top:0,behavior:reduce?'auto':'smooth'});
}
document.getElementById('back-to-top')?.addEventListener('click',scrollToFirstPage);
document.getElementById('brand-home')?.addEventListener('click',scrollToFirstPage);
const checkIcon='<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M9.2 16.6 4.8 12.2l1.6-1.6 2.8 2.8 6.4-6.4 1.6 1.6-8 8Z"/></svg>';
function writeClipboard(text){
  try{
    const area=document.createElement('textarea');
    area.value=text;
    area.setAttribute('readonly','');
    area.style.position='fixed';
    area.style.top='0';
    area.style.left='0';
    area.style.opacity='0';
    document.body.appendChild(area);
    area.focus();
    area.select();
    area.setSelectionRange(0,text.length);
    const ok=document.execCommand('copy');
    area.remove();
    if(ok)return true;
  }catch{}
  if(navigator.clipboard?.writeText){
    return navigator.clipboard.writeText(text).then(()=>true).catch(()=>false);
  }
  return false;
}
document.querySelectorAll('.copy-btn').forEach((button)=>{
  const copyIcon=button.innerHTML;
  button.addEventListener('click',()=>{
    const address=(button.dataset.address || '').trim();
    button.classList.add('copied');
    button.innerHTML=checkIcon;
    clearTimeout(button._reset);
    button._reset=setTimeout(()=>{
      button.classList.remove('copied');
      button.innerHTML=copyIcon;
    },1600);
    if(/^0x[a-fA-F0-9]{40}$/.test(address)) writeClipboard(address);
  });
});
