Parse.initialize("jtKp70qF95AUOliYuurtfCASVEZr35aOs1pdNhHS", "orSL5zhN13Qqiamy3qbNbh9HlJMhxvR7f2DJRRv7");

var currentUser = Parse.User.current();
if (currentUser) {
    // do stuff with the user
} else {
    var user = new Parse.User();
    user.set("username", "basquith16");
    user.set("password", "pupuplatter");
    user.set("email", "brianasquith@yahoo.com");
    user.set("phone", "650-555-0000");

    user.signUp(null, {
      success: function(user) {
        // Hooray! Let them use the app now.
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });

    Parse.User.logIn("myname", "mypass", {
      success: function(user) {
        // Do stuff after successful login.
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
      }
    })
  };



  //reset password
//   Parse.User.requestPasswordReset("email@example.com", {
//   success: function() {
//   // Password reset request was sent successfully
//   },
//   error: function(error) {
//     // Show the error message somewhere
//     alert("Error: " + error.code + " " + error.message);
//   }
// });