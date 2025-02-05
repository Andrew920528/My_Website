# Dev Notes

Notes to future self

## Project Organization

```bash
src
├── components  # Contains any reusable ui element
├── configs     # Contains project data, constants
├── features    # Manages global state
├── models      # Contains object classes
├── pages       # Componentizes pages/ primary sections of the project
├── services    # Contains functions for API calls
├── style       # Manages styling
│   ├── abstract    # Handles mixins and variables
│   ├── base        # Handles theme
│   ├── components  # Handles specific components
│   └── pages       # Handles specific pages
└── utils       # Contains any useful functions
```

## Setup:

```
git config --global http.postBuffer 157286400
npm run deploy
```

if it says "gh-pages" already exist

```
rm -rf node_modules/.cache/gh-pages
```

## Quotes/ 雜談

Thoughts that lead to greatness, goes here

- _Cleanliness is a state of purity, clarity, and precision_
- 給現在的自己：如果一時不知道怎麼做，就先隨便做吧！到時候的我就會知道怎麼做了
