const server = require('http');

const app = server.createServer((req, res)=>{
    if(req.method == 'POST'){
        let body = '';
        req.on('data', (chunk)=>{
            body += chunk;
        });

        req.on('end', ()=>{
            let mensaje = body.split('=')[1];

            let concatenation = '';

            for (let i = 0; i < mensaje.length; i++) {
                if (mensaje.charAt(i)!='+'){
                    concatenation += mensaje.charAt(i) + '<br>';
                }
            }

            res.setHeader('Content-Type', 'text/html');
            res.end(concatenation);
        
        });
    }
    else{
    res.setHeader('Content-Type', 'text/html');
    res.end(`<form method="POST">
                <input name="msg" type="text"/>
                <br><br>
                <button type="submit">Convertir</button>            
            </form>`);
    }
    
});

app.listen(5005);