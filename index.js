#!/usr/bin/env node
const fs = require("fs");
const fileList = [".editorconfig, .eslintrc.yml"];

fileList.forEach((file) => {
  const url = `https://cdn.jsdelivr.net/gh/Zzrk/configs/${file}`;
  fetch(url)
    .then((res) => res.text())
    .then((text) => {
      fs.writeFile(file, text, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`Downloaded ${file}`);
      });
    })
    .catch((err) => {
      console.error(err);
    });
});
