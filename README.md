# @luchao/random-rule-string
#### 生成符合规则的随机字符串，适用于生成随机密码或验证码

安装
------
    npm install @luchao/random-rule-string --save

示例
------
```javascript
import randomRuleString from '@luchao/random-rule-string'
/**
 * LEN      长度
 * FORMAT   字符串包含格式，n数字 l小写字母 u大写字母 s特殊字符， 默认["n", "l", "u", "s"]
 * SPECIAL  自定义特殊字符数组，默认["!", "@", "#", "$", "%", "^", "&", "*", "_"]
 * 
 * FORMAT参数中指定 s 时，SPECIAL参数不可为空数组
 */
var str = randomRuleString({
    LEN: 6,
    FORMAT: ["n", "l", "u", "s"]
    SPECIAL: ["!", "@", "#", "$"]
})
```
