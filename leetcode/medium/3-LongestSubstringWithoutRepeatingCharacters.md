##### https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

<img width="1754" height="1926" alt="image" src="https://github.com/user-attachments/assets/bda8515f-7769-4b6b-b721-81ea6ae317e2" />

`Algoritma kita selalu menyimpan substring unik terpanjang yang ditemukan sejauh ini, dan dia menghitung panjangnya berdasarkan window yang bebas duplikat.`

<img width="2334" height="2222" alt="image" src="https://github.com/user-attachments/assets/44957e50-21b6-48e0-bc60-5a1938d524f2" />

```python
Window: a, Panjang: 1, Max: 1
Window: ab, Panjang: 2, Max: 2
Window: abc, Panjang: 3, Max: 3

SELAMA 'a' ADA DI {'c', 'a', 'b'}
remove 'a'

Window: bca, Panjang: 3, Max: 3

SELAMA 'b' ADA DI {'c', 'a', 'b'}
remove 'b'

Window: cab, Panjang: 3, Max: 3

SELAMA 'c' ADA DI {'c', 'a', 'b'}
remove 'c'

Window: abc, Panjang: 3, Max: 3

SELAMA 'b' ADA DI {'c', 'a', 'b'}
remove 'a'
```
