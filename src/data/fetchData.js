export const Gender = {
    men: 'men',
    women: 'women'
}

//// categories for categorie section (CateSec) ///
export const categories = [
    
       {
        men: [
            {
                id: 1,
                cate: 'men',
                name: 'jackets',
                image: require("../images/7edc95f9-f2a0-4db3-9219-8b4e416fbe26.jfif")
            },
            {
                id: 2,
                cate: 'men',
                name: 'shorts',
                image: require('../images/361894-31-2.jpg')
            },
            {
                id: 3,
                cate: 'men',
                name: 'pants',
                image: require('../images/sp-pgm-dc-11.jpg')
            },
            {
                id: 4,
                cate: 'men',
                name: 'jeans',
                image: require('../images/8685326407_1_1_3.jpg')
            },
            {
                id: 5,
                cate: 'men',
                name: 'All',
                image: require('../images/pexels-kai-pilger-996329.jpg')
            }
        ],
        women: [
            {
                id: 1,
                cate: 'women',
                name: 'jackets',
                image: require("../images/104292032-1.jfif")
            },
            {
                id: 2,
                cate: 'women',
                name: 'dresses',
                image: require('../images/Women---Cocktail-Dresses---Above-the-Knee.jfif')
            },
            {
                id: 3,
                cate: 'women',
                name: 'pants',
                image: require('../images/YMjAQ7uqM2KezfpmougSEd.jpg')
            },
            {
                id: 4,
                cate: 'women',
                name: 'jeans',
                image: require('../images/8685326407_1_1_3.jpg')
            },
            {
                id: 5,
                cate: 'women',
                name: 'clothing',
                image: require('../images/pexels-kai-pilger-996329.jpg')
            }
        ]
       }
]

/// data for hero slider ////
export const dataSlide = [
    {
        men : [
            {
                id: 1,
                title: `Men's contemporary brands`,
                desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                image: require('../images//pexels-andrea-piacquadio-842811.jpg'),
                link: '/men'
            },
            {
                id: 2,
                title: 'Shop what you love—faster and easier.',
                desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                image: require('../images/pexels-monstera-6311687.jpg'),
                link: '/men'
            },
        ],
        women: [
            {
                id: 1,
                title: `Women's contemporary brands`,
                desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                image: require('../images/pexels-gustavo-fring-4005033.jpg'),
                link: '/women'
            },
            {
                id: 2,
                title: 'Shop what you love—faster and easier.',
                desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                image: require('../images/pexels-dmitriy-piskarev-12240546.jpg'),
                link: '/women'
            },
        ]
    }
]