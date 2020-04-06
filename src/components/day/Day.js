import React, { useMemo } from "react";
import styled from "styled-components";
import { formatDate } from "../../utils";
import { TIME_INTERVALS } from "../../consts";
import { useCallback } from "react";
import { connect } from "react-redux";

const DayStyled = styled.div`
  width: calc(100% / 7);
  outline: 1px solid gray;
  transition: 0.2s;
  flex-grow: 2;
`;

const TimeInterval = styled.div`
  height: 20px;
  border-top: 1px solid gray;
  padding: 2px;
  :hover {
    background-color: rgb(232, 238, 201);
  }
`;

const STEP_MINUTES = 15;

const Day = ({
  selectedDate,
  setSelectedDate = () => {},
  setMode = () => {},
}) => {
  const intervals = useMemo(() => {
    const result = new Array(TIME_INTERVALS).fill(0).map((_el, i) => {
      const dateWithTime = new Date(selectedDate).setMinutes(i * STEP_MINUTES);
      return dateWithTime;
    });
    return result.map((date) => new Date(date));
  }, [selectedDate]);

  const onClick = useCallback(() => {
    setSelectedDate(selectedDate);
    setMode("day");
  }, [setSelectedDate, selectedDate]);

  return (
    <DayStyled onClick={onClick}>
      {intervals.map((dateWithTime) => {
        return <TimeInterval>{formatDate(dateWithTime, "hh:mm")}</TimeInterval>;
      })}
    </DayStyled>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedDate: state.organizer.selectedDate,
  };
};

const DayContainer = connect(mapStateToProps)(Day);

export { DayContainer as Day };