// Search bar categories selection
const categorySelectionButton = document.querySelector('.selectedCategory');
const categoryLists = document.querySelectorAll('.categoryDropdown li');
categorySelectionButton.addEventListener('click', function (e) {
    const thisParent = e.target.parentNode;
    this.classList.toggle('active');
    thisParent.querySelector('.categoryDropdown').classList.toggle('active');
});
categoryLists.forEach(item => {
    item.addEventListener('click', function (e) {
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
commonSearchButton.addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.searchBarSection').classList.toggle('active');
});

// search shortcuts info
const searchInfoButton = document.querySelector('.searchTypeInfo');
searchInfoButton.addEventListener('click', function () {
    this.classList.toggle('active');
    this.querySelector('.infoDetail').classList.toggle('active');
});

const dropdownButton = document.querySelectorAll('.dropdwon__menu li');
const allDropdownLists = document.querySelectorAll('.dropdown__menu .dropdwon__sub__menu');

dropdownButton.forEach(item => {
    item.addEventListener('click', function (e) {
        this.classList.toggle('active');
    });
});


// More info buttons
const moreInfoButton = document.querySelectorAll('.moreInfoButton');
const moreInfoButtonContainer = document.querySelectorAll('.moreInfoButtonContainer');
moreInfoButton.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        moreInfoButtonContainer.forEach(container => container.classList.remove('active'));
        let thisMainParent = this.closest('.moreInfoButtonContainer');
        document.querySelectorAll('tr').forEach(tr => tr.classList.remove('active'));
        this.classList.toggle('active');
        if (!this.classList.contains('active')) {
            thisMainParent.classList.remove('active');
            this.closest('tr').classList.remove('active');
        } else {
            thisMainParent.classList.add('active');
            this.closest('tr').classList.add('active');
        }
    });
});

const customizeButton = document.querySelector('[data-customize]');
const closePopup = document?.querySelectorAll('.popup__close');
const addNewReg = document?.querySelector('.addNewRegistration');
customizeButton.addEventListener('click', function () {
    document.querySelector('.dashboardCustomizablePopup').style.display = 'block';
});
addNewReg?.addEventListener('click', function () {
    document.querySelector('.newRegistrationFormSection').style.display = 'block';
});
closePopup.forEach(closeButton => {
    closeButton.addEventListener('click', function () {
        document.querySelector('.dashboardCustomizablePopup').style.display = 'none';
        document.querySelectorAll('.overlay__section').forEach(overlaySection => overlaySection.style.display = 'none');
    });
});

// Clicking on dom to close all popups
document.addEventListener('click', function () {
    moreInfoButtonContainer.forEach(container => container.classList.remove('active'));
    document.querySelectorAll('tr').forEach(tr => tr.classList.remove('active'));
    moreInfoButton.forEach(container => container.classList.remove('active'));
});

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

const registrationTab_items = document?.querySelectorAll('.tab__item');

tabs(registrationTab_items);
function tabs(tabItem) {
    tabItem.forEach(tab => {
        tab.addEventListener('click', function () {
            let thisId = this.getAttribute('id');
            let mainParent = this.closest('.tab__container');
            let tabDataAll = mainParent.querySelectorAll('.tab__data');
            tabDataAll.forEach(tabData => tabData.classList.remove('active'));
            mainParent.querySelectorAll('.tab__item').forEach(tabItem => tabItem.classList.remove('active'));
            this.classList.toggle('active');
            mainParent.querySelector(`#${thisId}-data`).classList.add('active');
        });
    });
}
const regTabItems = document?.querySelectorAll('.tabs_container .tab__item');
regTabItems.forEach(item => {
    item.addEventListener('click', function () {
        let activeBox = this.closest('.tabs_container').querySelector('.tab__active__bg');
        let containerWidth = this.closest('.tabs_container').getBoundingClientRect().width;
        let boxWidth = this.getBoundingClientRect().width;
        // let posX = this.getBoundingClientRect().x;
        let posX = this.offsetLeft;
        activeBox.style.width = `${boxWidth}px`;
        activeBox.style.left = `${posX}px`;

        console.log(posX);
    });
});

/* =============================== Search and select Items [Begin] =============================== */

function searchSelction(e) {
    var input, filter, lists, li, a, i, txtValue;
    input = e.target;
    filter = input.value.toUpperCase();
    lists = e.target.closest('.search_n_select_container').querySelector('.__items_list');    
    
    if(e.target.value.length > 0) lists.style.display = 'block';
    else lists.style.display = 'none';
    
    items = lists.querySelectorAll(".__item");
    items.forEach((item, index) => {
        thisId = item.querySelector("._id");
        thisText = item.querySelector("._name");
        idValue = thisId.textContent || thisId.innerText;
        txtValue = thisText.textContent || thisText.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 || idValue.toUpperCase().indexOf(filter) > -1) {
            // item[index].style.display = "";
        } else {
            // item[index].style.display = "none";
        }
    })
    // for (i = 0; i < li.length; i++) {
    // }
}

// Loading/Adding Selected Item
const selecteItemContainer = document?.querySelector('.__selected_items_container');
// const selectedItems = [
//     { id: 555913, text: 'Tahreer Almutairi', },
//     { id: 32507, text: 'Moath Alotaibi', },
//     { id: 555912, text: 'Mohammed Al Masri', },
// ];
const selectedItems = [];

function loadSelectedItems() {
    selectedItems.map((item, index) => {
        let loadItem =  `<div class="selected__item" id="${item.id}">
            <span class="__icon">
                <i class="far fa-address-book"></i>
            </span>
            <span class="__text">
                <span class="_id">${item.id}</span>
                <span class="_name">${item.text}</span>
            </span>
            <span class="__remove__icon">&times;</span>
        </div>`
        return selecteItemContainer.insertAdjacentHTML('beforeend', loadItem);
    })
}
// loadSelectedItems();

const selectAbleItems = document?.querySelectorAll('.__items_list .__item');
selectAbleItems.forEach(item => {
    item.addEventListener('click', function(e) {
        let thisId, thisText, newItem;
        thisId = this.querySelector('._id').innerText;
        thisText = this.querySelector('._name').innerText;
        newItem = { id: thisId, text: thisText };
        selectedItems.push(newItem);
        loadSelectedItems();
        this.classList.add('selected');
    })
})

/* =============================== Search and select Items [End] =============================== */