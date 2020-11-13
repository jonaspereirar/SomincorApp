module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'eletrics',
      [
        {
          name: 'Avanço de Quadro',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Reparaçao de Cabo',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Instalação de Quadro',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Fornecimento de Energia(PT)',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Instalar Iluminação',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Verificar Motor',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Inspecionar',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Reparar',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('eletrics', null, {});
  },
};
