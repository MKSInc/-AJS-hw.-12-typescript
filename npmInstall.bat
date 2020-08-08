call npm install --save-dev @babel/core @babel/cli @babel/preset-env
call npm install core-js@3
call npm install --save-dev webpack webpack-cli babel-loader
call npm install --save-dev html-loader
call npm install --save-dev html-webpack-plugin
call npm install --save-dev mini-css-extract-plugin css-loader
call npm install --save-dev jest babel-jest
call npm install --save-dev eslint
call npx eslint --init

call npm install --save-dev typescript ts-loader
call npm install --save-dev ts-jest @types/jest
call npm install --save-dev jsdoc

call npx tsc --init
call npx ts-jest config:init