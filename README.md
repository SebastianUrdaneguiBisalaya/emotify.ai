# emotify.ai

[![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](#)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next.JS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

**Made with 💚 by [Sebastian Marat Urdanegui Bisalaya](https://sebastianurdanegui.vercel.app/)**.

Web application to generate a list of songs that the agent recommends based on your preferences or feelings and create a Spotify playlist in your account from these recommended songs through Gemini Flash 2.0, Next.js AI SDK, and Spotify API.

![emotify.ai hero](./public/hero.png)

![emotify.ai web app](./public/result.png)

**This web application accepts light/dark mode based on the user's system preferences.**

## **Tech Stack**

1. [**React**](https://react.dev/) - Open-Source JavaScript Library.
2. [**TailwindCSS**](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
3. [**TypeScript**](https://www.typescriptlang.org/) - Programming Language that builds on JavaScript.
4. [**Zod**](https://zod.dev/) - A TypeScript-first schema validation library.
5. [**Axios**](https://axios-http.com/docs/intro) - A Promise based HTTP client for the browser and node.js.
6. [**Next.js**](https://nextjs.org/) - A React Framework for Production.
7. [**Next.js AI SDK**](https://ai-sdk.dev/) - A free open-source library for building AI-powered applications.
8. [**Spotify API**](https://developer.spotify.com/documentation/web-api/) - A REST API for interacting with the Spotify music service.

## **APIs Route with Next.js**

Understanding the structure of the APIs Route with Next.js in this project is crucial for the development of the application.

#### [GET] `/api/auth`

**Description:** Endpoint to request authorization to Spotify user data.

#### [GET] `/api/auth/callback`

**Description:** Endpoint to handle the callback from Spotify authorization.

#### [POST] `/api/auth/set-cookies`

**Description:** Endpoint to set the cookies with `httpOnly` in the server side.

#### [GET] `/api/auth/refresh-token`

**Description:** Endpoint to refresh the access token.

#### [POST] `/api/chat`

**Description:** Endpoint to generate the chat messages using ai sdk of Next.js.

#### [GET] `/api/me`

**Description:** Endpoint to get the user data from Spotify.

#### [POST] `/api/playlist/create`

**Description:** Endpoint to create a playlist in Spotify.

#### [POST] `/api/playlist/add-songs`

**Description:** Endpoint to add songs to a playlist in Spotify.

## **Installation**

1. **Fork this repository**
   
   Click the "Fork" button in the top right corner to create your own copy of this repo.
2. **Clone your fork locally**
```bash
git clone https://github.com/your-username/your-fork.git
cd your-fork
```
3. **Create an .env file**
   
   Create a new file named .env in the root directory of the project and add the following variables with your own values:
```bash
GOOGLE_GENERATIVE_AI_API_KEY=AbCXXXXXXXXXXXXXXyz
CLIENT_ID_SPOTIFY_API=XyzXXXXXXXXXXXXXAbC
SECRET_CLIENT_SPOTIFY_API=bCDXXXXXXXXXXXXXlMN
NODE_ENV=development
```

If you want to use the production environment, you can set the NODE_ENV variable to production.

- **Google Studio**

   This web applications uses the Gemini Flash 2.0 model to generate the chat messages. To use this model, you need to create api key in the Google Studio. I recommend you see the [documentation](https://aistudio.google.com/).

- **Spotify for Developers**

	To use the Spotify API, you need to create a new app in the Spotify for Developers. I recommend you see the [documentation](https://developer.spotify.com/).

4. **Create a new branch for your changes**
```bash	
git switch -c your-feature-branch
```
5. **Make your changes and commit**
```bash	
git add .
git commit -m "Clear and concise description of your changes using the best practices"
```
6. **Push the branch to your fork**
```bash	
git push origin your-feature-branch
```
7. **Open a Pull Request**
   
   • Go to your fork on GitHub.

	 • Click on "Compare & pull request".
	 
	 • Choose the correct base (`main` on the original repo).
	 
	 • Add a description explaining what your PR does.
	 
	 • Submit the pull request.

## **Terms of Use**

1. **emotify.ai** is a web application that uses AI technology to recommend songs to the user based on their preferences or feelings. Our web application does not save any user data in our database.
2. **The user is responsible for the content of the messages they send to the AI model.** The AI model is not responsible for any damage caused by the user's messages.
3. The user can use our web application without registering or logging in (obviously, they have limited access to the Spotify API), but if they want to connect our web application to their Spotify account to create a custom playlist, they will need to provide their Spotify API credentials. Additionally, we do not store any user data in our database.

