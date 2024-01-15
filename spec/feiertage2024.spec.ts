import { describe, it, expect } from 'vitest';
import { isHoliday } from '../src/feiertage';

/**
 * Test for some dates in 2024
 */
describe('get holiday by date', () => {
    it('Holidays in 2024 in Hessen are correctly recognized', () => {
        expect(isHoliday(new Date('2024-01-01T09:30:00.000+01:00'), 'HE')).toBeTruthy();
        expect(isHoliday(new Date('2024-03-29T09:30:00.000+01:00'), 'HE')).toBeTruthy();
        expect(isHoliday(new Date('2024-04-01T20:30:00.000+01:00'), 'HE')).toBeTruthy();
        expect(isHoliday(new Date('2024-05-01T20:30:00.000+01:00'), 'HE')).toBeTruthy();
        expect(isHoliday(new Date('2024-05-09T20:30:00.000+01:00'), 'HE')).toBeTruthy();
        expect(isHoliday(new Date('2024-05-20T20:30:00.000+01:00'), 'HE')).toBeTruthy();
        expect(isHoliday(new Date('2024-05-30T20:30:00.000+01:00'), 'HE')).toBeTruthy();
        expect(isHoliday(new Date('2024-10-03T20:30:00.000+01:00'), 'HE')).toBeTruthy();
        expect(isHoliday(new Date('2024-12-25T20:30:00.000+01:00'), 'HE')).toBeTruthy();
        expect(isHoliday(new Date('2024-12-26T20:30:00.000+01:00'), 'HE')).toBeTruthy();
    });
});