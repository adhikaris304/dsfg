
exports.up = async function(knex, Promise) {
    await knex.schema.hasTable('itemsTbl');
  
    return await knex.schema.createTable('userTbl', table=>{
      table.increaments('itemID');
      table.string('itemName');
      table.string('itemPrice');
      table.string('itemDesc');
      table.string('itemImage');
    });
   
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('userTbl'); 
  
  };
  