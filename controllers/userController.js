const Usuario = require('../models/Usuario'); 


  //CRUD
  //READER faz consulta  e lista na pagina renderizada
  exports.listarUsuarios = async (req, res) => {
    try {
      const usuarios = await Usuario.findAll({});
      const usuariosComPropriedades = usuarios.map((usuario) => ({
        nome: usuario.nome,
        id: usuario.id,
      }));
      res.render("home", { usuarios: usuariosComPropriedades });
    } catch (err) {
      res.send(`Ocorreu um erro: ${err}`);
      console.log(`Ocorreu um erro: ${err}`);
    }
  };
  

  //exibir pagina de cadastro
  exports.pageCadastro = (req, res) => {
    res.render("cadastro");
  };

  // CREATE Rota para receber dados do formulario/ criar user
  exports.add = async (req, res) => {
    const nome = req.body.nome;

    try {
      await Usuario.create({ nome });

      res.redirect("/");
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao cadastrar o usuário");
    }
  };

  // Rota para excluir um registro com base no ID
  exports.delete = async (req, res) => {
    const id = req.params.id;

    console.log(`Tentando excluir o usuário com ID ${id}`);

    try {
        await Usuario.destroy({
            where: {
                id: id
            }
        });

        res.redirect('/'); // Redireciona para a página de listagem após a exclusão bem-sucedida
    } catch (err) {
        console.error(`Erro ao excluir o registro: ${err}`);
        res.send(`Ocorreu um erro ao excluir o registro: ${err}`);
    }
  }

  //Usuario.findByPk(id)
  exports.pageAtualizar = async (req, res) => {
    try {
      const id = req.params.id
      const usuarios = await Usuario.findAll({where: {id:id}});
      const usuariosComPropriedades = usuarios.map((usuario) => ({
        nome: usuario.nome,
        id: usuario.id,
      }));
      res.render("update", { usuarios: usuariosComPropriedades });
    } catch (err) {
      res.send(`Ocorreu um erro: ${err}`);
      console.log(`Ocorreu um erro: ${err}`);
    }
  };
  
  //rota para lidar com edicao
  exports.updateId = async (req, res) => {
    try {
      const { id, nome } = req.body;
      const [rowsAffected] = await Usuario.update(
        { nome: nome },
        { where: { id: id } }
      );
  
      if (rowsAffected === 0) {
        return res.status(404).send('Usuário não encontrado');
      }
  
      console.log('Edição realizada com sucesso!');
      res.redirect('/'); // Redirecionar para a página inicial ou apropriada após a edição.
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  
  




