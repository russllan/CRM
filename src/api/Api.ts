import CarsService from "./services/cars.service";
import AuthService from "./services/auth.service";


const Api = {
    cars: new CarsService(),
    auth: new AuthService()
}

export default Api;