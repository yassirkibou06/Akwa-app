export const Gender = {
    men: 'mens',
    women: 'womens'
}

//// categories for categorie section (CateSec) ///
export const categories = [
    
       {
        men: [
            {
                id: 1,
                cate: 'mens',
                name: 'jackets',
                image: require("../images/7edc95f9-f2a0-4db3-9219-8b4e416fbe26.jfif")
            },
            {
                id: 2,
                cate: 'mens',
                name: 'shorts',
                image: require('../images/361894-31-2.jpg')
            },
            {
                id: 3,
                cate: 'mens',
                name: 'pants',
                image: require('../images/sp-pgm-dc-11.jpg')
            },
            {
                id: 4,
                cate: 'mens',
                name: 'jeans',
                image: require('../images/8685326407_1_1_3.jpg')
            },
        ],
        women: [
            {
                id: 1,
                cate: 'womens',
                name: 'jackets',
                image: require("../images/104292032-1.jfif")
            },
            {
                id: 2,
                cate: 'womens',
                name: 'dresses',
                image: require('../images/Women---Cocktail-Dresses---Above-the-Knee.jfif')
            },
            {
                id: 3,
                cate: 'womens',
                name: 'pants',
                image: require('../images/YMjAQ7uqM2KezfpmougSEd.jpg')
            },
            {
                id: 4,
                cate: 'womens',
                name: 'jeans',
                image: require('../images/8685326407_1_1_3.jpg')
            },
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