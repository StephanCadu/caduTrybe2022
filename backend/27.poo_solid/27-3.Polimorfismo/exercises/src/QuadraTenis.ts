import IAgenda from "./interfaces/IAgenda";
import ITenis from "./interfaces/ITenis";
import normas from "./normas/normasDeUso";
import Quadra from "./Quadra";
import randomProtocol from "./utils/protocol";

export default class QuadraTenis extends Quadra {
  public data: ITenis = normas.tenis

  reservar<ITenis>(date: Date = new Date()): IAgenda<ITenis> {    
    return {
      protocolo: randomProtocol(),
      data: date,
      regras: this.data as ITenis,
    }
  }
}