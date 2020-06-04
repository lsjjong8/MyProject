var express = require('express');
var router = express.Router();

// route for signing-up a new user
router.post('/', (req, res) => {
  console.log('user signup')

  // from req.body - which will be { username: 'rohanpaul2@gmail.com', password: '123456' }
  // assign the username and password variable with ES-6-destructuring to be equal the value of req.body.username and req.body.password respectively
  const { username, password } = req.body;

  // check to see that new user does not exists in the database and also there's no error while creating the new user
  // Only after these two checks save the user in the database
  User.findOne({ username: username }, (err, user) => {
      if (err) {
          console.log('User.js posting error: ', err);
      } else if (user) {
              res.json({
                  error: `Sorry, that username already exists with ${username}`
              })
          } else {
              const newUser = new User({
                  username: username,
                  password: password
              })
              newUser.save((err, savedUser) => {
                  if(err) return res.json(err)
                  res.json(savedUser)
              })
          }
  })
})

/* GET users listing. */
// Only a get route to see the user
router.get('/', function(req, res, next) {
  console.log('*****user*****')
    console.log(req.user) ;
    if (req.user) {
        res.json({user: req.user})
    } else {
        res.json({user: null})
    }
  res.send('respond with a resource');
});

// // For logging-in a user who is already signed-up
// router.post('/login',
//     (req, res, next) => {
//         console.log('routes/user.js, login, the value of req.body is: ') // line only for debugging for me
//         console.log(req.body)
//         /* the above is only for debugging and will print in the terminal -  { username: 'rohanpaul2@gmail.com', password: '123456' }  */
//         next()
//     },
//     passport.authenticate('local'),
//     (req, res) => {
//         console.log('loggedin', req.user);
//         /* the  above line is only for debugging and will print the below in Terminal
//         logged in { _id: 5b7a79a545de52523ea1a482,
//         username: 'rohanpaul2@gmail.com',
//         password: '$2a$10$9eC8kXcVduG3885FLT1AweYIYsfvwLUIFJ65lvIvUZQZhcWpL6H0q',
//  }
// */
//         var userInfo = {
//             username: req.user.username
//         };
//         res.send(userInfo)
//     }
// )

router.post('/user/loginProcess', function(req, res, next) {
  res.send('respond with a resource');
});

// route for logging out the user. So this router will handle axios.post('/user/logout') request coming from client
router.post('/logout', (req, res) => {
  if (req.user) {
      // console.log('Before logging out see the contents of req.body');
      // console.log(req.body);
      // req.logout()
      res.send({ msg: 'loggging out' })
  } else {
      res.send({msg: 'no user to logout'})
  }
})


module.exports = router;
