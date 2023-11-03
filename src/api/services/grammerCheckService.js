const axios = require("axios");
// const config = require('../../core/');

const grammarCheckService = {
  checkGrammar: async (text) => {
    console.log(text);
    console.log(text);
     convertedText = encodeURIComponent(text);
    console.log(convertedText);
    try {
      const body =`customerid=fBkUBvSBgBCIJ0J&format=json&app_type=proofreader_editable_controls&cmd=check&lang=en_AI&enforce_ai=true&short_answer=true&min_word_length=3&tokens=%5B%22${convertedText}%22%5D`
      const requestBody = body;
      const response = await axios.post("https://svc.webspellchecker.net/api", requestBody, {
         headers : {
          'Host': 'svc.webspellchecker.net',
          'Connection': 'keep-alive',
          'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
          'sec-ch-ua-platform': 'Windows',
          'sec-ch-ua-mobile': '?0',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
          'Content-Type': 'text/plain;charset=UTF-8',
          'Accept': '*/*',
          'Origin': 'https://www.grammarcheck.net',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Dest': 'empty',
          'Referer': 'https://www.grammarcheck.net/',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7'
        },
        
      });

      return response.data;
    } catch (error) {
      console.log(error.response);
      throw error;
    }
  },
};

module.exports = grammarCheckService;
