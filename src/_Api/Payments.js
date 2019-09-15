import axios from 'axios';

function createOrder(testDetails) {
    return axios.post('/orders', {
        price: testDetails.price,
        tests: [testDetails.id],
        promo_code: ""
    });
}

function updateOrder(orderID) {
    return axios.put(`/orders/${orderID}/status`, {
    });
}

function getOrder(userID, testID) {
    return axios.get(`/orders/${userID}/${testID}/status`);
}

export {createOrder, updateOrder, getOrder};