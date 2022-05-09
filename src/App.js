import './App.css';

function App() {
  return (
    <div className="App">
     <Title title="Está es mi primera interacción con React"/>
     <Subtitle text="Esté es el subtítulo para mi primera interacción con Reacts"/>
     <Button text="Mi 1er Botón en React"/>
    </div>
  );
};

const Title = (props) => {
  return <h1 className="Title">{props.title}</h1>
};

const Subtitle = (props) => {
  return <h4>{props.text}</h4>
};

const Button = (props) => {
return <button className="Button">{props.text}</button>
};

export default App;
