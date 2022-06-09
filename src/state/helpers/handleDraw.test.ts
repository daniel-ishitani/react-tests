import { handleDraw } from './handleDraw';

describe('handleDraw', () => {
  it('maps each participant to another person\'s name', () => {
    const participants = ['one', 'two', 'three'];

    const draw = handleDraw(participants);

    participants.forEach(participant => {
      expect(draw.get(participant)).not.toEqual(participant);
    })
  });
});
