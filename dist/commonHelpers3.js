import{f as H,g as B,s as N,a as Y,m as I,r as P}from"./assets/quot-23318956.js";import{i as x}from"./assets/vendor-85e7f25d.js";const S=document.querySelector(".btn-wrapper"),o=document.querySelector(".exercises-list"),n=document.querySelector(".exercises-pagination"),d=document.querySelector(".exercises-form");let f=document.querySelector(".span");S.addEventListener("change",()=>T(1));T(1);async function T(e){const t="Muscles";d.classList.add("visually-hidden");const r=S.querySelector("input:checked"),s=r?r.value:t;f.textContent=`/ ${s.toLowerCase()}`;const{results:a,page:p,totalPages:l}=(await H(s,e??1)).data;o.innerHTML=a.map(({name:u,filter:i,imgUrl:c})=>`<li
            class="exercises-item"
            style="
            background:linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${c});
            background-size: cover;
            background-repeat: no-repeat;
            "
            data-name = "${u}"
            data-filter = "${i.toLowerCase().split(" ").join("")}"
          >
            <p class="exercises-name">${u}</p>
            <p class="exercises-text">${i}</p>
          </li>`).join(""),M(l,p),n.removeEventListener("change",$),n.removeEventListener("change",y),n.removeEventListener("change",F),d.removeEventListener("submit",q),n.addEventListener("change",$),o.addEventListener("click",C)}function $(e){T(e.target.value)}async function C(e){var i;if(((i=e.target)==null?void 0:i.tagName)=="UL")return;if(o.removeEventListener("click",C),n.removeEventListener("change",$),S.reset(),d.classList.remove("visually-hidden"),typeof e!="string"){const c=e.target.closest(".exercises-item");f.textContent+=` / ${c.dataset.name}`}const t=f.textContent.split("/");let r=t[1].trim();r==="body parts"&&(r="bodypart");const s=t[2].trim(),a=typeof e=="string"?e:1,{results:p,totalPages:l,page:u}=(await B(r,s,a)).data;o.innerHTML=p.map(({name:c,rating:g,burnedCalories:v,target:k,bodyPart:b,time:h,_id:L})=>`<li
          class="workout-item">
          <div class="workout-card">
      <div class="workout-header">
          <div class="workout-header-wrapper">
            <p class="workout-title">workout</p>
            <p class="workout-rating">${g}</p>
            <img
            class="workout-rating-icon"
              src="${N}" />
          </div>
          <button
            class="workout-start-button"
            data-id="${L}"
            type="button"
          >
            Start
             <img
              class="workout-icon-start"
             src="${Y}" />
          </button>
        </div>
        <div class="workout-name-wrapper">
           <img
            class="workout-icon-man"
            src="${I}" />
          <p class="workout-name">${c}</p>
        </div>

        <div class="workout-inform-wrapper">

        <p class="workout-calories">
            Burned calories:
            <span class="number-calories">${v} / ${h} min</span>
          </p>

        <p class="workout-body-part">
            Body part:
            <span class="body-part">${b}</span>
          </p>

          <p class="workout-target">
            Target: <span class="target">${k}</span>
          </p>

          </div>
          </div>
</li>`).join(""),d.addEventListener("submit",q),o.addEventListener("click",O),M(l,u),n.removeEventListener("change",y),n.addEventListener("change",y)}function y(e){C(e.target.value)}async function q(e){typeof e!="string"&&e.preventDefault();const t=typeof e=="string"?o.querySelector(".workout-item").dataset.keyword:e.target.search.value,r=f.textContent.split("/");let s=r[1].trim();s==="body parts"&&(s="bodypart");const a=r[2].trim(),p=typeof e=="string"?e:1,{results:l,totalPages:u,page:i}=(await B(s,a,p,t)).data;if(l.length===0){o.innerHTML=`
      <li class="workout-item-no-results">
  <p class="workout-no-results">
    Unfortunately, <span class="workout-no-results-span">no results</span> were found. You may want to consider other
    search options to find the exercise you are looking
    for. Our range is wide and you have the opportunity to find more options that suit your needs.
  </p>
</li>`,n.classList.add("visually-hidden"),d.reset();return}n.classList.remove("visually-hidden"),o.innerHTML=l.map(({name:c,rating:g,burnedCalories:v,target:k,bodyPart:b,time:h,_id:L})=>`<li
      data-keyword="${t}"
          class="workout-item">
          <div class="workout-card">
      <div class="workout-header">
          <div class="workout-header-wrapper">
            <p class="workout-title">workout</p>
            <p class="workout-rating">${g}</p>
            <img
            class="workout-rating-icon"
              src="${N}" />
          </div>
          <button
            class="workout-start-button"
            data-id="${L}"
            type="button"
          >
            Start
             <img
              class="workout-icon-start"
             src="${Y}" />
          </button>
        </div>
        <div class="workout-name-wrapper">
           <img
            class="workout-icon-man"
            src="${I}" />
          <p class="workout-name">${c}</p>
        </div>

        <div class="workout-inform-wrapper">

        <p class="workout-calories">
            Burned calories:
            <span class="number-calories">${v} / ${h} min</span>
          </p>

        <p class="workout-body-part">
            Body part:
            <span class="body-part">${b}</span>
          </p>

          <p class="workout-target">
            Target: <span class="target">${k}</span>
          </p>

          </div>
          </div>
</li>`).join(""),d.reset(),M(u,i),n.removeEventListener("change",y),n.addEventListener("change",F)}function F(e){q(e.target.value)}function O(e){let t=e.target;if(t.tagName!=="BUTTON"&&t.tagName!=="IMG")return;if(t.tagName==="IMG"){if(t.classList.value!=="workout-icon-start")return;t=t.closest(".workout-start-button")}const r=t.dataset.id;P(r)}function M(e,t){let r;e>5?(t===1||t===2||t===3?r=[1,2,3,4,5]:e-t<2?r=[e-4,e-3,e-2,e-1,e]:r=[t-2,t-1,t,t+1,t+2],r=r.map(s=>`<label class="exercises-pagination-btn">
  ${s}
<input class="visually-hidden" type="radio" value="${s}" name="pagination"  ${s===Number(t)?"checked":""}>
</label>`).join("")):r=Array(e).fill().map((s,a)=>`<label class="exercises-pagination-btn">
  ${a+1}
<input class="visually-hidden" type="radio" value="${a+1}" name="pagination" ${a+1===Number(t)?"checked":""}>
</label>`).join(""),n.innerHTML="",n.insertAdjacentHTML("beforeend",r)}const w=document.querySelector(".footer-form"),U=document.querySelector(".footer-form-input"),z=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;w.addEventListener("submit",async function(e){e.preventDefault();const t=U.value.trim();if(!z.test(t)){j(),w.reset();return}try{(await fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})})).ok?(w.reset(),A()):W()}catch{j()}finally{w.reset()}});function A(){x.info({title:"Info",position:"center",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."})}function j(){x.error({title:"Error",position:"center",message:"Sorry, there was an error sending your address. Please try again!"})}function W(){x.info({title:"Info",position:"center",message:"Its okay, you are already subscribed : ) "})}const m=document.querySelector(".scroll-container"),D=document.querySelector(".scroll-btn");addEventListener("scroll",E,{once:!0});D.addEventListener("click",G);function E(){window.scrollY>0?m.style.transform="translateY(0)":window.innerWidth<768?m.style.transform="translateY(60px)":m.style.transform="translateY(120px)"}function G(){window.scroll({top:0,behavior:"smooth"}),window.innerWidth<768?m.style.transform="translateY(60px)":m.style.transform="translateY(120px)",removeEventListener("scroll",E),setTimeout(()=>{addEventListener("scroll",E,{once:!0})},1e3)}
//# sourceMappingURL=commonHelpers3.js.map
