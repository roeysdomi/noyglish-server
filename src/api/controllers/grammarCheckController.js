const grammarCheckService = require("../services/grammerCheckService");

const grammarCheckController = {
  checkGrammar: async (req, res) => {
    try {
      const { text } = req.body;
      console.log(req.body);
      console.log(text);
      const result = await grammarCheckService.checkGrammar(text);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
  },
};

module.exports = grammarCheckController;
  