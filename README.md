# Kiryuu Rest API
https://kiryuu.co/ Rest API made with Node JS, Axios, Cheerio, and Express

## TODO
- [x] Home
  - [ ] Project
    - [ ] Pagination
  - [ ] Latest
    - [ ] Pagination
- [ ] Manga
  - [ ] Manga By Genre 
- [ ] Detail Manga
  - [ ] Information
  - [ ] Chapter List
    - [ ] Read Chapter
- [ ] Search

# Usage
1. Clone this repository
    ```bash
    git clone https://github.com/Nunu27/kiryuu-rest-api.git
    ```
2. Install dependecies (`yarn` or `npm install`)
3. Start the development environment (*if you haven't installed nodemon globally, you can do `npm i nodemon --save`)
    ```bash
    npm run test or npm run start
    ```
4. visit http://localhost:2727/

# Documentation
__LIVE__ __DEMO__ = http://kiryuu-rest-api.herokuapp.com/

| Endpoint | Params | Description | Status |
| -------- | ------ | ----------- | ------ |
| /home | - | Homepage | Finished |
| /project | - | Latest Project | Nope |
| /latest | - | Latest Manga | Nope |
| /latest/page/:page | pageNumber | Latest Manga Pagination | Nope |
| /manga | - | All manga sort Alphabetically | Nope |
| /manga/page/:page | pageNumber | Manga Pagination | Nope |
| /manga/:id | id | Manga Details | Nope |
| /read/:id | id | get Chapter Images | Nope |

