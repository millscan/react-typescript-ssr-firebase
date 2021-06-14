# React + Typescript Boilerplate - SSR with Firebase # 

[Preview the deployed boilerplate!](https://react-typescript-firebase-ssr.web.app/)

Adapted for Typescript from official Firebase docs + youtube channel:
https://firebase.google.com/docs/hosting/functions
https://www.youtube.com/watch?v=82tZAPMHfT4

## Get Started: ##
1. run *yarn* (or *npm i*) to install dependencies
2. Develop app and modify html/css in ./src
3. run *yarn start* (*npm run start*) to start a development server

Server is located in index.tsx in the root directory.

## Deployment: ##
0. log into firebase if you have not already (firebase login)
1. cd into functions folder and run *yarn* (or *npm i*)
2. run *yarn build* (or *npm run build*) to compile client and server code into firebase directory
3. change default project in firebase.json to your firebase project ID
4. run *yarn serve* (or *npm run serve*) to test SSR locally
5. run *yarn deploy* (or *npm run deploy*) to deploy to Firebase

## Important Info: ##
All dependendencies used by your app and server (index.tsx) must be included in functions/package.json.
If you add a dependency to your app or server, make sure to add it to functions/package.json as well.

If you fail to include a dependency your deployment will result in an error.

Your Firebase project must be on the blaze plan. If it is on the spark plan, you'll get an error on deployment

![PageSpeed Insights](https://github.com/millscan/react-typescript-ssr-firebase/blob/main/docs/pagespeed.png?raw=true)