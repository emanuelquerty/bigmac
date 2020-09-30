class LocalResult {
  constructor() {
    this.ipVigilante = "https://ipvigilante.com/json/72.200.123.38";
  }

  async getCountryFromIp() {
    try {
      let res = await fetch("/country");
      return res.json();
    } catch (err) {
      console.error(err);
    }
  }

  async getBigMac() {
    try {
      let res = await fetch("/bigmac");
      return res.json();
    } catch (err) {
      console.error(err);
    }
  }
}

export default LocalResult;
