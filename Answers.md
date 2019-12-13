1. What problem does the context API help solve?

    It's aimed at solving the problem of prop drilling. Gives a developer the ability to share certain data accross all levels of the application.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions - can help with adding features such as ADD, REMOVE , and TOGGLE. It's role is to contain properties that help perform actions in the app.

    Reducers - reducers are there to manage state in an application. It's role is it takes the current state, and an action, and returns the newState.

    Store - It is basically what the name implies. It contains everything. It's role is that it contains the state for the entire application.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Your application state is global, and your component state is local. 
    A good time to use it is when the same state needs to be shared between multiple components and those components doesn’t belong to the same tree hierarchy and also when the number of props which needs to be passed through multiple components increases drastically.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. Allows the flow of certain things asynchoronous. We can make API calls from action creators!


1. What is your favorite state management system you've learned and this sprint? Please explain why!

    Redux so far is my favorite state management system. It allows for clearner code, but setting it up takes a bit of time due to all the parts to connect.


