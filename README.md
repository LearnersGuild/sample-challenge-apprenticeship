# Vinyl

A community for record enthusiasts to review their favorite albums.

Part of the application has already been built for you. Your job is to take it to completion.

## Getting Started

The app uses a simple file structure for an Express web app server that renders views using EJS templates.

```sh
public/               # static assets
src/
  actions/            # async server actions (e.g. data CRUD)
  data/               # db schema & seed data
  db/                 # database client & utils
  routes/             # express routes
  views/              # html templates
test/                 # test files for the source files
```

### Setting Up Your Database

Use the following commands to set up and seed your database:

1. Create PostgreSQL database `vinyl`: `$ npm run db:create`
1. Set up database tables from `schema.sql`: `$ npm run db:schema`
1. Load seed data from `albums.sql`: `$ npm run db:seed`

### Setting up your config

Run the command in the terminal so that the config loads correctly
`$ cp .env.template .env`

### Starting your development server

Run the following command in the terminal:
`$ npm start`


# Coding Challenge

During the interview you will have 60 minutes to complete all the specs of the challenge.

You'll be allowed to ask your interviewer clarifying questions and can use the internet to search for information as needed.

Each requirement is assigned a point value. A fully complete requirement will earn you full points; partially complete requirements get partial points; incomplete requirements get no points. Overall completeness is determined by dividing the total points earned by the total points available. There is a requirement of completion of 80% of the specs to secure a passing result.

## Specs

## Sign Up

Routing:
- [ ] __20:__ Navigating to `/sign-up` loads the sign up page.

Users can:
- [ ] __40:__ Sign up for an account with a name, email and password.
- [ ] __10:__ Be redirected to the home page (`/`) after signing up.

Users CANNOT:
- [ ] __10:__ Sign up without a name value
- [ ] __10:__ Sign up without an email address value
- [ ] __30:__ Sign up without an email that is already in use.

Files to modify:
- `src/routes/authentication.js`
- `src/actions/signUp.js`
- `src/views/authentication/sign-up.ejs`

## Sign in

Routing:
- [ ] __20:__ Navigating to `/sign-in` loads the sign in page.

Users can:
- [ ] __20:__ Sign in to an existing account with an email address and password.
- [ ] __10:__ Be redirected to the home page (`/`) after signing in.

Users CANNOT:

- [ ] __30:__ Sign in with an invalid email address and password combination.

Files to modify:
- `src/routes/authentication.js`
- `src/views/authentication/sign-in.ejs`
- `src/actions/signIn.js`

## Testing

Testing:
- [ ] __30:__ Write a test for the `signIn` action using Mocha. This test should check that calling the `signIn` function adds a row in the database

Files to modify:
- `test/actions/signIn.test.js`


## Profile

Routing:
- [ ] __20:__ Navigating to `/users/<USER ID>` loads the profile page. The profile page has a button `Edit` which when clicked, navigates to the edit profile page.
- [ ] __20:__ Navigating to `/users/<USER ID>/edit` loads the edit profile page.
- [ ] __20:__ Sending a PUT request to `/users/<USER ID>` updates the profile of the user

Users can:
- [ ] __10:__ See their username and email
- [ ] __30:__ Edit their username and email using AJAX. Updating their profile should NOT require a page refresh.

Files to modify:
- `src/routes/users.js`
- `src/views/users/profile.ejs`
- `public/script.js`
