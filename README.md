# GithubUsersearch
This repository is dedicated to typescript + react project to make GitHub user API search, with typeahead suggestions.


https://www.freecodecamp.org/news/separation-of-concerns-react-container-and-presentational-components/

https://dev.to/sathishskdev/separation-of-concerns-in-react-and-react-native-45b7


# UserSearch.app
Second try to make flush usersearch from github api

This time done with typescript + react.
Bootstrapped still with vite, and deployement vercel.

![Repoplans](order.drawio.svg)


## Files, whats & whys - 1by1

1. Main.ts - entry point. Wraps app with QueryClientProvider
2. App.tsx - Main application component, includes both Title and UserSearch
3. TitleBar.tsx - Sort of header, used to display title of the application
4. UserSearchApp.tsx - Main point of this section, uses custom hook and Query context
    - useUserSearch contains all the logic
    - decides should it show & pass arguments to error or userlist. nothing else.
    - passes the userData of search to result component
5. UseUserSearch.ts - logic part of user search
    - uses tool functions useDebounce and FetchUsers, according to user input after slight delay
    - sets error if fetching isnt OK
    - Also creates context for other components to use, just to avoid passing props (I have no idea is there better way but people seem to say that its not atleast builtin functionality)
6. SearchResultApp.tsx - dumb component to style the list
    - Uses SingleResult component to display each individual user
7. SingleResultApp.tsx - Displays single user data element
    - Uses custom hook
    - Returns flexdiv, containing user image, username and link with small animations.
8. UseSingleResult.ts - logic part of singleResult
    - Divides username into 3 sections to highlight matching part of result.
    - Uses useMemo to limit needed calls.
9. FetchErrorApp.tsx -  Displays the conditional error message and button when fetching fails
    - No way needed for this project, but wanted to use for atleast small amount of user friendlines.
    - uses custom hook to decide when to display refresh button.
10. UseFetchError.ts - Logic part of FetchError.
    - Simple hook to set cooldown, after cooldown retryAvailable boolean return true and App can display the button.

## Repository set-up
![Repoplans](Repository_plan.drawio.svg)




##  Upgrades for the future

1. UI/UX enhancement, Error handling in fetch.
    - Now im showing error message accompanied with referesh button after 45 seconds cooldown.
    - If this were for actual commercial use user should be shown the the limit for search.
    - This could be done via remaining = response.headers.get('X-RateLimit-Remaining');
    - But in my application hitting the 60/hour should not be considered as problem.

2. UI/UX enhancement, something like loading spinners while fetch is in progress.
    - Decided not to make this since I didn't experience single time that fetch took in any means long time.
    - Wanted to keep code readability as good as i possibly can

3. Code Organization, Decide the approach in the context of previous components etc.
    - Right now my main component passes props to needed sub comps.
    - Some of these sub comps use custom hooks.
    - These Hooks might be better put in their own folder / tools folder.
    - Considering this program I have decided to keep them in the folder with the app file that is responsible of the viewing, since I found it simplest way without having any context.

4. Code production, Make a habit to integrate stories immediately.
    - Now I picked up project while some of the work was already done by me in previous version
    - I should start making stories as little component (button, input etc) from the beginning, and then combining these to larger section of App.
    - In this case Making stories of the component that contains multiple parts is significally harded testing wise

5. Code production, Develope similar testing habit that I have with C.
    - This time Components were kinda dumb and I didnt know actual limits and rules of typescript while starting so testing got pushed into end.
    - Future try to intgrate testing in the workflow everytime piece of component is ready, big or small, to help future you.



## Checklist of improvements:

[x] CSS - use BEM or Styled components.
    - All styling just one level deep, saves a lot of time knowing what is always modified.

[x] Typescript - its major upgrade from Javascript

[x] Testing - use Cypress or equilevant
    - Easy start point to make developing easier in future.
    - Cypress setup, E2E config, 20 tests done. More to come.

[ ] Use storybook - always when developing dumb components DONE-ISH
    - https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/
    - already ready to go for this project
    - Runs alongside with dev
    - Use bit more time to get to know how to utilize storybook

[x] Separate components into 3 pieces
    - useFunc -> useComponent.ts
        - contains all the logic

    - ViewFunc -> componentView.tsx
        - dumb component that simply takes in props and has no logic, just renders the parts.

    - AppFile -> ComponentApp.tsx
        - will have useComponent.ts file, and pass the props to View file

[x] Keep everything possible in complete isolation
    - No prop drilling, let react do its job with query from react etc.
        - Ended up mixing a bit, mostly context used instead of props.
        - Error message as exeption since I wanted to keep it as reusable as possible.
    - INSTEAD OF OLD REACT QUERY GO WITH TANSTACK

# PRE START PLANNING BELOW

## Repo plan

- Inside rootfolder just index html and setup files.
- Folder src contains subfolder for components aswell as main and app tsx files.
- Component folder is divided to sub folders, each comp to their own
- Components divided to 3 basic files
    1. Tsx file, takes the props, relatively basic
    2. Ts Use file, all of the logic in the component
    3. css style file, contains all of the viewing aspects of the component (Find out should I use .ts file with styled components, or just stick with css)
- Also tools folder to hold functions like UseDebounce etc.
- Tools folder contains Interfaces?

## General plan

1. Call the userSearch component from the app.tsx
    - returns input container with changing handled
2. userSearc component calls searchResult
    - Maps user data inside of some sort of container
3. to make these containers it calls singleResult comp
    - Return single typeahead suggestion, with logo, username, styling etc.

## What I want to keep using

1. Keep the styling similar but use BEM in css (scratched, first version on styled comp)
    - start it from beginning
2. Keep using debounce, and maybe even local storage!
    - 1st debounce
3. Small animations that I had is nice touch.
4. Test with storybook each and everysingle component
5. Error handing on userresults was nice, but I try to implement one to app in general (waiting for response etc?)