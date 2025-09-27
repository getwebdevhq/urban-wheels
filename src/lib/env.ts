import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    GITHUB_ACCESS_TOKEN: z.string().optional(),
  },
  client: {},
  runtimeEnv: {
    GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});