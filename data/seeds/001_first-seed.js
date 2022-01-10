const products = [
  {
    title: 'Aleemoo Adventure Pants',
    description: 'Awesome, durable pants with 11 useful pockets to accompany you on every adventure— from hikes to airports to happy hours and beyond.',
    funds_goal: 20000,
    funds_raised: 600,
    images: '{"https://ksr-ugc.imgix.net/assets/032/230/076/25ac0b7f756193aa1d8391037ab4aafd_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1552&h=873&fit=crop&v=1612288419&auto=format&frame=1&q=92&s=e452510c7c4dc460797ee779742c5e43", "https://cdn.blessthisstuff.com/imagens/stuff/ecotrek-adventure-pants.jpg"}',
    creator_name: 'Jane Russell',
    creator_email: 'jr_oregon_rocks@gmail.com',
  },
  {
    title: 'Laundry Nugget',
    description: 'This washing machine will save on electricy.Manually fill it with water, toss in the laundry detergent of your choice, and pedal away. Not only good for the environment but great for a daily workout. Typical wash time ranges depending on speed of pedaling: generally around 10 minutes. Drain and refill with rinse water and pedal for 5-10 minutes longer. Drain and dry.',
    funds_goal: 50000,
    funds_raised: 5000,
    images: '{"https://www.simplemost.com/wp-content/uploads/2018/05/drumi-machine.jpg", "https://www.ecohome.net/media/articles/images/76/a2/76a2236fb79ce89955710b6313bb7feea0c78136/76a2236fb79ce89955710b631_UeJzp0a.jpg", "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2017/06/txog9jfao1gexhxtjag42d3hd-1496468393.jpg"}',
    creator_name: 'Rooster Cogburn',
    creator_email: 'roosterCog@hotmail.com',
  },
  {
    title: 'FUFOFA | Get a Perfect Tan Right Through Your Suit',
    description: 'Stunning, shaping, quick-dry swimwear that enables you to tan through your suit to give you an even bronze.',
    funds_goal: 35000,
    funds_raised: 0,
    images: '{"https://ksr-ugc.imgix.net/assets/035/498/146/212b5dbc2fd3e567a811bedfe7903173_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1636280022&auto=format&frame=1&q=92&s=2f37a09bc8d74d911d59104b12997f03", "https://cdn.shopify.com/s/files/1/0742/1299/products/bali-tan-through-support-top-swimsuit-263503.jpg?v=1637315437", "https://cdn.shopify.com/s/files/1/1753/9899/files/sun-through_crop_large.jpg?v=1521475373"}',
    creator_name: 'Alice Crusher',
    creator_email: 'candle_maker22@yahoo.com',
  }
];

exports.seed = function (knex) {
  return knex('products').del()
  .then(() => {
    return knex('products').insert(products)
  })
};
