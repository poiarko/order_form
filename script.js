"use strict";

const fileInfoTemplate = document
  .getElementsByClassName("file-info")[0];
  
let uploadedFiles = document.getElementById("form-upload-input");
let fileInfo = document.getElementsByClassName("file-info");
let fileInfoContainer = document.getElementsByClassName("table-body")[0];
let deleteFiles = document.getElementsByClassName("remove-button");

uploadedFiles.addEventListener("change", fileHandler);
for (let i = 0; i < deleteFiles.length; i++) {
  deleteFiles[i].addEventListener("click", deleteFile);
}

function fileHandler() {
  let newFileInfo = fileInfoTemplate.cloneNode(true);
  let fileName = newFileInfo.getElementsByClassName("file-name");
  let fileSize = newFileInfo.getElementsByClassName("file-info-size");
  let fileWords = newFileInfo.getElementsByClassName("file-info-words");

  fileInfoContainer.appendChild(newFileInfo);
  fileName[0].innerHTML = this.files[0].name;
  fileSize[0].innerHTML = Math.round(this.files[0].size / 1024) + "kb";
  fileWords[0].innerHTML = Math.round(Math.random() * (1000 - 100) + 100);

  newFileInfo
    .getElementsByClassName("remove-button")[0]
    .addEventListener("click", deleteFile);
}

function deleteFile() {
  this.parentNode.parentNode.remove();
}

