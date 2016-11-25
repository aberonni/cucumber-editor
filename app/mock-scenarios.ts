import { Scenario } from './scenario';

export const SCENARIOS: Scenario[] = [{
  name: 'scenario 1',
  steps: [
    {type: 'When', name: 'sc1 Mr. Nice'},
    {type: 'Given', name: 'sc1 Narco'},
    {type: 'Given', name: 'sc1 Bombasto'},
    {type: 'Given', name: 'sc1 Celeritas'},
    {type: 'When', name: 'sc1 Magneta'},
    {type: 'Given', name: 'sc1 RubberMan'},
    {type: 'Given', name: 'sc1 Dynama'},
    {type: 'Given', name: 'sc1 Dr IQ'},
    {type: 'When', name: 'sc1 Magma'},
    {type: 'Given', name: 'sc1 Tornado'}
  ]
},{
  name: 'scenario 2',
  steps: [
    {type: 'When', name: 'sc2 Mr. Nice'},
    {type: 'Given', name: 'sc2 Narco'},
    {type: 'Given', name: 'sc2 Bombasto'},
    {type: 'Given', name: 'sc2 Celeritas'},
    {type: 'When', name: 'sc2 Magneta'},
    {type: 'Given', name: 'sc2 RubberMan'},
    {type: 'Given', name: 'sc2 Dynama'},
    {type: 'Given', name: 'sc2 Dr IQ'},
    {type: 'When', name: 'sc2 Magma'},
    {type: 'Given', name: 'sc2 Tornado'}
  ]
}];
