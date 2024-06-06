### Project Structure

```
mailbox-client-frontend/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── api/
│   │   └── api.js
│   │
│   ├── app/
│   │   ├── store.js
│   │   └── rootReducer.js
│   │
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── LoginForm.js
│   │   │   ├── SignupForm.js
│   │   │   └── Auth.css
│   │   │
│   │   ├── Mail/
│   │   │   ├── ComposeMail.js
│   │   │   ├── Inbox.js
│   │   │   ├── MailItem.js
│   │   │   ├── SentMail.js
│   │   │   └── Mail.css
│   │   │
│   │   ├── Navbar/
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.css
│   │   │
│   │   ├── Notification/
│   │   │   ├── Notification.js
│   │   │   └── Notification.css
│   │   │
│   │   └── Shared/
│   │       ├── Button.js
│   │       └── Loader.js
│   │
│   ├── features/
│   │   ├── auth/
│   │   │   ├── authSlice.js
│   │   │   ├── authThunks.js
│   │   │   └── authSelectors.js
│   │   │
│   │   ├── mail/
│   │   │   ├── mailSlice.js
│   │   │   ├── mailThunks.js
│   │   │   └── mailSelectors.js
│   │   │
│   │   └── notification/
│   │       ├── notificationSlice.js
│   │       ├── notificationThunks.js
│   │       └── notificationSelectors.js
│   │
│   ├── hooks/
│   │   └── useAuth.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── InboxPage.js
│   │   ├── SentPage.js
│   │   └── ComposePage.js
│   │
│   ├── styles/
│   │   ├── main.css
│   │   └── variables.css
│   │
│   ├── utils/
│   │   ├── apiUtils.js
│   │   └── authUtils.js
│   │
│   ├── App.js
│   ├── index.js
│   └── setupTests.js
│
├── .env
├── .gitignore
├── package.json
├── README.md
└── yarn.lock / package-lock.json
```

### Explanation:

1. **public/**: Contains static assets like `index.html` and the favicon.
2. **src/**: Main source folder for the application.
   - **api/**: Contains files related to API calls and configurations.
   - **app/**: Contains the Redux store configuration and the root reducer.
   - **assets/**: Holds static assets like images.
   - **components/**: Contains reusable UI components.
     - **Auth/**: Components related to authentication (login/signup forms).
     - **Mail/**: Components related to mail functionality (compose, inbox, sent items).
     - **Navbar/**: Navigation bar components.
     - **Notification/**: Components for handling notifications.
     - **Shared/**: Shared components like buttons and loaders.
   - **features/**: Contains feature-specific slices, thunks, and selectors for Redux.
     - **auth/**: Authentication related Redux slices, thunks, and selectors.
     - **mail/**: Mail related Redux slices, thunks, and selectors.
     - **notification/**: Notification related Redux slices, thunks, and selectors.
   - **hooks/**: Custom React hooks.
   - **pages/**: Components representing different pages/routes in the application.
   - **styles/**: Global CSS files and variables.
   - **utils/**: Utility functions and helpers.
   - **App.js**: Main App component.
   - **index.js**: Entry point for the React application.
   - **setupTests.js**: Configuration for testing.

3. **.env**: Environment variables.
4. **.gitignore**: Specifies files and directories to be ignored by Git.
5. **package.json**: Contains project metadata and dependencies.
6. **README.md**: Project documentation.
7. **yarn.lock / package-lock.json**: Lock file for dependencies.