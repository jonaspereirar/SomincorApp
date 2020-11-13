module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'locations',
      [
        {
          name: 'Corvo',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Neves',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Zambujal',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lombador',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'LS',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Superfície',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Mina',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('locations', null, {});
  },
};
