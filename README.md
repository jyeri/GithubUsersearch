# GithubUsersearch
This repository is dedicated to typescript + react project to make GitHub user API search, with typeahead suggestions.


https://www.freecodecamp.org/news/separation-of-concerns-react-container-and-presentational-components/

https://dev.to/sathishskdev/separation-of-concerns-in-react-and-react-native-45b7

# UserSearch.app
Second try to make flush usersearch from github api

This time done with typescript + react.
Bootstrapped still with vite, and deployement vercel.

Checklist of improvements:

1. CSS - use BEM or Styled components.
    - All styling just one level deep, saves a lot of time knowing what is always modified.

2. Typescript - its major upgrade from Javascript

3. Testing - use Cypress or equilevant
    - Easy start point to make developing easier in future.

4. Use storybook - always when developing dumb components
    - https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/
    - already ready to go for this project
    - Runs alongside with dev
    - Use bit more time to get to know how to utilize storybook

5. Separate components into 3 pieces
    - useFunc -> useComponent.ts
        - contains all the logic

    - ViewFunc -> componentView.tsx
        - dumb component that simply takes in props and has no logic.

    - AppFile -> ComponentApp.tsx
        - will have useComponent.ts file, and pass the props to View file

6. Keep everything possible in complete isolation
    - No prop drilling, let react do its job with query from react etc.
    - INSTEAD OF OLD REACT QUERY GO WITH TANSTACK

## Repo plan

- Inside rootfolder just index html and setup files.
- Folder src contains subfolder for components aswell as main and app tsx files.
- Component folder is divided to sub folders, each comp to their own
- Components divided to 3 basic files
    1. Tsx file, takes the props, relatively basic
    2. Ts Use file, all of the logic in the component
    3. Ts style file, contains all of the viewing aspects of the component (Find out should I use .ts file with styled components, or just stick with css)
- Also tools folder to hold functions like UseDebounce etc.
- Tools folder contains Interfaces?

## General plan

1. Call the userSearch component from the app.tsx
    - returns input container with changing handled
2. userSearc component calls searchResult
    - Maps user data inside of some sort of container
3. to make these containers it calls singleResult comp
    - Return single typeahead suggestion, with logo, username, styling etc.
    - to get them it uses some kind of details func to get extract useful user data.

## What I want to keep using

1. Keep the styling similar but use BEM in css (scratched, first version on styled comp)
    - start it from beginning
2. Keep using debounce, and maybe even local storage!
    - 1st debounce
3. Small animations that I had is nice touch.
4. Test with storybook each and everysingle component
5. Error handing on userresults was nice, but I try to implement one to app in general (waiting for response etc?)


