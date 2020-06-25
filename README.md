# Backend
![GitHub top language](https://img.shields.io/github/languages/top/lattecode/backend)
![GitHub](https://img.shields.io/github/license/LatteCode/Backend)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/LatteCode/Backend.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/LatteCode/Backend/context:javascript)

This a backend of our project by team [LatteCode](https://github.com/LatteCode).


## Table of Contents
1. [For User](#for-user)
    * [API](#api)
2. [For Developer](#for-developer)
    * [Project Setup](#project-setup)
    * [Requirements](#requirements)
    * [How to Contribute](#how-to-contribute)
3. [Disclamier](#disclaimer)
    * [Contributors](#contributors)
    * [Link to Frontend](#link-to-frontend)

## For User

### API
API would be this form, /result/{department}/{team}?job={job}

* Example   
```
http://server.jaram.net:5905/result/주변기관/식당?job=포지타노
```
## For Developer
### Environment
1. node > v12.11
2. yarn > 1.22
3. MariaDB > 10.4.13

### Installation
1. RUN SQL script to build DB server.
`lattecode_Department.sql`, `lattecode_Information.sql`

2.  Hosting local machine
You should cast db login info as a environment variables. : `db_user`, `db_passwd`
```
git clone https://github.com/LatteCode/Backend.git
cd Backend

yarn install
yarn serve   ----> For development preview server
-------------
yarn build   ----> For Release build that has minified bundle dependencies.
```
3. Hosting as Docker Container
```
docker build -t JohnDoe/Backend .
docker run -p 3000:3000 -d --name lattecode-backend -e db_user="user" -e db_passwd="PASSWD" JohnDoe/Backend
```


### Requirements
Most of our dependencies are written in `package.json`.
They will be automatically installed while `yarn install`.

#### Dependencies
1. cookie-parser ~1.4.4
2. debug ~2.6.9
3. express ~4.16.1
4. forever ^3.0.0
5. helmet ^3.22.0
6. http-errors ~1.6.3
7. morgan ~1.9.1
8. mysql2 ^2.1.0

### How to Contribute

#### Pull Request
We have added PR template and Issue templates.
Every PRs and Issues should fill out these templates. If it didn't, your ticket will be rejected.

## Disclaimer

### License
* [MIT](https://github.com/AntsThatWander/Backend/blob/master/LICENSE)

### Contributors
* Code
    1. Yeonggyun Kim([CXZ7720](https://zerogyun.dev))

* Extra
    1. Jeonghyeop Lim([AntsThatWander](https://antsthatwander.github.io/)) - README

### Link to Frontend
* Go to [Frontend](https://github.com/LatteCode/Frontend)


