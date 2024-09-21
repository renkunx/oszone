---
title: 01 Midway - 一个面向未来的云端一体 Node.js 框架
description: 01 Midway - 一个面向未来的云端一体 Node.js 框架
showGithub: true 
---


## 描述

`Midway` 是一个适用于构建 Serverless 服务，传统应用、微服务，小程序后端的 Node.js 框架。

`Midway` 可以使用 Koa，Express 或 Egg.js 作为基础 Web 框架。它还提供了独立使用的基本解决方案，例如 Socket.io，GRPC，Dubbo.js 和 RabbitMQ 等。

此外，`Midway` 也适用于前端/全栈开发人员的 Node.js 无服务器框架。构建下一个十年的应用程序。可在 AWS，阿里云，腾讯云和传统 VM /容器上运行。与 React 和 Vue 轻松集成。 🌈

## 特性

- 🐘 **全功能**：支持 Web 应用/Serverless/FaaS/微服务/小程序后端等多种场景，基于装饰器和依赖注入开发企业级应用
- 🐦 **前端集成**：全新的云端一体应用研发体验，零 API 调用，使用 "React Hooks " 风格一体研发
- 🐴 **跨平台**：支持部署至普通 Server 或 Serverless/FaaS 环境
- 🐶 **扩展**：组件化扩展能力，另外支持使用 Koa/Express/Egg.js 生态插件
- 🐂 **示例**: 官方提供多种场景的示例代码，方便开发者快速上手
- 🛡 TypeScript 全面支持

## 快速入门

>如果你没有接触过 `Midway`，没关系，本章节我们将从实例的角度，一步步地搭建出一个 `Midway`
>标准应用，展示天气信息，让你能快速的入门 `Midway`。

### 初始化项目

我们推荐直接使用脚手架，只需几条简单指令，即可快速生成项目。

```bash
$ npm init midway@latest -y
```

选择 `koa-v3` 项目进行初始化创建，项目名可以自定，比如 `weather-sample`。

现在可以启动应用来体验下。

```bash
$ npm run dev
$ open http://localhost:7001
```

同时，我们也提供了完整的实例，可以在 `npm init midway` 之后，选择 `quick-start` 项目，创建即可，方便对照学习。


### 编写 Controller

如果你熟悉 Web 开发或 MVC，就知道第一步我们需要编写Controller 和 Router。

在脚手架创建的文件中，我们已经有了一些文件，我们暂时忽略他们。

在 `controller` 目录中，新建一个 `src/controller/weather.controller.ts` 文件，内容如下。

```typescript
import { Controller, Get } from '@midwayjs/core';

@Controller('/')
export class WeatherController {
  // 这里是装饰器，定义一个路由
  @Get('/weather')
  async getWeatherInfo(): Promise<string> {
    // 这里是 http 的返回，可以直接返回字符串，数字，JSON，Buffer 等
    return 'Hello Weather!';
  }
}
```

现在我们可以通过访问 `/weather` 接口返回数据了。

### 添加参数处理

在示例中，我们需要一个 URL 参数来动态展示不同城市的天气。

通过添加 `@Query` 装饰器，我们可以获取到 URL 上的参数。

```typescript
import { Controller, Get, Query } from '@midwayjs/core';

@Controller('/')
export class WeatherController {
  @Get('/weather')
  async getWeatherInfo(@Query('cityId') cityId: string): Promise<string> {
    return cityId;
  }
}
```

除了 `@Query` 装饰器，`Midway` 也提供了其他请求参数的获取，可以查看路由和控制文档。

### 编写 Service

在实际项目中，Controller 一般用来接收请求参数，校验参数，不会包括特别复杂的逻辑，复杂而复用的逻辑，我们应该封装为 Service 文件。

我们来添加一个 Service 用来获取天气信息，其中包括一个 http 请求，获取远端的数据。

代码如下：

```typescript
// src/service/weather.service.ts
import { Provide, makeHttpRequest } from '@midwayjs/core';

@Provide()
export class WeatherService {
  async getWeather(cityId: string) {
    return makeHttpRequest(`https://midwayjs.org/resource/${cityId}.json`, {
      dataType: 'json',
    });
  }
}
```

>`makeHttpRequest` 方法是 `Midway` 内置的 http 请求方法

然后我们来添加定义，良好的类型定义可以帮助我们减少代码错误。

在 `src/interface.ts` 文件中，我们增加天气信息的数据定义。

```typescript
// src/interface.ts
export interface WeatherInfo {
  weatherinfo: {
    city: string;
    cityid: string;
    temp: string;
    WD: string;
    WS: string;
    SD: string;
    AP: string;
    njd: string;
    WSE: string;
    time: string;
    sm: string;
    isRadar: string;
    Radar: string;
  }
}
```

这样，我们就可以在 Service 中进行标注了。

```typescript
import { Provide, makeHttpRequest } from '@midwayjs/core';
import { WeatherInfo } from '../interface';

@Provide()
export class WeatherService {
  async getWeather(cityId: string): Promise<WeatherInfo> {
    const result = await makeHttpRequest<WeatherInfo>(`https://midwayjs.org/resource/${cityId}.json`, {
      dataType: 'json',
    });

    if (result.status === 200) {
      return result.data as WeatherInfo;
    }
  }
}

```

>这里使用 @Provide 装饰器修饰类，便于后续 Controller 注入该类

同时，我们修改下之前的 Controller 文件。

```typescript
import { Controller, Get, Inject, Query } from '@midwayjs/core';
import { WeatherInfo } from '../interface';
import { WeatherService } from '../service/weather.service';

@Controller('/')
export class WeatherController {

  @Inject()
  weatherService: WeatherService;

  @Get('/weather')
  async getWeatherInfo(@Query('cityId') cityId: string): Promise<WeatherInfo> {
    return this.weatherService.getWeather(cityId);
  }
}
```

>1. 这里使用 `@Inject` 装饰器注入 `WeatherService`，是 `Midway` 依赖注入的标准用法
>2. 这里也同步修改了方法的返回值类型

到这里，我们可以请求 `http://127.0.0.1:7001/weather?cityId=101010100` 查看返回的结果。

你的第一个 `Midway` 接口已经开发完成了，你可以在前端代码中直接调用了，接下去，我们将利用这个接口完成一个服务端渲染的页面。

### 模板渲染

从这里开始，我们需要用到一些 `Midway` 的扩展能力。

`Midway` 对应的扩展包我们称为 “组件”，也是标准的 npm 包。

这里我们需要用到 `@midwayjs/view-nunjucks` 组件。

可以使用下面的命令安装。

```bash
$ npm i @midwayjs/view-nunjucks --save
```

安装完成后，我们在 `src/configuration.ts` 文件中启用组件。

```typescript
// ...
import * as view from '@midwayjs/view-nunjucks';

@Configuration({
  imports: [
    koa,
    // ...
    view
  ],
  importConfigs: [join(__dirname, './config')],
})
export class MainConfiguration {
  // ...
}

```

>1. `configuration` 文件是 `Midway` 的生命周期入口文件，承担了组件开关，配置加载和生命周期管理的作用
>2. `imports` 就使用来导入（开启）组件的方法

在 `src/config/config.default.ts` 中配置组件，指定为 `nunjucks` 模板。

```typescript
import { MidwayConfig } from '@midwayjs/core';

export default {
  // ...
  view: {
    defaultViewEngine: 'nunjucks',
  },
} as MidwayConfig;

```

在根目录（非 src 里）添加模板 `view/info.html` 文件，内容如下：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>天气预报</title>
    <style>
      .weather_bg {
        background-color: #0d68bc;
        height: 150px;
        color: #fff;
        font-size: 12px;
        line-height: 1em;
        text-align: center;
        padding: 10px;
      }

      .weather_bg label {
        line-height: 1.5em;
        text-align: center;
        text-shadow: 1px 1px 1px #555;
        background: #afdb00;
        width: 100px;
        display: inline-block;
        margin-left: 10px;
      }

      .weather_bg .temp {
        font-size: 32px;
        margin-top: 5px;
        padding-left: 14px;
      }
      .weather_bg sup {
        font-size: 0.5em;
      }
    </style>
  </head>
  <body>
    <div class="weather_bg">
      <div>
        <p>
          {{city}}（{{WD}}{{WS}}）
        </p>
        <p class="temp">{{temp}}<sup>℃</sup></p>
        <p>
          气压<label>{{AP}}</label>
        </p>
        <p>
          湿度<label>{{SD}}</label>
        </p>
      </div>
    </div>
  </body>
</html>

```

同时，我们调整 Controller 的代码，将返回 JSON 变为模板渲染。

```typescript
// src/controller/weather.controller.ts
import { Controller, Get, Inject, Query } from '@midwayjs/core';
import { WeatherService } from '../service/weather.service';
import { Context } from '@midwayjs/koa';

@Controller('/')
export class WeatherController {

  @Inject()
  weatherService: WeatherService;

  @Inject()
  ctx: Context;

  @Get('/weather')
  async getWeatherInfo(@Query('cityId') cityId: string): Promise<void> {
    const result = await this.weatherService.getWeather(cityId);
    if (result) {
      await this.ctx.render('info', result.weatherinfo);
    }
  }
}
```

到这一步，我们访问 `http://127.0.0.1:7001/weather?cityId=101010100` 已经可以看到渲染的模板内容了。

### 错误处理

别忘了，我们还有一些异常的逻辑需要处理。

一般来说，每个对外的调用都需要做异常捕获，并且将异常转变为我们自己业务的错误，这样才能有更好的体验。

为此，我们需要定义一个我们自己的业务错误，创建一个 `src/error/weather.error.ts` 文件。

```typescript
// src/error/weather.error.ts
import { MidwayError } from '@midwayjs/core';

export class WeatherEmptyDataError extends MidwayError {
  constructor(err?: Error) {
    super('weather data is empty', {
      cause: err,
    });
    if (err?.stack) {
      this.stack = err.stack;
    }
  }
}
```

然后，我们调整 Service 代码抛出异常。

```typescript
// src/service/weather.service.ts
import { Provide, makeHttpRequest } from '@midwayjs/core';
import { WeatherInfo } from '../interface';
import { WeatherEmptyDataError } from '../error/weather.error';

@Provide()
export class WeatherService {
  async getWeather(cityId: string): Promise<WeatherInfo> {
    if (!cityId) {
      throw new WeatherEmptyDataError();
    }

    try {
      const result = await makeHttpRequest<WeatherInfo>(`https://midwayjs.org/resource/${cityId}.json`, {
        dataType: 'json',
      });
      if (result.status === 200) {
        return result.data as WeatherInfo;
      }
    } catch (error) {
      throw new WeatherEmptyDataError(error);
    }
  }
}
```


> 1. 将 http 的调用请求进行错误捕获，将错误包裹，返回一个我们系统的业务错误
> 2. 如有必要，我们可以定义更多的错误，分配错误 Code 等


到这一步，我们还需要将异常进行业务处理，比如有多个位置抛出 `WeatherEmptyDataError` 时，我们需要统一的格式返回。

错误处理器可以完成这个功能，我们需要创建一个 `src/filter/weather.filter.ts` 文件，内容如下：

```typescript
//src/filter/weather.filter.ts
import { Catch } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { WeatherEmptyDataError } from '../error/weather.error';

@Catch(WeatherEmptyDataError)
export class WeatherErrorFilter {
  async catch(err: WeatherEmptyDataError, ctx: Context) {
    ctx.logger.error(err);
    return '<html><body><h1>weather data is empty</h1></body></html>';
  }
}

```

然后应用到当前的框架中。

```typescript
import { Configuration, App } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import { WeatherErrorFilter } from './filter/weather.filter';
// ...

@Configuration({
  // ...
})
export class MainConfiguration {
  @App()
  app: koa.Application;

  async onReady() {
    // ...

    // add filter
    this.app.useFilter([WeatherErrorFilter]);
  }
}
```

这样，当每次请求中获取到了 `WeatherEmptyDataError` 错误，会使用相同的返回值返回给浏览器，同时会在日志中记录原始的错误信息。

### 数据模拟

在编写代码时，我们的接口经常还处在无法使用的阶段，为了尽可能降低影响，可以使用模拟数据来代替。

比如我们的天气接口，就可以在本地和测试环境模拟掉。

我们需要创建一个 `src/mock/data.mock.ts` 文件，内容如下：

```typescript
// src/mock/data.mock.ts
import {
  Mock,
  ISimulation,
  App,
  Inject,
  IMidwayApplication,
  MidwayMockService,
} from '@midwayjs/core';
import { WeatherService } from '../service/weather.service';

@Mock()
export class WeatherDataMock implements ISimulation {
  @App()
  app: IMidwayApplication;

  @Inject()
  mockService: MidwayMockService;

  async setup(): Promise<void> {
    const originMethod = WeatherService.prototype.getWeather;
    this.mockService.mockClassProperty(
      WeatherService,
      'getWeather',
      async cityId => {
        if (cityId === '101010100') {
          return {
            weatherinfo: {
              city: '北京',
              cityid: '101010100',
              temp: '27.9',
              WD: '南风',
              WS: '小于3级',
              SD: '28%',
              AP: '1002hPa',
              njd: '暂无实况',
              WSE: '<3',
              time: '17:55',
              sm: '2.1',
              isRadar: '1',
              Radar: 'JC_RADAR_AZ9010_JB',
            },
          };
        } else {
          return originMethod.apply(this, [cityId]);
        }
      }
    );
  }

  enableCondition(): boolean | Promise<boolean> {
    // 模拟类启用的条件
    return ['local', 'test', 'unittest'].includes(this.app.getEnv());
  }
}

```

`WeatherDataMock` 类用于模拟天气数据，其中的 `setup` 方法，用于实际的初始化模拟，其中，我们使用了内置的 `MidwayMockService` 的 `mockClassProperty` 方法，将 `WeatherService` 的 `getWeather` 方法模拟掉。

在模拟过程中，我们仅仅将单个城市的数据进行了处理，其他依旧走了原来的接口。

`enableCondition` 用于标识这个模拟类在哪些场景下生效，比如我们上面的代码就仅在本地和测试环境生效。

这样，当本地开发和测试时，我们请求 `101010100` 的数据，将直接被拦截和返回，且在部署到服务器环境后，也不会受到影响。

### 单元测试

`Midway` 默认使用 jest 作为基础的测试框架，一般我们的测试文件会放在根目录的 `test` 目录中，以 `*.test.ts` 作为后缀。

比如我们要测试编写的 `/weather` 接口。

我们需要测试它的成功和失败两种状态。

```typescript
import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/koa';

describe('test/controller/weather.test.ts', () => {

  let app: Application;
  beforeAll(async () => {
    // create app
    app = await createApp<Framework>();
  });

  afterAll(async () => {
    // close app
    await close(app);
  });

  it('should test /weather with success request', async () => {
    // make request
    const result = await createHttpRequest(app).get('/weather').query({ cityId: 101010100 });

    expect(result.status).toBe(200);
    expect(result.text).toMatch(/北京/);
  });

  it('should test /weather with fail request', async () => {
    const result = await createHttpRequest(app).get('/weather');

    expect(result.status).toBe(200);
    expect(result.text).toMatch(/weather data is empty/);
  });
});

```

执行测试：

```bash
$ npm run test
```

就这么简单，更多请参见测试

> 1. jest 测试时，以单文件作为单位，使用 `beforeAll` 和 `afterAll` 控制 app 的启停
> 2. 使用 `createHttpRequest` 来创建一个测试请求
> 3. 使用 expect 来断言返回的结果是否符合预期

## 文档和社区

- [官网](https://`Midway`js.org)
