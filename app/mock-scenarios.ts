import { Scenario } from './scenario';
import { Step } from './step';

export const SCENARIOS: Scenario[] = [{
  name: 'scenario 1',
  steps: [
    {type: 'When', name: 'sc1 Mr. Nice'} as Step,
    {type: 'Given', name: 'sc1 Narco'} as Step,
    {type: 'Given', name: 'sc1 Bombasto'} as Step,
    {type: 'Given', name: 'sc1 Celeritas'} as Step,
    {type: 'When', name: 'sc1 Magneta'} as Step,
    {type: 'Given', name: 'sc1 RubberMan'} as Step,
    {type: 'Given', name: 'sc1 Dynama'} as Step,
    {type: 'Given', name: 'sc1 Dr IQ'} as Step,
    {type: 'When', name: 'sc1 Magma'} as Step,
    {type: 'Given', name: 'sc1 Tornado'} as Step
  ]
},{
  name: 'scenario 2',
  steps: [
    {type: 'When', name: 'sc2 Mr. Nice'} as Step,
    {type: 'Given', name: 'sc2 Narco'} as Step,
    {type: 'Given', name: 'sc2 Bombasto'} as Step,
    {type: 'Given', name: 'sc2 Celeritas'} as Step,
    {type: 'When', name: 'sc2 Magneta'} as Step,
    {type: 'Given', name: 'sc2 RubberMan'} as Step,
    {type: 'Given', name: 'sc2 Dynama'} as Step,
    {type: 'Given', name: 'sc2 Dr IQ'} as Step,
    {type: 'When', name: 'sc2 Magma'} as Step,
    {type: 'Given', name: 'sc2 Tornado'} as Step
  ]
}];
