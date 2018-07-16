const { sendDeleted } = require('../../helpers/request-helpers');
const { Company } = require('../../models/company/model');

const remove = async (req, res) => {
  try {
    const { id } = req.body;

    const answer = await Company.findOne({ id });
    await Company.findByIdAndRemove(id);

    return sendDeleted(res, { answer });
  } catch (error) {
    throw new Error();
  }
};

module.exports = remove;
