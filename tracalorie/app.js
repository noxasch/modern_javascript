// Storage Controller
const StorageController = (function() {

  // public method
  return {
    storeItem: function(item){
      let items = [];
      if(localStorage.getItem('items') !== null){
        items = JSON.parse(localStorage.getItem('items'));
      }
      items.push(item);
      localStorage.setItem('items', JSON.stringify(items));
    },

    getItemFromStorage: function(){
      let items = [];
      if(localStorage.getItem('items') !== null){
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },

    updateItemStorage: function(updatedItem){
      items = JSON.parse(localStorage.getItem('items'));
      items.forEach((item, index) => {
        if(item.id === updatedItem.id){
          items.splice(index, 1, updatedItem); // remove and replace with updatedItem
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },

    deleteItemFromStorage: function(id){
      items = JSON.parse(localStorage.getItem('items'));
      items.forEach((item, index) => {
        if(item.id === id){
          items.splice(index, 1); // remove from utems array
        }
      });
      // store it back to localStorage
      localStorage.setItem('items', JSON.stringify(items));
    },

    clearItemsFromStorage: function(){
      localStorage.removeItem('items');
    }
  }
})();

// Item Controller
const ItemController = (function() {
  // item Constructor
  const Item = function(id, name, calories) {
    // these are private too since it is within an IIFE
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data structure or state
  // these are also private
  const data = {
    // items: [
    //   // test data
    //   // {id: 0, name: 'Steak Dinner', calories: 1200},
    //   // {id: 1, name: 'Cookie', calories: 400},
    //   // {id: 2, name: 'Eggs', calories: 300}
    // ],
    items: StorageController.getItemFromStorage(),
    currentItem: null,
    totalCalories: 0
  }

  // publicize the property and method in here
  // Javascript prototype or class does not have private data
  // which is why module pattern is a common practice and the best for now
  return {
    getItems: function(){
      return data.items;
    },

    addItem: function(name, calories){
      // console.log(name, calories);
      let id;
      let newItem = {};
      // create ID
      if(data.items.length > 0){
        id = data.items[data.items.length - 1].id + 1;
      } else {
        id = 0
      }

      // Parse Calories string to number
      calories = parseInt(calories);

      // create new item
      newItem = new Item(id, name, calories)
      data.items.push(newItem);
      return newItem;
    },

    getTotalCalories: function(){
      let total = 0;
      data.items.forEach(item => {
        total += item.calories;
      });

      data.totalCalories = total;
      return data.totalCalories;
    },

    getItemById: function(id){
      let found = null;
      data.items.forEach(item => {
        if(item.id === id) found = item;
      });

      return found;
    },

    setCurrentItem: function(item){
      data.currentItem = item;
    },

    getCurrentItem: function(){
      return data.currentItem;
    },

    updateItem: function(name, calories){
      calories = parseInt(calories);
      let found = null;
      data.items.forEach(item => {
        if(item.id === data.currentItem.id){
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });

      return found;
    },

    deleteItem: function(id){
      // get id
      ids = data.items.map(item => {
        return item.id
      });

      // get index
      const index = ids.indexOf(id);
      // remove item by index
      data.items.splice(index, 1)
    },

    clearAllItems: function(){
      data.items = [];
    },

    logData: function(){
      return data;
    }
  }
})();

// UI Controller
const UIController = (function(){
  const UISelectors = {
    itemList: '#item-list',
    // listItems: '.collection-item',
    listItems: 'item-list li', // it like a css selector
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.clear-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'

  }

  // public method
  return {
    populateItemList: function(items){
      let html = '';
      items.forEach(item => {
        html += `
        <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong><em>${item.calories} Calories</em>
          <a href="javascript:void(0)" class="secondary-content">
              <i class="edit-item material-icons">edit</i>
          </a>
        </li>`;
      });

      // insert list items into the UI
      document.querySelector(UISelectors.itemList).style.display = 'block';
      document.querySelector(UISelectors.itemList).innerHTML = html;

    },

    getItemInput: function(){
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },

    addListItem: function(item){
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // Create li element
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.id = `item-${item.id}`;
      li.innerHTML = `
        <strong>${item.name}: </strong><em>${item.calories} Calories</em>
        <a href="javascript:void(0)" class="secondary-content">
            <i class="edit-item material-icons">edit</i>
        </a>
      `;
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },

    updateListItem: function(item){
      // simplified way
      document.querySelector(`#item-${item.id}`).innerHTML = `
        <strong>${item.name}: </strong><em>${item.calories} Calories</em>
        <a href="javascript:void(0)" class="secondary-content">
            <i class="edit-item material-icons">edit</i>
        </a>
      `;

      // another way which is in the tutorial
      // let listItems = document.querySelectorAll(UISelectors.listItems);
      // listItems = Array.from(listItems);
      // listItems.forEach(listItem => {
      //   const id = listItem.getAttribute('id');
      //   if(id === `item-${item.id}`){
      //     document.querySelector(`#${id}`).innerHTML = `
      //     <strong>${item.name}: </strong><em>${item.calories} Calories</em>
      //     <a href="javascript:void(0)" class="secondary-content">
      //         <i class="edit-item material-icons">edit</i>
      //     </a>
      //   `;
      //   }
      // });
    },

    
    deleteListItem: function(id) {
      const item = document.querySelector(`#item-${id}`);
      // console.log(item);
      item.remove();
    },

    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },

    clearInput: function(){
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },

    showTotalCalories: function(totalCalories){
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },

    clearEditState: function(){
      UIController.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline-block';
    },

    addItemToForm: function() {
      document.querySelector(UISelectors.itemNameInput).value = ItemController.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemController.getCurrentItem().calories;
    },

    showEditState: function(){
      document.querySelector(UISelectors.updateBtn).style.display = 'inline-block';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline-block';
      document.querySelector(UISelectors.backBtn).style.display = 'inline-block';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
      // document.querySelector(UISelectors.addBtn).disabled = true;
    },

    removeAllItems: function(){
      let listItems = document.querySelector(UISelectors.itemList);
      for (let c = listItems.firstChild; c !== null; c = listItems.firstChild) {
        listItems.removeChild(c);
      }
  
    },

    getSelectors: function(){
      return UISelectors;
    }


  }
})();

// App Controller
const App = (function(ItemController, StorageController, UIController){
  // console.log(ItemController.logData());
  // load event listeners
  const loadEventListeners = function() {
    // get UI Selectors
    const UISelectors = UIController.getSelectors();
    // disable form submission
    document.querySelector('form').addEventListener('submit', e => {e.preventDefault()});
    // Add Item Event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    // disable submit on enter
    document.addEventListener('keypress', e => {
      // which is for older browser
      if(e.keyCode === 13 || e.which === 13){
        e.preventDefault();
        return false;
      }
    });

    // Edit item event
    // have to use event delegation
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);
    // update Item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdatesubmit);
    // delete item event
    document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);
    // back button event
    document.querySelector(UISelectors.backBtn).addEventListener('click', UIController.clearEditState);
    // clear all event
    document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemClick);
  };

  // Add item submit
  const itemAddSubmit = function(e){
    e.preventDefault();
    // console.log('Add');
    // get form input from UIController
    const input = UIController.getItemInput();
    // check for input
    if(input.name !== '' && input.calories !== ''){
      // Add item to data
      const newItem = ItemController.addItem(input.name, input.calories);
      // Add item to UI
      UIController.addListItem(newItem);

      // Get total Calories
      const totalCalories = ItemController.getTotalCalories();
      UIController.showTotalCalories(totalCalories);

      // Store in localStorage
      StorageController.storeItem(newItem);
      // clear input fields
      UIController.clearInput();
    }

  };

  // Update item submit
  const itemEditClick = function(e) {
    e.preventDefault();

    if(e.target.classList.contains('edit-item')){
      const listId = e.target.parentNode.parentNode.id;
      // console.log(listId);
      // split by dash
      const listArray = listId.split('-');
      // console.log(listArray);

      // get the id only
      const id = parseInt(listArray[1]);

      // get item
      const itemToEdit = ItemController.getItemById(id);
      // console.log(itemToEdit);
      ItemController.setCurrentItem(itemToEdit);
      UIController.addItemToForm();
      UIController.showEditState();
    }
  };

  const itemUpdatesubmit = function(e){
    // console.log('Update');
    // get item input
    const input = UIController.getItemInput();
    // console.log(input);
    const updatedItem = ItemController.updateItem(input.name, input.calories);
    // console.log(updatedItem);
    UIController.updateListItem(updatedItem);
    // Get total Calories
    const totalCalories = ItemController.getTotalCalories();
    UIController.showTotalCalories(totalCalories);

    UIController.clearEditState();

    StorageController.updateItemStorage(updatedItem);

    e.preventDefault();

  };

  const itemDeleteSubmit = function(e){
    e.preventDefault();

    // get current item
    const currentItem = ItemController.getCurrentItem();

    // delete from data structure
    ItemController.deleteItem(currentItem.id);

    // remove from UI
    UIController.deleteListItem(currentItem.id);
    // Get total Calories
    const totalCalories = ItemController.getTotalCalories();
    UIController.showTotalCalories(totalCalories);

    StorageController.deleteItemFromStorage(currentItem.id);

    UIController.clearEditState();

  };

  const clearAllItemClick = function(){
    // delete all items from data structure
    ItemController.clearAllItems();
    
    
    const totalCalories = ItemController.getTotalCalories();
    UIController.showTotalCalories(totalCalories);

    UIController.clearEditState();
    // remove from UI
    UIController.removeAllItems();

    // remove all items from storage as well
    StorageController.clearItemsFromStorage();

    // Hide UL
    UIController.hideList();
  };

  return {
    init: function () {
      console.log('Initializing App...');
      // clear edit state
      UIController.clearEditState();

      // fetch items from data structure
      const items = ItemController.getItems();
      // check if there items
      if(items.length === 0){
        UIController.hideList();
      } else {
        // populate items into UI
        UIController.populateItemList(items);
        // Get total Calories
        const totalCalories = ItemController.getTotalCalories();
        UIController.showTotalCalories(totalCalories); 
      }
      // load event listeners
      loadEventListeners();
    }
  }

})(ItemController, StorageController, UIController);

// Initialize App
App.init();