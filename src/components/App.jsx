import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { Modal } from './Modal/Modal.jsx';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import { Loader } from './Loader/Loader.jsx';
import { ButtonLoadMore } from './ButtonLoadMore/ButtonLoadMore.jsx';
import css from './App.module.css';

const pixabayMockup = {
  total: 24409,
  totalHits: 500,
  hits: [
    {
      id: 736877,
      pageURL:
        'https://pixabay.com/photos/tree-cat-silhouette-moon-full-moon-736877/',
      type: 'photo',
      tags: 'tree, pet, cat',
      previewURL:
        'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/gf6b766ac67d409e4e5822159579be427c0263d1e9e08a017ff10c143e05f20e92b815b2cb7ae6c884b89c3b6015e3bd4_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/gc897b87d26050ea882a774aad9f96d774c034a5f18e164e09ee8c195c618a15f92d5c2cdd2efb942a005e567e533ddb74b012be44176c909a328ddb7eb056529_1280.jpg',
      imageWidth: 1920,
      imageHeight: 1282,
      imageSize: 97150,
      views: 1488564,
      downloads: 804892,
      collections: 2794,
      likes: 3275,
      comments: 620,
      user_id: 909086,
      user: 'Bessi',
      userImageURL:
        'https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg',
    },
    {
      id: 2083492,
      pageURL:
        'https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/',
      type: 'photo',
      tags: 'cat, young animal, kitten',
      previewURL:
        'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_150.jpg',
      previewWidth: 150,
      previewHeight: 91,
      webformatURL:
        'https://pixabay.com/get/g94145869ebb462ee953ddc1aa240e29151416515e8cc60b1cafe39b1170cd5cc4c998b2f109bd04bfb58e9eb2922ddd15584c7d2e7479e5ba26133a34ecc676d_640.jpg',
      webformatWidth: 640,
      webformatHeight: 390,
      largeImageURL:
        'https://pixabay.com/get/g80047fe02ff2f88c2e496343c9a4bbd18206251af6520def1998ed4a66dae832d88312b7b624a5ea40c10f605afafa0c652a7ae4662e963551679f46f40cec83_1280.jpg',
      imageWidth: 4928,
      imageHeight: 3008,
      imageSize: 4130948,
      views: 1431835,
      downloads: 860343,
      collections: 2443,
      likes: 2709,
      comments: 409,
      user_id: 1777190,
      user: 'susannp4',
      userImageURL:
        'https://cdn.pixabay.com/user/2015/12/16/17-56-55-832_250x250.jpg',
    },
    {
      id: 1285634,
      pageURL:
        'https://pixabay.com/photos/cat-cats-eyes-blue-eyes-gray-cat-1285634/',
      type: 'photo',
      tags: "cat, cat's eyes, blue eyes",
      previewURL:
        'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_150.png',
      previewWidth: 150,
      previewHeight: 94,
      webformatURL:
        'https://pixabay.com/get/gbf45e240b894d571d40d661e23583b40832f5eb1ef8c0bc95bf386e91267edcc92f0770d2017bfdd58aa3563cb8d3f775c59121b8036853712184b37b7ea301a_640.png',
      webformatWidth: 640,
      webformatHeight: 402,
      largeImageURL:
        'https://pixabay.com/get/gd87db6343a2365548b203dca6892c7bd9ee7d6c2a296e1b1b0f49c9fb02d0c5ab72c8860dbeaeccccb1d9ccb06270e30ca7e151cfc2c1c1a6f404fcf38706967_1280.png',
      imageWidth: 3677,
      imageHeight: 2310,
      imageSize: 11720209,
      views: 1071548,
      downloads: 579296,
      collections: 1801,
      likes: 1910,
      comments: 263,
      user_id: 127419,
      user: 'cocoparisienne',
      userImageURL:
        'https://cdn.pixabay.com/user/2023/10/15/14-40-46-737_250x250.jpeg',
    },
    {
      id: 1045782,
      pageURL:
        'https://pixabay.com/photos/cat-animal-cat-portrait-cats-eyes-1045782/',
      type: 'photo',
      tags: 'cat, animal, cat portrait',
      previewURL:
        'https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_150.jpg',
      previewWidth: 150,
      previewHeight: 102,
      webformatURL:
        'https://pixabay.com/get/gcd49a3fcfba4f6f23e1f7501cc1eebf95fd325af26d0aede0acc29fc41d33b79ea0d54509cf25805ac12d1c0970b888a7a46932317d229421135345a08c50300_640.jpg',
      webformatWidth: 640,
      webformatHeight: 437,
      largeImageURL:
        'https://pixabay.com/get/g2259bb11725c4ffd07f5ddd8f53e258c85d2bb395ce0ccbc9388384e3ece6f37b8fc6dda42696d2f562ff91a6c23ef7565a6a138036dba2995fa67b80743bca8_1280.jpg',
      imageWidth: 2064,
      imageHeight: 1410,
      imageSize: 1268850,
      views: 806615,
      downloads: 491741,
      collections: 1621,
      likes: 1897,
      comments: 323,
      user_id: 127419,
      user: 'cocoparisienne',
      userImageURL:
        'https://cdn.pixabay.com/user/2023/10/15/14-40-46-737_250x250.jpeg',
    },
    {
      id: 2536662,
      pageURL:
        'https://pixabay.com/photos/cat-flower-kitten-stone-pet-2536662/',
      type: 'photo',
      tags: 'cat, nature, flower',
      previewURL:
        'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/g311d040d0923a24139bcb2f8876952764197e5e6222a2953815441914df3645047c0e50ca2324c086f6af2cb7ab0ae63af7fe55569934b11fe88f40649bfc068_640.jpg',
      webformatWidth: 640,
      webformatHeight: 425,
      largeImageURL:
        'https://pixabay.com/get/g1330b60f530a0572756dc0d7046f157d98b4c06c5db8f8bde9b8181d9df9120a296b4e417a50a956daec90a315d7a4e00df72caf178bd2a38f0ce6f13ff233c8_1280.jpg',
      imageWidth: 4592,
      imageHeight: 3056,
      imageSize: 3178484,
      views: 1182503,
      downloads: 747525,
      collections: 1925,
      likes: 2323,
      comments: 388,
      user_id: 5987327,
      user: 'Dimhou',
      userImageURL:
        'https://cdn.pixabay.com/user/2024/01/02/15-48-44-721_250x250.jpeg',
    },
    {
      id: 323262,
      pageURL:
        'https://pixabay.com/photos/cat-pet-licking-animal-tabby-cat-323262/',
      type: 'photo',
      tags: 'cat, nature, pet',
      previewURL:
        'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/g0b5fbcc52556abe2a5f0daab07d1790fd406eae913a24bce2cbdbe0f9f16205fb8836bfcb8b98fce8bf073de09b76c92_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/gc476218317541b80385e617a260c4e08eaafa2e7a0acfafe6cf087050014b472d2cb8f047480b907aa326fcd0b88db30e8a09fec5ff84d514993021dc3397d99_1280.jpg',
      imageWidth: 2557,
      imageHeight: 1704,
      imageSize: 668468,
      views: 896698,
      downloads: 468974,
      collections: 1437,
      likes: 1800,
      comments: 329,
      user_id: 222368,
      user: 'TeamK',
      userImageURL:
        'https://cdn.pixabay.com/user/2020/11/21/08-20-58-568_250x250.jpg',
    },
    {
      id: 694730,
      pageURL:
        'https://pixabay.com/photos/maine-coon-cat-cats-eyes-black-cat-694730/',
      type: 'photo',
      tags: "maine coon, cat, cat's eyes",
      previewURL:
        'https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/g2cd6ba6abe5b6c6b873cb04a3a6bd0d5fed1aec9414b3ce113453395726f2704eb91878280768401bc20f6fba5133ad5_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/g10d443c8f2888cc394b3fa284a1061b7572c2d97ece2a30f5ad71419c75ee3994e7f68b9169c011942d5c7a7e9a083d8247a61cf52f3eba3430a600ef31b6b37_1280.jpg',
      imageWidth: 3235,
      imageHeight: 2157,
      imageSize: 546452,
      views: 779937,
      downloads: 486430,
      collections: 1499,
      likes: 1757,
      comments: 238,
      user_id: 887962,
      user: 'ClaudiaWollesen',
      userImageURL:
        'https://cdn.pixabay.com/user/2019/12/22/16-48-03-254_250x250.jpg',
    },
    {
      id: 2934720,
      pageURL:
        'https://pixabay.com/photos/cat-kitten-pets-animals-housecat-2934720/',
      type: 'photo',
      tags: 'cat, kitten, pets',
      previewURL:
        'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/g3b8f469f3735f635dcb3591a7384c44af815ee43b272dcb0a82e8e6a7e963c937425c51feb1b8e30aa0f655682cb59438b58e0340c53a95adff82906aaf7b2ca_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/gbc350c892af24b27589ab7ca017b483188804163edddc202df7ac16699768b2cba826eac6842bc723f2693060feed25d6bd40dd791dd3799f792d14be4a4c7fa_1280.jpg',
      imageWidth: 3495,
      imageHeight: 2330,
      imageSize: 1971228,
      views: 664496,
      downloads: 408494,
      collections: 1295,
      likes: 1520,
      comments: 254,
      user_id: 6995361,
      user: 'Kirgiz03',
      userImageURL:
        'https://cdn.pixabay.com/user/2017/11/14/22-33-33-341_250x250.jpg',
    },
    {
      id: 2948404,
      pageURL:
        'https://pixabay.com/photos/kitty-playful-flowers-wildflowers-2948404/',
      type: 'photo',
      tags: 'kitty, playful, nature',
      previewURL:
        'https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_150.jpg',
      previewWidth: 150,
      previewHeight: 101,
      webformatURL:
        'https://pixabay.com/get/g129f887429556daf6694c957bce71738d9a7642f950c60e0ae135a91d0976986a378bd5b1e9f6e4d7ee43f889e2f2f014752eba8af76530d71203f2e085de2d5_640.jpg',
      webformatWidth: 640,
      webformatHeight: 433,
      largeImageURL:
        'https://pixabay.com/get/g7969b8f26dd5bbf6bab427b89a365145c09a64943c1cca34b03966fa278c16da9a4b0e75f6ef8e701a5a0a5eef25eccb73a88c5403548a9bbdd2b16b8d0b4d65_1280.jpg',
      imageWidth: 4056,
      imageHeight: 2746,
      imageSize: 3464997,
      views: 755786,
      downloads: 505874,
      collections: 1042,
      likes: 1299,
      comments: 175,
      user_id: 3558510,
      user: 'IlonaBurschl',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/05/30/08-07-40-119_250x250.jpg',
    },
    {
      id: 1508613,
      pageURL:
        'https://pixabay.com/photos/cat-tabby-face-whiskers-pet-1508613/',
      type: 'photo',
      tags: 'cat, tabby, face',
      previewURL:
        'https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_150.jpg',
      previewWidth: 150,
      previewHeight: 110,
      webformatURL:
        'https://pixabay.com/get/g5fb88692429d4f616bd17b3842e0fcd7f877f8cf889e93ed4b939b1e2012cf49059dbffe9c549ff6a311b8c2509cc9ca5ebcc32891243f4ad346f3ea85d9d262_640.jpg',
      webformatWidth: 640,
      webformatHeight: 472,
      largeImageURL:
        'https://pixabay.com/get/g7d203d74bae1df4993db5a3472974d7ebeeb70179e611ddf7d75962db7ac9fbf539b794b0b1b79435cd8e45789f02782433b973d90505cc1535a963d622b7da9_1280.jpg',
      imageWidth: 2894,
      imageHeight: 2135,
      imageSize: 1630104,
      views: 410100,
      downloads: 268046,
      collections: 1047,
      likes: 1058,
      comments: 137,
      user_id: 127419,
      user: 'cocoparisienne',
      userImageURL:
        'https://cdn.pixabay.com/user/2023/10/15/14-40-46-737_250x250.jpeg',
    },
    {
      id: 4611189,
      pageURL:
        'https://pixabay.com/photos/kitten-cat-pet-feline-animal-fur-4611189/',
      type: 'photo',
      tags: 'kitten, cat, pet',
      previewURL:
        'https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/gd865c94c0d3094493bfc6f94f99c73dbf59c417d98b3bfdb7b8bb46f04f7d30216dee58b6747aa67b8c34dc2f325e1147166bb0825ef43782f6a59b7e5367abb_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/g8ace8083f48ff716407692f3a333cbe8ed3a2487241035d0b4209db77376598c135c97a01e50db5ff23546bb437e06075af82215a889a1582f780585a4b06e5c_1280.jpg',
      imageWidth: 6000,
      imageHeight: 4000,
      imageSize: 3885974,
      views: 470853,
      downloads: 356638,
      collections: 947,
      likes: 1036,
      comments: 187,
      user_id: 9285194,
      user: 'guvo59',
      userImageURL:
        'https://cdn.pixabay.com/user/2023/06/15/05-00-59-993_250x250.jpg',
    },
    {
      id: 1192026,
      pageURL:
        'https://pixabay.com/photos/cat-kitten-pet-striped-young-1192026/',
      type: 'photo',
      tags: 'cat, kitten, pet',
      previewURL:
        'https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_150.jpg',
      previewWidth: 150,
      previewHeight: 112,
      webformatURL:
        'https://pixabay.com/get/g09ddea2bc37ee189f59bf84eed738e25d47c17e8427e5680a2c2034867a607651392287a0f9c7a5d5d08026aeb091a33d8352a7f822bbe048d4ae29062657e90_640.jpg',
      webformatWidth: 640,
      webformatHeight: 480,
      largeImageURL:
        'https://pixabay.com/get/ga2cb45bee74f9c1687d35df7f22b8f6a5173486aa51f93574108b473f1f54ac5300581163433f36f132314bc1642619a784f16ce0220cda420a9c63959b5226c_1280.jpg',
      imageWidth: 2560,
      imageHeight: 1920,
      imageSize: 909777,
      views: 514097,
      downloads: 317435,
      collections: 972,
      likes: 1000,
      comments: 150,
      user_id: 1892688,
      user: 'Chiemsee2024',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/05/10/07-03-44-588_250x250.jpg',
    },
  ],
};
const picturesMockup = pixabayMockup.hits;
console.log('picturesMockup:', picturesMockup);

export class App extends Component {
  // 'state' declaration
  state = {
    pictures: [],
    actualPage: 1,
    maxPages: 1,
    searchQuery: '',
    isModal: false,
    isLoader: false,
    isBtnLoadMore: false,
  };

  render() {
    // destructuring 'state' variables
    const {
      pictures,
      actualPage,
      maxPages,
      searchQuery,
      isModal,
      isLoader,
      isBtnLoadMore,
    } = this.state;

    return (
      <div className={css.App}>
        <Searchbar />
        <ImageGallery />
        <ButtonLoadMore />
        <Loader />
        <Modal />
      </div>
    );
  }
}
