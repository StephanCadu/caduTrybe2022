const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const randomProtocol = () => new Array(6).fill(0)
  .map(() => characters[+(Math.random() * 61).toFixed(0)]).join('');

export default randomProtocol;