import React, { Component } from "react";

class ConditionalRendering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDrawing: false
    };
  }

  //   // Variables d'élément

  //   showDrawing = () => {
  //     this.setState({
  //       showDrawing: true,
  //     });
  //   };

  //   render() {
  //     let drawing;

  //     let painting = (
  //       <img
  //         src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/520px-Meisje_met_de_parel.jpg"
  //         alt="Portrait de la Jeune fille à la perle, peint par Vermeer vers 1665"
  //       />
  //     );

  //     if (this.state.showDrawing) {
  //       drawing = (
  //         <img
  //           src="http://www.maisonsvictorhugo.paris.fr/sites/victorhugo/files/oeuvre/visuels_principaux/25935-15.jpg"
  //           alt="Dessin 'La tour des rats', peint par Victor Hugo en 1847"
  //         />
  //       );
  //     }

  //     return (
  //       <>
  //         <button onClick={this.showDrawing}>Show the drawing</button>

  //         {drawing || painting}
  //       </>
  //     );
  //   }
  // }

  //   // Les opérateurs d'événements

  //   showDrawing = () => {
  //     this.setState({
  //       showDrawing: true
  //     });
  //   };

  //   render() {
  //     let drawing;

  //     let painting = (
  //       <img
  //         src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/520px-Meisje_met_de_parel.jpg"
  //         alt="Portrait de la Jeune fille à la perle, peint par Vermeer vers 1665"
  //       />
  //     );

  //     if (this.state.showDrawing) {
  //       drawing = (
  //         <img
  //           src="http://www.maisonsvictorhugo.paris.fr/sites/victorhugo/files/oeuvre/visuels_principaux/25935-15.jpg"
  //           alt="Dessin 'La tour des rats', peint par Victor Hugo en 1847"
  //         />
  //       );
  //     }

  //     return (
  //       <>
  //         <button onClick={this.showDrawing}>Show the drawing</button>

  //         {drawing || painting}
  //       </>
  //     );
  //   }
  // }

  render() {
    const unreadMessages = ["Hey THP", "Do you understand ?"];
    // const unreadMessages = [];

    return (
      <div>
        <h1>Hey !</h1>
        {unreadMessages.length > 0 && (
          <h2>You've got {unreadMessages.length} unread messages.</h2>
        )}
      </div>
    );
  }
}

export default ConditionalRendering;
