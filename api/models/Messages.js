/**
 * Messages.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
       firstName: { type: 'string', required: true, },
       lastName: { type: 'string', required: true, },
       phoneNumber: { type: 'string', required: true, },
       emailAdress: { type: 'string', email:true, required: true },
       subject: {type: 'string', required: true, },
       body: {type: 'string', required: true, }

  },
  connection:'herokuPostgresqlServer'
};

