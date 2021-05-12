const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const pdfTemplate = require('./documents');



const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/images', express.static('images'));


app.post('/create-pdf', (req, res) => {
    let bankObj = {"melbourne": "BOM_", "suncorp": "SUN_", "boq": "BOQ_", "macquarie": "MACQ_" }
    var fileName = bankObj[req.body.bank_name]+req.body.full_name+'_'+Math.floor(Date.now() / 1000)+'_PDF.pdf';
    console.log(req.body.bank_name);
    pdf.create(pdfTemplate(req.body), {}).toFile('pdf/'+fileName, (err) => {
        if (err) {
            var response = {
                errorCode: 1,
                msg: err
            }
            response = JSON.stringify(
                response
            )
        } else {
            var response = {
                errorCode: 0,
                msg: 'success',
                name: fileName
            }
            response = JSON.stringify(
                response
            )
        }
        res.send(response)
    });
})

  app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/pdf/${req.query.name}`);
  });

app.listen(port, () => console.log(`Listening on port ${port} `));
