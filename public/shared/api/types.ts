export type ApiHeaders = {
  [p: string]: string;
}

export type ApiRequestDecoration = (url: string, extra: Record<string, unknown>) => Promise<unknown>;
