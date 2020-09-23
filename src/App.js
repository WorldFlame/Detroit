import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      id : 0,
      word : "",
      translaete : "",
      cards : []
    }

  }
  updateInpute(key, value) {
    this.setState({
      [key] : value
    })
  }

  addCard() {
    const newCard ={
      id : 1 + this.state.id,
      value :{
        word : this.state.word.slice().slice(),
        translaete : this.state.translaete.slice()
      }
    };

    this.setState({
      id:newCard.id,
      id : 0,
      word : "",
      translaete : "",
      cards : [...this.state.card, newCard]
    })
  }


  render() {
      return (
        <div className="App">
          <h1 className="app-title">Карточки англ</h1>
            <div ClassName="constructor">
              <input 
                type= "text"
                placeholder="Введите тслово"
                value = {this.state.word}
                onChange={(e:ChangeEvent<HTMLInputElement> ) => this.updateInpute("word", e.target.value)}
              />
              <input 
              type= "text"
              placeholder="Введите тслово"
              value = {this.state.word}
              onChange={(e:ChangeEvent<HTMLInputElement> ) => this.updateInpute("translate", e.target.value)}
            />
            <button
              className="btn add-btn"
              onClick ={() => this.addCard()}
            >
              Добавить 
            </button>
            </div>
        </div>
      );
    }
  }


export default App;
