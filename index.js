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
  const results = await db.promise().query(`INSERT INTO valtciu_registras (id, Valties_pavadinimas, Valties_savininkas, Valties_savininko_telefono_numeris) VALUES (NULL, '${req.body.pavad}', '${req.body.sav}', '${req.body.telnr}')`);
    res.redirect("/valtys");
});

app.get('/valtys_redaguoti/:id', async (req, res) => {
    let id = req.params.id;
    let results = await db.promise().query(`SELECT * FROM  valtciu_registras WHERE id = ${id}`);
    res.render("valtys_redaguoti", result = results[0]);
});

app.post('/valtys/redaguoti', async (req, res) => {
    const results = await db.promise().query(`UPDATE valtciu_registras SET Valties_pavadinimas = '${req.body.pavad}', Valties_savininkas = '${req.body.sav}', Valties_savininko_telefono_numeris = '${req.body.telnr}' WHERE valtciu_registras.id = '${req.body.id}'`);
    res.redirect("/valtys");   
});

app.get('/uostai', async (req, res) => {
    const results = await db.promise().query(`SELECT * FROM uostu_registras`);
	res.render("uostai", result = results[0]);
});

app.get('/uostai_prideti', async (req, res) => {
    res.render("uostai_prideti");
});

app.post('/uostai/nusiustiu', async (req, res) => {
    const results = await db.promise().query(`INSERT INTO uostu_registras (id, Uosto_pavadinimas, Uosto_koordinates, Uosto_miestas) VALUES (NULL, '${req.body.upavad}', '${req.body.ukoor}', '${req.body.umiest}')`);
      res.redirect("/uostai");
  });

  app.get('/uostai_redaguoti/:id', async (req, res) => {
    let id = req.params.id;
    let results = await db.promise().query(`SELECT * FROM  uostu_registras WHERE id = ${id}`);
    res.render("Uostai_redaguoti", result = results[0]);
});

  app.post('/uostai/redaguoti', async (req, res) => {
   const results = await db.promise().query(`UPDATE uostu_registras SET Uosto_pavadinimas = '${req.body.upavad}', Uosto_koordinates = '${req.body.ukoor}', Uosto_miestas = '${req.body.umiest}' WHERE uostu_registras.id = '${req.body.id}'`);
   res.redirect("/uostai");   
});

app.get('/uostai/istrinti/:id', async (req, res) => {
    let id = req.params.id;
    const results = await db.promise().query(`DELETE FROM uostu_registras WHERE id=${id}  LIMIT 1`);
    res.redirect('/uostai');    
});


app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});


