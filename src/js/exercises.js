import star from '../images/svg/icon-star.svg';
import arrow from '../images/svg/icon-arrow.svg';
import man from '../images/svg/icon-man.svg';
import { filterExercises, getExercisesCards } from './api';
import { renderExercise } from './modal';

const btnFilterList = document.querySelector('.btn-wrapper');
const exList = document.querySelector('.exercises-list');
const exPagination = document.querySelector('.exercises-pagination');
const exSearchForm = document.querySelector('.exercises-form');
let span = document.querySelector('.span');


btnFilterList.addEventListener('change', () => renderTypeOfExercises(1));

// render types of exercises

renderTypeOfExercises(1);

async function renderTypeOfExercises(currentPage) {

  const defaultFilter = 'Muscles'

  // hide search bar
  exSearchForm.classList.add("visually-hidden");


  const currentFilterInput = btnFilterList.querySelector('input:checked');
  const currentFilter = currentFilterInput ? currentFilterInput.value : defaultFilter;

  // name
  span.textContent = `/ ${currentFilter.toLowerCase()}`;

  const { results, page, totalPages } = (await filterExercises(currentFilter, currentPage ?? 1)).data;

  exList.innerHTML = results
    .map(
      ({ name, filter, imgUrl }) => `<li
            class="exercises-item"
            style="
            background:linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${imgUrl});
            background-size: cover;
            background-repeat: no-repeat;
            "
            data-name = "${name}"
            data-filter = "${filter.toLowerCase().split(' ').join('')}"
          >
            <p class="exercises-name">${name}</p>
            <p class="exercises-text">${filter}</p>
          </li>`
    )
    .join('');

  // pagination
  renderPagBtn(totalPages, page);
  exPagination.removeEventListener('change', handlePaginationTypesChange);
  exPagination.removeEventListener('change', handlePaginationExercisesChange);
  exPagination.removeEventListener('change', handlePaginationExercisesSearchChange);
  exSearchForm.removeEventListener('submit', search);
  exPagination.addEventListener('change', handlePaginationTypesChange);

  exList.addEventListener('click', renderExercises);
}

function handlePaginationTypesChange(event) {
  renderTypeOfExercises(event.target.value);
}

// exercises

async function renderExercises(event) {

  if (event.target?.tagName == "UL") {
    return
  }

  exList.removeEventListener('click', renderExercises);
  exPagination.removeEventListener('change', handlePaginationTypesChange);
  btnFilterList.reset();

  // show search bar
  exSearchForm.classList.remove("visually-hidden");

  if (typeof event !== "string") {
    const item = event.target.closest('.exercises-item');
    span.textContent += ` / ${item.dataset.name}`
  }

  const params = span.textContent.split("/");


  let filter = params[1].trim();
  if (filter === 'body parts') {
    filter = 'bodypart';
  }

  const name = params[2].trim();

  const currentPage = typeof event === "string" ? event : 1;

  const { results, totalPages, page } = (await getExercisesCards(filter, name, currentPage)).data;

  exList.innerHTML = results
    .map(
      ({ name, rating, burnedCalories, target, bodyPart, time, _id }) => `<li
          class="workout-item">
          <div class="workout-card">
      <div class="workout-header">
          <div class="workout-header-wrapper">
            <p class="workout-title">workout</p>
            <p class="workout-rating">${rating}</p>
            <img
            class="workout-rating-icon"
              src="${star}" />
          </div>
          <button
            class="workout-start-button"
            data-id="${_id}"
            type="button"
          >
            Start
             <img
              class="workout-icon-start"
             src="${arrow}" />
          </button>
        </div>
        <div class="workout-name-wrapper">
           <img
            class="workout-icon-man"
            src="${man}" />
          <p class="workout-name">${name}</p>
        </div>

        <div class="workout-inform-wrapper">

        <p class="workout-calories">
            Burned calories:
            <span class="number-calories">${burnedCalories} / ${time} min</span>
          </p>

        <p class="workout-body-part">
            Body part:
            <span class="body-part">${bodyPart}</span>
          </p>

          <p class="workout-target">
            Target: <span class="target">${target}</span>
          </p>

          </div>
          </div>
</li>`
    )
    .join('');

  exSearchForm.addEventListener('submit', search);
  exList.addEventListener('click', openModal)

  // pagination 
  renderPagBtn(totalPages, page);
  exPagination.removeEventListener('change', handlePaginationExercisesChange);
  exPagination.addEventListener('change', handlePaginationExercisesChange);
}

function handlePaginationExercisesChange(event) {
  renderExercises(event.target.value);
}

// search

async function search(event) {
  if (typeof event !== "string") {
    event.preventDefault();
  }


  const keyword = typeof event === 'string' ? exList.querySelector('.workout-item').dataset.keyword : event.target.search.value;

  const params = span.textContent.split("/");

  let filter = params[1].trim();
  if (filter === 'body parts') {
    filter = 'bodypart';
  }

  const name = params[2].trim();

  const currentPage = typeof event === "string" ? event : 1;

  const { results, totalPages, page } = (await getExercisesCards(filter, name, currentPage, keyword)).data;

  if (results.length === 0) {
    exList.innerHTML = `
      <li class="workout-item-no-results">
  <p class="workout-no-results">
    Unfortunately, <span class="workout-no-results-span">no results</span> were found. You may want to consider other
    search options to find the exercise you are looking
    for. Our range is wide and you have the opportunity to find more options that suit your needs.
  </p>
</li>`
    exPagination.classList.add('visually-hidden');
    exSearchForm.reset();
    return
  }

  exPagination.classList.remove('visually-hidden');

  exList.innerHTML = results
    .map(
      ({ name, rating, burnedCalories, target, bodyPart, time, _id }) => `<li
      data-keyword="${keyword}"
          class="workout-item">
          <div class="workout-card">
      <div class="workout-header">
          <div class="workout-header-wrapper">
            <p class="workout-title">workout</p>
            <p class="workout-rating">${rating}</p>
            <img
            class="workout-rating-icon"
              src="${star}" />
          </div>
          <button
            class="workout-start-button"
            data-id="${_id}"
            type="button"
          >
            Start
             <img
              class="workout-icon-start"
             src="${arrow}" />
          </button>
        </div>
        <div class="workout-name-wrapper">
           <img
            class="workout-icon-man"
            src="${man}" />
          <p class="workout-name">${name}</p>
        </div>

        <div class="workout-inform-wrapper">

        <p class="workout-calories">
            Burned calories:
            <span class="number-calories">${burnedCalories} / ${time} min</span>
          </p>

        <p class="workout-body-part">
            Body part:
            <span class="body-part">${bodyPart}</span>
          </p>

          <p class="workout-target">
            Target: <span class="target">${target}</span>
          </p>

          </div>
          </div>
</li>`
    )
    .join('');


  exSearchForm.reset();

  // pagination 
  renderPagBtn(totalPages, page);
  exPagination.removeEventListener('change', handlePaginationExercisesChange);
  exPagination.addEventListener('change', handlePaginationExercisesSearchChange);
}

function handlePaginationExercisesSearchChange(event) {
  search(event.target.value);
}

// open modal 

function openModal(event) {
  let btn = event.target;

  if (btn.tagName !== "BUTTON" && btn.tagName !== "IMG") {
    return
  }

  if (btn.tagName === "IMG") {
    if (btn.classList.value !== 'workout-icon-start') return
    btn = btn.closest('.workout-start-button');
  }

  const id = btn.dataset.id

  renderExercise(id)
}

// pagination
function renderPagBtn(totalPages, page) {
  let buttons;

  if (totalPages > 5) {
    if (page === 1 || page === 2 || page === 3) {
      buttons = [1, 2, 3, 4, 5];
    } else if (totalPages - page < 2) {
      buttons = [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    else {
      buttons = [page - 2, page - 1, page, page + 1, page + 2]
    }
    buttons = buttons.map(
      (num) =>
        `<label class="exercises-pagination-btn">
  ${num}
<input class="visually-hidden" type="radio" value="${num}" name="pagination"  ${num === Number(page) ? 'checked' : ""}>
</label>`
    )
      .join('');

  } else {
    buttons = Array(totalPages)
      .fill()
      .map(
        (_, idx) =>
          `<label class="exercises-pagination-btn">
  ${idx + 1}
<input class="visually-hidden" type="radio" value="${idx + 1}" name="pagination" ${idx + 1 === Number(page) ? 'checked' : ""}>
</label>`
      )
      .join('');
  }

  exPagination.innerHTML = '';
  exPagination.insertAdjacentHTML('beforeend', buttons);
}













// const btnFilterList = document.querySelector('.btn-wrapper');
// const exList = document.querySelector('.exercises-list');
// const exPagination = document.querySelector('.exercises-pagination');
// const exFilterBtn = document.querySelectorAll('.exercises-btn-filter');
// const exForm = document.querySelector('.exercises-form');
// let span = document.querySelector('.span');
// const secondSpan = document.querySelector('.second-span');
// const exHeader = document.querySelector('.exercises-header');
// let query = 'Muscles';

// let allPages = 0;

// filterExercises(query).then(({ data: { results, totalPages, page } }) => {
//   exFilterBtn[0].classList.add('is-active');

//   exList.insertAdjacentHTML('beforeend', renderFilterItems(results));
//   renderPagBtn(totalPages, page);
// });

// btnFilterList.addEventListener('click', onFiltersBtnClick);

// function onFiltersBtnClick(e) {
//   span.classList.add('visually-hidden');
//   const button = e.target;
//   if (button.nodeName !== 'BUTTON') {
//     return;
//   }
//   const activeFilterBtn = document.querySelector('.is-active');
//   if (activeFilterBtn) {
//     activeFilterBtn.classList.remove('is-active');
//   }

//   if (innerWidth >= 768 && innerWidth < 1440) {
//     exHeader.style.marginBottom = '32px';
//   }

//   button.classList.add('is-active');
//   query = button.textContent;
//   exList.addEventListener('click', onCardClick);
//   filterExercises(query).then(({ data: { results, totalPages, page } }) => {

//     exList.innerHTML = '';
//     exList.insertAdjacentHTML('beforeend', renderFilterItems(results));



//     exForm.classList.add('visually-hidden');
//     renderPagBtn(totalPages, page);
//     exPagination.classList.remove('visually-hidden');
//   });
// }

// exList.addEventListener('click', onCardClick);

// function onCardClick(e) {
//   if (e.target.nodeName != 'UL') {
//     let exSubtype = e.target.closest('li').dataset.name;
//     let exFilter = e.target.closest('li').dataset.filter;

//     if (exFilter === 'bodyparts') {
//       exFilter = 'bodypart';
//     }

//     if (e.target.nodeName === 'UL') {
//       return;
//     }

//     exForm.classList.remove('visually-hidden');
//     span.classList.remove('visually-hidden');
//     secondSpan.textContent = exSubtype;

//     exList.innerHTML = '';
//     exPagination.innerHTML = '';

//     getExercisesCards(exFilter, exSubtype).then(
//       ({ data: { results, totalPages, page } }) => {
//         exList.insertAdjacentHTML('beforeend', renderCards(results));

//         const startBtn = document.querySelectorAll('.workout-start-button');
//         startBtn.forEach(btn =>
//           btn.addEventListener('click', () => {
//             renderExercise(btn.dataset.id);
//           })
//         );

//         renderPagBtn(totalPages, page);

//         exPagination.removeEventListener('click', onPagFilterBtnClick);
//         exPagination.addEventListener('click', onPagExBtnClick);

//         allPages = totalPages;

//         exPagination.firstChild.classList.add('active-pag-btn');
//         exList.removeEventListener('click', onCardClick);
//       }

//     );

//     if (innerWidth >= 768 && innerWidth < 1440) {
//       exHeader.style.marginBottom = '55px';
//     }
//   }
// }

// function onPagExBtnClick(e) {
//   let page = e.target.textContent;

//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   const activePagBtn = document.querySelector('.active-pag-btn');
//   if (activePagBtn) {
//     activePagBtn.classList.remove('active-pag-btn');
//   }
//   e.target.classList.add('active-pag-btn');
//   const keyword = exForm.querySelector('input').value.trim();

//   nextPage(allPages, page);
//   getExercisesCards(query.toLowerCase(), secondSpan.textContent, page, keyword).then(res => {
//     exList.innerHTML = '';
//     exList.insertAdjacentHTML('beforeend', renderCards(res.data.results));

//     const startBtn = document.querySelectorAll('.workout-start-button');
//     startBtn.forEach(btn =>
//       btn.addEventListener('click', () => {
//         renderExercise(btn.dataset.id);
//       })
//     );
//   });
// }

// function onPagFilterBtnClick(e) {
//   let page = e.target.textContent;

//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   const activePagBtn = document.querySelector('.active-pag-btn');
//   if (activePagBtn) {
//     activePagBtn.classList.remove('active-pag-btn');
//   }
//   e.target.classList.add('active-pag-btn');

//   filterExercises(query, page).then(res => {

//     exList.innerHTML = '';
//     exList.insertAdjacentHTML('beforeend', renderFilterItems(res.data.results));
//   });
// }

// function renderFilterItems(data) {
//   exPagination.addEventListener('click', onPagFilterBtnClick);
//   return data
//     .sort((a, b) => a.name.localeCompare(b.name))
//     .map(
//       ({ name, filter, imgUrl }) => `<li
//           class="exercises-item"
//           style="
//           background:linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${imgUrl});
//           background-size: cover;
//   background-repeat: no-repeat;
//           "
//           data-name = "${name}"
//           data-filter = "${filter.toLowerCase().split(' ').join('')}"
//         >

//           <p class="exercises-name" >${name}</p>
//           <p class="exercises-text" >${filter}</p>

//         </li>`
//     )
//     .join('');
// }

// function nextPage(totalPages, page) {
//   const maxDisplayedPages = 5;

//   let startIdx = Math.max(1, page - Math.floor(maxDisplayedPages / 2));
//   let endIdx = Math.min(startIdx + maxDisplayedPages - 1, totalPages);

//   if (endIdx - startIdx + 1 < maxDisplayedPages) {
//     startIdx = Math.max(1, endIdx - maxDisplayedPages + 1);
//   }

//   const buttonsPage = Array.from({ length: endIdx - startIdx + 1 }, (_, idx) => {
//     const pageNum = startIdx + idx;

//     return pageNum === Number(page)
//       ? `<button class="exercises-pagination-btn active-pag-btn" type="button">${pageNum}</button>`
//       : `<button class="exercises-pagination-btn" type="button">${pageNum}</button>`;
//   }).join('');

//   exPagination.innerHTML = '';
//   exPagination.insertAdjacentHTML('beforeend', buttonsPage);
// }


// function renderPagBtn(totalPages, page) {
//   let buttons = ''

//   if (totalPages > 5) {
//     buttons = [page - 2, page - 1, page, page + 1, page + 2]
//       .fill(page, 3, 4)
//       .map(
//         (_, idx) =>
//           `<button class = "exercises-pagination-btn" type = "button">${idx + 1
//           }</button>`
//       )
//       .join('');

//   } else {
//     buttons = Array(totalPages)
//       .fill()
//       .map(
//         (_, idx) =>
//           `<button class = "exercises-pagination-btn" type = "button">${idx + 1
//           }</button>`
//       )
//       .join('');
//   }

//   exPagination.innerHTML = '';
//   exPagination.insertAdjacentHTML('beforeend', buttons);
//   const checkActive = Array.from(exPagination.querySelectorAll('.exercises-pagination-btn')).some(
//     (elem) => elem.classList.contains('active-pag-btn'));

//   if (!checkActive) {
//     exPagination.firstChild.classList.add('active-pag-btn');
//   }
// }

// function renderCards(card) {
//   return card
//     .map(
//       ({ name, rating, burnedCalories, target, bodyPart, time, _id }) => `<li
//           class="workout-item">
//           <div class="workout-card">
//       <div class="workout-header">
//           <div class="workout-header-wrapper">
//             <p class="workout-title">workout</p>
//             <p class="workout-rating">${rating}</p>
//             <img
//             class="workout-rating-icon"
//               src="${star}" />
//           </div>
//           <button
//             class="workout-start-button"
//             data-id = "${_id}"
//             type="button"
//           >
//             Start
//              <img
//               class="workout-icon-start"
//              src="${arrow}" />
//           </button>
//         </div>
//         <div class="workout-name-wrapper">
//            <img
//             class="workout-icon-man"
//             src="${man}" />
//           <p class="workout-name">${name}</p>
//         </div>

//         <div class="workout-inform-wrapper">

//         <p class="workout-calories">
//             Burned calories:
//             <span class="number-calories">${burnedCalories} / ${time} min</span>
//           </p>

//         <p class="workout-body-part">
//             Body part:
//             <span class="body-part">${bodyPart}</span>
//           </p>

//           <p class="workout-target">
//             Target: <span class="target">${target}</span>
//           </p>

//           </div>
//           </div>
// </li>
//       `
//     )
//     .join('');
// }

// // пошук //

// function getFilterAndSubtypeInfo(filter, name, page, keyword) {
//   getExercisesCards(filter, name, page, keyword).then(response => {

//     if (String(response.data.results) === '') {
//       exList.innerHTML = `
//       <li class="workout-item-no-results">
//   <p class="workout-no-results">
//     Unfortunately, <span class="workout-no-results-span">no results</span> were found. You may want to consider other
//     search options to find the exercise you are looking
//     for. Our range is wide and you have the opportunity to find more options that suit your needs.
//   </p>
// </li>`
//       exPagination.classList.add('visually-hidden');
//     } else {
//       exPagination.classList.remove('visually-hidden');
//       exList.innerHTML = '';
//       exList.insertAdjacentHTML('beforeend', renderCards(response.data.results));
//       exList.addEventListener('click', (event) => {
//         if (event.target.closest('.workout-start-button')) {
//           renderExercise(event.target.closest('.workout-start-button').dataset.id);
//         }
//       });
//     }
//   });
// }

// function onexFormSubmit(e) {
//   e.preventDefault();

//   let filter = document.querySelector('.exercises-btn-filter.is-active').textContent.toLocaleLowerCase();

//   if (filter === "body parts") {
//     filter = 'bodypart';
//   }


//   const nowPage = document.querySelector('.exercises-pagination-btn.active-pag-btn').textContent;
//   const keyword = exForm.querySelector('input').value.trim();

//   getFilterAndSubtypeInfo(filter, secondSpan.textContent.toLowerCase(), nowPage, keyword);
//   exForm.reset();
// }

// exForm.addEventListener('submit', onexFormSubmit);
