module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'areas',
      [
        {
          name: 'Mecânica',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Elétrica',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Serralheria',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Instrumentação',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'BackFill',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'PasteFill',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Mec.Rochas',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Topografia',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('areas', null, {});
  },
};
