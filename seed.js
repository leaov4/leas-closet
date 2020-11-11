const { green, red } = require("chalk");
const { db } = require("./server/db");
const { Shirt, Pants } = require('./server/db/')

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
    const shirts = [
        {
            name: 'shirt1',
            description: 'a shirt',
            url: 'https://aritzia.scene7.com/is/image/Aritzia/large/f20_07_a03_74147_3030_on_c.jpg'
          },
          {
            name: 'shirt2',
            description: 'another shirt',
            url: 'https://aritzia.scene7.com/is/image/Aritzia/large/f20_03_a01_73538_19049_off_a.jpg'
          },
          {
            name: 'shirt3',
            description: 'another shirt again',
            url: 'https://aritzia.scene7.com/is/image/Aritzia/large/s20_03_a01_66393_7640_off_a.jpg'
          },
          {
            name: 'shirt4',
            description: 'another shirt 2x',
            url: 'https://aritzia.scene7.com/is/image/Aritzia/large/s20_07_a01_76995_12269_off_a.jpg'
          }
    ]

    const pants1 = [
      {
        name: 'pants 1',
        description: 'some pants',
        url: 'https://aritzia.scene7.com/is/image/Aritzia/large/f20_10_a06_75828_19446_off_a.jpg'
      },
      {
        name: 'pants 2',
        description: 'some pants',
        url: 'https://aritzia.scene7.com/is/image/Aritzia/large/f20_10_a06_78229_19092_off_a.jpg'
      },
      {
        name: 'pants 3',
        description: 'some pants',
        url: 'https://aritzia.scene7.com/is/image/Aritzia/large/f20_01_a06_77993_19521_on_a.jpg'
      },
      {
        name: 'pants 4',
        description: 'some pants',
        url: 'https://aritzia.scene7.com/is/image/Aritzia/large/f20_04_a06_79493_1274_off_a.jpg'
      },
    ]

    const createdShirts = await Shirt.bulkCreate(shirts)
    const createdPants = await Pants.bulkCreate(pants1)
    console.log(green('Seeded campuses'))
    return(createdShirts, createdPants)

  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch(err => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}