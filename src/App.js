import React, { Component } from 'react';
import * as countries from './countries';

const simpleCountries = [
  ['poland', 'ukraine'],
  ['russia', 'bulgaria', 'germany', 'netherlands', 'lithuania', 'austria', 'hungary', 'estonia', 'spain'],
  ['italy', 'belgium', 'france', 'romania'],
  ['denmark', 'finland', 'sweden', 'iceland', 'norway', 'switzeland']
];

function App() {
  return (
    <div>
      {simpleCountries.map((countries) =>
      <div>
        {countries.map((v) =>
          <div className={"flag--" + v}></div>
        )}
      </div>
      )}
      <countries.FlagOfUS width="144"/>
      <countries.UnionFlag width="144"/>
      <countries.FlagOfChina width="144"/>
      <countries.FlagOfSouthKorea width="144"/>
    </div>
  );
}
export default App;
