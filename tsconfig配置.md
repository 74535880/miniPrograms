# tsconfig 配置解释

```json
{
  // compilerOPtions选项可以忽略，编译会使用默认的值。
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // 报保存上一次编译中有关项目图的信息，下次编译的时候，只会编译改变后的部分，编译速度更快
    "incremental": true /* Enable incremental compilation */,
    // 将代码编译成es的什么版本
    "target": "es5" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
    // 指定将代码生成哪个模块系统
    "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    // 编译过程中，可能需要引入的库文件的列表：注意：如果--lib没有指定默认注入的库的列表。默认注入的库为：
    // ► 针对于--target ES5：DOM，ES5，ScriptHost
    // ► 针对于--target ES6：DOM，ES6，DOM.Iterable，ScriptHost
    "lib": [] /* Specify library files to be included in the compilation. */,
    // 允许按照这个配置编译js
    "allowJs": true /* Allow javascript files to be compiled. */,
    // 在 .js文件中报告错误。与 --allowJs配合使用。
    "checkJs": true /* Report errors in .js files. */,
    // 想要使用JSX必须做两件事：
    // 给文件一个.tsx扩展名
    // 启用jsx选项,把tsx文件中的写的html编译成其他的样式和后缀，具体看·https://www.tslang.cn/docs/handbook/jsx.html·
    "jsx": "preserve" /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */,
    // 编译成js后自动生成相应的声明文件。
    "declaration": true /* Generates corresponding '.d.ts' file. */,
    // 开启这个，就相当于生成了一个.d.ts的映射文件，我们查询声明定位的时候，就会去到源代码，而不是声明文件。
    "declarationMap": true /* Generates a sourcemap for each corresponding '.d.ts' file. */,
    // 生成相应的map文件，发生错误或者打log，定位的是ts文件的哪一行，而不是编译后的js文件
    "sourceMap": true /* Generates corresponding '.map' file. */,
    // 将输出文件合并为一个文件。合并的顺序是根据传入编译器的文件顺序和 ///<reference``>和 import的文件顺序决定的。查看输出文件顺序文件了解详情。
    "outFile": "./" /* Concatenate and emit output to single file. */,
    //  重定向输出目录，就是输出在哪，
    "outDir": "./" /* Redirect output structure to the directory. */,
    //  仅用来控制输出的目录结构,就是这个目录长什么样。例如：./com/xxx  最终就是在xxx目录下
    "rootDir": "./" /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */,
    // 引用的工程必须启用新的composite设置。 这个选项用于帮助TypeScript快速确定引用工程的输出文件位置。 若启用composite标记则会发生如下变动：
    // 对于rootDir设置，如果没有被显式指定，默认为包含tsconfig文件的目录
    // 所有的实现文件必须匹配到某个include模式或在files数组里列出。如果违反了这个限制，tsc会提示你哪些文件未指定。
    // 必须开启declaration选项。
    // 多个工程之间使用一个配置。
    "composite": true /* Enable project compilation */,
    // 放置.tsbuildinfo的位置的配置。.tsbuildinfo就是为了加快编译速度的，更好的检查增量类型检查并更新我们的输出文件。
    "tsBuildInfoFile": "./" /* Specify file to store incremental compilation information */,
    // 删除所有注释，除了以 /!*开头的版权信息。
    "removeComments": true /* Do not emit comments to output. */,
    // 不生成输出文件。
    "noEmit": true /* Do not emit outputs. */,
    // 从 tslib 导入辅助工具函数（比如 __extends， __rest等）
    "importHelpers": true /* Import emit helpers from 'tslib'. */,
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true /* Enable all strict type-checking options. */,
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "skipLibCheck": true /* Skip type checking of declaration files. */,
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
  }
}
```
