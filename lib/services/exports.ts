// exports helpers for course catalog and enrollment api

export function exportsStep0(records: any[], limit = 196) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep1(records: any[], limit = 96) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep2(records: any[], limit = 169) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep3(records: any[], limit = 42) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep4(records: any[], limit = 421) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep5(records: any[], limit = 301) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep6(records: any[], limit = 50) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep7(records: any[], limit = 199) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep8(records: any[], limit = 34) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep9(records: any[], limit = 147) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
