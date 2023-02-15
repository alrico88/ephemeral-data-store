import Keyv from '@keyvhq/core';
import { nanoid } from 'nanoid';
import { Encryptor } from './helpers/encryption';
import { createRedisClient } from './helpers/redis';

export interface DataStoreOptions {
  redis: {
    url: string,
    password?: string,
    db: number,
  },
  namespace: string,
  encryptionPassword?: string,
  expirationMs: number,
  idLength?: number,
}

export class EphemeralStore {
  private redisClient: Keyv;

  private ttl: number;

  private encryptor: Encryptor;

  private idLength?: number;

  public constructor(options: DataStoreOptions) {
    this.redisClient = createRedisClient({
      url: options.redis.url,
      password: options.redis.password,
      db: options.redis.db,
    }, options.namespace);

    this.ttl = options.expirationMs;

    this.encryptor = new Encryptor(options.encryptionPassword ?? '');

    this.idLength = options.idLength;
  }

  async save(value: string, customId?: string): Promise<string> {
    const id = customId ?? nanoid(this.idLength);

    await this.redisClient.set(id, this.encryptor.encryptString(value), this.ttl);

    return id;
  }

  async get(id: string): Promise<string> {
    const stored = await this.redisClient.get(id);

    return this.encryptor.decryptString(stored);
  }
}
