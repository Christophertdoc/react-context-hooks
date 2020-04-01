# React-Context-Hooks
Practice of context and hooks within React.js

From the following tutorial: https://www.youtube.com/watch?v=6RhOzQciVwI&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI 

## Branches
- lesson-1: displaying a context variable's value
- lesson-2: updating a context variable
- lesson-3: how to use two different contexts in the same component
- lesson-4: how to use the useState() hook
- lesson-5: how to use the useEffect() hook
- lesson-6: Use a single context within a functional component by utilizing hooks
- lesson-7: Use multiple contexts with hooks and functional components
- lesson-8: Reading List Project: Practice of combining functional components, hooks and context
- lesson-9: Add a reducer to consolidate/simplify functions that alter context variables.
- lesson-10: Add local storage

## Terms
- Context: used for global state
- hook: used to do a variety of different things in functional components
- useState(): a hook that is used for state
- useEffect(): This hook is like the "componentDidUpdate method" that is used in class components.
- Reducer: Consolidates functions that alter context variables (global state). There are 3 parts:
    1. Reducer Function: interacts with the state / data 
        - The reducer function takes two parameters like so: `reducer(action, state)`
        - This function checks the action type, updates the state object and then returns the state.
    2. Action: describes the type of change that we want to make inside the reducer function
        - action object example: `{type: 'ADD_BOOK', book: {title: "The Wind", author: "Roy Wills"}}`
    3. Dispatcher: sends the action to the reducer function
        - dispatch function example: `dispatch({type: 'ADD_BOOK', book: {title: "The Wind", author: "Roy Wills"}})`
