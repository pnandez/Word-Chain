const axios = require('axios').default;
class WordChain {
  public async getNextWord(previousWord: string): string {
    await this.checkIfWordExists(previousWord);
    return '';
  }

  private async checkIfWordExists(word: string): Promise<Boolean> {
    // try {
    //   const result = Promise.resolve(axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`));
    //   console.log(result.);
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`));
    return true;
  }
}

export {WordChain};
