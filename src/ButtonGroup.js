import React from "react";
import {store} from './store/store';
import {setTechnology} from './actions/actions'

const ButtonGroup = ({ technologies }) => (
  <div>
    {technologies.map((tech, i) => (
      <button
        data-tech={tech}
        key={`btn-${i}`}
        className="hello-btn"
        onClick={dispatchBtnAction}
      >
        {tech}
      </button>
    ))}
  </div>
);
function dispatchBtnAction(e) {
    const text = e.target.dataset.tech;
    store.dispatch(setTechnology(text));
  }

export default ButtonGroup;
