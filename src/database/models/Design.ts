import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    category: String,
    title: String,
    description: String,    
    thumbnail: String,
    score: Number,        
    type_interior: Number,
    type_transition: Number,
    type_exterior: Number,
    size_small: Number,
    size_medium: Number,
    size_big: Number,
    ceiling_low: Number,
    ceiling_high: Number,
    ceiling_without: Number,
    material_natural: Number,
    material_mixed: Number,
    material_artificial: Number,
    color_red: Number,
    color_green: Number,
    color_blue: Number,
    color_white: Number,        
    color_black: Number,
    tone_pastel: Number,
    tone_vivid: Number,        
    limit_open: Number,
    limit_semiopenclosed: Number,
    limit_closed: Number,
    population_high: Number,
    population_medium: Number,
    population_low: Number,
    furniture_high: Number,
    furniture_medium: Number,
    furniture_low: Number,
    operation_day: Number,
    operation_alltime: Number,
    operation_night: Number,
    ligth_high: Number,
    ligth_medium: Number,
    ligth_low: Number,
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    }
},
    {
        timestamps: true
    }
)

export default mongoose.model('Design', Schema)

