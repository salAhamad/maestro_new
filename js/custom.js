// Search bar categories selection
const categorySelectionButton = document.querySelector('.selectedCategory');
const categoryLists = document.querySelectorAll('.categoryDropdown li');
categorySelectionButton.addEventListener('click', function(e) {
    const thisParent = e.target.parentNode;
    this.classList.toggle('active');
    thisParent.querySelector('.categoryDropdown').classList.toggle('active');
});
categoryLists.forEach(item => {
    item.addEventListener('click', function(e) {
        let thisIcon = this.querySelector('.icon').innerHTML;
        let thisText = this.querySelector('.categoryName').innerText;

        categoryLists.forEach(li => li.classList.remove('selected'));
        this.classList.add('selected');
        
        let selectedIcon = categorySelectionButton.querySelector('.icon');
        let selectedText = categorySelectionButton.querySelector('.text');

        selectedIcon.innerHTML = thisIcon;
        selectedText.textContent = thisText;
        this.closest('.categorySelection').querySelector('.selectedCategory').classList.remove('active');
        this.parentNode.classList.remove('active');
    });
});

// Top Search Bar
const commonSearchButton = document.querySelector('#searchBarButton');
commonSearchButton.addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.searchBarSection').classList.toggle('active');
});

// search shortcuts info
const searchInfoButton = document.querySelector('.searchTypeInfo');
searchInfoButton.addEventListener('click', function() {
    this.classList.toggle('active');
    this.querySelector('.infoDetail').classList.toggle('active');
});


const dropdownButton = document.querySelectorAll('.dropdwon__menu li');
const allDropdownLists = document.querySelectorAll('.dropdown__menu .dropdwon__sub__menu');

dropdownButton.forEach(item => {
    item.addEventListener('click', function(e){
        // dropdownButton.forEach(li => li.classList.remove('active'));
        // allDropdownLists.forEach(item => item.classList.remove('active'));
        this.classList.toggle('active');
        // let thisDropdownLists = this.querySelector('.dropdwon__sub__menu');
        // thisDropdownLists.classList.toggle('active');
    })
})


// More info buttons
const moreInfoButton = document.querySelectorAll('.moreInfoButton');
const moreInfoButtonContainer = document.querySelectorAll('.moreInfoButtonContainer');
moreInfoButton.forEach(button => {  
    button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        moreInfoButtonContainer.forEach(container => container.classList.remove('active'));
        let thisMainParent = this.closest('.moreInfoButtonContainer');
        this.classList.toggle('active');
        if(!this.classList.contains('active')) {
            thisMainParent.classList.remove('active')
        } else {
            thisMainParent.classList.add('active');
        }
    })
});

const customizeButton = document.querySelector('[data-customize]');
const closePopup = document.querySelector('.popup__close');
customizeButton.addEventListener('click', function() {
    document.querySelector('.dashboardCustomizablePopup').style.display = 'block';
})
closePopup.addEventListener('click', function() {
    document.querySelector('.dashboardCustomizablePopup').style.display = 'none';
})

// Clicking on dom to close all popups
document.addEventListener('click', function() {
    moreInfoButtonContainer.forEach(container => container.classList.remove('active'));
    moreInfoButton.forEach(container => container.classList.remove('active'));
})


// const draggableContainers = document.querySelectorAll('.draggable__container');
// const draggableItems = document.querySelectorAll('.draggable_item');

// draggableItems.forEach(draggable => {
//     draggable.addEventListener('dragstart', () => {
//         draggable.classList.add('dragging');
//     })
//     draggable.addEventListener('dragend', () => {
//         draggable.classList.remove('dragging');
//     })
// })

// draggableContainers.forEach(container => {
//     container.addEventListener('dragover', (e) => {
//         e.preventDefault();
//         console.log('dragover')
//         const afterElement = getDragAfterElement(container, e.clientY)
//         const draggable = document.querySelector('.dragging');
//         container.insertBefore(draggable, afterElement);
//     })
// })

// function getDragAfterElement(container, y) {
//     const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
//     return draggableElements.reduce((closest, child) => {
//         const box = child.getBoundingClientRect();
//         const offset = y - box.top - box.height / 2;

//         if(offset < 0 && offset > closest.offset) {
//             return { offset: offset, element: child }
//         } else {
//             return closest
//         }

//     }, { offset: Number.NEGATIVE_INFINITY }).element;
// }


const scrollContainer = document.querySelector(".horizontal__scroll__container");

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// });
