
# tiktik_app
Social media application built using Typescript, React/Next.js, and Tailwind CSS. On this app, users can upload, publish, share, comment on, and like videos. They can also  filter videos by categories and use other advanced search functionalities, profile pages and suggested accounts. This project was built following the Jsm tutorial.

![Video-sharing Social Media Application](https://user-images.githubusercontent.com/48595932/212324901-e1812d0e-e358-4f4e-9294-cb655033eee6.png)


## Getting Started

1. Clone the repository to your local machine.
2. Run `npm install` to install all dependencies.
3. Get your  [**Google API client ID token**](https://console.cloud.google.com/apis/dashboard), this is needed by the app for signing users in using [**React OAuth2**](https://www.npmjs.com/package/@react-oauth/google)
4. Get a Public Sanity token. You will need to set up an account at [**Sanity.io**](https://www.sanity.io/) to be able to run a backend for this project
5. Create a file called `.env.development` in the root folder of the project, add the `NEXT_PUBLIC_GOOGLE_API_TOKEN`, `NEXT_PUBLIC_SANITY_TOKEN`API keys and also a`NEXT_PUBLIC_BASE_URL`  and save the file.
6. Run `npm run dev`in your terminal to start the development server.
7. Follow the link in your terminal to view the app in your browser.

## Features
- Login with Google Auth
- Video uploading and sharing
- Commenting and liking
- Filtering and advanced search
- Profile pages and suggested accounts

## Built With
- Typescript
- React/Next.js
- Tailwind CSS
- Sanity

## Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
