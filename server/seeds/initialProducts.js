/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del();
  await knex('products').insert([
    {
      title: 'Escuadra',
      price: 123.45,
      img: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
      description:
        'The term rule can refer, either to measure or calculate some asymmetrical object square',
      code: 45634,
      stock: 156,
    },
    {
      title: 'Globo Terraqueo',
      price: 345.67,
      img: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
      description:
        'A globe is a spherical model of Earth, of some other celestial body, or of the celestial sphere. Globes serve purposes similar to maps, but unlike maps, they do not distort the surface that they portray except to scale it down.',
      code: 43553,
      stock: 12,
    },
    {
      title: 'Calculadora 3fd4',
      price: 1860,
      img: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
      description:
        'An electronic calculator is typically a portable electronic device used to perform calculations, ranging from basic arithmetic to complex mathematics.',
      code: 45645,
      stock: 65,
    },
  ]);
};
