import sendRequest from "./send-request";

const BASE_URL = '/api/hoots';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function createHoot(hoot) {
    return sendRequest(BASE_URL, 'POST', hoot)
}