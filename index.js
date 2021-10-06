const express = require('express')
const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
var cors = require('cors')

app.use(cors())
const gallery= require('./data/gallery.json')

app.get('/', (req, res) => {
    res.render('pages/index.ejs', { title: 'Home' })
})
app.get('/about',(req,res)=>{
    res.render('pages/about.ejs',{title:'About'})
})
app.get('/team',(req,res)=>{
    res.render('pages/team.ejs',{title:'Team'})
})
app.get('/contact',(req,res)=>{
    res.render('pages/contact.ejs',{title:'Contact'})
})
app.get('/gallery',(req,res)=>{
    res.render('pages/gallery.ejs',{title:'Gallery', galleryArray:gallery})
})

app.listen(3000, () => {
    console.log('listening at localhost:3000')
})