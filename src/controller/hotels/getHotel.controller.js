import { Hotel } from "../../models/Hotel.model.js";

async function getHotel(req, res) {
    try{
        const id = req.params.id

        const hosting = await Hotel.findOne({
            where: {id: id}
        })

        if(!hosting){
            return res.status(404).json({message: "Hotel not found"})
        }

        const data = {}

        data.id = hosting.id
        data.name = hosting.name
        data.stars = hosting.stars
        data.description = hosting.description
        data.address = hosting.address;
        data.district = hosting.district
        data.city = hosting.city
        data.state = hosting.state
        data.country = hosting.country
        data.thumb = hosting.thumb
        data.amenities = []

        hosting.amenities.map((element) => {
            data.amenities.push(element.label)
        });

        return res.status(201).json({
            data: data
        })

    }catch(error){
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

export default getHotel