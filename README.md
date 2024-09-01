Tools
---------
Node Version Manager:
 - https://github.com/nvm-sh/nvm (Linux) 
 - https://github.com/coreybutler/nvm-windows (Windows)

Prerequisite 
---
* **NodeJS** 22.7.0 was used
* **npm**
* **chocolatey - recommended because of quick nodejs update method** 
	* **choco install nodejs --version="versionNumber"** 

Global install
--------------
```
npm update -g npm
npm install -g pnpm
```
why? its the lessons learned from yarn and npm, npx.

Per project installs
--------------------
```
pnpm i @types/node -D
pnpm i vite-plugin-dts -D
pnpm i vite-plugin-lib-inject-css -D
pnpm i glob -D
pnpm i eslint-plugin-react -D
```
**NOTE: The plugin eslint-plugin-react at the moment supports eslint7 and below. Upgrading to eslint8 installs it just fine. Then warnings are thrown during some build operations but everything seems to work okay. Downgrading back to eslint7 removes the warnings but new warnings show up to deprecated projects existing in the project now. The project punycode is not used or called anywhere within the codebase, the files to it merely exist within the projects dependency/required files list. Installing packages like shown above or pnpm install lead to stablity**

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
* Framework: React
* Variant: TypeScript + SWC (https://swc.rs/)
* Type: Library
* Library: ES2023 , DOM , DOM.Iterable
* Targets: ES2020
* **Build Commands**
* Build Library: ``` pnpm build:lib ```
 * **What's Included**
    * ~/aeraven-webui/lib/components/
    * storybook visual shows and tests

everes-comyntas-forest
----------------------
* Framework: React
* Variant: TypeScript + SWC (https://swc.rs/)
* Type: Single Page Application
* Library: ES2023 , DOM , DOM.Iterable
* Targets: ES2023
* ** Build Commands **
* Deployment Build: ``` pnpm build ```
 * **What's Included**
    * aeraven-webui components via lib build import
    * SPA itself
    * SPA purpose built ui components within project's source directory
    * storybook visual shows and tests

honey-biscuit-badger
--------------------
* Framework: React
* Variant: TypeScript (uses Vite's builtin support for javascript, typescript, and jsx/tsx aka Rollup -> https://rollupjs.org/)
* Type: Single Page Application
* Library: ES2023 , DOM , DOM.Iterable
* Targets: ES2020
* Deployment Build: ``` pnpm build ```
 * **What's Included**
    * aeraven-webui components via direct import
    * SPA itself
    * SPA purpose built ui components within project's source directory
    * storybook visual shows and tests
