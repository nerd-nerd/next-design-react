---
title: Button
nav:
  title: components
  path: /components
---

## 基础使用

### type

通过 type 属性切换 Button 组件样式

```tsx
import React from 'react';
import { Button } from 'next-design-react';

export default () => {
  return (
    <>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </>
  );
};
```

### disabled

通过 disabled 属性设置按钮是否禁用

```tsx
import React from 'react';
import { Button } from 'next-design-react';

export default () => {
  return (
    <>
      <Button
        disabled={true}
        onPress={() => {
          console.log(1);
        }}
      >
        default
      </Button>
      <br />
      <Button disabled={true} type="primary">
        primary
      </Button>
      <br />
      <Button disabled={true} type="warn">
        warn
      </Button>
    </>
  );
};
```

<API></API>
