/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');
const { v4: uuidv4 } = require('uuid');

const agent = session(app);
const pokemon = {
  id: uuidv4(),
  name: 'Pikachu',
  life: 39,
  attack: 40,
  defense: 41,
  speed: 42,
  height: 43,
  weight: 44,
  image: "https://images4.alphacoders.com/641/641968.jpg",
  types: ["normal", "fighting"]
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemon', () => {
    it('should get 200', () =>
      agent.get('/pokemon').expect(200)
    );

    it('should throw an error message if the name does not exist', async () => {
      agent.get('/pokemons?name=poke123').expect({message: 'Pokemon Not Found'});
    });
  });
});
