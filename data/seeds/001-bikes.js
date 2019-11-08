
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bikes').del()
    .then(function () {
      // Inserts seed entries
      return knex('bikes').insert([
        {
          year: 2005, 
          make : "Honda",
          model: "EX456", 
          engine: "Like a million ccs",
          mileage: 2000,
          VIN: "ih8nobody",
          edition: "ultra"
        },
          {
          year: 2005, 
          make : "Honda",
          model: "555", 
          engine: "Puny",
          mileage: 120000,
          VIN: "broknfdj7",
          edition: "lame"
        },
          {
          year: 2014, 
          make : "Honda",
          model: "1000 RR", 
          engine: "Loaded Up FR",
          mileage: 6000,
          VIN: "try44n2catchme4funzies",
          edition: "Repsol"}
      ]);
    });
};
