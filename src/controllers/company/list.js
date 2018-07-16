const { sendList, sendOne } = require('../../helpers/request-helpers');
const { Company } = require('../../models/company/model');

const list = async (req, res) => {
  try {
    const queryParent = { parentCompanyID: null };
    const queryChild = { parentCompanyID: { $ne: null } };
    const { _id } = req.query;

    const parentCompany = await Company.find(queryParent);
    const childCompany = await Company.find(queryChild);

    if (_id) {
      const company = await Company.findOne({ _id });
      return sendOne(res, { company });
    }
    return sendList(res, { parentCompany, childCompany });
  } catch (error) {
    throw new Error();
  }
};

module.exports = list;

