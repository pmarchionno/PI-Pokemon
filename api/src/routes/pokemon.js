const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { response } = require('../app');
const { Pokemon, Type } = require('../db');
const { Op } = require('sequelize');

router.get('/', async function(req, res, next){
  const { name } = req.query;
  
  try{
    if(!name){
      let pokeApi = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=4&offset=0');
      let pokeApiUrl = pokeApi.data.results?.map((el) => axios.get(el.url));

      let pokeApiInfo = await axios.all(pokeApiUrl);

      let pokemonApi = pokeApiInfo.map((el) => {
        let obj = {}
        obj = {
          id: el.data.id,
          name: el.data.name.charAt(0).toUpperCase() + el.data.name.slice(1),
          life: el.data.stats[0].base_stat,
          attack: el.data.stats[1].base_stat,
          defense: el.data.stats[2].base_stat,
          speed: el.data.stats[5].base_stat,
          height: el.data.height,
          weight: el.data.weight,
          image: el.data.sprites.front_default,
          flagId: false,
          types: el.data.types.length > 0 ? el.data.types.map((obj) => obj.type.name) : []
          }
        return obj;
      })

      let pokeDb = await Pokemon.findAll({
        include: {
          model: Type,
            attributes: ['name'],
        }
      })

      let pokemonBd = pokeDb.map((el) => {
        let obj = {
          id: el.id,
          name: el.name.charAt(0).toUpperCase() + el.name.slice(1),
          life: el.life,
          attack: el.attack,
          defense: el.defense,
          speed: el.speed,
          height: el.height,
          weight: el.weight,
          image: el.image,
          flagId: flagId,
          types: el.Types.map((obj) => obj.name)
        }
        return obj;
      })

      return res.json([...pokemonApi, ...pokemonBd]);
    }else{
      let pokeApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      
      let pokemonApi = [{
        id: pokeApi.data.id,
        name: pokeApi.data.name.charAt(0).toUpperCase() + pokeApi.data.name.slice(1), 
        life: pokeApi.data.stats[0].base_stat,
        attack: pokeApi.data.stats[1].base_stat,
        defense: pokeApi.data.stats[2].base_stat,
        speed: pokeApi.data.stats[5].base_stat,
        height: pokeApi.data.height,
        weight: pokeApi.data.weight,
        image: pokeApi.data.sprites.front_default,
        flagId: false,
        types: pokeApi.data.types.length > 0 ? pokeApi.data.types.map((obj) => obj.type.name) : []
      }]

      let pokeDb = await Pokemon.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: {
          model: Type,
            attributes: ['name'],
        }
      })

      let pokemonBd = pokeDb.map((el) => {
        let obj = {
          id: el.id,
          name: el.name.charAt(0).toUpperCase() + el.name.slice(1),
          life: el.life,
          attack: el.attack,
          defense: el.defense,
          speed: el.speed,
          height: el.height,
          weight: el.weight,
          image: el.image,
          flagId: flagId,
          types: el.Types.map((obj) => obj.name)
        }
        return obj ;
      })

      let pokes = [...pokemonApi, ...pokemonBd];

      if(pokes.length > 0){
        return res.json(pokes);
      }
      else{
        return res.status(404).send({message: 'Pokemon Not Found'})
      }
    }
  }
  catch(error){
    next(error)
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { flagId } = req.body;

  if(!id) return res.next({message: 'Id is require!', status: 500});
  if(flagId){
    let poke = Pokemon.findByPk(id, {include: [Type]})
    let obj = {
      id: poke.id,
      name: poke.name,
      life: poke.life,
      attack: poke.attack,
      defense: poke.defense,
      speed: poke.speed,
      height: poke.height,
      weight: poke.weight,
      image: poke.image,
      flagId: flagId,
      types: poke.Types.map((obj) => obj.name)
    }

    if(obj?.id) return res.json(obj);
    return res.status(500).send({message: 'Pokemon not Found!'})
  }else{
    let poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      
    let obj = {
      id: poke.data.id,
      name: poke.data.name, 
      life: poke.data.stats[0].base_stat,
      attack: poke.data.stats[1].base_stat,
      defense: poke.data.stats[2].base_stat,
      speed: poke.data.stats[5].base_stat,
      height: poke.data.height,
      weight: poke.data.weight,
      image: poke.data.sprites.front_default,
      flagId: false,
      types: poke.data.types.length > 0 ? pokeApi.data.types.map((obj) => obj.type.name) : []
    }

    if(obj?.id) return res.json(obj);
    return res.next({message: 'Pokemon not Found!', status: 500});
  }

});

router.post('/', async (req, res, next) => {
  const { name, life, attack, defense, speed, height, image, weight, sprite, types } = req.body;

  try{

    //Validation
    let poke;
    poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    if(poke.data?.id > 0)  return res.status(400).send({message: 'The Pokemon Already Exists!'})

    poke = await Pokemon.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      }
    })
    if(poke.length > 0) return res.status(400).send({message: 'The Pokemon Already Exists!'})

    const newPoke = await Pokemon.create(
      {
        name,
        life,
        attack,
        defense,
        speed,
        height,
        weight,
        image,
        flagId: true,
      },
      {fields: ["name", "life", "attack", "defense", "speed", "height", "weight", "image", "flagId"]}
    );

    const listTypes = await Type.findAll({
      where: { name: types }
    });
    newPoke.addType(listTypes);

    // let listTypes = await Promise.all(
    //   types.map((el) => 
    //     Type.findOne({ where: { name: el } })
    //   )
    // )
    // newPoke.setTypes(typesPok);

    res.status(200).json(newPoke);
  } catch(error){
    return res.status(400).send({message: 'Could not Create Pokemon!'})
  }
});

module.exports = router;
