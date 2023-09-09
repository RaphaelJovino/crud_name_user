//importacao de modulos e paginas
const  express = require  ('express');
const {engine} = require('express-handlebars')
const controller = require('../crud_name_user/controllers/userController')
const path = require("path");
const methodOverride = require('method-override');
// ...



const PORT = 3000;
const app = express(); 
app.use(methodOverride('_method'));


//Configurações
   //handlebars
   app.engine('handlebars', engine());
   app.set('view engine', 'handlebars');
   app.set('views', './views');
   app.set('views', path.join(__dirname, 'views'));

   
   app.use(express.urlencoded({ extended: true }));
   app.use(express.json());
   
    //rotas controller
  app.get('/', controller.listarUsuarios);
  app.get('/cadastro', controller.pageCadastro)
  app.post('/add', controller.add);
  app.post('/deletar/:id', controller.delete);
  app.get('/pageAtualizar/:id', controller.pageAtualizar);
  app.post('/updateId', controller.updateId);

   
 app.listen(PORT, async () => {
    console.log(`Servidor Rodando na porta: ${PORT}`);
  });
