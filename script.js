$(document).ready(function () {
  const url_file = URIHash.get("file");
  if (url_file) {
    console.log(`Load file from file`);
    atob(url_file);
  }
});
