import { describe, it, expect } from 'vitest';
import { COLORS, NAV_LINKS, TEAM_MEMBERS, SERVICES } from '@/utils/constants';

describe('Constants', () => {
  describe('COLORS', () => {
    it('should have primary color', () => {
      expect(COLORS.primary).toBe('#0066FF');
    });

    it('should have background color', () => {
      expect(COLORS.background).toBe('#000000');
    });

    it('should have all required color properties', () => {
      expect(COLORS).toHaveProperty('primary');
      expect(COLORS).toHaveProperty('background');
      expect(COLORS).toHaveProperty('surface');
      expect(COLORS).toHaveProperty('text');
    });
  });

  describe('NAV_LINKS', () => {
    it('should have 5 navigation links', () => {
      expect(NAV_LINKS).toHaveLength(5);
    });

    it('should have home link', () => {
      expect(NAV_LINKS[0]).toEqual({
        name: '首页',
        id: 'home'
      });
    });

    it('should have all required properties', () => {
      NAV_LINKS.forEach(link => {
        expect(link).toHaveProperty('name');
        expect(link).toHaveProperty('id');
        expect(typeof link.name).toBe('string');
        expect(typeof link.id).toBe('string');
      });
    });
  });

  describe('TEAM_MEMBERS', () => {
    it('should have at least 3 team members', () => {
      expect(TEAM_MEMBERS.length).toBeGreaterThanOrEqual(3);
    });

    it('each member should have required properties', () => {
      TEAM_MEMBERS.forEach(member => {
        expect(member).toHaveProperty('name');
        expect(member).toHaveProperty('role');
        expect(member).toHaveProperty('title');
        expect(member).toHaveProperty('bio');
        expect(member).toHaveProperty('image');
        expect(member).toHaveProperty('social');
      });
    });

    it('first member should be Abraham Valerio', () => {
      expect(TEAM_MEMBERS[0].name).toBe('Abraham Valerio');
      expect(TEAM_MEMBERS[0].role).toBe('创始架构师');
    });
  });

  describe('SERVICES', () => {
    it('should have 6 services', () => {
      expect(SERVICES).toHaveLength(6);
    });

    it('each service should have required properties', () => {
      SERVICES.forEach(service => {
        expect(service).toHaveProperty('icon');
        expect(service).toHaveProperty('title');
        expect(service).toHaveProperty('subtitle');
        expect(service).toHaveProperty('description');
      });
    });
  });
});
