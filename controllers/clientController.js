const Client = require('../models/client');

const updateClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.json(client);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const getTopClient = async (req, res) => {
  try {
    const topClient = await Client.findOne().sort('-totalBill').populate('agencyId', 'name').limit(1);
    if (!topClient) {
      return res.status(404).json({ message: 'No top client found' });
    }
    res.json({
      agencyName: topClient.agencyId.name,
      clientName: topClient.name,
      totalBill: topClient.totalBill,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { updateClient, getTopClient };
