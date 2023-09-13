declare module 'ramda-fantasy' {
  export function IO<T>(f: () => T): IO<T>;
}