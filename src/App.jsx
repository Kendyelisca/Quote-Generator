import { useState } from 'react';
import  {imagen}  from './assets/imagen';
import { useEffect } from 'react';
import frameworks from './assets/data.json';
import Card from './componentes/Card/Card';
import './App.css';

function App() {
  const [indexVisibleFramework, setFrameworkVisible] = useState(0);

  useEffect(() => {
    const randomTexto = Math.floor(Math.random() * frameworks.length);
    setFrameworkVisible(randomTexto);
  }, []);

  const changeFramework = () => {
    const newFrameworkVisible = indexVisibleFramework + 1;
    if (newFrameworkVisible > frameworks.length - 1) setFrameworkVisible(0);
    else setFrameworkVisible(newFrameworkVisible);
  };

  const randomIndex = Math.floor(Math.random() * imagen.length);
  const randomBg = imagen[randomIndex]

const style = {
  backgroundImage: `url(${randomBg})`
};

  return (
    <div className="App bg-img" style={style}>
      <div className="titulo">
        <h1>React Quote Generator</h1>
      </div>
      <Card  
              frameworks={frameworks[indexVisibleFramework]}
              changeFramework={changeFramework}/>
    </div>
  );
}

export default App;
