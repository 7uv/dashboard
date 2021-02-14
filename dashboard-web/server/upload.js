const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');
const copyFrom = require('pg-copy-streams').from;
const Readable = require('stream').Readable;
const { Pool,Client } = require('pg');
const path = require('path');
// const datasourcesConfigFilePath = path.join(__dirname,'..','..','server','datasources.json');
// const datasources = JSON.parse(fs.readFileSync(datasourcesConfigFilePath, 'utf8'));
const pool = new Pool({
  user: 'pguser', //datasources.PG.user,
  host: '127.0.0.1', //datasources.PG.host,
  database: 'pgdb', //datasources.PG.database,
  password: 'Sayantan.123', //datasources.PG.password,
  port: '5434', //datasources.PG.port,
});

module.exports = function upload(req, res) {
  let form = new IncomingForm();
  let readStream;
  let data = '';
  let today = new Date/1E3|0;
  //let pool = new Pool();

  form.on('file', (field, file) => {
    console.log('file', file.name, 'uploaded on', new Date().toLocaleString('en-GB', { timeZone: 'UTC' }));
    let fileName = './uploads/'+today+'_'+file.name;
    readStream = fs.createReadStream(file.path);
    readStream.setEncoding('utf8');
    let writeStream = fs.createWriteStream(fileName);
      readStream.pipe(writeStream);
      readStream.pipe(res);
      readStream.on('data', function (chunk) {
        data += chunk;
    });
    pool.connect(function(err, client, done) {
      let stream = null;
      console.log('connected to database . . .');
      stream = client.query(copyFrom('COPY customer FROM STDIN'));
      readStream.pipe(stream);
      readStream.on('data', function () {
        console.log('data collected... ');
        readStream.pipe(stream);
      });
      readStream.on('error', function(){
        console.log('error in upload!');
      });
      stream.on('error', function(){
        console.log('error in file transfer!');
      });
      stream.on('end', function(){
        console.log('complete db upload!!!');
      });
    });
  });
  form.on('end', () => {
    res.json();
  });
  form.parse(req);
};
