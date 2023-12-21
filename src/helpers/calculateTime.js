// const getTime = (currentStatus) => {
//   if (currentStatus === "firstHalf") {
//     let t = firstHalfStartTime;
//     let startTime = new Date(t);
//     let endTime = new Date();

//     let timeDiff = endTime - startTime;

//     let timeInMinutes = timeDiff / (1000 * 60);
//     let updateTime = Math.ceil(timeInMinutes);

//     if (updateTime > halfLength)
//       setTime(halfLength + "+" + (updateTime - halfLength) + "'");
//     else setTime(updateTime + "'");
//     return;
//   } else if (currentStatus === "halfTime") {
//     setTime("Half Time");
//     return;
//   } else if (currentStatus === "secondHalf") {
//     let startTime = new Date(secondHalfStartTime);
//     let endTime = new Date();
//     let timeDiff = endTime - startTime;
//     let timeInMinutes = timeDiff / (1000 * 60);

//     let updatedTime = Math.ceil(timeInMinutes);

//     if (updatedTime > halfLength)
//       setTime(halfLength * 2 + "+" + (updatedTime - halfLength) + "'");
//     else setTime(halfLength + updatedTime + "'");
//     return;
//   } else if (currentStatus === "fullTime") setTime("Full Time");
//   else if (currentStatus === "extraTimeFirstHalf") {
//     let startTime = extraTimeFirstHalfStartTime;
//     let endTime = new Date();
//     let timeDiff = endTime - startTime;
//     let timeInMinutes = timeDiff / (1000 * 60);

//     let updatedTime = Math.ceil(timeInMinutes);

//     if (updatedTime > extraTimeHalfLength && extraTimeHalfLength) {
//       setTime(
//         2 * halfLength +
//           extraTimeHalfLength +
//           "+" +
//           (updatedTime - extraTimeHalfLength) +
//           "'"
//       );
//     } else setTime(updatedTime + "'");
//   } else if (currentStatus === "extraTimeHalfTime")
//     setTime("Extra Time Half Time");
//   else if (currentStatus === "extraTimeSecondHalf") {
//     let startTime = extraTimeSecondHalfStartTime;
//     let endTime = new Date();
//     let timeDiff = endTime - startTime;
//     let timeInMinutes = timeDiff / (1000 * 60);

//     setTime(halfLength * 2 + extraTimeHalfLength + timeInMinutes);
//   } else if (
//     currentStatus === "extraTimeFullTime" ||
//     currentStatus === "penalties"
//   )
//     setTime("Penalties");
//   else setTime("");
// };

const calculateTime = (
  currentStatus,
  halfLength,
  firstHalfStartTime,
  secondHalfStartTime,
  extraTimeHalfLength,
  extraTimeFirstHalfStartTime,
  extraTimeSecondHalfStartTime
) => {
  if (currentStatus === "firstHalf") {
    let t = firstHalfStartTime;
    let startTime = new Date(t);
    let endTime = new Date();

    let timeDiff = endTime - startTime;

    let timeInMinutes = timeDiff / (1000 * 60);
    let updatedTime = Math.ceil(timeInMinutes);
    if (updatedTime > halfLength) {
      return halfLength + "+" + (updatedTime - halfLength) + "'";
    } else {
      return updatedTime + "'";
    }
  } else if (currentStatus == "halfTime") {
    return "Half Time";
  } else if (currentStatus === "secondHalf") {
    let startTime = new Date(secondHalfStartTime);
    let endTime = new Date();
    let timeDiff = endTime - startTime;
    let timeInMinutes = timeDiff / (1000 * 60);

    let updatedTime = Math.ceil(timeInMinutes);
    if (updatedTime > halfLength) {
      return halfLength * 2 + "+" + (updatedTime - halfLength) + "'";
    } else {
      return halfLength + updatedTime + "'";
    }
  } else if (currentStatus === "fullTime") {
    return "Full Time";
  } else if (currentStatus === "extraTimeFirstHalf") {
    let startTime = extraTimeFirstHalfStartTime;
    let endTime = new Date();
    let timeDiff = endTime - startTime;
    let timeInMinutes = timeDiff / (1000 * 60);

    let updatedTime = Math.ceil(timeInMinutes);

    if (extraTimeHalfLength && updatedTime > extraTimeHalfLength) {
      return (
        2 * halfLength +
        extraTimeHalfLength +
        "+"(updatedTime - extraTimeHalfLength) +
        "'"
      );
    } else {
      return halfLength * 2 + updatedTime + "'";
    }
  } else if (currentStatus === "extraTimeHalfTime") {
    return "E.T. Half Time";
  } else if (currentStatus === "extraTimeSecondHalf") {
    let startTime = extraTimeSecondHalfStartTime;
    let endTime = new Date();
    let timeDiff = endTime - startTime;
    let timeInMinutes = timeDiff / (1000 * 60);

    let updatedTime = Math.ceil(timeInMinutes);

    if (updatedTime > extraTimeHalfLength) {
      return (
        halfLength * 2 +
        extraTimeHalfLength * 2 +
        "+" +
        (updatedTime - extraTimeHalfLength) +
        "'"
      );
    } else {
      return halfLength * 2 + extraTimeHalfLength + updatedTime + "'";
    }
  } else if (
    currentStatus === "penalties" ||
    currentStatus === "extraTimeFullTime"
  ) {
    return "Penalties";
  } else return "";
};

export default calculateTime;