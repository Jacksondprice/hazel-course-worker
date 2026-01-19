// notifications helpers for course catalog and enrollment api

export function notificationsStep0(records: any[], limit = 298) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep1(records: any[], limit = 88) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep2(records: any[], limit = 125) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep3(records: any[], limit = 464) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep4(records: any[], limit = 459) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep5(records: any[], limit = 205) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep6(records: any[], limit = 415) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep7(records: any[], limit = 186) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep8(records: any[], limit = 105) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
