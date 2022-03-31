// Use Object.assign instead of Custom “Extend” Functions or Copying All Properties Explicitly

const defaultOptions = {
  title: "Default title",
  text: "Default text"
};

function showDialog(opts) {
  const options = Object.assign({}, defaultOptions, opts);
  console.log("title = '" + options.title + "', text = '" + options.text + "'");
}

showDialog({});           // => "title = 'Default title', text = 'Default text'"

showDialog({
  title: "Given title"    // => "title = 'Given title', text = 'Default text'"
});

showDialog({
  title: "Given title",   // => "title = 'Given title', text = 'Given text'"
  text: "Given text"
});

showDialog({
  text: "Given text"      // => "title = 'Default title', text = 'Given text'"
});
