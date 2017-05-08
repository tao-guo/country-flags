import React from 'react';
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
      {simpleCountries.map((countries, i) =>
      <div>
        <hr/>
        <div key={i}>
          {countries.map((v, j) =>
          <div className={"flag--" + v} key={j}></div>
          )}
        </div>
      </div>
      )}
      <hr/>
      <countries.FlagOfUS width={144}/>
      <countries.UnionFlag width={144}/>
      <countries.FlagOfChina width={144}/>
      <countries.FlagOfSouthKorea width={144}/>
    </div>
  );
}
export default App;
