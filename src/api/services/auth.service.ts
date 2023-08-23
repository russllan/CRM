import { AxiosResponse } from "axios";
import { AuthType, RefreshToken } from "../../types/index.dto";
import { http } from "../http";


class AuthService {
    async postAuth( data : AuthType) {
        const response: AxiosResponse<[AuthType]> = await http.post('token/', data);
        return response.data;
    }
    async refreshToken( refresh : RefreshToken) {
        const response: AxiosResponse<RefreshToken> = await http.post('token/refresh/', refresh);
        return response.data;
    }
    // async logout() {
    //     const response = await http.post('/');
    //     return response.data;
    // }
}

export default AuthService;