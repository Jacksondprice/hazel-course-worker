// cache helpers for course catalog and enrollment api

export function cacheStep0(records: any[], limit = 318) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep1(records: any[], limit = 337) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep2(records: any[], limit = 37) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep3(records: any[], limit = 290) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep4(records: any[], limit = 33) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep5(records: any[], limit = 149) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep6(records: any[], limit = 293) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep7(records: any[], limit = 46) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep8(records: any[], limit = 413) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
