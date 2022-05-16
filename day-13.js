// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript

function match(candidate, job) {
  if(!job.maxSalary || !candidate.minSalary) {
    throw new Error('error')
  }
  return  job.maxSalary >= candidate.minSalary - (candidate.minSalary  / 100 * 10)
}

// https://www.codewars.com/kata/56c2578be8b139bd5c001bd8/train/javascript

const intersect = (arra, arrb) => arra.filter((el) => arrb.indexOf(el) > -1);

const matchCandidate = (job, candidate) => {
  let equityMatches = !(candidate.desiresEquity && job.equityMax === 0);
  let desiredLocations = [
    ...candidate.desiredLocations,
    candidate.currentLocation,
  ];
  let locationMatches = intersect(job.locations, desiredLocations).length > 0;
  return equityMatches && locationMatches;
};

const match = (job, candidates) =>
  candidates.filter(matchCandidate.bind(null, job));
