import{a as f,i as v}from"./vendor-85e7f25d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const q=document.querySelector(".mobile-backdrop"),B=document.querySelector(".open-mobile-menu-btn"),k=document.querySelector(".mobile-menu-close-btn");B.addEventListener("click",()=>{q.classList.toggle("hidden"),document.body.style.overflow="hidden",k.addEventListener("click",O)});const O=()=>{q.classList.toggle("hidden"),document.body.style.overflow="scroll",removeEventListener("click",k)},S="/energy-flow/assets/icon-heart-4fab474c.svg",p="https://energyflow.b.goit.study/api/";async function P(e,t,s,n){return await f(`${p}exercises`,{method:"get",params:{[e]:t,keyword:n,page:s,limit:9}})}async function Z(e,t){return await f(`${p}filters`,{method:"get",params:{filter:e,limit:12,page:t}})}async function N(e){return await f(`${p}exercises/${e}`,{method:"get"})}async function R(){try{const e=await fetch("https://energyflow.b.goit.study/api/quote");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return await e.json()}catch(e){throw console.error("Error fetching quote:",e),e}}async function A(e,t,s,n){await f.patch(`${p}exercises/${e}/rating`,{rate:t,email:s,review:n},{headers:{"Content-Type":"application/json",Accept:"application/json"}})}const L=document.querySelector(".backdrop");function D(){L.innerHTML="",L.insertAdjacentHTML("beforeend",`
    <div class="rating">

        <button type="button" class="rating-close-btn">
             <svg class="rating-close-btn-icon" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.833 8.167 8.167 19.833m0-11.666 11.666 11.666"/>
      </svg>
        </button>

        <form action="post" class="rating-form">

            <p class="rating-stars-text">Rating</p>

            <div class="rating-stars-box">

                <p class="rating-number">0.0</p>

                <ul class="rating-list">

                <li>
                <label class="rating-label">
                    <input class="rating-stars-btn visually-hidden" type="radio" value="1" name="rating" required>
                      <svg class="rating-icon-star" data-number="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M6.049.927c.3-.921 1.603-.921 1.902 0l.845 2.6a1 1 0 0 0 .951.692h2.735c.969 0 1.371 1.24.588 1.809l-2.213 1.607a1 1 0 0 0-.363 1.118l.845 2.601c.3.921-.755 1.688-1.539 1.118l-2.212-1.607a1 1 0 0 0-1.176 0L4.2 12.472c-.784.57-1.838-.197-1.539-1.118l.845-2.6a1 1 0 0 0-.363-1.119L.93 6.028c-.783-.57-.38-1.81.588-1.81h2.735a1 1 0 0 0 .95-.69l.846-2.6Z"/></svg>
                </label>
                </li>

                <li>
                <label class="rating-label">
                    <input class="rating-stars-btn visually-hidden" type="radio" value="2" name="rating" required>
                      <svg class="rating-icon-star" data-number="2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M6.049.927c.3-.921 1.603-.921 1.902 0l.845 2.6a1 1 0 0 0 .951.692h2.735c.969 0 1.371 1.24.588 1.809l-2.213 1.607a1 1 0 0 0-.363 1.118l.845 2.601c.3.921-.755 1.688-1.539 1.118l-2.212-1.607a1 1 0 0 0-1.176 0L4.2 12.472c-.784.57-1.838-.197-1.539-1.118l.845-2.6a1 1 0 0 0-.363-1.119L.93 6.028c-.783-.57-.38-1.81.588-1.81h2.735a1 1 0 0 0 .95-.69l.846-2.6Z"/></svg>
                </label>
                </li>

                <li>
                <label class="rating-label">
                    <input class="rating-stars-btn visually-hidden" type="radio" value="3" name="rating" required>
                       <svg class="rating-icon-star" data-number="3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M6.049.927c.3-.921 1.603-.921 1.902 0l.845 2.6a1 1 0 0 0 .951.692h2.735c.969 0 1.371 1.24.588 1.809l-2.213 1.607a1 1 0 0 0-.363 1.118l.845 2.601c.3.921-.755 1.688-1.539 1.118l-2.212-1.607a1 1 0 0 0-1.176 0L4.2 12.472c-.784.57-1.838-.197-1.539-1.118l.845-2.6a1 1 0 0 0-.363-1.119L.93 6.028c-.783-.57-.38-1.81.588-1.81h2.735a1 1 0 0 0 .95-.69l.846-2.6Z"/></svg>
                </label>
                </li>

                <li>
                <label class="rating-label">
                    <input class="rating-stars-btn visually-hidden" type="radio" value="4" name="rating" required>
                        <svg class="rating-icon-star" data-number="4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M6.049.927c.3-.921 1.603-.921 1.902 0l.845 2.6a1 1 0 0 0 .951.692h2.735c.969 0 1.371 1.24.588 1.809l-2.213 1.607a1 1 0 0 0-.363 1.118l.845 2.601c.3.921-.755 1.688-1.539 1.118l-2.212-1.607a1 1 0 0 0-1.176 0L4.2 12.472c-.784.57-1.838-.197-1.539-1.118l.845-2.6a1 1 0 0 0-.363-1.119L.93 6.028c-.783-.57-.38-1.81.588-1.81h2.735a1 1 0 0 0 .95-.69l.846-2.6Z"/></svg>
                </label>
                </li>

                <li>
                <label class="rating-label">
                    <input class="rating-stars-btn visually-hidden" type="radio" value="5" name="rating" required>
                         <svg class="rating-icon-star" data-number="5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M6.049.927c.3-.921 1.603-.921 1.902 0l.845 2.6a1 1 0 0 0 .951.692h2.735c.969 0 1.371 1.24.588 1.809l-2.213 1.607a1 1 0 0 0-.363 1.118l.845 2.601c.3.921-.755 1.688-1.539 1.118l-2.212-1.607a1 1 0 0 0-1.176 0L4.2 12.472c-.784.57-1.838-.197-1.539-1.118l.845-2.6a1 1 0 0 0-.363-1.119L.93 6.028c-.783-.57-.38-1.81.588-1.81h2.735a1 1 0 0 0 .95-.69l.846-2.6Z"/></svg>
                </label>
                </li>
                
                </ul>

            </div>

            <input class="rating-email" type="email" name="rating-email" placeholder="Email" required>

                <textarea class="rating-comment" name="rating-comment" placeholder="Your comment" required></textarea>

                <button class="rating-send-btn" type="submit">Send</button>
        </form>
    </div>`),document.querySelector(".rating-close-btn").addEventListener("click",()=>E(JSON.parse(localStorage.getItem("ratingClose"))),{once:!0});const t=document.querySelector(".rating-list"),s=document.querySelectorAll(".rating-icon-star"),n=document.querySelector(".rating-number");F(t,s,n);const a=document.querySelector(".rating-email"),o=document.querySelector(".rating-comment"),r=document.querySelector(".rating-form");H(a,o,r,n)}function F(e,t,s){e.addEventListener("mousedown",n=>{const a=n.target.closest("svg.rating-icon-star");s.textContent=`${a.dataset.number}.0`,t.forEach(o=>o.style.fill="rgba(27, 27, 27, 0.20)");for(let o=0;o<a.dataset.number;o++)t[o].style.fill="#EEA10C"})}function H(e,t,s,n){s.addEventListener("submit",a=>{a.preventDefault();try{A(JSON.parse(localStorage.getItem("ratingClose")),Number(n.textContent.slice(0,1)),e.value,t.value),v.show({message:"Thanks you for your review",messageColor:"#f7f7fc",backgroundColor:"#0ac21c",position:"topRight"}),E(JSON.parse(localStorage.getItem("ratingClose")))}catch{v.show({message:"Sorry, something goes wrong",messageColor:"#f7f7fc",backgroundColor:"#c71212",position:"topRight"})}})}const c=document.querySelector(".backdrop");async function E(e){document.body.style.overflow="hidden",c.classList.remove("visually-hidden");const t=await N(e).then(i=>i.data);c.innerHTML=J(t),localStorage.setItem("ratingClose",JSON.stringify(t._id));const s=document.querySelector(".modal-btn-favorites");s.addEventListener("click",n);function n(i){i.preventDefault();let l=JSON.parse(localStorage.getItem("favorites"))||[];const u=l.findIndex(g=>String(g._id)===String(t._id));u!==-1?(l.splice(u,1),localStorage.setItem("favorites",JSON.stringify(l)),s.innerHTML=b(t._id),v.show({message:"The exercise has been removed from favorites",messageColor:"#f7f7fc",backgroundColor:"#3939db",position:"topRight"})):(l.push(t),localStorage.setItem("favorites",JSON.stringify(l)),s.innerHTML=b(t._id),v.show({message:"The exercise has been added to favorites",messageColor:"#f7f7fc",backgroundColor:"#219c2b",position:"topRight"}))}function a(){c.innerHTML="",localStorage.removeItem("ratingClose"),c.classList.add("visually-hidden"),s.removeEventListener("click",n),o.removeEventListener("click",a),document.removeEventListener("keydown",r),c.removeEventListener("click",d),document.body.style.overflow="visible"}const o=document.querySelector(".modal-btn-close");o.addEventListener("click",a);function r(i){i.key==="Escape"&&a()}document.addEventListener("keydown",r);function d(i){i.target===c&&a()}c.addEventListener("click",d),_()}function J({gifUrl:e,name:t,rating:s,target:n,bodyPart:a,equipment:o,popularity:r,burnedCalories:d,time:i,description:l,_id:u}){const g=Math.round(parseFloat(s)),y=g.toFixed(1),C=m(t),$=m(n),I=m(a),M=m(o),T=Array.from({length:5},(h,w)=>`
  <li>
    <svg style="fill: rgba(126, 132, 127, 0.20);" xmlns="http://www.w3.org/2000/svg" width="14" height="13"><path d="M6.049.927c.3-.921 1.603-.921 1.902 0l.845 2.6a1 1 0 0 0 .951.692h2.735c.969 0 1.371 1.24.588 1.809l-2.213 1.607a1 1 0 0 0-.363 1.118l.845 2.601c.3.921-.755 1.688-1.539 1.118l-2.212-1.607a1 1 0 0 0-1.176 0L4.2 12.472c-.784.57-1.838-.197-1.539-1.118l.845-2.6a1 1 0 0 0-.363-1.119L.93 6.028c-.783-.57-.38-1.81.588-1.81h2.735a1 1 0 0 0 .95-.69l.846-2.6Z"/></svg>
  </li>
`).map((h,w)=>w<g?h.replace("<svg",`<svg style="fill: #eea10c;" title="${y}"`):h).join("");return`
        <div class="modal-window">
  <div>
    <button class="modal-btn-close" type="button">
      <svg class="modal-btn-close-svg" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.833 8.167 8.167 19.833m0-11.666 11.666 11.666"/>
      </svg>
    </button>
  </div>
  <div class="modal-tablet-pc-ver">
    <div class="modal-video">
      <img class="modal-video-img" width="360" height="360" src="${e}" alt="Animated GIF">
    </div>
    <div class="wrapper-info">
      <h1 class="modal-title">${C}</h1>
      <div class="modal-rating">
        <p class="modal-rating-numbers">${y}</p>
        <ul class="modal-rating-stars">
          ${T}
        </ul>
      </div>
      <div class="modal-info">
        <ul class="modal-info-list">
          <li>
            <h3 class="modal-info-list-title">Target</h3>
            <p class="modal-info-list-title-value">${$}</p>
          </li>
          <li>
            <h3 class="modal-info-list-title">Body Part</h3>
            <p class="modal-info-list-title-value">${I}</p>
          </li>
          <li>
            <h3 class="modal-info-list-title">Equipment</h3>
            <p class="modal-info-list-title-value">${M}</p>
          </li>
          <li>
            <h3 class="modal-info-list-title">Popular</h3>
            <p class="modal-info-list-title-value">${r}</p>
          </li>
          <li>
            <h3 class="modal-info-list-title">Burned Calories</h3>
            <p class="modal-info-list-title-value">${d}/${i} min</p>
          </li>
        </ul>
      </div>
      <p class="descr">${l}</p>
    </div>
  </div>
  <div class="modal-btns">
    <button class="modal-btn-favorites" type="button">
      ${b(u)}
    </button>
    <button class="modal-give-rating" type="button">
      Give a rating
    </button>
  </div>
</div>
      `}function b(e){return(JSON.parse(localStorage.getItem("favorites"))||[]).findIndex(n=>String(n._id)===String(e))===-1?`Add to favorites <div>
            <img src="${S}" class="modal-btn-favorites-svg" />
        </div>`:`Remove from <div>
          <img src="${S}" class="modal-btn-favorites-svg" />
        </div>`}function _(){document.querySelector(".modal-give-rating").addEventListener("click",D,{once:!0})}function m(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Q="/energy-flow/assets/icon-star-6501a3be.svg",G="/energy-flow/assets/icon-man-265aee42.svg",K="/energy-flow/assets/icon-arrow-f3785760.svg";document.addEventListener("DOMContentLoaded",async function(){try{const e=localStorage.getItem("quote"),t=localStorage.getItem("quoteDate");if(e&&t&&new Date().toISOString().split("T")[0]===t)x(JSON.parse(e));else{const s=await j();x(s)}}catch(e){console.error("Error:",e)}});async function j(){try{const{author:e,quote:t}=await R();return localStorage.setItem("quote",JSON.stringify({author:e,quote:t})),localStorage.setItem("quoteDate",new Date().toISOString().split("T")[0]),{author:e,quote:t}}catch(e){throw e}}function x(e){const t=document.querySelector(".quot-text"),s=document.querySelector(".quot-author");t.textContent=e.quote,s.textContent=e.author}export{K as a,Z as f,P as g,G as m,E as r,Q as s};
//# sourceMappingURL=quot-23318956.js.map
