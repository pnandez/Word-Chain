const axios = require('axios').default;
class WordChain {
  public async getNextWord(previousWord: string): string {
    this.checkIfWordExists(previousWord);
    return '';
  }

  private async checkIfWordExists(word: string): Promise<Boolean> {
    // try {
    //   const result = Promise.resolve(axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`));
    //   console.log(result.);
    // } catch (error) {
    //   console.log(error);
    // }
    
    return true;
  }
}

export { WordChain };
