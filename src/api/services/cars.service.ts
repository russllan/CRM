import { AxiosResponse } from "axios";
import { CarsType } from "../../types/index.dto";
import { http } from "../http";


class CarsService {
    async getAll() {
        const response: AxiosResponse<[CarsType]> = await http.get('cars');
        return response.data;
    }
}

export default CarsService;