// invoicing helpers for course catalog and enrollment api

export function invoicingStep0(records: any[], limit = 139) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep1(records: any[], limit = 295) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep2(records: any[], limit = 368) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep3(records: any[], limit = 17) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep4(records: any[], limit = 270) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep5(records: any[], limit = 281) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
