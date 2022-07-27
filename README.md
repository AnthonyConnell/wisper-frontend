![wisper logo](/src/images/Wisp_Logo_BG.png)
# Wisper-api

---

![app demo](/src/images/wisper_showcase.png)

## Description

Wisper is a free social networking platform similar to twitter for users to connect on and share posts known as Wisps. Users have features such as creating, liking and sharing posts which will appear on their Homepage. To access Wisper, users will need to create an account. Wisper is also mobile friendly.

## Set up and Installation

```bash
npx create-react-app project_name
npm init -y
npm install axios moment react-file-base64 redux redux-thunk
npm install @mui/material-ui/core
npm install @mui/icons-material --force
```
- Axios is used for making API requests
- Moment is a library for working with time and date
- React-file-base64 is used for converting images
- Redux-thunk is used for asynchronous functions in redux
- Mui is a React component library of UI tools. Mui/Icons must be installed separately. 

## :globe_with_meridians: API

This is the frontend of the project, using React and Material-UI to create a user interface in our app. This connects to the backend API, which you can find [here.](https://github.com/Werefox22/wisper-api)

## :bookmark_tabs: Features

- Ability to post messages to feed (must refresh)
- Ability to like posts, share (no functionality as of yet), as well as delete posts 

## :pushpin: Future plans

- Users will be able to posts Wisps that contain videos, photos or links
- Users will be able to refresh the page with updated posts
- Users will be able to edit posts.
- User will have more fields, such as title, and hashtags
- adding and deleting comments
- authenticated account creation
- Notification system with app alerts
- Following and unfollowing feature
- Include a trending page

---

## Credits
### Front-end
Anthony Connell ([github](https://github.com/AnthonyConnell))

Deanna Ireland ([github](https://github.com/Typerfish))

### Back-end
Jack Wright ([github](https://github.com/Werefox22))

Caroline Konrad ([github](https://github.com/carolinekonrad))

Valeria Garcia ([github](https://github.com/valgarciav))

Background used from [svgbackgrounds.com](svgbackgrounds.com)

---

## License

MIT License

Copyright (c) 2022 Wisper

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
