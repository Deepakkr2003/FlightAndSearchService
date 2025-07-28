const {FlightService} = require('../services/index');
const {SuccessCodes} = require('../utils/errro-codes')


const flightSerivce = new FlightService();

const create = async (req,res) => {
    try {
        const flightRequestData={
            fligthNumber: req.body.fligthNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.fligthNumber,
            departureTime: req.body.departureTime,
            price: req.body.price,
        }
        const flight = await flightSerivce.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            err:{},
            message:'Successfully created a flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        })
    }
}

const getAll = async(req,res) => {
    try {
        const response = await flightSerivce.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            err:{},
            message:'Successfully fetched the flights'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flight',
            err: error
        })
    }
}

module.exports={
    create,
    getAll
}