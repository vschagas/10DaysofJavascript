function getMaxLessThanK(n, k) {
  let max = 0;

  for (let index = 1; index <= n; index++) {
      for (let index2 = index + 1; index2 <= n; index2++) {
          let result = (index & index2);
          (result < k && result > max) && (max = result);
      }
  }

  return max;
}