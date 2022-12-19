# hello-world-npm

npm ライブラリを作って、公開する
(ハッカソン 2022)

## 参考

- オリジナルの JavaScript ライブラリを作ろう
  - https://zenn.dev/manycicadas/books/b6f2d99b5208e9/viewer/c70a5d


# 動かし方

- install
  - `yarn`
- build
  - `yarn build`

## 仕様

- 初期設定が必要（変換する基準)
  - 例.GLがTP2.0m
- これをどうもたせるか

- 案.1 constructorでわたす
```ts
import { ElevationLevel as el} from 'ElevationLevel';

const option = {
  TP: '0.0',
  FL: '2.0',
  // GL: '3.0'
}
const foo = new el({option})

console.log(foo.get('FL')) 

// foo.get('GL') 
// Error GL is not defined
```

- 案2. 毎回引数に変換元と変換先を指定する

```ts
import { toFL } from 'ElevationLevel';

const foo = toFl({ GL: { TP: 2.0}}, {GL: 3.0})

```

## 加算

### ELと数字の足し算
```ts
const foo : el = new el({ "TP" : 1.0 });
const bar : el = foo.add(12.5); 
console.log(bar.get("TP")); //13.5 
```

### EL同士の足し算
```ts
const foo : el = new el({ "TP" : 1.0 });
const bar : el = new el({ "TP" : 12.5 });
const hoge : Decimal = foo.add(bar);
console.log(hoge.toNumber()); // 13.5
```

## 減算