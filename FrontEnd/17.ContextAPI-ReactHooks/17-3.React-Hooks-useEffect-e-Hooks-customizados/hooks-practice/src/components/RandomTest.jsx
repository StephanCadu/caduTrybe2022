import React, { useState } from 'react'
import { useEffect } from 'react';

export default function RandomTest() {
  const TEN_SEC = 10000;
  const FOUR_SEC = 4000;
  const ONE_SEC = 1000;
  const ONE_HUNDRED = 100;

  const [num, setNum] = useState(parseInt(Math.random() * ONE_HUNDRED));
  const [timer, setTimer] = useState(10);
  const [showMessage, setShowMessage] = useState(false);

  const decreaseTimer = () => setTimer((time) => time - 1);

  const verifyRandomNum = (random) => {
    const by3 = random % 3 === 0;
    const by5 = random % 5 === 0;

    if (by3 || by5) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), FOUR_SEC);
    }
  }

  const generateRandomNum = () => {
    const newRandom = parseInt(Math.random() * ONE_HUNDRED);
    verifyRandomNum(newRandom);
    setNum(newRandom);
    setTimer(10)
  }

  useEffect(() => {
    const countTen = setInterval(generateRandomNum, TEN_SEC);
    const startTimer = setInterval(decreaseTimer, ONE_SEC);
    return () => {
      clearInterval(countTen);
      clearInterval(startTimer);
    }
  }, []);

  return (
    <div>
      <h1>{ `Número: ${num}` }</h1>
      <h2>{ showMessage && 'Acertou!' }</h2>
      <h2>{ `Novo número em: ${timer}s` }</h2>
    </div>
  )
}
