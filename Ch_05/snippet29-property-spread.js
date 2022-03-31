// Property Spread Syntax

// Use Spread Syntax When Creating a New Object Based on an Existing Object's Properties

const defaultOptions = {
  title: "Default title",
  text: "Default text"
};

function showDialog(opts) {
  const options = { ...defaultOptions, ...opts };
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

// Compare to Snippet 21.
// At first glance, it seems like you could use property spread instead of Object.assign everywhere,
// but Object.assign still has a role: it can assign to an existing object, whereas property spread can
// only be used when creating a new object.
