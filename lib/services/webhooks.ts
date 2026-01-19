// webhooks helpers for course catalog and enrollment api

export function webhooksStep0(records: any[], limit = 158) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep1(records: any[], limit = 13) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep2(records: any[], limit = 234) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep3(records: any[], limit = 393) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep4(records: any[], limit = 329) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep5(records: any[], limit = 325) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep6(records: any[], limit = 429) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep7(records: any[], limit = 361) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function webhooksStep8(records: any[], limit = 256) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('webhooks step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
