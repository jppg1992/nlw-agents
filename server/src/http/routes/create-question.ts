import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import z from 'zod/v4';
import { db } from '../../db/connection.ts';
import { schema } from '../../db/schema/index.ts';

export const createQuestionRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    '/rooms/:roomId/questions',
    {
      schema: {
        body: z.object({
          question: z.string().min(1),
        }),
        params: z.object({
          roomId: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { roomId } = await request.params;
      const { question } = await request.body;

      const results = await db
        .insert(schema.questions)
        .values({
          question,
          roomId,
        })
        .returning();

      const insertedQuestion = results[0];
      if (!insertedQuestion) {
        throw new Error('Failed to create an question!');
      }

      return reply.status(201).send({ questionId: insertedQuestion.id });
    }
  );
};
