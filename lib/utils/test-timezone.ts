import { parseISTDateTime, getISTDateString, getISTTimeString } from './timezone';

// Test parseISTDateTime
console.log('=== Testing IST Timezone Utilities ===');

// Test 1: 9:00 AM IST on 2025-12-28
const test1 = parseISTDateTime('2025-12-28', '09:00');
console.log('Test 1: 2025-12-28 09:00 IST');
console.log('  Result ISO:', test1.toISOString());
console.log('  Expected: 2025-12-28T03:30:00.000Z (9:00 IST = 3:30 UTC)');
console.log('  Match:', test1.toISOString() === '2025-12-28T03:30:00.000Z');

// Test 2: 2:00 PM IST on 2025-12-28  
const test2 = parseISTDateTime('2025-12-28', '14:00');
console.log('\nTest 2: 2025-12-28 14:00 IST');
console.log('  Result ISO:', test2.toISOString());
console.log('  Expected: 2025-12-28T08:30:00.000Z (14:00 IST = 8:30 UTC)');
console.log('  Match:', test2.toISOString() === '2025-12-28T08:30:00.000Z');

// Test 3: Round trip - parse and extract
const test3Date = parseISTDateTime('2025-12-29', '10:30');
const extractedDate = getISTDateString(test3Date);
const extractedTime = getISTTimeString(test3Date);
console.log('\nTest 3: Round trip 2025-12-29 10:30 IST');
console.log('  Stored as:', test3Date.toISOString());
console.log('  Extracted date:', extractedDate);
console.log('  Extracted time:', extractedTime);
console.log('  Match:', extractedDate === '2025-12-29' && extractedTime === '10:30');

console.log('\n=== All tests completed ===');
