import{s as l,a as u,m as w,r as m}from"./assets/quot-23318956.js";import"./assets/vendor-85e7f25d.js";const g="/energy-flow/assets/icon-trash-9f8ef32d.svg",p="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIAEcAdAMBIgACEQEDEQH/xAAtAAEAAgMBAQAAAAAAAAAAAAAABgcDBAUCAQEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAujBztUqXz1/pcwAAINWVs14TKfQCQHfawqPBJtA8593OTxVPkthU4thU4msI6mc43FlOEkrdH3nyjQMWfayFB9Cy/ZWKzhWPi0RErA1+qRje99IwNkcrU62I9+uOJKAADXw4uSbORuHtnGbyEMzhLgAAcqPB2e6AH//EAEEQAAEDAgIECAoHCQAAAAAAAAEAAgMEEQUSBhMhsRYXIDFBUWOTEBUyQlJUVXGRkhRDU2FiosIHJEVygYKywdH/2gAIAQEAAT8AVUXCmnLTZwjdY/fZV7Hipmu43zFUWubUwOa9wcHtIseXpyZDS0bWuIaXuusj7+UVoUJGiW7jlLT8QR4ajH8Ippnwy1YD2mzgGudb4BP0kwWZj4o6u73tLWjI/nP9FXw5quYj0yqCm/eoL28tvL0tj1lJT/zlGmIKwCtpMOgdJUyZGEuaDYncuFGBeu/kf/xUtZTVkImp5Q9hNrhYtAfGVceuokP5lSQ2qIT2jVUxONVMQPPKo4iKiE288b+XpIwupoR+Mp8DugAKoiPi6MW+vO5GnN+ZaJxmPDZR25/xCrqV762qIbs1z96bC9k8FxYaxu9PhL6mbZ55UUBZLG63M4I/tYwsfwyrXG3hPsyrXG3hPs2rXG1hPs2rXG1hPs6qXG1hPs6qVJpRTaSxSiCmli1DmXz9Oe6fSmyqI3fQom9udyZRSkXssAYY6OQH7Y7gnUhdLK7LzvcfiVV0YbqnZbWlZvUOGhxc8kbSUcNFwcwVNoqZrXqWj+1cCR6835FwJHrzfkXAkeut+RcCR6635FJoYGNJ+mN+RaEYQIH4ox0n2P6kcOit5Sq6NrXwRjaNd/pNoTbyFRwmKN7SPPJQntcWGwrEJc0bBb61m9QgbU4XTdFcJbzCfvXLgxhnXP3rlwZwzrn71y4M4Z11HeuXBnDfSqO9cjoxhh6ajvXKgwejw10pp895LZszi7yVssqg5JqY9t+koTmyY8vBP3p8wEkg6nFVEubVjtGb0yYBzh1FGYXG3p5dQ8MDfeteMvOquS4p3dsdyFQLKifnicfxqSghe9zyXgk3Nin4bBa+Z+wh3OOhSSkTPselNkJc3b08vEjZsfvKMptzqmgjqmND3OGRxcLLxbB6T/iFDCyFmRl7Xvt8DwSx4HOQU8vzu96hDnPYLc5HLxUHVxkDpKeXdSwbMdYegDw//8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAgEBPwAj/8QAFBEBAAAAAAAAAAAAAAAAAAAAUP/aAAgBAwEBPwAj/9k=";let r,i;document.querySelector(".favorites-list");document.querySelector(".exercises-form");const n=6;window.location.pathname.endsWith("/favorites.html")&&(r=document.querySelector(".favorites-list"),i=document.querySelectorAll(".favorites-pagination-block button"),c(1),i.forEach(o=>{o.addEventListener("click",()=>{const t=parseInt(o.textContent);c(t)})}));function c(o){const t=(o-1)*n,e=t+n;r.querySelectorAll(".workout-card").forEach((a,A)=>{A>=t&&A<e?a.style.display="block":a.style.display="none"}),i.forEach(a=>{parseInt(a.textContent)===o?a.classList.add("active-btn"):a.classList.remove("active-btn")})}function f(){const o=document.querySelectorAll(".workout-trash-btn");o&&o.forEach(function(t){t.addEventListener("click",k)})}function k(o){o.preventDefault();let t=o.target.getAttribute("data-id"),e=JSON.parse(localStorage.getItem("favorites"))||[];const s=e.findIndex(a=>String(a._id)===String(t));s!==-1&&(e.splice(s,1),localStorage.setItem("favorites",JSON.stringify(e)),document.querySelector('.favorites-item[data-favourite-id="'+t+'"]').remove(),d())}window.location.pathname.endsWith("/favorites.html")&&d();function d(){const o=JSON.parse(localStorage.getItem("favorites"))||[];o.length===0?r.innerHTML=`
   <div class="message-info-block">
    <img class="message-info-svg" src="${p}" alt="dumbbell"/>
    <p class="message-info-text">
     It appears that you haven't added any exercises to your favorites yet. To get
     started, you can add exercises that you like to your favorites for easier
     access in the future.
    </p>
   </div>
  `:r.innerHTML=o.map(t=>`
   <li class="favorites-item" data-favourite-id="${t._id}">
    <div class="workout-card-wrapper">
     <div class="workout-card">
      <div class="workout-header">
       <div class="workout-header-wrapper">
        <p class="workout-title" >Workout</p>
        <button class="workout-trash-btn" id="workout-trash-btn" type="button" data-id="${t._id}">
         <img
            class="workout-icon-trash" id="workout-icon-trash-${t._id}" data-id="${t._id}" width="16" height="16"
            src="${g}" 
            />
        </button>
        <p class="workout-rating" id="workout-rating">4.0</p>
       <img src="${l}" class="workout-rating-icon" id="workout-rating-icon-${t._id}" width="18" height="18" 
       />
       </div>
       <button class="workout-start-button" id="workout-start-button" type="button" data-id="${t._id}">Start
         <img
            class="workout-icon-start" id="workout-icon-start-${t._id}" width="14" height="14 "
            src="${u}"/>
       </button>
      </div>
      <div class="workout-name-wrapper">
       <img src="${w}" class="workout-icon-man" id="workout-icon-man-${t._id}" width="16" height="16" />
       <p class="workout-name" id="workout-name">${t.name}</p>
      </div>
      <div class="workout-inform-wrapper">
       <p class="workout-calories" id="workout-calories">Burned calories: <span class="number-calories" id="number-calories">${t.burnedCalories}&#160;&#8260;&#160;${t.time}&#160;min</span></p>
       <p class="workout-body-part" id="workout-body-part">Body part: <span class="body-part" id="body-part">${t.bodyPart}</span></p>
       <p class="workout-target" id="workout-target">Target: <span class="target" id="target">${t.target}</span></p>
      </div>
     </div>
    </div>
   </li>
  `).join(""),f()}const v=document.querySelectorAll(".workout-start-button");v.forEach(o=>o.addEventListener("click",()=>{m(o.dataset.id)}));
//# sourceMappingURL=commonHelpers2.js.map
