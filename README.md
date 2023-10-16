# Shane Butler Photography Portfolio CMS

This repo is a from-scratch CMS built specifically for my photography portfolio website. It is being built out to be a full-fledged CMS for any image based.

## Demo

A production deployment can be found [here](https://shanebutlerphoto.com).

## To launch project locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

The project will not work until you configure:

## supabase

This project currently relies on Supabase for auth and storage upload / image hosting. To test, create a new 
[Supabase](https://supabase.com/) project.
Then add an .env file with the following variables populated from your Supabase project dashboard:

REACT_APP_SUPABASE_URL='yoururlhere'
REACT_APP_SUPABASE_API_KEY='yourkeyhere'

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
