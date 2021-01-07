export default {
  state: {
    shopList: [
      {
        id: 1,
        title: 'Nike Red',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eos dicta voluptatum cum tenetur facilis, architecto neque consequuntur possimus error temporibus, excepturi placeat iste vel, in aliquam! Adipisci, quaerat quibusdam.',
        img: require('../assets/img/1.png'), // eslint-disable-line global-require
        gallery: [
          {
            name: 'Nike boots First',
            img: require('../assets/img/1.png'), // eslint-disable-line global-require
          },
          {
            name: 'Nike boots Second',
            img: require('../assets/img/2.png'), // eslint-disable-line global-require
          },
          {
            name: 'Nike boots Third',
            img: require('../assets/img/3.png'), // eslint-disable-line global-require
          },
        ],
      },
      {
        id: 2,
        title: 'Nike Default',
        descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ab quaerat amet quia? Veritatis adipisci facilis, rerum officia dolores placeat eos maxime eaque laboriosam ex repellendus exercitationem aliquam, ratione repudiandae.',
        img: require('../assets/img/4.png'), // eslint-disable-line global-require
        gallery: [
          {
            name: 'Nike boots First',
            img: require('../assets/img/4.png'), // eslint-disable-line global-require
          },
          {
            name: 'Nike boots Second',
            img: require('../assets/img/5.png'), // eslint-disable-line global-require
          },
          {
            name: 'Nike boots Third',
            img: require('../assets/img/6.png'), // eslint-disable-line global-require
          },
        ],
      },
      {
        id: 3,
        title: 'Nike Green',
        descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima obcaecati facilis molestiae iure, corporis illum vitae corrupti, recusandae atque facere qui beatae. Rem perferendis earum incidunt saepe tempore pariatur ipsum?',
        img: require('../assets/img/7.png'), // eslint-disable-line global-require
        gallery: [
          {
            name: 'Nike boots First',
            img: require('../assets/img/7.png'), // eslint-disable-line global-require
          },
          {
            name: 'Nike boots Second',
            img: require('../assets/img/8.png'), // eslint-disable-line global-require
          },
          {
            name: 'Nike boots Third',
            img: require('../assets/img/9.png'), // eslint-disable-line global-require
          },
        ],
      },
      {
        id: 4,
        title: 'Nike Street',
        descr: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus hic nihil harum placeat, sapiente culpa tempore, debitis provident, similique sequi iusto porro. Sapiente ipsam ut numquam assumenda aliquam voluptas ipsa!',
        img: require('../assets/img/10.png'), // eslint-disable-line global-require
        gallery: [
          {
            name: 'Nike boots Second',
            img: require('../assets/img/11.png'), // eslint-disable-line global-require
          },
          {
            name: 'Nike boots Third',
            img: require('../assets/img/12.png'), // eslint-disable-line global-require
          },
        ],
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getShopList(state) {
      return state.shopList;
    },
    getProduct: (state) => (id) => (
      state.shopList.find((product) => product.id === parseInt(id, 10))
    ),
  },
};
