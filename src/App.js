import React, { Component } from 'react';

import Modal from './components/Modal/Modal';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isShowing: false,
    }
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true,
    });
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false,
    });
  }

  render () {
    return (
      <div>
        {
          this.state.isShowing && (
            <div onClick={this.closeModalHandler} className="back-drop"></div>
          )
        }

        <button
          className="open-modal-btn"
          onClick={this.openModalHandler}
        >
          باز کردن مدال
        </button>

        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}
        >
          این یک مدال است
        </Modal>
      </div>
    );
  }
}

export default App;