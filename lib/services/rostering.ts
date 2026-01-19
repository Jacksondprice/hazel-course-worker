// rostering helpers for course catalog and enrollment api

export function rosteringStep0(records: any[], limit = 239) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep1(records: any[], limit = 213) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep2(records: any[], limit = 359) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep3(records: any[], limit = 273) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep4(records: any[], limit = 372) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep5(records: any[], limit = 334) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep6(records: any[], limit = 282) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep7(records: any[], limit = 68) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep8(records: any[], limit = 467) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
