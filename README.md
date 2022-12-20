# ElevationLevel

標高計算をするためのライブラリ。
建築系のプロジェクトに置いて、TPやGLなどの標高基準を扱うことを想定し、
標高の計算や、基準の変換(TPからGLなど)を実施する。

## 使い方

### TP+1.0を宣言と値の取得

```ts
// TP+1.0 
const el = new ElevationLevel(
  {
    level: 1.0,
    standard: 'TP' as const,
  }
)
el.get('TP') // = Decimal(1.0)
```

### TPからGLへの変換
```ts
const el = new ElevationLevel(
  {
    level: 10,
    standard: 'TP' as const,
  }
)
el.to("GL", { GL: { standard: "TP" as const, level: 6 } }) // = Decimal(4.0)
```

# 本ライブラリの開発用情報

## Build

- install
  - `yarn`
- build
  - `yarn build`

## publish

- npmにpublishする
```
yarn np
```

- (参考)npmにpublishしない(githubにpushしてtagを打つ)
```
yarn np -no-publish
```


