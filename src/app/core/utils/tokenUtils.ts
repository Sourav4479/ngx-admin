import { LOCAL_STORAGE } from "../constants/common.constant";

export const setTokenToLocalStorage = (data) => {
    localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, data.response.data.AuthenticationResult.AccessToken);
    localStorage.setItem(LOCAL_STORAGE.REFRESH_TOKEN, data.response.data.AuthenticationResult.RefreshToken);
    localStorage.setItem(LOCAL_STORAGE.ID_TOKEN, data.response.data.AuthenticationResult.IdToken);
    let tokenData = parseJwt(data.response.data.AuthenticationResult.AccessToken)
    return tokenData
};

// export const setUserDataLocalStorage = () => {
//     let userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER))
//     return userData ? userData : null
// };


export const setUserDataToLocalStorage = (data) => {
    localStorage.setItem(LOCAL_STORAGE.USER_DATA, JSON.stringify(data))
};
export const getUserDataFromLocalStorage = () => {
    let userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER_DATA))
    return userData ? userData : null
};
export const parseJwt = (token) => {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export const clearTokens = () => {
    localStorage.clear();
};