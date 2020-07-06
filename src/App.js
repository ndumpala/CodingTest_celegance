import React, { useState } from "react";
import "./styles.css";
import { Form } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";
import data from "./Mockdata.js";

export default function App() {
  const [questionNum, setQuestion] = useState(0);
  const [realAnswer, showAnswer] = useState("hideAnswer");

  function renderRaadioButtons(options) {
    return options.map((data, index) => {
      return (
        <div key={index}>
          <Form.Group as={Row}>
            <Col xs={12}>
              <Form.Check type="radio" label={data} name={data} id={data} />
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
          onClick={() => setQuestion(questionNum - 1)}
          disabled={questionNum === 0}
        >
          &#x2190;Previous
        </Button>
        <Button variant="success" onClick={() => showAnswer("showAnswer")}>
          Submit
        </Button>
        <Button variant="info" onClick={() => showAnswer("showAnswer")}>
          Show Answer
        </Button>
        <Button
          variant="dark"
          onClick={() => setQuestion(questionNum + 1)}
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
          {question}...?{" "}
        </div>
        <span className={`answer ${realAnswer}`}>Answer: {answer}</span>
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
