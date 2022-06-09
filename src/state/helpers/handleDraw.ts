import shuffle from "just-shuffle";

export const handleDraw = (participants: string[]) => {
  const shuffled = shuffle(participants);

  const draw = new Map<string, string>();

  draw.set(shuffled[0], shuffled[participants.length - 1])
  for(let i = 1; i < participants.length; i++) {
    draw.set(shuffled[i], shuffled[i - 1]);
  }

  return draw;
};
