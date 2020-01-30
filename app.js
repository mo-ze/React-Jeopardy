let express = require('express');
let app = express();
app.use(express.json());// this is important forreq.body
app.use(express.static('public'));
   app.get('/', (req, res) => {
        res.send('hello there')
         });

// error handler
//FIXME

// route
// app.get("/error/:param1",(req,res,next)=>{ if(req.params.param1=='err'){var err=new Error("not here");next(err);} else return {res.send()}});
 // but send something


    app.set('port', process.env.PORT || 8080);
    let server = app.listen(app.settings.port, () => {
    console.log('Server ready on ', app.settings.port);
         });
