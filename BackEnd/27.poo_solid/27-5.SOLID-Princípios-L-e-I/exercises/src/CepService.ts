import FooCepAPI from "./FooCepAPI";
import ICepAPI from "./interfaces/ICepAPI";

class CepService {
  private readonly cepApi: ICepAPI;

  constructor() {
    this.cepApi = new FooCepAPI();
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;