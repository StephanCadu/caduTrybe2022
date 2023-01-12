import Clube from "./src/Clube";
import QuadraFutebol from "./src/QuadraFutebol";
import QuadraTenis from "./src/QuadraTenis";

const SCCP = new Clube();
const arenaCorinthians = new QuadraFutebol();
const tenisCorinthians = new QuadraTenis();

SCCP.adicionarQuadra(arenaCorinthians);
SCCP.adicionarQuadra(tenisCorinthians);

const amanhã = new Date();
amanhã.setDate(amanhã.getDate() + 1);

const reservaFut = arenaCorinthians.reservar(amanhã);
const reservaTenis = arenaCorinthians.reservar(amanhã);

console.log(reservaFut);
console.log(reservaTenis);
