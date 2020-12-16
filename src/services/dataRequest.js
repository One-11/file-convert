import { get, post } from "./axios";

export function getData(url) {
    return get(url, null);
}

export function switchLabel(params) {
    return post("/goods/switchLabel", params);
}
