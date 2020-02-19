const expect = require('expect');
const converterEn = require('./converterEn');

describe('Taka To Amount Converter English', () => {
    // core
    it("return One core when passed 10000000", () => {
        expect(converterEn(10000000)).toEqual('One core');
    });
    it("contain One core when passed 12000000", () => {
        expect(converterEn(12000000)).toContain('One core');
    });
    it("contain One core when passed 12000000.5343", () => {
        expect(converterEn(12000000.5343)).toContain('One core');
    });

    // lac
    it("return One lac when passed 100000", () => {
        expect(converterEn(100000)).toEqual('One lac');
    });
    it("contain One lac when passed 12000000", () => {
        expect(converterEn(120000)).toContain('One lac');
    });
    it("contain One lac when passed 12000000.5343", () => {
        expect(converterEn(120000.5343)).toContain('One lac');
    });

    // thousand
    it("return One thousand when passed 1000", () => {
        expect(converterEn(1000)).toEqual('One thousand');
    });
    it("contain One thousand when passed 1200", () => {
        expect(converterEn(1200)).toContain('One thousand');
    });
    it("contain One thousand when passed 1200.5343", () => {
        expect(converterEn(1200.5343)).toContain('One thousand');
    });

    // hundred
    it("return One hundred when passed 100", () => {
        expect(converterEn(100)).toEqual('One hundred');
    });
    it("contain One hundred when passed 120", () => {
        expect(converterEn(120)).toContain('One hundred');
    });
    it("contain One hundred when passed 120.5343", () => {
        expect(converterEn(120.5343)).toContain('One hundred');
    });

    // less then 100
    it("return One when passed 1", () => {
        expect(converterEn(1)).toEqual('One');
    });
    it("return Five when passed 1", () => {
        expect(converterEn(5)).toEqual('Five');
    });
    it("return Ninety-nine when passed 99", () => {
        expect(converterEn(99)).toContain('Ninety-nine');
    });
    it("contain Ninety-nine when passed 99.53", () => {
        expect(converterEn(99.53)).toContain('Ninety-nine');
    });


    // more then 100 core
    it("return 'One hundred twenty core' when passed 1200000000", () => {
        expect(converterEn(1200000000)).toEqual('One hundred twenty core');
    });

    it("return 'One hundred twenty core forty lac' when passed 1204000000", () => {
        expect(converterEn(1204000000)).toEqual('One hundred twenty core forty lac');
    });

    it("return 'Nine hundred ninety-nine core forty lac' when passed 1204000000", () => {
        expect(converterEn(9994000000)).toEqual('Nine hundred ninety-nine core forty lac');
    });

    it("return 'One hundred twenty core forty lac twenty-five' when passed 1204000000", () => {
        expect(converterEn(1204000025)).toEqual('One hundred twenty core forty lac twenty-five');
    });

    // Fraction
    it("contain 'point five three' when passed 99.53", () => {
        expect(converterEn(99.53)).toContain('point five three');
    });

    //suffix
    it("return 'One hundred twenty core forty lac twenty-five taka only' when passed 1204000000", () => {
        expect(converterEn(1204000025, true)).toEqual('One hundred twenty core forty lac twenty-five taka only');
    });
});