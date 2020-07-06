import React, { useState, useCallback } from "react";
import "./styles.css";
import { Form } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";
import data from "./Mockdata.js";

export default function App() {
  const [questionNum, setQuestion] = useState(0);
  const [realAnswer, showAnswer] = useState("hideAnswer");
  const [checked, setChecked] = useState();
  const [selected, updatedSelected] = useState();

  const handleChange = useCallback(event => {
    setChecked(event.target.value);
    updatedSelected(event.target.value);
  }, []);

  const renderAnswer = () => {
    showAnswer("showAnswer");
  };

  const renderNext = () => {
    showAnswer("hideAnswer");
    setQuestion(questionNum + 1);
    updatedSelected();
  };

  const renderPrevious = () => {
    showAnswer("hideAnswer");
    setQuestion(questionNum - 1);
    updatedSelected();
  };

  function renderRaadioButtons(options) {
    return options.map((data, index) => {
      return (
        <div key={index}>
          <Form.Group as={Row}>
            <Col xs={12}>
              <Form.Check
                type="radio"
                value={data}
                label={data}
                name={data}
                id={data}
                onChange={handleChange}
                checked={data === checked}
              />
            </Col>
          </Form.Group>
        </div>
      );
    });
  }

  function renderButtonsGroup() {
    return (
      <div class="display-flex flex-space-around">
        <Button
          variant="dark"
          onClick={renderPrevious}
          disabled={questionNum === 0}
        >
          &#x2190;Previous
        </Button>
        <Button variant="success" onClick={renderAnswer}>
          Submit
        </Button>
        <Button variant="info" onClick={renderAnswer}>
          Show Answer
        </Button>
        <Button
          variant="dark"
          onClick={renderNext}
          disabled={questionNum === 2}
        >
          Next&#x2192;
        </Button>
      </div>
    );
  }

  function renderQuestion() {
    const { question, answer, options, index } = data[questionNum];

    return (
      <div className="container margin-vertical-lg">
        <div className="question">
          <span>{index}. </span>
          {question}...? <span className="selectedItem">{selected}</span>
        </div>
        <div className={`answer ${realAnswer}`}>Answer: {answer}</div>
        <div className="display-flex flex-column">
          {renderRaadioButtons(options)}
        </div>

        {renderButtonsGroup()}
      </div>
    );
  }

  return (
    <div className="App margin-vertical-lg">
      <h3>Coding Interview - Section A & B - From Celegence Systems</h3>
      {renderQuestion()}
    </div>
  );
}
