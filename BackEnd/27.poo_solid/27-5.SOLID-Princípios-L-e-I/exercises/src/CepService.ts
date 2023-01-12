import FooCepAPI from "./FooCepAPI";
import ICepAPI from "./interfaces/ICepAPI";

class CepService {
  constructor(
    public cepApi: ICepAPI =  new FooCepAPI()
  ) {}

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;