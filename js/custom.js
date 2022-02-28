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
customizeButton?.addEventListener('click', function () {
    document.querySelector('.dashboardCustomizablePopup').style.display = 'block';
});
addNewReg?.addEventListener('click', function () {
    document.querySelector('.newRegistrationFormSection').style.display = 'block';
});
closePopup.forEach(closeButton => {
    closeButton.addEventListener('click', function () {
        document.querySelector('.marge_overlay_section').style.display = 'none';
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

const mergeContactButton = document?.querySelectorAll('#mergeButton');
const mergeOverlay = document?.querySelector('.marge_overlay_section');
mergeContactButton.forEach(button => {
    button.addEventListener('click', function() {
        mergeOverlay.style.display = 'block';
    })
})

/* =============================== Search and select Items [ Begin ] =============================== */
// Searchable Inputs
const inputs = document?.querySelectorAll('.search_item');
const dropdownListItems = document?.querySelectorAll('.__items_list');
const selectAbleItems = document?.querySelectorAll('.__items_list .__item');

const selecteItemContainer = document?.querySelector('#mergingFrom');
let selectedItems = [
    // { id: 555913, text: 'Tahreer Almutairi', },
    // { id: 555912, text: 'Mohammed Al Masri', },
];
let merigngFromItems = [];
let mergeWithItems = [];

inputs.forEach(input => {
    input.addEventListener('keyup', function(e) {
        searchSelction(e);
    })
})
// Input search filter
function searchSelction(e) {
    e.stopImmediatePropagation();
    dropdownListItems.forEach(lists => lists.style.display = 'none');
    var input, filter, lists, li, a, i, txtValue;
    input = e.target;
    filter = input.value.toUpperCase();
    lists = e.target.closest('.search_n_select_container').querySelector('.__items_list');        
    let thisMainId = e.target.parentElement.parentElement.querySelector('.__selected_items_container');

    if(e.target.value.length > 0) lists.style.display = 'block';
    else lists.style.display = 'none';    
    
    items = lists.querySelectorAll(".__item");
    items.forEach((item, index) => {
        thisId = item.querySelector("._id");
        thisText = item.querySelector("._name");
        idValue = thisId.textContent || thisId.innerText;
        txtValue = thisText.textContent || thisText.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 || idValue.indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
        // checking if items already on in the list & selected items        
        if(thisMainId == 'mergingFrom') {               
            merigngFromItems.forEach(selectedItem => {
                if(selectedItem.id == item.id) item.classList.add('selected');
            })
        } else {
            mergeWithItems.forEach(selectedItem => {
                if(selectedItem.id == item.id) item.classList.add('selected');
            })
        }        
    })
}

// Loading/Adding Selected Item
function loadSelectedItems(printItems, printItemsTo) {
    let loadItemId  = document.querySelector(`#${printItemsTo}`);
    loadItemId.innerHTML = '';
    printItems.map((item, index) => {
        let loadItem =  `<div class="selected__item" id="${item.id}">
            <span class="__icon">
                <i class="far fa-address-book"></i>
            </span>
            <span class="__text">
                <span class="_id">${item.id}</span>
                <span class="_name">${item.text}</span>
            </span>
            <span class="__remove__icon removeIcon" onclick="removeItem(event)" id="${item.id}">&times;</span>
        </div>`
        return loadItemId.insertAdjacentHTML('beforeend', loadItem);
    })
}
loadSelectedItems(merigngFromItems, 'mergingFrom');
loadSelectedItems(mergeWithItems, 'mergingWith');

// Reset All form
function resetForm() { 
    inputs.forEach(input => input.value = ''); 
    customizeFilterInput.value = '';
    if(customizeFilterInput.value == 0) {
        filterableItem.forEach(item => item.style.display = 'block');
    }
}
function removeItem(e) {
    let thisId = e.target.parentNode.id;
    // selectedItems = selectedItems.filter(removethis => removethis.id != thisId);
    // selectAbleItems.forEach(selectedItem => {
    //     if(selectedItem.id == thisId) selectedItem.classList.remove('selected');
    // })
    let thisMainId = e.target.parentNode.parentNode.id;
    // loadSelectedItems(selectedItems, thisMainId);
    if(thisMainId == 'mergingFrom') {               
        merigngFromItems = merigngFromItems.filter(removethis => removethis.id != thisId);
        selectAbleItems.forEach(selectedItem => {
            if(selectedItem.id == thisId) selectedItem.classList.remove('selected');
        })
        loadSelectedItems(merigngFromItems, thisMainId);
    } else {
        mergeWithItems = mergeWithItems.filter(removethis => removethis.id != thisId);
        selectAbleItems.forEach(selectedItem => {
            if(selectedItem.id == thisId) selectedItem.classList.remove('selected');
        })
        loadSelectedItems(mergeWithItems, thisMainId);
    }
}
selectAbleItems.forEach(item => {
    item.addEventListener('click', function(e) {        
        let thisId, thisText, newItem, thisSelectableParent;
        thisSelectableParent = this.closest('.search_n_select_container').querySelector('.__selected_items_container');
        thisId = this.querySelector('._id').innerText;
        thisText = this.querySelector('._name').innerText;
        newItem = { id: thisId, text: thisText };

        let checkId;
        if(thisSelectableParent.id == 'mergingFrom') {
            checkId = merigngFromItems.some(item => item.id === thisId);
        } else {
            checkId = mergeWithItems.some(item => item.id === thisId);
        }
        if(!checkId) {
            this.classList.add('selected');
            this.closest('.__items_list').style.display = 'none';
            if(thisSelectableParent.id == 'mergingFrom') {
                merigngFromItems.push(newItem);
                loadSelectedItems(merigngFromItems, thisSelectableParent.id);
            } else {
                mergeWithItems.push(newItem);            
                loadSelectedItems(mergeWithItems, thisSelectableParent.id);
            }
            resetForm();
        } else {
            this.classList.remove('selected');
            this.closest('.__items_list').style.display = 'none';

            if(thisSelectableParent.id == 'mergingFrom') {               
                merigngFromItems = merigngFromItems.filter(contact => contact.id != thisId);
                loadSelectedItems(merigngFromItems, thisSelectableParent.id);
            } else {
                mergeWithItems = mergeWithItems.filter(contact => contact.id != thisId);
                loadSelectedItems(mergeWithItems, thisSelectableParent.id);
            }
            
            resetForm();
            return
        }        
        
        // selectedItems.forEach(selectedItem => {
        //     if(selectedItem.id == item.id) {
        //         this.classList.remove('selected');
        //         this.closest('.__items_list').style.display = 'none';
        //         selectedItems = selectedItems.filter(contact => contact.id != thisId);
        //         loadSelectedItems(selectedItems, thisSelectableParent.id);
        //         resetForm();
        //         return
        //     }
        // })
    })
});
document.addEventListener('click', function () {
    resetForm();
    dropdownListItems.forEach(lists => lists.style.display = 'none');
});

/* =============================== Search and select Items [ End ] =============================== */

const customizeFilterInput = document?.querySelector('#filter__input');    
const filterableItem = document.querySelector('#customize_items_container').querySelectorAll('.filterable__item');

// Show / Hide Search Input
const customizeFilterButton = document?.querySelector('#filter__search__icon');
customizeFilterButton.addEventListener('click', function() {
    showFilterInput();
})
function showFilterInput() {
    customizeFilterInput.value = '';
    customizeFilterInput.classList.toggle('active');
    if(customizeFilterInput.value == 0) {
        filterableItem.forEach(item => item.style.display = 'block');
    }
}

/* Note: always put element's ID in string form without #*/
inputFilter('filter__input', 'customize_items_container');

// Customize  search/filter Items
function inputFilter(inputId, filterItems) {
    let searchableInput = document.querySelector(`#${inputId}`);
    searchableInput.addEventListener('keyup', function(e) {
        e.stopImmediatePropagation();
        console.log(e);
        let filterItemsContainer, input, filterText, lists, txtValue;    
        filterItemsContainer  = document.querySelector(`#${filterItems}`);    
        input = e.target;
        filterText = input.value.toUpperCase();
        lists = document.querySelector('.__items_list');    
        items = filterItemsContainer.querySelectorAll('.filterable__item');
        items.forEach((item, index) => {
            thisText = item.querySelector('label');
            txtValue = thisText.textContent || thisText.innerText;
            if (txtValue.toUpperCase().indexOf(filterText) > -1) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        })
    });
}

let contactsArrangeableItems = [
    { id: 0001, text: 'Registration ID' },
    { id: 0002, text: 'Registration Category' },
    { id: 0003, text: 'Name' },
    { id: 0004, text: 'Email' },
]


const customizeInputBox = document.querySelectorAll('.customize_input_lists .item__input');
customizeInputBox.forEach(costomizeInput => {
    costomizeInput.addEventListener('input', function (e) {
        customizeListSection(e);
    })
})

function customizeListSection(e) {
    let labelText, darrageItemContainer;
    if(e.target.checked) {
        labelText = e.currentTarget.querySelector('label').innerText;
        darrageItemContainer = e.currentTarget.closest('.popup__body').querySelector('.selected__item__list');
    }
}

const preSavedTabItems = document?.querySelectorAll('.preSaved__tabItems .preSaved_item');
preSavedTabItems.forEach(tabItem => {
    tabItem.addEventListener('click', function() {
        let thisId =  this.id;
        this.classList.add('active');
        const thisMainParent = this.parentElement.parentElement.parentNode;
        const preSavedTabItems__data = thisMainParent.querySelectorAll('.customize__view_preSaved__items');
        preSavedTabItems.forEach(item => item.classList.remove('active'));
        preSavedTabItems__data.forEach(tabDataItem => tabDataItem.classList.remove('active'));
        thisMainParent.querySelector(`#${thisId}__data`).classList.add('active');        
        console.log(preSavedTabItems__data.id);
    })
})

const shareButtons = document?.querySelectorAll('.data-share');
shareButtons.forEach(shareButton => {
    shareButton.addEventListener('click', function(e) {
        document.querySelector('.share__view__container').style.display = 'block';
    })
})

function shareViewClosePopup(e) {
    document.querySelector('.share__view__container').style.display = 'none';
}
document?.querySelector('#addNewCustomizeView').addEventListener('click', function() {
    document.querySelector('.addNewCustomize__overlay').style.display = 'block';
    document.querySelector('.dashboardCustomizablePopup').style.display = 'none';
});

shareSelection('viewList__input', 'viewList_listItems');
shareSelection('users__input', 'users_items');

function shareSelection(inputId, filterItems) {
    let searchableInput = document.querySelector(`#${inputId}`);
    searchableInput.addEventListener('keyup', function(e) {
        e.stopImmediatePropagation();
        console.log(e);
        let filterItemsContainer, items, input, filterText, txtValue;    
        
        filterItemsContainer  = document.querySelector(`#${filterItems}`);    
        console.log(filterItemsContainer);
        
        input = e.target;
        filterText = input.value.toUpperCase();

        if(input.value.length > 0) filterItemsContainer.style.display = 'block';
        else filterItemsContainer.style.display = 'none';

        items = filterItemsContainer.querySelectorAll('li');
        console.log(items);
        items.forEach((item, index) => {
            txtValue = item.textContent || item.innerText;
            if (txtValue.toUpperCase().indexOf(filterText) > -1) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        })
    });
}
document.addEventListener('click', function () {
    document.querySelectorAll('.addNew__input__container .selecteable__lists').forEach(lists => lists.style.display = 'none');
    document.querySelectorAll('.addNew__input__container input').forEach(inputs => inputs.value = '');
    document.querySelector('#viewList__input').value = '';
    dropdownListItems.forEach(lists => lists.style.display = 'none');
});


var linkToggle = document.querySelectorAll('.quickViewToggle');

// for(i = 0; i < linkToggle.length; i++){
linkToggle.forEach(toggler => {
    toggler.addEventListener('click', function(event){
        event.preventDefault();
        this.classList.toggle('active');
        this.closest('tbody').querySelectorAll('tr').forEach(tr => tr.classList.remove('selected'));
        this.closest('tr').classList.toggle('selected');
        let container = document.getElementById(this.dataset.toggle);
        console.log(container);
        if (!container.classList.contains('active')) {      
            container.classList.add('active');
            container.style.height = 'auto';
            var height = container.clientHeight + 30 + 'px';
            container.style.height = '0px';
            setTimeout(function () {
                container.style.height = height;
            }, 0);      
        } else {      
            container.style.height = '0px';
            container.addEventListener('transitionend', function () {
                container.classList.remove('active');
            }, { once: true });
            this.closest('tr').classList.remove('selected');
        }
    });  
});
