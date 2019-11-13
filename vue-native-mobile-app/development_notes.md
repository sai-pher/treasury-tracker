# Developer notes
A brief document for keeping track of useful development tools and requirements.

## Useful references
A list of blog posts/websites that might be useful to refer to during development.

- [RESTful api's in nativeScript vue.js](https://vuejsdevelopers.com/2018/07/02/vue-js-native-script-vue-http-web-service/)   
- [NativeScript Vue docs](https://nativescript-vue.org/en/docs/introduction/)
- [NativeScript Vue playground](https://play.nativescript.org/)
- [Vue.js cookbook](https://vuejs.org/v2/cookbook/index.html)
- [Local storage](https://www.nativescript.org/blog/key-value-local-storage-in-a-vue.js-nativescript-app-with-vuex)
- [vuex](https://vuex.vuejs.org/)

## ToDo's
A check list of tasks to be completed.

- [ ] Create app [Figma](https://www.figma.com/file/xt83Ux0xn0bMgeAMafoPW4/fund-tracker?node-id=1%3A2) prototype 
- [ ] Add required components to TODO list.
- [ ] Find resources on chart integration.
- [ ] Find resources on form integration.
- [ ] Find resources on notification integration.
- [ ] Find resources on date integration.
- [ ] Decide details to hold on each investor.
- [ ] Decide what stats would be useful to display on home page.
## Current issues
A check list of issues that require tackling during development. Issues should be 
described as clearly and concisely as possible and should ideally make reference to the 
project requirement it is related to.

- [ ]
- [ ]
- [ ]

## Function brainstorms
A list of functions and their brief descriptions to help keep track of 
thought process.

- 
- 
- 

## Uniques!
This section is for the unique things a developer might want to keep track of 
for their particular project scope.

### Component brainstorms
A list of components and their brief descriptions to help keep track of 
thought process.
---
> **Add new investor (P-1)**
>
>  Page to allow user to add new investor to the database.
>  extend CRUD functionality??
>
> **Requirements**
>
> - Page should allow user to add details about new investor
>
>**UI Style**
>
> - [ ] From (stand alone).
> - [ ] Form (found in settings page)
> - [ ] Form (found in investor description page)
---
> **Monthly payment check list (P-1)**
>
> A page to manage whether or not an investor has paid their due for a given month. 
>
> **Requirements**
>
> - Page should display each investor and their paid status for the month.
> - Page should allow user to indicate that an investor has paid for the given month.
> - Page should reset the paid status of each investor after every month.
> - Page should be able to notify the user (and investors) 7 days before the end of the month of the users who have not paid.
> - Page should have a filter option (all | paid | not paid).
>
>**UI Style**
>
> - [X] Single list with investor -> form [ammount | add] component for each one
> - [ ] N/A
---
> **Dashboard/ home page (P-2)**
>
> The home page of the app. This would show basic stats on the spreadsheet for the user.
>
> **Requirements**
>
> - Page should display commonly viewed stats.
> - Page should show date and days till next expected transaction.
> - Page should total amount of money in the system.
>
>**UI Style**
>
> - [ ] Grid layout with useful data point and modal to each point
> - [ ] ...
---
> **Investor description page (P-3)**
>
> A page to hold/show data on all the investors currently in the system.
> 
> **Requirements**
> 
> - Page should hold a list of all the investors
> - Page should allow user to see details on each investor   
> - Page should use a component to hold/show details on each investor
> - Page should show transaction history and stats on each contributor.
> - Page should allow user to trigger "payment due" notification for each contributor.
> - *BONUS* -> "payment due" notification can be sent with stats breakdown. 
>
> **UI style**
> 
> - [ ] Card UI? 
> - [ ] Split-view list & details page UI? 
---
> **Transaction details page (P-4)**
>
>  
>
> **Requirements**
>
> - Page should display simple data analysis stats.
> - Page should give user access to generalised stats on contributor payments.
> - Page should show monthly stats on global goals.
>
>**UI Style**
>
> - [ ] Tab view with different stats and details on each page
> - [ ] ...
---
> **User settings (P-5)**
>
>  Page to allow the user to customise in app settings. (to be decided)
>
> **Requirements**
>
> - Page should allow user to set app preferences.
> - Page should allow user to customise "payment due" notification message.
>
>**UI Style**
>
> - [ ] Stack layout with settings options as forms.
> - [ ] ...
---
