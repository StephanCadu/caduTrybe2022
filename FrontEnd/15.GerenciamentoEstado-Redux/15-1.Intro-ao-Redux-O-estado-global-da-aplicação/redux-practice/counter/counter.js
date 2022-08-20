const showCountValue = (counter) => {
  const h1Element = document.getElementById("counter");
  h1Element.innerText = counter;
};

showCountValue(0);

const showClickCountValue = (counter) => {
  const clickCount = document.getElementById('clickCount');
  clickCount.innerText = counter;
}

showClickCountValue(0)
// ========== ACTIONTYPES ==========
const INCREMENTO = "INCREMENTO";
const DECREMENTO = "DECREMENTO";

// ========== ACTIONS ==========
const actionIncremento = (e) => {
  store.dispatch({ type: INCREMENTO });
  const { inc } = store.getState();
  e.target.innerText = `Aumenta ${inc}`;
};

const actionDecremento = (e) => {
  store.dispatch({ type: DECREMENTO });
  const { dec } = store.getState();
  e.target.innerText = `Diminui ${dec}`
};
// ========== REDUCER ==========
const initialState = {
  counter: 0,
  clickCount: 0,
  inc: 0,
  dec: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTO:
      const inc = document.getElementById('incInput').value;
      return {
        ...state,
        counter: state.counter + (parseInt(inc) || 1),
        clickCount: state.clickCount + 1,
        inc: state.inc + 1,
      };
    case DECREMENTO:
      const dec = document.getElementById('decInput').value;
      return {
        ...state,
        counter: state.counter - (parseInt(dec) || 1),
        clickCount: state.clickCount + 1,
        dec: state.dec + 1,
      };
    default:
      return state;
  }
};

// ========== STORE ==========
const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { counter, clickCount } = store.getState();
  showCountValue(counter);
  showClickCountValue(clickCount);
});

const btnInc = document.getElementById("inc");
const btnDec = document.getElementById("dec");

btnInc.addEventListener("click", actionIncremento);
btnDec.addEventListener("click", actionDecremento);
