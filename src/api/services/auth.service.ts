import { AxiosResponse } from "axios";
import { AuthType } from "../../types/index.dto";
import { http } from "../http";


class AuthService {
    async postAuth() {
        const response: AxiosResponse<[AuthType]> = await http.post('token/');
        return response.data;
    }
}

export default AuthService;