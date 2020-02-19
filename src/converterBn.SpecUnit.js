const expect = require('expect');
const converterBn = require('./converterBn');

describe('Taka To Amount Converter Bangla', () => {
    // core
    it("return 'এক কোটি' when passed 10000000", () => {
        expect(converterBn(10000000)).toEqual('এক কোটি');
    });
    it("contain 'এক কোটি' when passed 12000000", () => {
        expect(converterBn(12000000)).toContain('এক কোটি');
    });
    it("contain 'এক কোটি' when passed 12000000.5343", () => {
        expect(converterBn(12000000.5343)).toContain('এক কোটি');
    });
    //
    // // lac
    it("return 'এক লক্ষ' when passed 100000", () => {
        expect(converterBn(100000)).toEqual('এক লক্ষ');
    });
    it("contain 'এক লক্ষ' when passed 12000000", () => {
        expect(converterBn(120000)).toContain('এক লক্ষ');
    });
    it("contain 'এক লক্ষ' when passed 12000000.5343", () => {
        expect(converterBn(120000.5343)).toContain('এক লক্ষ');
    });
    //
    // // thousand
    it("return 'এক হাজার' when passed 1000", () => {
        expect(converterBn(1000)).toEqual('এক হাজার');
    });
    it("contain 'এক হাজার' when passed 1200", () => {
        expect(converterBn(1200)).toContain('এক হাজার');
    });
    it("contain 'এক হাজার' when passed 1200.5343", () => {
        expect(converterBn(1200.5343)).toContain('এক হাজার');
    });
    //
    // // hundred
    it("return 'এক শত' when passed 100", () => {
        expect(converterBn(100)).toEqual('এক শত');
    });
    it("contain 'এক শত' when passed 120", () => {
        expect(converterBn(120)).toContain('এক শত');
    });
    it("contain 'এক শত' when passed 120.5343", () => {
        expect(converterBn(120.5343)).toContain('এক শত');
    });
    //
    // // less then 100
    it("return 'এক' when passed 1", () => {
        expect(converterBn(1)).toEqual('এক');
    });
    it("return 'পাঁচ' when passed 1", () => {
        expect(converterBn(5)).toEqual('পাঁচ');
    });
    it("return 'নিরানব্বই' when passed 99", () => {
        expect(converterBn(99)).toContain('নিরানব্বই');
    });
    it("contain 'নিরানব্বই' when passed 99.53", () => {
        expect(converterBn(99.53)).toContain('নিরানব্বই');
    });
    //
    //
    // // more then 100 core
    it("return 'এক শত বিশ কোটি' when passed 1200000000", () => {
        expect(converterBn(1200000000)).toEqual('এক শত বিশ কোটি');
    });
    //
    it("return 'এক শত বিশ কোটি চল্লিশ লক্ষ' when passed 1204000000", () => {
        expect(converterBn(1204000000)).toEqual('এক শত বিশ কোটি চল্লিশ লক্ষ');
    });
    //
    it("return 'নয় শত নিরানব্বই কোটি চল্লিশ লক্ষ' when passed 1204000000", () => {
        expect(converterBn(9994000000)).toEqual('নয় শত নিরানব্বই কোটি চল্লিশ লক্ষ');
    });
    //
    it("return 'এক শত বিশ কোটি চল্লিশ লক্ষ পঁচিশ' when passed 1204000000", () => {
        expect(converterBn(1204000025)).toEqual('এক শত বিশ কোটি চল্লিশ লক্ষ পঁচিশ');
    });

    // // Fraction
    it("contain 'দশমিক পাঁচ তিন' when passed 99.53", () => {
        expect(converterBn(99.53)).toContain('দশমিক পাঁচ তিন');
    });

    // random
    it("return 'তিন লক্ষ সাতানব্বই হাজার পাঁচ শত ত্রিশ' when passed 1204000000", () => {
        expect(converterBn(397530)).toEqual('তিন লক্ষ সাতানব্বই হাজার পাঁচ শত ত্রিশ');
    });
    it("return 'এক ছাব্বিশ কোটি উনচল্লিশ লক্ষ পঁচাত্তর হাজার তিন শত' when passed 1204000000", () => {
        expect(converterBn(1263975300)).toEqual('এক শত ছাব্বিশ কোটি উনচল্লিশ লক্ষ পঁচাত্তর হাজার তিন শত');
    });

    //suffix
    it("return 'এক শত বিশ কোটি চল্লিশ লক্ষ পঁচিশ টাকা মাত্র' when passed 1204000000", () => {
        expect(converterBn(1204000025, true)).toEqual('এক শত বিশ কোটি চল্লিশ লক্ষ পঁচিশ টাকা মাত্র');
    });
});