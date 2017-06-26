var getUser = (id, callback) => {
  var user = {
    id : id,
    name: 'Bob'
  };
  setTimeout(() => {
    callback(user);
  }, 2000);
};

getUser(21, (userObject) => {
  console.log(userObject);
});
