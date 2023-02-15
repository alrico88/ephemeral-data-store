[ephemeral-data-store](../README.md) / [Exports](../modules.md) / DataStoreOptions

# Interface: DataStoreOptions

## Table of contents

### Properties

- [encryptionPassword](DataStoreOptions.md#encryptionpassword)
- [expirationMs](DataStoreOptions.md#expirationms)
- [idLength](DataStoreOptions.md#idlength)
- [namespace](DataStoreOptions.md#namespace)
- [redis](DataStoreOptions.md#redis)

## Properties

### encryptionPassword

• `Optional` **encryptionPassword**: `string`

#### Defined in

[index.ts:13](https://github.com/alrico88/ephemeral-data-store/blob/master/src/index.ts#L13)

___

### expirationMs

• **expirationMs**: `number`

#### Defined in

[index.ts:14](https://github.com/alrico88/ephemeral-data-store/blob/master/src/index.ts#L14)

___

### idLength

• `Optional` **idLength**: `number`

#### Defined in

[index.ts:15](https://github.com/alrico88/ephemeral-data-store/blob/master/src/index.ts#L15)

___

### namespace

• **namespace**: `string`

#### Defined in

[index.ts:12](https://github.com/alrico88/ephemeral-data-store/blob/master/src/index.ts#L12)

___

### redis

• **redis**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `db` | `number` |
| `password?` | `string` |
| `url` | `string` |

#### Defined in

[index.ts:7](https://github.com/alrico88/ephemeral-data-store/blob/master/src/index.ts#L7)
