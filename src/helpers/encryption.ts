import StringCrypto from 'string-crypto';

export class Encryptor {
  private password: string;

  private cryptor = new StringCrypto();

  public constructor(password: string) {
    this.password = password;
  }

  encryptString(str: string): string {
    return this.cryptor.encryptString(str, this.password);
  }

  decryptString(str: string): string {
    return this.cryptor.decryptString(str, this.password);
  }
}
