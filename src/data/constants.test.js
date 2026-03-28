import { describe, it, expect } from 'vitest';
import {
  EVENTS,
  INFO_ITEMS,
  WEDDING_DATE,
  PARTICLE_SYMBOLS,
  PARTICLE_COUNT,
  SPARKLE_COUNT,
} from './constants';

describe('constants', () => {
  it('EVENTS has 6 events with correct names', () => {
    expect(EVENTS).toHaveLength(6);
    expect(EVENTS.map(e => e.name)).toEqual([
      'Mehendi', 'Haldi', 'Cocktail', 'Engagement', 'Shaadi', 'Reception',
    ]);
  });

  it('each event has name, date, venue, time, and mapUrl', () => {
    EVENTS.forEach(event => {
      expect(event).toHaveProperty('name');
      expect(event).toHaveProperty('date');
      expect(event).toHaveProperty('venue');
      expect(event).toHaveProperty('time');
      expect(event).toHaveProperty('mapUrl');
      expect(event.mapUrl).toContain('maps.google.com');
    });
  });

  it('INFO_ITEMS has 4 items with correct titles', () => {
    expect(INFO_ITEMS).toHaveLength(4);
    expect(INFO_ITEMS.map(i => i.title)).toEqual([
      'Hashtag', 'Weather', 'Stay', 'Parking',
    ]);
  });

  it('each info item has icon, title, and description', () => {
    INFO_ITEMS.forEach(item => {
      expect(item).toHaveProperty('icon');
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('description');
    });
  });

  it('WEDDING_DATE is March 12, 2026 at 18:00 IST', () => {
    expect(WEDDING_DATE).toBeInstanceOf(Date);
    expect(WEDDING_DATE.toISOString()).toBe('2026-03-12T12:30:00.000Z');
  });

  it('PARTICLE_SYMBOLS has 6 symbols', () => {
    expect(PARTICLE_SYMBOLS).toEqual(['✦', '✧', '❋', '❊', '·', '⋆']);
  });

  it('PARTICLE_COUNT is 15', () => {
    expect(PARTICLE_COUNT).toBe(15);
  });

  it('SPARKLE_COUNT is 20', () => {
    expect(SPARKLE_COUNT).toBe(20);
  });
});
