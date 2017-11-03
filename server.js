const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static("assets"))

app.get('/', function(req, res) {
    res.render("pages/index.ejs")
})
app.get('/staff', function(req, res) {
    res.render("pages/staff.ejs")
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})