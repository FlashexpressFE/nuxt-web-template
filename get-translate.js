/*
 * @Author: your name
 * @Date: 2021-09-14 16:22:23
 * @LastEditTime: 2021-10-19 19:59:24
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /nuxt-web-template/get-translate.js
 */
const axios = require("axios");
const fs = require("fs");

init("zh");
init("th");
init("en");

function init(lang) {
  axios
    .get(`xxxxx/${lang}.json?time=${Date.now()}`)
    .then(res => {
      fs.writeFile(`./local/${lang}.json`, JSON.stringify(res.data), "utf8", error => {
        if (error) {
          console.log(error);
          return false;
        }
        console.log("success");
      });
    });
}
