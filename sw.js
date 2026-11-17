/* Bump this cache for each published UI update. Saves use their own schema. */
const CACHE='arcadia-bomber-v0.2';
const FILES=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('arcadia-bomber-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.pathname.startsWith(self.registration.scope.replace(url.origin,'')))return;
 event.respondWith(caches.open(CACHE).then(async cache=>{
   const stored=await cache.match(event.request,{ignoreSearch:true});
   if(stored)return stored;
   try{const response=await fetch(event.request);return response}catch(error){if(event.request.mode==='navigate')return (await cache.match('./index.html'))||Response.error();throw error}
 }));
});
