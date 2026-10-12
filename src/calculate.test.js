import test from 'node:test';import assert from 'node:assert/strict';import {calculateLoan} from './calculate.js';
test('standard amortized loan',()=>{const r=calculateLoan(120000,6,10);assert.ok(Math.abs(r.payment-1332.246)<.01);assert.ok(Math.abs(r.schedule.at(-1).balance)<1e-8)});
test('zero interest',()=>{const r=calculateLoan(1200,0,1);assert.equal(r.payment,100);assert.equal(r.totalInterest,0)});
test('one month',()=>{const r=calculateLoan(100,12,1/12);assert.equal(r.schedule.length,1);assert.ok(Math.abs(r.payment-101)<.00001)});
for(const values of [[0,5,10],[-5,5,10],[100,-1,10],[100,101,10],[100,5,0],[100,5,51],[Infinity,5,10]])test(`reject invalid ${values}`,()=>assert.throws(()=>calculateLoan(...values)));
