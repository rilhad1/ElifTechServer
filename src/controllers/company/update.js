const { sendUpdated } = require('../../helpers/request-helpers');
const { Company } = require('../../models/company/model');

const update = async (req, res) => {
  try {
    const company = {
      id: req.body.id,
      companyName: req.body.companyName,
      earnings: req.body.earnings,
    };

    const updatedCompany = await Company.findByIdAndUpdate(
      company.id,
      {
        companyName: company.companyName,
        earnings: company.earnings,
      },
    );

    return sendUpdated(res, { updatedCompany });
  } catch (error) {
    throw new Error();
  }
};

module.exports = update;
