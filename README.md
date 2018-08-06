# Synchronized Supermartek List

The challange is to create a realtime synchornize shared supermarket list using Ionic and Google Firestore RTDB.

# Stages: 
  A) "The List"
  Create the app with 3 sections:
      1) An "Add Item" button
      2) A list of items
      3) An item form 
    The user uses the "Add Item" button to open the "Item Form" with a simple text input and 2 buttons (Save and Cancel). OnSave the item string is added to The List. OnCancel the form is close and nothing happened. 
    The List shows the Item text with a CheckBox on the left to "scratch it" from the list. Also can be delete by swipping the item. OnSwipe you must ask for a confirmation. OnLongPress (could be another event) the user can edit the item text.
    If The List is empty you must show a message encouraging the user to add items.
   
 B) "Login"
     Create a registration page to allow the user to personalize his list and make them private. To manage the registration you need to use the Google Firebase Authentication (email/password is enough)
     Create a login page to log the user into the app and to retrive his lists if he wants too.
     Create a logout button to allow the user to disconnect from the app.
 
 C) "Shared List"
    Ones the user is log into the app show "Shared Lists" button (could be another type of resourse) 
    From that page the user can create a list that can be shared with another registered user of the app.
    
     
