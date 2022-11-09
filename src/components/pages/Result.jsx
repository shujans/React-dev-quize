import React from "react";
import Summary from "../Summary";
import Analysis from "../Analysis";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../HOOKS/useAnswers";
import _ from "lodash";
const Result = () => {
  const { id } = useParams();
  const location = useLocation();
  const { qna } = location.state;
  const { loding, error, answers } = useAnswers(id);

  const calculateScore = () => {
    let score = 0;

    answers.forEach((questions, index1) => {
      let correctIndex = [],
        checkedIndex = [];
      questions.options.forEach((option, index2) => {
        if (option.correct) correctIndex.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndex.push(index2);
          option.checked = true;
        }
      });
      if (_.isEqual(correctIndex, checkedIndex)) {
        score = score + 5;
      }
    });

    return score;
  };

  const UserScore = calculateScore();

  return (
    <>
      {loding && <div>Loding...</div>}
      {error && <div>There Was An Error!</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary score={UserScore} numberOfQuestion={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
};

export default Result;
