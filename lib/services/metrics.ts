// metrics helpers for course catalog and enrollment api

export function metricsStep0(records: any[], limit = 201) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep1(records: any[], limit = 425) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep2(records: any[], limit = 363) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep3(records: any[], limit = 413) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep4(records: any[], limit = 11) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep5(records: any[], limit = 21) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function metricsStep6(records: any[], limit = 246) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('metrics step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
