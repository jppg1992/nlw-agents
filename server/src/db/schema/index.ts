//Barrel file -> arquivo que exporta demais arquivos da pasta

import { audioChunks } from './audio-chunks.ts';
import { questions } from './questions.ts';
import { rooms } from './rooms.ts';

export const schema = {
  rooms,
  questions,
  audioChunks,
};
