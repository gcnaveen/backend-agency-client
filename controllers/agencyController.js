const Agency = require('../models/agency');
const Client = require('../models/client');

const createAgencyClient = async (req, res) => {
  try {
    const { name, address1, address2, state, city, phoneNumber } = req.body.agency;
    const agency = new Agency({ name, address1, address2, state, city, phoneNumber });
    await agency.save();

    const { agencyId, clientName, email, phoneNumber: clientPhoneNumber, totalBill } = req.body.client;
    const client = new Client({ agencyId, name: clientName, email, phoneNumber: clientPhoneNumber, totalBill });
    await client.save();

    res.status(201).json({ message: 'Agency and client created successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { createAgencyClient };
