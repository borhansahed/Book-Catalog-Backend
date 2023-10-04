import { z } from "zod";

const createOrder = z.object({
  body: z.object({
    orderedBooks: z.array(
      z
        .object({
          bookId: z.string({
            required_error: "bookId required",
          }),
          quantity: z.number({
            required_error: "bookId required",
          }),
        })
        .strict()
    ),
  }),
});

export const OrderValidation = {
  createOrder,
};
