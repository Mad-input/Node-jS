const express = require('express');
const router = express.Router(); 


router.get('/', (req, res)=> {
    res.render('index.html', {title:'Firs Website'})
});

router.get('/contact', (req, res)=> {
    res.render('contact.html', {title:'Firs Website Contact'})
});

module.exports = router;