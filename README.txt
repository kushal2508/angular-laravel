CRUD + Authentication Example

Frontend Technology: Angular.js
Backend Technology: Laravel

01/09/2017 Update:
1. Watched few videos to merge power of Angular.js and Laravel
2. Made a simple Bootstrap template for dashboard, crud operation forms to insert data from user
3. Did a small routing using angularjs to navigate among available hyperlinks
4. Made a simple bootstrap form accept the data from user
5. Get the user inputted data in Angularjs controller
6. Stored that data in MySQL database by sending that data to POST Laravel REST API 
7. Was able to complete the create functionality by combining Angular.js and Laravel

04/09/2017 Before Lunch Update:
1. Had created the User Input functionality using Laravel Routing
2. Then searched the web to route using AngularJS
3. Again changed the frontend routing using AngularJS in HTML pages rather than blade.php pages
4. Created master layout in blade.php and then using ngView created other pages in html
5. Used Laravel REST API to fetch all the existing data of users from database
6. Displayed this data in HTML page to successfully complete Show All Users Functionality
7. In order to iterate the JSON data coming from REST API used the angular functionality of ng-Repeat to display all the data
8. Now will work on Edit and Delete functionality and will then move on Authentication using REST API

04/09/2017 Evening Update:
1. Working on Delete and Edit functionality
2. Trying to use Service layer in Angular to directly call on REST API
3. Used angular-resource.js to complete the task but was not able to achieve the same
4. Will try to find the solution tomorrow
5. Referred many codes and links but was not able to find a suitable solution
6. Without using service layer and using simple API able to complete the task but trying to enhance the example
7. As of now introduced the factory layer and will connect with REST API tomorrow for delete and update

05/09/2017 Before Lunch Update:
1. Edit and delete functionality resolved
2. CRUD Operation Completed
3. Used REST API made in Laravel and Front end using Angular.js
4. Code pushed in GOGS as well as Github
5. Now will try to implement Authentication in REST API

05/09/2017 Evening Update:
1. Started with JWT Authentication
2. Applied Tymon JWT Auth dependency for Laravel
3. Created User Authenticate REST API to authenticate the user with the token in header
4. Created a REST API to register a new User and return him with token
5. Created a general REST API to check the complete functionality using REST API and JWT Auth
6. Tomorrow I will introduce Log In and Register feature in my example and will update the JWT Authentication in each API

06/09/2017 Before Lunch Update:
1. Created a view for Login and Registration for Users
2. Made a factory in AngularJS with get set method to use login JWT token between more than one controllers
3. Added token in the header of each API called in AngularJS
4. Changed the API form and web.php to api.php and introduced middleware JWTAuth in each API
5. Successfully added Authentication in REST API

06/09/2017 Evening Update:
1. Implementation for Social Sign In in process