import { URIHash } from "./urlhash.js";
$(document).ready(function () {
  const url_file = URIHash.get("file");
  if (url_file) {
    console.log(`Load file from file`);
    console.log(url_file);
    var file = atob(url_file);
    console.log(file);
    document.open();
    document.write(file);
    document.close();
    console.log(6);
  }
  document.body.innerText = "";
});
