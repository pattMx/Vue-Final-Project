# Project specification - to-do app



## Introduction

This document will outline the requirements of your next project. You're going to build a simple to-do app with **Vue.js** that allows users to create an account, record tasks, edit them and mark them as complete. The app will talk to a database, where all the user and task data will be stored. The database that we'll use for this project is **Superbase**. We'll also be using **Vite** as a build tool to compile our code and provide a development server while we work.

Once your app is built, you can use **Cypress** to write automated front-end tests for your app to ensure that all of the functionality works as you expect it to. 

The main goal of this project is ensuring that your app functions flawlessly, but if you have time then you can style it however you choose for extra bonus points.

## Learning goals

At the end of this project you will be able to:

- Use Vue.js to create an app 
- Connect a Vue.js app to Supabase [(Database as a Service)](https://www.techtarget.com/searchdatamanagement/definition/database-as-a-service-DBaaS)

## Project requirements

- Have a repo on GitHub
- Commit your work at least once a day, every day you work on the project
- Your app should be rendered in a browser
- Your app should be deployed online using Netlify
- Stick with *KISS* (Keep It Simple, Stupid) and *DRY* (Don't Repeat Yourself) principles.

## Deliverables

The functionality should include:

* Authentication (sign up, sign in, sign out)
* A front-end that displays the user's personal to-do list
* An ability to add new tasks
* An ability to edit existing tasks
* An ability to mark tasks as complete/incomplete
* An ability to delete existing tasks
* A store and a database that your app can call data from

## User stories

User stories allow us to build a simple narrative around business logic using a syntax called Gherkin. We use keywords such as  `given`, `when`, `then`, `and` and `but`, in addition to a few others. You can find a full list of keywords within the [Gherkin documentation](https://cucumber.io/docs/gherkin/reference/#keywords). 

Gherkin is the best way to clarify business logic and user interactions whilst also maintaining a human-readable set of specifications. 

This strategy is referred to as [behaviour-driven development](https://en.wikipedia.org/wiki/Behavior-driven_development) (BDD) and it will form the basis of this specification. We'll consider our user stories  throughout the development process, and then we'll test against them during the **quality assurance (QA)** stage of the project. 

Here are the user stories you'll need to consider to ensure that the app functions as required for this project:

### Authentication

```gherkin
Feature: Create an account	
	Background: As a new user, I want to register with the to-do app
		Given I do not have an account

Scenario: As a user I want to create an account
	When I visit the signup page
	And I set email to "test@example.co.uk"
	And I set password to "****"
	And I set confirmPassword to "****"
	And I click the register button
	Then I expect to be shown a warning that instructs me to confirm my email address by clicking a link in an email
	And I click the link provided in the email
	Then I expect to be logged in to the app 
	And I expect to see the home screen
```

```gherkin
Feature: Log in to the app
	Background: As a user, I want to log in to the to-do app
		Given I already have an account

Scenario: As a user I want to log in to the app
	When I visit the login page
	And I enter my email as "test@example.co.uk"
	And I enter my password as "****"
	And I click the Log In button
	Then I expect to be logged in to the app 
	And I expect to see the home screen
```

```gherkin
Feature: Log out from the app
	Background: As a user, I want to be able to log out from the app
		Given I am logged in to the app

Scenario: As a user I want to log out
	When I am viewing the home screen
	And I click the log out button 
	Then I expect to be logged out of the app
	And I expect to see the login page
```

### App

```gherkin
Feature: Add a new task
	Background: As a logged in user, I want to add a new task and have it appear in my to-do list
		Given I am logged in

Scenario: As a logged-in user I want to create a new task
	When I visit the home screen
	And I enter "My cool task" in the NewTask field
	And I click the submit button
	Then I expect to see "My cool task" in the To-Do list of tasks

```

```gherkin
Feature: Edit a task
	Background: As a logged in user, I want to edit an existing task and have the app display the updated content
		Given I have already created a task

Scenario: As a user I want to edit the title of my task
	When I locate the task I'd like to edit
	And I click the corresponding edit button to the task
	Then I expect the title of the task to become editable
	When I enter a new description for the task
	And I click submit
	Then I expect to see my updated task in the To-Do list
```

```gherkin
Feature: Mark a task as complete
	Background: As a logged in user, I want to be able to mark a task as complete and automatically move it to the completed section 
		Given I have already created a task

Scenario: As a logged-in user I want to mark a task as complete
	When I locate the task I'd like to mark as complete
	And I click the corresponding done button to the task
	Then I expect to see that my task has immediately been moved to the completed section
```

```gherkin
Feature: Mark a task as incomplete
	Background: As a logged in user, I want to be able to mark a task as incomplete and automatically move it back to the to-do section 
		Given I have already created a task and marked it as complete

Scenario: As a logged-in user I want to mark a task as incomplete
	When I locate the task I'd like to mark as incomplete
	And I click the corresponding incomplete button to the task
	Then I expect to see that my task has immediately been moved to the to-do section
```

```gherkin
Feature: Delete a task
	Background: As a logged in user, I want to be able to permanently delete an existing task
		Given I have already created a task

Scenario: As a logged-in user I want to delete a task
	When I locate the task I'd like to delete
	And I click the corresponding delete button to the task
	Then I expect to see that my task has been permanently removed from every list
```

## Technical specifications

### Tech Stack

**Client**: [Vue.js](www.vuejs.com), [Vite (dev server)](www.vitejs.dev) 

**Router:** [Vue Router](https://router.vuejs.org/)

**Store:** [Pinia](https://pinia.vuejs.org) and [Pinia Persist](https://seb-l.github.io/pinia-plugin-persist/) for persistent login 

**Database as a service:** [Supabase](www.supabase.io)

## Project setup

Basic setup for Vue.js and Supabase:

```bash
  yarn vite create "my-todo-project"
  
  cd my-todo-project
  
  yarn add @supabase/supabase-js
  
  yarn add pinia
  
  yarn add vue-router
  
  yarn add pinia-plugin-persist
```

## Vue.js

### Modules needed: 

Vue Router 
- You will need to set up a route for `Dashboard` and `Auth`

Pinia (for our store)
- You will need to set up two user stores: `user.js` and `task.js`


### Tasks

- Create a sign up/sign in screen that will be displayed when the user is not logged in
- Ensure that the sign up form requests an email address, password and password confirmation from the user
- Ensure that the sign in form requests an an email and a password from the user
- Create a page where after logging in, the user is shown the main app content
- The app should fetch all tasks from the logged in user's task list stored in Supabase

## Architecture

Below we've prepared a suggested file structure for the codebase. Vite will automatically generate the files when you've created the project. You will need to create the `components` folder and the `pages` folder.

:::info
The `/pages` directory name is a choice for the developer. In other code bases you may see it referred to as views.
:::

```
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── AppHeader.vue
│   │   ├── Nav.vue
│   │   ├── NewTask.vue
│   │   ├── SignIn.vue
│   │   ├── SignUp.vue
│   │   └── TaskItem.vue
│   ├── main.js
│   ├── pages
│   │   ├── Auth.vue
│   │   └── Dashboard.vue
│   ├── router
│   │   └── index.js
│   ├── static
│   │   └── main.css
│   ├── store
│   │   ├── task.js
│   │   └── user.js
│   └── supabase.js
├── vite.config.js
└── yarn.lock
```

## Sample code

We've provided some starter templates for you to use. You'll need to expand upon these to build the application.

### /store/user.js

Here is a basic `user` store. We've only given you two actions: `fetchUser` and `signUp`. You'll need to create `signIn` and `signOut`.

```js
import { defineStore } from 'pinia';
import { supabase } from '../supabase';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser () {
      const user = await supabase.auth.user();
      this.user = user
    },
    async signUp (email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    persist: {
      enabled: true,
      strategies: [
        {
          key: 'user',
          storage: localStorage
        }
      ]
    },
});
```

### /store/task.js

Here is a basic `task` store. We've only given you one action: `fetchTasks`. You'll need to create your own store actions to update, create and delete the tasks.

```js
import { defineStore } from 'pinia';
import { supabase } from '../supabase';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: null
  }),
  actions: {
    async fetchTasks () {
      const { data: tasks } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false });
      this.tasks = tasks;
    }
  }
});

```

### App.js

Instead of checking authentication on router change. We'll be checking it at the root level of the app. This means that the user request is only fired once and not on every page load. Different (especially larger) apps may need a different stratergy when dealing with authentication. We've provided you with a basic `App.js` that nests the other pages inside.

```vue
<template>
  <section>
    <router-view class="app-main" /> <!-- your routes will load inside of these tags -->    
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useUserStore } from './store/user.js'

const router = useRouter()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)

onMounted(async () => {
  try {
    await userStore.fetchUser() // here we call fetch user
    if (!user.value) {
			// redirect them to logout if the user is not there
      router.push({ path: '/auth' });
    } else {
      // continue to dashboard
      router.push({ path: '/' });
    }
  } catch (e) {
    console.log(e)
  }
})
</script>
```

## Code standards & "gotchas"

It's always important to consider the way in which you write your code. We suggest you add `eslint` along with `eslint-plugin-vue` to your codebase to automatically check and lint your code. You can find more detailed instruction on how to do this [here](https://eslint.vuejs.org/user-guide/).

We also suggest you follow the following principles when dealing with your store:

- Only update the state from actions
- After changing data via an action run `this.fetchTasks()` or `this.fetchUser()` inside of that same action. This ensures that the state is always updated the same way because we fetch the data again from the API after manipulating it with a single `fetchSomething()` action.
- Use getters to select the data when applying it to the template. You'll need to use `storeToRefs` - for more info take a look at these [Pinia docs](https://pinia.vuejs.org/core-concepts/#using-the-store)
- When accessing the value of a variable with Vue 3 you'll need to use `.value`. For example, `let loading = ref(true);` then to update that value you'll need `loading.value`
  -  `loading.value = false` :white_check_mark: works!
  -  `loading = false` :x: wont work!
- Supabase requires users to confirm their email address. This can be turned off. However, we want you to handle the error from supabase and present it to the user so that when their email is not confirmed it states "email not confirmed " in the error.

## Supabase 

### Setup

Your first step is going to be to create a free account on [Supabase.com](https://supabase.com/). Once you're logged in, click `new project`and create a new project within the organization that has automatically been created for you. Give your project a name and a secure password, select the region closest to you and click `create new project`. It should take a couple of minutes to build your project. 

To set up a database for your app, you'll need a table to record the individual tasks. This table needs several columns to store every piece of data that belongs to each task. The data that you'll need to store is as follows:

- Task ID - this will be a number, starting at 0 for the first task
- User ID - this is the UUID generated when registering
- Task content - this is the task itself, it must be longer than 3 characters
- Completion status - this is a boolean value that indicates whether a task is complete or not
- inserted_at - this is the time the task was pushed to the database

You'll also need to create some policies to ensure that each user only has access to their own tasks, and can only modify or delete their own tasks. 

To create the table and implement the necessary policies, first go to the `SQL Editor` in the left-hand navigation:

![img](https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/08/s_3A416B091130A687EB895A5247B4BA3D6EEA7E15D16457E57D5A971BE5AE7C65_1626573661703_sqlimg.png?resize=1000%2C771&ssl=1)

Next, click the `new query` button in the top left. This will display an empty editor to the right. In here, copy and paste the following SQL query into the editor and hit `RUN`:


```sql
create table tasks (
  -- This first part sets up the tables
  id bigint generated by default as identity primary key,
  user_id uuid references auth.users not null,
  title text check (char_length(title) > 3),
  is_complete boolean default false,
  inserted_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table tasks enable row level security;
-- Then it creates a policy that lets authenticated users create task
create policy "Individuals can create task." on tasks for
insert with check (auth.uid() = user_id);
-- Then it creates a policy that users can only view their own task (select task based on user id)
create policy "Individuals can view their own task. " on tasks for
select using (auth.uid() = user_id);
-- Then it does the same only for update
create policy "Individuals can update their own task." on tasks for
update using (auth.uid() = user_id);
-- And again for delete
create policy "Individuals can delete their own task." on tasks for
delete using (auth.uid() = user_id);
```

Great! You've now created the `posts`table for your app database. You've also implemented the policies required for this particular project. 

If you now navigate to the `table editor`link in the menu, you can see your new table that has been created with our desired schema.

### Supabase requests

Supabase will generate an API for this project automatically. Here are some relevant endponts it has generated for this project, with links to the relevant Supabase documentation:

### App

The general database methods are very similar to Database SQL queries. Allowing you to create (POST), read (GET), update (PATCH) and delete (DELETE), also known as CRUD.

- [from()](https://supabase.com/docs/reference/javascript/select)
- [select()](https://supabase.com/docs/reference/javascript/select)
- [insert()](https://supabase.com/docs/reference/javascript/insert)
- [order()](https://supabase.com/docs/reference/javascript/order)
- [update()](https://supabase.com/docs/reference/javascript/update)
- [match()](https://supabase.com/docs/reference/javascript/match)

### Auth

For authentication you will need to use the below methods.

- [signUp](https://supabase.com/docs/reference/javascript/auth-signup)
- [signIn](https://supabase.com/docs/reference/javascript/auth-signin)
- [signOut](https://supabase.com/docs/reference/javascript/auth-signout)

## User interface

We've not defined a user interface or a design that we want you to use. Because we're using Vue, we can make it a single page that includes components for the new task input, task list items and headers etc.

You're welcome to apply your own design and layout. You can pick any UI library to work with such as [Bootstrap](https://getbootstrap.com/), [Vue Element Plus](https://element-plus.org/en-US/), [Vuetify](https://vuetifyjs.com/en/), or write your own styles.

## Presentation demo

You will be expected to demo this application. We've provided some tips and expectations below:

:::info
Your presentation demo is expected to last 5-10 mins
:::

### Tips

1. Plan what you are going to demo and **practice it on the live site**. That way you won't be surprised if something breaks on the live version.
2. **Deploy early** so you can squash bugs. There are *always* bugs on the live site at first.
3. Add a **link to your live project** to your DEMO slide so you can start it smoothly.

### Structure

1. Technical Challenge
   1. What was **the most important** technical challenge you faced?
   2. How did you overcome that challenge?
2. Big Mistake
   1. What was **the biggest** mistake you made during this project?
   2. What did you learn from it?

## **Project Feedback and Evaluation**

- **Technical Requirements**: Did you deliver a project that met all the technical requirements?
- **Creativity**: Did you add a personal spin or creative element into your project submission? Did you deliver something engaging and playable to the end user?
- **Code Quality**: Did you follow code style guidance and best practices covered in class, such as spacing, modularity and semantic naming?
- **Deployment**: Did you deploy your application to a public URL using GitHub Pages?
- **Total**: Your instructors will give you a total score on your project between:

### Score evaluations

| Expectations                                          | Score |      |      |      |
| ----------------------------------------------------- | ----- | ---- | ---- | ---- |
| Didn't meet expectations                              | 1     |      |      |      |
| Met expectations, good job!                           | 2     |      |      |      |
| Exceeded expectations, you magnificent creature, you! | 3     |      |      |      |
