//CONEXAO COM BANCO
const {Sequelize,DataTypes} =require('sequelize');

const sequelize = new Sequelize('cadastro', 'raphael', '2002', {
  host: 'localhost',
  dialect: 'mysql'
})

async function connectToDatabase(){
try {
  await sequelize.authenticate();
  console.log('Conexao realizada com sucesso!');
} catch (error) {
  console.error('Erro ao conectar ', error);
}
}

connectToDatabase()
  
module.exports = {
  sequelize, 
  Sequelize, 
  DataTypes
}




