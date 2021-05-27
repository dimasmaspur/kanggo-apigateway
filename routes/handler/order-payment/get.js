const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_ORDER
} = process.env;

const api = apiAdapter(URL_SERVICE_ORDER);

module.exports = async (req, res) => {
    try {
        const id = req.params.id;
        const order = await api.get(`/order/${id}`);
        return res.json(order.data);
    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}