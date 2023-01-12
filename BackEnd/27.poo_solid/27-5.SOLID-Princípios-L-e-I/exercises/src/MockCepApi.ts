import ICepAPI from "./interfaces/ICepAPI";

class MockCepAPI implements ICepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `O endereço para o "CEP:02203010, n°:$1420" é "logo ali"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `O CEP para: "tão tão distante, n°: 1369" é "CEP 00000000"`;
  }
}

export default MockCepAPI;