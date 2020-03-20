module.exports = (app) => {

    app.get('/', function (resp, resp) {
        resp.send(`
                 <html>
                     <head>
                         <meta charset="utf-8">
                     </head>
                     <body>
                         <h1> Idook Digital Access dev </h1>
                     </body> 
                 </html>
             `);
    });
    
    app.get('/dashboard', function (resp, resp) {
        resp.marko(
                 require('../views/livros/lista/lista.marko')
             );
    })
};

