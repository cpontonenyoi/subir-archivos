const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');



const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static('public'));
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.post('/upload', (req, res) => {
    let formatFile = req.body.file.split('data:image/')[1].split(';base64,')[0];
    let base64Image = req.body.file.split(';base64,').pop();
    req.body.nombre;
    fs.writeFile("./public/images/out."+formatFile, base64Image, {encoding: 'base64'}, function() {
        console.log('file created')
    });
    
    res.send('hello');
});

app.listen(3000);