const {Airplane} = require('../models/index')

class AirplaneRepository{
    async getAirplane(id){
        try {
            const airplnae = await Airplane.findByPk(id);
            return airplnae;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }
}
module.exports=AirplaneRepository;