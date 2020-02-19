Simple tiny library to convert number/amount to words for Bangladeshi Taka.

### install
```
npm i taka-amount-to-word-js --save-dev
```
```
yarn add taka-amount-to-word-js --dev
```

### usage
```
const converter = require('taka-amount-to-word-js');
console.log(converter(1204000025)); // One hundred twenty core forty lac twenty-five taka only
console.log(converter(1263975300, 'bn')); // এক শত ছাব্বিশ কোটি উনচল্লিশ লক্ষ পঁচাত্তর হাজার তিন শত টাকা মাত্র
```

### parameters / arguments
```
(n, language = 'en', suffix = true)
```

##### 1st argument
Expecting 1st argument as positive integer or float number.

##### 2nd argument (language)
By default function return's english version. For bangla, pass 'bn' as second argument

##### 3rd argument (suffix)
By default 'taka only' on English and 'টাকা মাত্র' is added after the words. If you like just the words without suffix, pass 3rd argument as false.

