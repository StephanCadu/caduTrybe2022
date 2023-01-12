import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";
import normas from "./normas/normasDeUso";
import Quadra from "./Quadra";

export default class QuadraFutebol extends Quadra {
  public data: IFutebol = normas.futebol

  reservar<IFutebol>(date: Date = new Date()): IAgenda<IFutebol> {
    return {
      protocolo: 'q39tgorea9',
      data: date,
      regras: this.data as IFutebol,
    }
  }
}