const { sendCreated } = require('../../helpers/request-helpers');
const { Company } = require('../../models/company/model');

const create = async (req, res) => {
  try {
    const company = {
      companyName: req.body.companyName,
      earnings: req.body.earnings,
      parentCompanyID: req.body.parentCompanyID || null,
      childrenCompanyIDs: req.body.childrenCompanyIDs || [],
    };

    const newCompany = new Company(company);

    await newCompany.save();
    return sendCreated(res, { newCompany });
  } catch (error) {
    throw new Error();
  }
};

module.exports = create;
