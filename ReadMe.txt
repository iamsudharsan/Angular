Download nodejs
install it
check node -v
check npm -v
npm install -g http-server ---> install npm
npm install -g @angular/cli ---> Install angular/cli
check ng -v

create new project folder ---> ng new test-app
Install visual studio code
open the test-app folder from Explorer option
check the folder structure.
Now cd test-app
check ng serve
After compilation type "http://localhost:4200/" in the browser.

Add packages and libraries in src--> package.json and run npm install command.

Create our own component: ng g component "NAME"
Add contents to new component:
-------------------------------------------------------------
test.component.ts ---> Selector: '___', templateurl:, styleurl:. --> know the name of the selector.
change in parent: app.component.html --> add <app-test></app-test> ---> This displays contents in both parent and child.
Now change in Child : test.component.html --> add some contents. Next mention the changes made, in test.component.ts

Data Binding:
-----------------------------------------------------------------
app.component.ts --> declare and define a variable. (Here-months).
app.component.html --> use the variable that are declared.

Event Binding:
----------------------------------------------
1.CLICK:
define the function at app.component.ts
call the function in <button> at app.component.html
 
2.CHANGE:
define the function at app.cmoponent.ts
call the function at required tag. (Here: Select since dropdown).


