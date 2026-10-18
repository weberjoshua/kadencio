import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  calculateSprintDeduction,
  estimateTimeSavings,
  formatEuro,
} from './businessLogic.ts';

test('validateContactForm checks required fields and formats', () => {
  const invalid = validateContactForm({
    name: '',
    company: '',
    email: 'not-an-email',
    message: 'short',
  });

  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.company);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    name: 'Jean Dupont',
    company: 'Menuiserie du Quercy',
    email: 'jean@menuiserie-quercy.fr',
    phone: '06 12 34 56 78',
    message: 'Bonjour, nous perdons trop de temps sur les devis et factures.',
  });

  assert.equal(valid.valid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('calculateSprintDeduction correctly deducts 250 € within 30 days', () => {
  const within30Days = calculateSprintDeduction(250, 750, 14);
  assert.equal(within30Days.eligible, true);
  assert.equal(within30Days.savings, 250);
  assert.equal(within30Days.discountedSprintCost, 500);

  const expired = calculateSprintDeduction(250, 750, 35);
  assert.equal(expired.eligible, false);
  assert.equal(expired.savings, 0);
  assert.equal(expired.discountedSprintCost, 750);
});

test('estimateTimeSavings calculates weekly and annual savings', () => {
  const tasks = {
    invoicesHours: 3,
    quotesHours: 2,
    clientRequestsHours: 2,
    followupsHours: 1,
    toolSyncHours: 2,
  };

  const results = estimateTimeSavings(tasks);
  assert.equal(results.totalWeeklyHoursLost, 10);
  assert.equal(results.estimatedHoursSavedWeekly, 7);
  assert.equal(results.estimatedAnnualHoursSaved, 322);
});

test('formatEuro formats numbers correctly in French currency style', () => {
  const formatted = formatEuro(250);
  assert.ok(formatted.includes('250') && formatted.includes('€'));
});
