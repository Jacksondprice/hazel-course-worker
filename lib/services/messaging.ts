// messaging helpers for course catalog and enrollment api

export function messagingStep0(records: any[], limit = 387) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep1(records: any[], limit = 473) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep2(records: any[], limit = 78) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep3(records: any[], limit = 285) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep4(records: any[], limit = 166) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep5(records: any[], limit = 93) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep6(records: any[], limit = 43) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep7(records: any[], limit = 81) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
