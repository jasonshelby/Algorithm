// const { PrintMinNumber } = require('./数据结构与算法/数理.js')
// const { FindPaths } = require('./数据结构与算法/二叉树.js')
function ll() {
  console.log(...arguments)
}


function knapSack(capacity, weights, values, n) {

  var i, w, a, b, kS = [];

  for (i = 0; i <= n; i++) { //{1}
    kS[i] = [];
  }

  for (i = 0; i <= n; i++) {
    for (w = 0; w <= capacity; w++) {
      if (i == 0 || w == 0) { //{2}
        kS[i][w] = 0;
      } else if (weights[i - 1] <= w) { //{3}
        ll(i, w)
        ll('A', values[i - 1], '+', kS[i - 1][w - weights[i - 1]])
        ll('B', kS[i - 1][w])
        ll()
        a = values[i - 1] + kS[i - 1][w - weights[i - 1]];
        b = kS[i - 1][w];
        kS[i][w] = (a > b) ? a : b; //{4} max(a,b)
      } else {
        kS[i][w] = kS[i - 1][w]; //{5} 
      }
    }
  }
  ll(kS)

  return kS[n][capacity]; //{6} 
}
var capacity = 5
var weights = [3, 4, 2]
var values = [4, 5, 3]
var n = 3

ll(knapSack(capacity, weights, values, n))