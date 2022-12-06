import _ from 'lodash';

export default function Randomizer() {
  const value = _.random(1, 10);
  return (<p>value = {value}</p>);
}