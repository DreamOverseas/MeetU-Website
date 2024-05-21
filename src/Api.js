// src/Api.js
// This module provides a list of high-level backend operations for easy access
const BACKEND_ENDPOINT = "http://localhost:8000/api"; // please change this to real endpoint when host is on

// Private method
// Fetches from endpoint and return a Promise of the result
const fetchDataAsync = async (endpoint) => {
    try {
        const response = await fetch(`${BACKEND_ENDPOINT}/${endpoint}`);

        if (!response.ok) {
            throw new Error('Network is sleeping... (response not OK)');
        }

        return response.json();
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
    return null;
}


// ========================= Place Holder n Example for MeetU Website APIs ==========================

// Get all event since we have an event page
const getEventsAsync = async () => {
    return fetchDataAsync("events");
}

// Get an event by its ObjectId
const getEventAsync = async (activityId) => {
    return fetchDataAsync(`events/${activityId}`);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getEventsAsync, getEventAsync };
