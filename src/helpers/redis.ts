import Keyv from '@keyvhq/core';
import KeyvRedis from '@keyvhq/redis';

interface RedisConfig {
  url: string,
  password?: string,
  db?: number,
}

export function createRedisClient(redisConfig: RedisConfig, namespace: string): Keyv {
  const cache = new KeyvRedis(redisConfig.url, {
    password: redisConfig.password,
    db: redisConfig.db ?? 0,
  });

  return new Keyv({
    store: cache,
    namespace,
  });
}
