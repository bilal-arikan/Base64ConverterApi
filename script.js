$(document).ready(function () {
  const url_file = URIHash.get("file");
  if (url_file) {
    console.log(`Load file from file`);
    console.log(url_file);
    var file = atob(url_file);
    console.log(file);
    document.body.innerText = file;
    console.log(4);
  }
  document.body.innerText = "";
});
