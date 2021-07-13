# shallowMount

```plaintext
mount 컴포넌트를 실제로 랜더링 함.
shallowMount는 랜더링하는 척만 함.
따라서 test시에는 shallowMount 쪽이 권장되는 방법임
```


```vue
// Parent.vue
<template>
  <h1>Parent</h1>
  <Child msg="HEROPY" />
</template>

<script>
import Child from './Child'

export default {
  components: {
    Child
  }
}
</script>
```


```js
// Parent.test.js

import { shallowMount } from '@vue/test-utils'
import Parent from './Parent'

test('Mount', () => {
  const wrapper = shallowMount(Parent)
  expect(wrapper.html()).toBe('')
})
```