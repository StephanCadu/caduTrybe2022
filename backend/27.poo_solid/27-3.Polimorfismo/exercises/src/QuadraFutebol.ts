import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";
import normas from "./normas/normasDeUso";
import Quadra from "./Quadra";
import randomProtocol from "./utils/protocol";

export default class QuadraFutebol extends Quadra {
  public data: IFutebol = normas.futebol

  reservar<IFutebol>(date: Date = new Date()): IAgenda<IFutebol> {
    return {
      protocolo: randomProtocol(),
      data: date,
      regras: this.data as IFutebol,
    }
  }
}