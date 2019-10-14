const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static("assets"))
// Home page
app.get('/', function(req, res) {
    res.render("pages/index.ejs")
})
// Staff Page
app.get('/staff', function(req, res) {
    res.render("pages/staff.ejs")
})
// Listen
app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
