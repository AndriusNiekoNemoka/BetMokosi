const express = require('express');
const bodyParser = require('body-parser');
const app = express();  
app.use(bodyParser.urlencoded({extended: true}));            
const port = 5000;      
const db = require('./database');
app.set("view engine", "ejs")

app.get('/pedos/:id', (req, res) => {       
    let kintamasis = req.params.id * 0.03280;
    kintamais = parseFloat(kintamasis).toFixed(3)
    res.send(String(kintamasis + " Pėdos"));

});


app.get('/pedos/10', (req, res) => {       
    let kintamasis = 10 * 0.03280;
    kintamais = parseFloat(kintamasis).toFixed(3)
    res.send(String(kintamasis + " Pėdos"));
  
    app.get('/pedos/20', (req, res) => {       
        let kintamasis = 20 * 0.03280;
        kintamais = parseFloat(kintamasis).toFixed(3)
        res.send(String(kintamasis + " Pėdos")); });

        app.get('/pedos/30', (req, res) => {       
            let kintamasis = 30 * 0.03280;
            kintamais = parseFloat(kintamasis).toFixed(3)
            res.send(String(kintamasis + " Pėdos"));
        });
});
app.get('/labas/:id', (req, res) => {       
    let labux = req.params.id;
    res.send(String("labas " + labux));


});

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});     
});


app.get('/valtys', async (req, res) => {
    const results = await db.promise().query(`SELECT * FROM valtciu_registras`);

	res.render("valtys", result = results[0]);
});

app.get('/valtys/istrinti/:id', async (req, res) => {
    let id = req.params.id;
    const results = await db.promise().query(`DELETE FROM valtciu_registras WHERE id=${id}  LIMIT 1`);
    res.redirect('/valtys');    
});


app.get('/valtys_prideti', async (req, res) => {
    res.render("valtys_prideti");
});

app.post('/valtys/nusiusti', async (req, res) => {
  console.log(req.body.pavad);
  console.log(req.body.sav);
  console.log(req.body.telnr);
  const results = await db.promise().query(`INSERT INTO valtciu_registras (id, Valties_pavadinimas, Valties_savininkas, Valties_savininko_telefono_numeris) VALUES (NULL, '${req.body.pavad}', '${req.body.sav}', '${req.body.telnr}')`);
    res.redirect("/valtys");
});


app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});