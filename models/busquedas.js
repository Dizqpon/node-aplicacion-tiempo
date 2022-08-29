import axios from "axios";

export default class Busqueda {

    historial = ['Madrid', 'Londres', 'Bogota'];

    constructor() {
        // TODO: leer DB si existe
        
        
    }
    get parametrosLocation () {
        return {
            'key' : process.env.LOCATION_KEY
        }
    }
    async ciudad ( lugar = '') {
        // petición http
        // console.log('Hola que haces: ', lugar);

        try{
            const instance = axios.create({
                baseURL: `https://eu1.locationiq.com/v1/search?&q=${lugar}&format=json`,
                params: this.parametrosLocation
            });
            const resp = await instance.get();
            console.log(resp.data);
            return resp.data.map( lugar => ({
                id: lugar.place_id,
                lat: lugar.lat,
                lon: lugar.lon,
                nombre: lugar.display_name
            }));
            
        } catch (error) {
            return [];
        }
        
    }
    
}