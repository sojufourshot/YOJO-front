import axios from "axios";
import PATH from "../constants/path";
import { getLocalStorageItem } from "../storages/LocalStorage";

const JWT_EXPIRE_TIME = 3600 * 1000;

const api = axios.create({
	baseURL: "/api",
	timeout: JWT_EXPIRE_TIME,
	headers: {
		"Content-Type": `application/json`,
	},
});

// 요청 타임아웃 설정
api.defaults.timeout = 1000;

// 요청 인터셉터 추가
api.interceptors.request.use(
	(config) => {
		const token = getLocalStorageItem("token");
		if (token) {
			config.headers["X-AUTH-TOKEN"] = token;
			//X-AUTH-TOKEN으로 다른 url 이용할 때 헤더로 넣어줘야한다.
			//'Content-Type': `application/json`,
		}
		// config.headers['Content-Type'] = 'application/json';
		return config;
	},
	async (error) => {
		// Promise.reject(error);
		if (error.response && error.response.status === 403) {
			try {
				const originalRequest = error.config;
				// const data = await api.get("auth/refreshtoken");
				// if (data) {
				// 	const { accessToken, refreshToken } = data.data;
				// 	localStorage.removeItem("token");
				// 	localStorage.removeItem("authenticatedUserRole");
				// 	localStorage.setItem("user", JSON.stringify(data.data, ["accessToken", "refreshToken"]));
				// 	originalRequest.headers["accessToken"] = accessToken;
				// 	originalRequest.headers["refreshToken"] = refreshToken;
				// 	return await client.request(originalRequest);
				// }
				localStorage.removeItem("token");
				localStorage.removeItem("authenticatedUserRole");
			} catch (error) {
				localStorage.removeItem("token");
				localStorage.removeItem("authenticatedUserRole");
				console.log(error);
			}
			return Promise.reject(error);
		}
		return Promise.reject(error);
	}
);

// 응답 인터셉터 추가
api.interceptors.response.use(
	(response) => {
		const resp = response.data.data;
		return resp;
	},
	(error) => {
		console.log(error);
		return Promise.reject(error);
	}
);

// axios 인스턴스 내보내기
export default api;
