const mongoose = require('mongoose')
const CropsSchema = mongoose.Schema({
    crops: {
        type: [
            {
                name: {
                    type: 'String',
                    required: true
                },
                description: {
                    type: 'String',
                    required: true
                },
                season: {
                    type: 'String',
                    required: true
                },
                watering: {
                    type: 'String',
                    required: true
                },
                sunlight: {
                    type: 'String',
                    required: true
                },
            }
        ],
        default: []
    }
})
module.exports = mongoose.model('Crops', CropsSchema)