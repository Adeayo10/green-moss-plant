import { Plant } from './models/plant.model';

const MOCK_PLANTS: Plant[] = [
    {
        id: '1',
        name: 'Fern',
        scientificName: 'Polypodiopsida',
        description: 'A lovely fern plant',
        price: 10.99,
        stock: 15,
        category: 'Indoor',
        featured: true,
        imageUrl:
            'https://media.gettyimages.com/id/1346217760/photo/decorative-monstera-tree-planted-white-ceramic-pot-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kw31cLra8TV6rTiy4_Z0XR1CDeOfmudobUi6mC4KFig=',
        reviews: [
            { userId: 'user5', rating: 5, comment: 'Great for cooking and easy to grow.', date: new Date() },
            { userId: 'user6', rating: 4, comment: 'Needs regular watering.', date: new Date() }
        ],
        careGuide: {
            watering: 'Water sparingly',
            sunlight: 'Bright, direct sunlight',
            temperature: '20-30°C',
            fertilizing: 'Fertilize every 2 months',
            pestControl: 'Rarely affected by pests'
        }
    },
    {
        id: '2',
        name: 'Cactus',
        scientificName: 'Cactaceae',
        description: 'A spiky cactus plant',
        price: 5.99,
        stock: 30,
        category: 'Indoor',
        featured: false,
        imageUrl:
            'https://media.gettyimages.com/id/1402790552/photo/monstera-deliciosa-thai-constellation-potted-house-plant-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=0m9i9UqLSYsDs7huQPk_FYBZLN0bptJWMwCVBevMHCQ=',
        reviews: [
            { userId: 'user7', rating: 5, comment: 'Very low maintenance and looks great.', date: new Date() },
            { userId: 'user8', rating: 3, comment: 'A bit smaller than expected.', date: new Date() }
        ],
        careGuide: {
            watering: 'Water sparingly',
            sunlight: 'Bright, direct sunlight',
            temperature: '20-30°C',
            fertilizing: 'Fertilize every 2 months',
            pestControl: 'Rarely affected by pests'
        }
    },
    {
        id: '3',
        name: 'Bamboo',
        scientificName: 'Bambusoideae',
        description: 'A tall bamboo plant',
        price: 12.99,
        stock: 10,
        category: 'Outdoor',
        featured: true,
        imageUrl:
            'https://media.gettyimages.com/id/2174214617/photo/exotic-maranta-leuconeura-cat-moustache-houseplant-in-flower-pot-on-white-background.jpg?s=612x612&w=0&k=20&c=38xDJ6qGqprGIkW43K5aNVYJ6O3kUXA7i7wBmwgUuF4=',
        reviews: [
            { userId: 'user9', rating: 4, comment: 'Grows very fast and looks beautiful.', date: new Date() },
            { userId: 'user10', rating: 5, comment: 'Perfect for my garden.', date: new Date() }
        ],
        careGuide: {
            watering: 'Keep soil moist',
            sunlight: 'Partial shade',
            temperature: '15-25°C',
            fertilizing: 'Fertilize monthly',
            pestControl: 'Occasionally affected by pests'
        }
    },
    {
        id: '4',
        name: 'Aloe Vera',
        scientificName: 'Aloe barbadensis miller',
        description: 'A soothing aloe vera plant',
        price: 8.99,
        stock: 20,
        category: 'Indoor',
        featured: false,
        imageUrl:
            'https://media.gettyimages.com/id/1278430182/photo/kris-plani-alocasia-sanderiana-bull-in-pot-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=knyiTgl8xt31qX5vHEJlAvVtczX4HLecqzhuT21kp7A=',
        reviews: [
            { userId: 'user11', rating: 5, comment: 'Great for skin care and easy to grow.', date: new Date() },
            { userId: 'user12', rating: 4, comment: 'Healthy plant, but arrived with a few broken leaves.', date: new Date() }
        ],
        careGuide: {
            watering: 'Water deeply but infrequently',
            sunlight: 'Bright, indirect sunlight',
            temperature: '15-25°C',
            fertilizing: 'Fertilize every 6 months',
            pestControl: 'Rarely affected by pests'
        }
    },
    {
        id: '5',
        name: 'Orchid',
        scientificName: 'Orchidaceae',
        description: 'A beautiful orchid plant',
        price: 15.99,
        stock: 5,
        category: 'Indoor',
        featured: true,
        imageUrl:
            'https://media.gettyimages.com/id/1352237999/photo/zamioculcas-plant-in-a-pot-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=o4_SCyz0FeO5mMxHR5Z9n0fvdQp-f7mc0F4YnNpd_9E=',
        reviews: [
            { userId: 'user13', rating: 5, comment: 'Absolutely stunning flowers!', date: new Date() },
            { userId: 'user14', rating: 3, comment: 'Requires a lot of care and attention.', date: new Date() }
        ],
        careGuide: {
            watering: 'Water once a week',
            sunlight: 'Bright, indirect sunlight',
            temperature: '18-25°C',
            fertilizing: 'Fertilize every 2 weeks',
            pestControl: 'Occasionally affected by pests'
        }
    },
    {
        id: '6',
        name: 'Bonsai',
        scientificName: 'Bonsai',
        description: 'A miniature bonsai tree',
        price: 25.99,
        stock: 7,
        category: 'Indoor',
        featured: false,
        imageUrl:
            'https://media.gettyimages.com/id/1394628503/photo/fiddle-fig-or-ficus-lyrata-in-plastic-pots-n-wood-table-white-home-fiddle-leaf-fig-tree-the.jpg?s=612x612&w=0&k=20&c=uJohxHBx38zmGGKLhdGgtf5XD_ltGZfzqje1Yj9rafc=',
        reviews: [
            { userId: 'user15', rating: 5, comment: 'Beautiful and unique plant.', date: new Date() },
            { userId: 'user16', rating: 4, comment: 'Requires regular pruning and care.', date: new Date() }
        ],
        careGuide: {
            watering: 'Water regularly',
            sunlight: 'Bright, indirect sunlight',
            temperature: '15-25°C',
            fertilizing: 'Fertilize monthly',
            pestControl: 'Occasionally affected by pests'
        }
    },
    {
        id: '7',
        name: 'Rose',
        scientificName: 'Rosa',
        description: 'A fragrant rose plant',
        price: 9.99,
        stock: 25,
        category: 'Outdoor',
        featured: true,
        imageUrl:
            'https://media.gettyimages.com/id/2172147459/photo/tropical-monstera-acuminata-or-swiss-cheese-vine-house-plant-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=XW3yFCIFiS-hArARrr-n0LUtqqidK2BR6koKJ4TGtZg=',
        reviews: [
            { userId: 'user17', rating: 5, comment: 'Beautiful and fragrant flowers.', date: new Date() },
            { userId: 'user18', rating: 4, comment: 'Needs regular watering and sunlight.', date: new Date() }
        ],
        careGuide: {
            watering: 'Water regularly',
            sunlight: 'Full sunlight',
            temperature: '15-25°C',
            fertilizing: 'Fertilize monthly',
            pestControl: 'Occasionally affected by pests'
        }
    },
    {
        id: '8',
        name: 'Lavender',
        scientificName: 'Lavandula',
        description: 'A calming lavender plant',
        price: 7.99,
        stock: 18,
        category: 'Outdoor',
        featured: false,
        imageUrl:
            'https://media.gettyimages.com/id/1482825299/photo/3d-render-of-indoor-green-plant-with-vase-in-white-background.jpg?s=612x612&w=0&k=20&c=sebPNsoCj-7g1M9HYx4zjaVuyIDTXMZ3VsnJKq26-7w=',
        reviews: [
            { userId: 'user19', rating: 5, comment: 'Smells amazing and looks great.', date: new Date() },
            { userId: 'user20', rating: 4, comment: 'Needs a lot of sunlight.', date: new Date() }
        ],
        careGuide: {
            watering: 'Water sparingly',
            sunlight: 'Full sunlight',
            temperature: '15-25°C',
            fertilizing: 'Fertilize every 6 months',
            pestControl: 'Rarely affected by pests'
        }
    },
    {
        id: '9',
        name: 'Daisy',
        scientificName: 'Bellis perennis',
        description: 'A cheerful daisy plant',
        price: 6.99,
        stock: 22,
        category: 'Outdoor',
        featured: true,
        imageUrl:
            'https://media.gettyimages.com/id/2175759524/photo/lush-exotic-maranta-leuconeura-kerchoveana-houseplant-in-flower-pot-isolated-on-white.jpg?s=612x612&w=0&k=20&c=sgfR1FyHUu0u_eBtTbpCXC6ZXdzMoIgHreuMkMs49MM=',
        reviews: [
            { userId: 'user21', rating: 5, comment: 'Bright and cheerful flowers.', date: new Date() },
            { userId: 'user22', rating: 4, comment: 'Needs regular watering.', date: new Date() }
        ],
        careGuide: {
            watering: 'Water regularly',
            sunlight: 'Full sunlight',
            temperature: '15-25°C',
            fertilizing: 'Fertilize monthly',
            pestControl: 'Occasionally affected by pests'
        }
    },
    {
        id: '10',
        name: 'Tulip',
        scientificName: 'Tulipa',
        description: 'A vibrant tulip plant',
        price: 11.99,
        stock: 12,
        category: 'Outdoor',
        featured: false,
        imageUrl:
            'https://media.gettyimages.com/id/2175759524/photo/lush-exotic-maranta-leuconeura-kerchoveana-houseplant-in-flower-pot-isolated-on-white.jpg?s=612x612&w=0&k=20&c=sgfR1FyHUu0u_eBtTbpCXC6ZXdzMoIgHreuMkMs49MM=',
        reviews: [
            { userId: 'user23', rating: 5, comment: 'Beautiful and vibrant colors.', date: new Date() },
            { userId: 'user24', rating: 3, comment: 'Short blooming period.', date: new Date() }
        ],
        careGuide: {
            watering: 'Water regularly',
            sunlight: 'Full sunlight',
            temperature: '10-20°C',
            fertilizing: 'Fertilize every 2 months',
            pestControl: 'Occasionally affected by pests'
        }
    },
    {
        id: '11',
        name: 'Sunflower',
        scientificName: 'Helianthus',
        description: 'A tall sunflower plant',
        price: 14.99,
        stock: 8,
        category: 'Outdoor',
        featured: true,
        imageUrl:
            'https://media.gettyimages.com/id/2175759524/photo/lush-exotic-maranta-leuconeura-kerchoveana-houseplant-in-flower-pot-isolated-on-white.jpg?s=612x612&w=0&k=20&c=sgfR1FyHUu0u_eBtTbpCXC6ZXdzMoIgHreuMkMs49MM=',
        reviews: [
            { userId: 'user25', rating: 5, comment: 'Tall and beautiful flowers.', date: new Date() },
            { userId: 'user26', rating: 4, comment: 'Needs a lot of sunlight.', date: new Date() }
        ],
        careGuide: {
            watering: 'Water regularly',
            sunlight: 'Full sunlight',
            temperature: '15-25°C',
            fertilizing: 'Fertilize monthly',
            pestControl: 'Occasionally affected by pests'
        }
    },
    {
        id: '12',
        name: 'Mint',
        scientificName: 'Mentha',
        description: 'A refreshing mint plant',
        price: 4.99,
        stock: 50,
        category: 'Indoor',
        featured: false,
        imageUrl:
            'https://media.gettyimages.com/id/2175759524/photo/lush-exotic-maranta-leuconeura-kerchoveana-houseplant-in-flower-pot-isolated-on-white.jpg?s=612x612&w=0&k=20&c=sgfR1FyHUu0u_eBtTbpCXC6ZXdzMoIgHreuMkMs49MM=',
        reviews: [
            { userId: 'user27', rating: 5, comment: 'Great for cooking and easy to grow.', date: new Date() },
            { userId: 'user28', rating: 4, comment: 'Needs regular watering.', date: new Date() }
        ],
        careGuide: {
            watering: 'Water regularly',
            sunlight: 'Partial sunlight',
            temperature: '15-25°C',
            fertilizing: 'Fertilize every 2 months',
            pestControl: 'Occasionally affected by pests'
        }
    },
    {
        id: '13',
        name: 'Basil',
        scientificName: 'Ocimum basilicum',
        description: 'A fragrant basil plant',
        price: 3.99,
        stock: 40,
        category: 'Indoor',
        featured: true,
        imageUrl:
            'https://media.gettyimages.com/id/2175759524/photo/lush-exotic-maranta-leuconeura-kerchoveana-houseplant-in-flower-pot-isolated-on-white.jpg?s=612x612&w=0&k=20&c=sgfR1FyHUu0u_eBtTbpCXC6ZXdzMoIgHreuMkMs49MM=',
        reviews: [
            { userId: 'user29', rating: 5, comment: 'Great for cooking and smells wonderful.', date: new Date() },
            { userId: 'user30', rating: 4, comment: 'Needs regular watering.', date: new Date() }
        ],
        careGuide: {
            watering: 'Water regularly',
            sunlight: 'Partial sunlight',
            temperature: '15-25°C',
            fertilizing: 'Fertilize every 2 months',
            pestControl: 'Occasionally affected by pests'
        }
    }
];

export { MOCK_PLANTS };
