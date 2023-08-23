import { AxiosResponse } from "axios";
import { CarsType } from "../../types/index.dto";
import { http } from "../http";


class CarsService {
    async getAll() {
        const response: AxiosResponse<[CarsType]> = await http.get('v1/cars_list/');
        return response.data;
    }
    async get(id: number) {
        const response: AxiosResponse<[CarsType]> = await http.get(`v1/cars_list/${id}`);
        return response.data;
    }
}

export default CarsService;