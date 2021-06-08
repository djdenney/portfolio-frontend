const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
    try {
        const response = await fetch(url, options);

        if (response.status === 204) {
            return null;
        }

        const payload = await response.json();

        if (payload.error) {
            return Promise.reject({ message: payload.error });
        }
        return payload.data;
    } catch (error) {
        if (error.name !== "AbortError") {
            console.error(error.stack);
            throw error;
        }
        return Promise.resolve(onCancel);
    }
}

export async function subscription(email, signal) {
    const url = `${API_BASE_URL}/subscriptions`;
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify({ data: email }),
        signal,
    };
    return await fetchJson(url, options);
}

export async function message(messageData, signal) {
    console.log(messageData);
    const url = `${API_BASE_URL}/messages`;
    console.log(url);
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify({ data: messageData }),
        signal,
    };
    return await fetchJson(url, options);
}
