document.getElementById("files").onchange =
  function () {
    let file = this.files[0];
    let reader = new FileReader();
    reader.onload = function () {
      console.log(this.result);
    };
    reader.readAsText(file);
  };
