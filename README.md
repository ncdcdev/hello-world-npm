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



## 仕様 (検討中)

```ts
// 標高
interface ElevationLevel {
  ev: Decimal; // 1.0
  lv: string;  // "TP"
}

// 変換オプション
// 例: GL=TP+10.0 GL=TP+12.0 Option { TP: 0.0, GL: -10.0, FL: -12.0 }
interface ElcOption{
  [id: string]: number;
} 

// 変換用クラス
class ElConverter{ ... }

// 使用イメージ
el: ElevationLevel = {
  ev: Decimal(1.0)
  lv: "TP"
}
option: ElcOption = {
  TP: 0.0,
  GL: -10.0,
} // GL=TP+10.0

// 値を変換して取得
elc = ElConverter(option)
elc.get(el, "TP") //Decimal(1.0)
elc.get(el, "GL") //Decimal(11.0)

```

# 以下、古いやつ（2022/12/19）

- 初期設定が必要（変換する基準)
  - 例.GLがTP2.0m
- これをどうもたせるか

## 検討

２つの変換パターンがある
1. GL = TP+1.0のとき、 GL +3.0はTPいくつですか？(基準は変わらない)
2. GL = TP+1.0で GL +3.0の地点は、GL = TP+2.0の時のGLはいくつですか？(基準が変わる)

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

## 標高基準(TPとかGL)の変換
```ts

```

## 加算

### ELと数字の足し算(ELが戻る)
```ts
const foo : el = new el({ "TP" : 1.0 });
const bar : el = foo.add(12.5); 
console.log(bar.get("TP")); //13.5 
```

### EL同士の足し算(数字が戻る)
```ts
const foo : el = new el({ "TP" : 1.0 });
const bar : el = new el({ "TP" : 12.5 });
const hoge : Decimal = foo.add(bar);
console.log(hoge.toNumber()); // 13.5
```

## 減算

### ELから数字を引く(ELが戻る)
```ts
const foo : el = new el({ "TP" : 1.0 });
const bar : el = foo.sub(12.5); 
console.log(bar.get("TP")); //-11.5 (絶対値がいい) 
```

### EL同士の足し算
```ts
const foo : el = new el({ "TP" : 1.0 });
const bar : el = new el({ "TP" : 12.5 });
const hoge : Decimal = foo.add(bar);
console.log(hoge.toNumber()); // 13.5
```





