const data = require ("./data")
const express = require("express")
const app = express()
// const path = require ("path")
const mustache = require("mustache-express")
app.engine('mustache', mustache())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use( express.static('public'))

app.get("/", function(request, response){
  const title = "ChipedIn: LinkedIn for Robots"
  const dataInfo = data.users
  response.render('index', {
    title: title,
    data: dataInfo
  })
})

app.get('/users/:id', function(request, response){

  const robot = parseInt(request.params.id)
  let profile = false;
  for (var i = 0; i < data.users.length; i++) {
    if (data.users[i].id === robot){
      profile = data.users[i]
    }
  }
  const dataInfo = data.users
  response.render("profile", {
    profile: profile,
    data: dataInfo
  })
})

app.listen(3000, function(){
  console.log("Express started on port 3000")
})
