import { environment } from "src/environments/environment";

export const API_URL = {
    LOGIN_USER: environment.baseUrl + 'admin/login',
    GET_HSN_LIST : environment.baseUrl + 'hsn/list',
    ADD_HSN: environment.baseUrl + 'hsn/addHsn',
    UPDATE_HSN: environment.baseUrl + 'hsn/updateHsn',
};