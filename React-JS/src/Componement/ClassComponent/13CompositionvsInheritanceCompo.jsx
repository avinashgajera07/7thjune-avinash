import React, { Component } from "react";

class CompositionvsInheritanceCompo extends Component {
  render() {
    return (
      <>
        <DialogAnything title="<h1>testing</h1>">
          Lorem ipsum dolor,<b> sit amet consectetur</b> adipisicing elit. Molestias
          necessitatibus rerum quod nihil eligendi eaque laudantium nam, alias
          animi incidunt ex rem nemo error dolor excepturi accusamus ullam omnis
          qui.
        </DialogAnything>
      </>
    );
  }
}
function DialogAnything(props) {
  console.log(props);
  return <div style={{ border: "1px solid" }}>
      <h2>{props.title}</h2>
      <p>{props.children}</p>
      </div>
}
export default CompositionvsInheritanceCompo;
