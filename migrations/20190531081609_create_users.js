
exports.up = async function(knex, Promise) {
  await knex.schema.hasTable('userTbl');

  return await knex.schema.createTable('userTbl', table=>{
    table.increaments('userId');
    table.string('userFname');
    table.string('userLname');
    table.string('userFname');
    table.string('password');
  });
 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('userTbl'); 

};
