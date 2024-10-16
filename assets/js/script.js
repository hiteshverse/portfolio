'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");
// ;
// overlay.addEventListener("click", testimonialsModalFunc);
// modal variable
// const modalImg = document.querySelector("[data-modal-img]");

// add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}




// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables




// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

const itemS = document.getElementsByClassName('project-item');
// const wideViewItems = document.getElementsByClassName('wide_view_project');


for (let i = 0; i < itemS.length; i++) {

  itemS[i].addEventListener('click', function () {

    const dd = document.getElementsByClassName('wide_view_children')


    dd[0].classList.remove('wide_view');
    dd[1].classList.add('wide_view');

    console.log(document.getElementsByClassName('project-link'));
    const input_link = document.getElementsByClassName('project-link')[i].attributes.getNamedItem('link').value
    const output_link = document.getElementById('project_link');
    output_link.attributes.getNamedItem('href').value = '';
    output_link.attributes.getNamedItem('href').value = input_link

    const input_title = itemS[i].getElementsByClassName('project-title')[0].innerHTML
    const output_title = document.getElementById('project_title')
    const title_tag = document.createElement('b')
    title_tag.innerText = 'Title : '
    title_tag.innerHTML += `<p> ${input_title} </p>`
    output_title.innerHTML = '';
    output_title.appendChild(title_tag)

    const input_description = itemS[i].getElementsByClassName('project-description')[0].innerHTML
    const output_dscription = document.getElementById('project_description')
    const description_tag = document.createElement('b')
    description_tag.innerText = 'Description : '
    description_tag.innerHTML += `<p> ${input_description} </p>`
    output_dscription.innerHTML = '';
    output_dscription.appendChild(description_tag)

    const input_feature = itemS[i].getElementsByClassName('project-feature')[0].innerHTML
    const output_feature = document.getElementById('project_feature')
    const feature_tag = document.createElement('b')
    feature_tag.innerText = 'KeyFeature : '
    feature_tag.innerHTML += `<p> ${input_feature} </p>`
    output_feature.innerHTML = '';
    output_feature.appendChild(feature_tag)

    console.log(document.getElementsByClassName('project-video'));
    const input_iframe = document.getElementsByClassName('project-video')[i].attributes.getNamedItem('yt_link').value
    const output_iframe = document.getElementById('project_video');
    output_iframe.attributes.getNamedItem('src').value = '';
    output_iframe.attributes.getNamedItem('src').value = input_iframe

   

  })
}

const closeBtn = document.getElementsByClassName('close-wide-view')[0];

closeBtn.addEventListener('click', function () {
  const dd = document.getElementsByClassName('wide_view_children')
  dd[0].classList.add('wide_view');
  dd[1].classList.remove('wide_view');
})