# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer:
  The foreign key would be called animal_id, and it's within Sightings.

  Researched answer:
  As an integer datatype, the foreign key should be called animal_id. It should be a field within Sightings.


2. Which RESTful routes must always be passed params? Why?

  Your answer: 
  Show, Edit, Update, and Destroy 

  Researched answer:
  Show, Edit, Update, and Destroy require params since they point to specific data being called by an id.



3. Name three rails generator commands. What is created by each?

  Your answer: 
  Rails generate model- This creates a model to be filled with data.
  Rails generate controller- This generates a controller. 
  Rails generate resource- This creates both a model and controller.

  Researched answer:
  Rails generate - Gives a list of available generators such as assets, channel, controller, generator, etc. 
  Rails generate controller ControllerName action1 action2 - Used to make your own controller with expecting parameters. It creates the controller file, a view file, a functional test file, a helper for the view, a JS file, and a stylesheet file. 
  Rails generate model ModelName column_1_name:columnType column_2_name:columnType - Creates data models. It creates the model file and a migration file which describes the changes being made to the schema. 
  Rails generate initializer - Invoke a new generator. 
  Rails generate scaffold - Generate major pieces of an application. Easy way to automatically create the models, views, and controllers for a new resource or the basic structure of a Rails project. It also includes a new route and a migration to prepare the database. Adds a unique property to a field. 
  Rails generate migration AddFieldToModel field:type - Add a column to an existing model.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /users index This displays a list of all users    

method="GET"    /users/1  show This displays user 1

method="GET"    /users/new new This displays a for for creating a new user

method="GET"    /users/edit/1  edit This displays a form to edit user1   

method="POST"   /users/ create This creates a new user   

method="PUT"    /users/1 update This updates user 1      

method="DELETE" /users/1  destroy This destroys user 1



5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started. 

1. As a user I can give a name to my to do list.
2. As a user I can add a task to my to do list.
3. As a user I can add a description and details to my task.
4. As a user I can mark my task as completed.
5. As a user I can see my completed tasks.
6. As a user I can also unmark a task as complete.
7. As a user I can edit my to do list name.
8. As a user I can edit the tasks description or details.
9. As a user I can rearrenge the order of my tasks.
10. As a user I can delete a task.
