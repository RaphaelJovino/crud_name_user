  //CRIACAO DE MODELO
  const { Sequelize,DataTypes,sequelize } = require('../src/config/db');
  
  const Usuario = sequelize.define("usuarios", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false, // Não permite deixar valor nulo
      primaryKey: true,
    },
    nome: { 
      type: DataTypes.STRING,
      allowNull: false,
     },
    // idade: { 
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
  }, {
    timestamps: false, // Desabilita as timestamps  
  });
  
  //Usuario.sync() // Isso cria a tabela se ela não existir (e não faz nada se já existir)

  //Usuario.sync({ force: true })-// Isso cria a tabela, descartando-a primeiro se ela já existir

  //User.sync({ alter: true })- Essa opção verifica o estado atual da tabela no banco de dados e faz as alterações necessárias para que ela corresponda ao modelo. Isso é útil quando você deseja fazer alterações no modelo (por exemplo, adicionar ou remover colunas) sem perder os dados existentes na tabela.


module.exports = Usuario