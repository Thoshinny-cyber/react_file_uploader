require("appdynamics").profile({
 controllerHostName: 'hepburn202407091031565.saas.appdynamics.com',
 controllerPort: 443,
 
 // If SSL, be sure to enable the next line
 controllerSslEnabled: true,

 accountName: 'hepburn202407091031565',
 accountAccessKey: 'c39qq88kib4w',
 applicationName: 'Nodeapp',
 tierName: 'tier1',
 nodeName: 'process' // The controller will automatically append the node name with a unique number
});
const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

app.listen(5000, () => console.log('Server Started...'));
