// app.get('/', (req, res) => res.render('/index'))

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   // .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('/index'))
// //   .get('/cool', (req, res) => res.send(cool()))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

//FIRST/READING -------------------------
// var fs=require('fs');
// var data=fs.readFileSync('daredata.json', 'utf8');
// var dares=JSON.parse(data);

// console.log(dares);

//SECOND/POSTING? -------------------------------
// const fs = require('fs');
// var fileName = './daredata.json';
// var file = require(fileName);
// file.dare = "new value";
// fs.writeFile(fileName, JSON.stringify(file), function (err) {
//   if (err) return console.log(err);
//   console.log(JSON.stringify(file, null, 2));
//   console.log('writing to ' + fileName);
// });