Tools
---------
Node Version Manager:
https://github.com/nvm-sh/nvm (Linux) 
https://github.com/coreybutler/nvm-windows (Windows)

Prerequisite 
---
* **NodeJS** <span style="margin-left: 18px; font-weight:200">22.7.0 was used</span>
* **npm**
* **chocolatey - recommended because of quick nodejs update method **
	* **choco install nodejs --version="versionNumber" **

Global install
--------------
```
npm update -g npm
npm install -g pnpm
```

<span style="margin-left: 50px;"><span style="font-style: italic; padding-right: 20px;">why?</span> its the lessons learned from yarn and npm, npx. </span>

Per project installs
--------------------
```
pnpm i @types/node -D
pnpm i vite-plugin-dts -D
pnpm i vite-plugin-lib-inject-css -D
pnpm i glob -D
pnpm i eslint eslint-plugin-react -D
```

Not a definative list of featureset
---
* Vite
	* Hot Refresh/Replacement
* React 19 for aeraven-webui
	* Vite Library Mode
	* Class import CSS along with Inline CSS
* React 18 for everes-comyntas-forst
* React 18 for honey-biscuit-badger
* Inline CSS via RollbackJS or SWC
* Minify via ESBuild
* Typescript esLint
* Storybook
* Development and Production build options 
	* Whether or not to include storybooks in output bundle/dist

aeraven-webui
-------------
Framework: React
Variant: TypeScript + SWC (https://swc.rs/)
Type: Library
One-time Executes: npx storybook@latest init
Library: ES2023 , DOM , DOM.Iterable
Targets: ES2020
** Build Commands **
Build Library: ``` pnpm build:lib ```
 ==What's Included==
* aerave-webui components 
	* ~/aeraven-webui/lib/main.ts 
	* ~/aeraven-webui/lib/kingjulien
	
* storybook visual shows and tests

everes-comyntas-forest
----------------------
Framework: React
Variant: TypeScript + SWC (https://swc.rs/)
Type: Single Page Application
Library: ES2023 , DOM , DOM.Iterable
Targets: ES2023
** Build Commands **
Deployment Build: ``` pnpm build ```
 ==What's Included==
* aeraven-webui components via lib build import
* SPA itself
* SPA purpose built ui components within project's source directory

honey-biscuit-badger
--------------------
Framework: React
Variant: TypeScript (uses Vite's builtin support for javascript, typescript, and jsx/tsx aka Rollup -> https://rollupjs.org/)
Type: Single Page Application
Library: ES2023 , DOM , DOM.Iterable
Targets: ES2020
Deployment Build: ``` pnpm build ```
 ==What's Included==
* aeraven-webui components via direct import
* SPA itself
* SPA purpose built ui components within project's source directory