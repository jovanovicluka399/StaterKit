export const compare = (a, b) => {
  const scoreA = a.score;
  const scoreB = b.score;

  let comparison = 0;
  if (scoreA > scoreB) {
    comparison = -1;
  } else if (scoreA < scoreB) {
    comparison = 1;
  }
  return comparison;
};

export const compareRevers = (a, b) => {
  const scoreA = a.orderNum;
  const scoreB = b.orderNum;

  let comparison = 0;
  if (scoreA > scoreB) {
    comparison = -1;
  } else if (scoreA < scoreB) {
    comparison = 1;
  }
  return comparison;
};

export const compareOrder = (a, b) => {
  const A = a.order;
  const B = b.order;

  let comparison = 0;
  if (A > B) {
    comparison = 1;
  } else if (A < B) {
    comparison = -1;
  }
  return comparison;
};

export const comparePoints = (a, b) => {
  let comparison = 0;
  if (a > b) {
    comparison = 1;
  } else if (a < b) {
    comparison = -1;
  }
  return comparison;
};
