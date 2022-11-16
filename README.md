# :chart_with_upwards_trend: SportSee - React application

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

#### Dependencies

![React](https://img.shields.io/badge/React-^17.0.2-<COLOR>.svg)
![React Router](https://img.shields.io/badge/React_Router-^6.2.2-<COLOR>.svg)
![Recharts](https://img.shields.io/badge/Recharts-^2.1.9-<COLOR>.svg)
![Sass](https://img.shields.io/badge/Sass-^1.49.9-<COLOR>.svg)
![Axios](https://img.shields.io/badge/Axios-^0.26-<COLOR>.svg)
![Vite](https://img.shields.io/badge/Vite-^3.2.4-<COLOR>.svg)
![Vite Plugin SVGR](https://img.shields.io/badge/Vite_Plugin_SVGR-^2.2.2-<COLOR>.svg)
![Vite Plugin React](https://img.shields.io/badge/Vite_Plugin_React-^2.2.0-<COLOR>.svg)

#### Dev dependencies

![Prettier](https://img.shields.io/badge/Prettier-^2.5.1-<COLOR>.svg)

## :rocket: Running project

### Prerequisite

#### Code editor

You will need a text editor to write your code. I recommend using [Visual Studio Code](https://code.visualstudio.com/) with the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension, although you can choose whichever one you prefer.

#### Command Line

Throughout this README, we will ask you to use various command-line interfaces (CLIs). You can type these commands into your system's default terminal:

- Windows: Command Prompt or PowerShell or [WSL](https://learn.microsoft.com/en-us/windows/wsl/install)
- macOS: Terminal
- Linux: varies depending on distribution (e.g. GNOME Terminal, Konsole)

Most code editors also come with an integrated terminal, which you can also use.

##### Git

[Git](https://git-scm.com/downloads) is a commonly-used version control system for source code.  
Although having git is not strictly necessary to download the code on your computer its the recommended way to do so.  
Git will also became handy later if you want to make changes to the code base.

##### Node.js

You need to install the [Node.js](https://nodejs.org/en/download/) runtime and its bundled npm package manager onto your system.  
I recommend that you use the latest long-term support (LTS) version. The project was tested under the version **16.13.1**.

Psss checkout Node Version Manger ([nvm](https://github.com/nvm-sh/nvm#installing-and-updating)) if you want to manage multiples version on your system.

##### Yarn or npm

I personaly use [Yarn](https://yarnpkg.com/getting-started/install) for my package manager.  
But you can use npm, simply replace **yarn** with **npm** when typing the yarn commands.

### Cloning the projects

Within the directory of choice clone the following repository.

#### With SSH

`git clone git@github.com:Lukylix/LucasGarcia_12_04032022.git sport-see`

If you want to use the api you can also clone the backend:

`git clone git@github.com:OpenClassrooms-Student-Center/P9-front-end-dashboard.git sport-see-back`

#### With HTTPS

`git clone https://github.com/Lukylix/LucasGarcia_12_04032022.git sport-see`

If you want to use the api you can also clone the backend:

`git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git sport-see-back`

### Installing the dependencies

Moove into the previously cloned respositories and type:

`yarn`

### Configuration

You must edit the **.env** file before running the project like so :

#### Get mocked data

**VITE_API_HOST** and **VITE_API_PORT** are optional in this configuration.

```dotenv
VITE_DATA_SOURCE=mock
```

#### Get data from the API

```dotenv
VITE_API_HOST=localhost
VITE_API_PORT=3000
VITE_DATA_SOURCE=api
```

## :building_construction: Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.  
Open [http://localhost:8000](http://localhost:8000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `yarn run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. s
Your app is ready to be deployed!

See the section about [deployment](https://vitejs.dev/guide/build.html) for more information.

### `yarn run serve`

This command start a web server with the `build` folder as the root directory.

### `yarn run prettier`

This command formats all files supported by Prettier in the current directory and its subdirectories.
It use **.prettierignore** file to ignore things that should not be formatted and **.prettierrc.json** for its styling configuration.
