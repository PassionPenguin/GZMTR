## PlatformType:

0 -> 1个岛式站台

1 -> 2个侧式站台

2 -> 混合

## StructureType:

0 -> 地下

1 -> 地面

2 -> 高架

## HallType:

0 -> 地下

1 -> 地面

2 -> 高架

## TransferType:

0 -> 同台换乘

1 -> 通道换乘

2 -> 站厅换乘

## 将json合并会js

```bash
for ((i=0; i<=26; i++))
do
cat "${i}.json" >> /users/penguin/downloads/stationinf.js #自行替换地址
echo "," >>  /users/penguin/downloads/stationinf.js #自行替换地址
done
```
