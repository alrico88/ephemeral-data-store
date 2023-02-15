[ephemeral-data-store](../README.md) / [Exports](../modules.md) / EphemeralStore

# Class: EphemeralStore

## Table of contents

### Constructors

- [constructor](EphemeralStore.md#constructor)

### Properties

- [encryptor](EphemeralStore.md#encryptor)
- [idLength](EphemeralStore.md#idlength)
- [redisClient](EphemeralStore.md#redisclient)
- [ttl](EphemeralStore.md#ttl)

### Methods

- [get](EphemeralStore.md#get)
- [save](EphemeralStore.md#save)

## Constructors

### constructor

• **new EphemeralStore**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DataStoreOptions`](../interfaces/DataStoreOptions.md) |

#### Defined in

[index.ts:27](https://github.com/alrico88/ephemeral-data-store/blob/master/src/index.ts#L27)

## Properties

### encryptor

• `Private` **encryptor**: `Encryptor`

#### Defined in

[index.ts:23](https://github.com/alrico88/ephemeral-data-store/blob/master/src/index.ts#L23)

___

### idLength

• `Private` `Optional` **idLength**: `number`

#### Defined in

[index.ts:25](https://github.com/alrico88/ephemeral-data-store/blob/master/src/index.ts#L25)

___

### redisClient

• `Private` **redisClient**: `Keyv`<`any`\>

#### Defined in

[index.ts:19](https://github.com/alrico88/ephemeral-data-store/blob/master/src/index.ts#L19)

___

### ttl

• `Private` **ttl**: `number`

#### Defined in

[index.ts:21](https://github.com/alrico88/ephemeral-data-store/blob/master/src/index.ts#L21)

## Methods

### get

▸ **get**(`id`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[index.ts:49](https://github.com/alrico88/ephemeral-data-store/blob/master/src/index.ts#L49)

___

### save

▸ **save**(`value`, `customId?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `customId?` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[index.ts:41](https://github.com/alrico88/ephemeral-data-store/blob/master/src/index.ts#L41)
