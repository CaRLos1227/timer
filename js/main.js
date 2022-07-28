let interval;
let clicked = 0;

const HTS = (hour, minute, second) => hour * 60 * 60 + minute * 60 + parseInt(second);
const CSTH = seconds =>  {
  const hour = Math.floor(seconds / 3600);
  const minute = Math.floor(seconds % 3600 / 60);
  const second = Math.floor(seconds % 3600 % 60);
  return (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second);
};

function start() {
  const times = document.getElementById('times');
  const ipt1 = document.getElementById('ipt-1');
  const ipt2 = document.getElementById('ipt-2');
  const ipt3 = document.getElementById('ipt-3');
  if (!ipt1.value && !ipt2.value && !ipt3.value) return alert('pelo menos uma das entradas devem ser preenchidas!');
  if (ipt1.value > 100) return alert('o limite de horas é de 100');
  if (ipt2.value > 59) return alert('o limite de minutos é de 59');
  if (ipt3.value > 59) return alert('o limite de segundos é de 59');
  if (!!/[^\d]/g.test(ipt1.value.trim()) || !!/[^\d]/g.test(ipt2.value.trim()) || !!/[^\d]/g.test(ipt3.value.trim())) return alert('uso incorreto, exemplo: 01:00:00');
  ipt1.value = ipt1.value.trim().padStart(2, '0');
  ipt2.value = ipt2.value.trim().padStart(2, '0');
  ipt3.value = ipt3.value.trim().padStart(2, '0');
  if (!Number(ipt1.value) && !Number(ipt2.value) && !Number(ipt3.value)) {
    ipt1.value = '';
    ipt2.value = '';
    ipt3.value = '';
    return alert('pelo meno uma das entradas precisa der maior que 0');
  }
  let seconds = HTS(Number(ipt1.value), Number(ipt2.value), Number(ipt3.value));
  if (!!clicked) return alert('o cronômetro ja foi iniciado, reinicie ou espere acabar pra começar outro!');
  clicked = 1;
  interval = setInterval(() => {
    if (!seconds) {
      times.innerText = '00:00:00';
      ipt1.value = '';
      ipt2.value = '';
      ipt3.value = '';
      clearInterval(interval);
      clicked = 0;
      alert('tempo finalizado!');
    }
    times.innerText = CSTH(seconds);
    --seconds;
  }, 1000);
}

function reset() {
  const times = document.getElementById('times');
  const ipt1 = document.getElementById('ipt-1');
  const ipt2 = document.getElementById('ipt-2');
  const ipt3 = document.getElementById('ipt-3');
  if (times.innerText == '00:00:00') return alert('o cronômetro não foi iniciado');
  if (!!interval) {
    ipt1.value = '';
    ipt2.value = '';
    ipt3.value = '';
    times.innerText = '00:00:00';
    clicked = 0;
    clearInterval(interval);
  } else {
    times.innerText = '00:00:00';
    clicked = 0;
    ipt1.value = '';
    ipt2.value = '';
    ip3t.value = '';
  }
}