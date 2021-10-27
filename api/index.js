//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { Type, conn } = require('./src/db.js');
const axios = require('axios');

// Syncing all the models at once.
conn.sync({ force: true }).then( async () => {

  try{
    //Pre-carga de la base de datos con los tipos
    let typesApi = await axios.get('https://pokeapi.co/api/v2/type');
    let types = [];
    
    typesApi.data.results.map((el) => {types.push({name: el.name})})
    await Type.bulkCreate(types);
    
    // const setPokes = [
    //   {id: 10001, name: 'Pok 1', height: '40', weight: '1', life: '10'},
    //   {id: 10002, name: 'Pok 2', height: '41', weight: '2', life: '11'},
    //   {id: 10003, name: 'Pok 3', height: '42', weight: '3', life: '12'},
    //   {id: 10004, name: 'Pok 4', height: '43', weight: '4', life: '13'},
    //   {id: 10005, name: 'Pok 5', height: '44', weight: '5', life: '14'},
    // ]
    // await Pokemon.bulkCreate(setPokes);
  }
  catch(error){
    console.log(error)
  }

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
