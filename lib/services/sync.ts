// sync helpers for course catalog and enrollment api

export function syncStep0(records: any[], limit = 436) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep1(records: any[], limit = 310) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep2(records: any[], limit = 145) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep3(records: any[], limit = 23) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep4(records: any[], limit = 303) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep5(records: any[], limit = 33) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function syncStep6(records: any[], limit = 496) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sync step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
