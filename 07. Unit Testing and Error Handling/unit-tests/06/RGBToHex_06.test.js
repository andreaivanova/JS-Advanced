const { expect } = require('chai');
const { rgbToHexColor } = require('./RGBToHex_06');

describe('RGB To Hex Colors', () => {

    it('converts black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('converts white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });


    it('converts blue to #234465', () => {
        expect(rgbToHexColor(35, 68, 101)).to.equal('#234465');
    });

    it('returns undefined for missing parameters', () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    });

    it('returns undefined for out of lower bounds', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });

    it('returns undefined for out of upper bounds', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });

    it('returns undefined for float numbers', () => {
        expect(rgbToHexColor(1.1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 1.1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 1.1)).to.be.undefined;
    });

    it('converts 15,15,15 for #0F0F0F', () => {
        expect(rgbToHexColor(15,15,15)).to.equal('#0F0F0F');
    });

    it('returns undefined for float numbers', () => {
        expect(rgbToHexColor(1.1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 1.1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 1.1)).to.be.undefined;
    });

    it('returns undefined for strings', () => {
        expect(rgbToHexColor('1', 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, '1', 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, '1')).to.be.undefined;
    });



})