/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
.DS_Store
dist
dist-ssr
coverage
*.local

/cypress/videos/
/cypress/screenshots/

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "semi": false,
  "tabWidth": 2,
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "none"
}/// <reference types="vite/client" />
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
{
  "name": "vue-project",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "vue-project",
      "version": "0.0.0",
      "dependencies": {
        "axios": "^1.4.0",
        "vue": "^3.3.4",
        "vue-router": "^4.2.2"
      },
      "devDependencies": {
        "@rushstack/eslint-patch": "^1.2.0",
        "@tsconfig/node18": "^2.0.1",
        "@types/node": "^18.16.17",
        "@vitejs/plugin-vue": "^4.2.3",
        "@vue/eslint-config-prettier": "^7.1.0",
        "@vue/eslint-config-typescript": "^11.0.3",
        "@vue/tsconfig": "^0.4.0",
        "eslint": "^8.39.0",
        "eslint-plugin-vue": "^9.11.0",
        "npm-run-all": "^4.1.5",
        "prettier": "^2.8.8",
        "typescript": "~5.0.4",
        "unocss": "^0.53.3",
        "vite": "^4.3.9",
        "vue-tsc": "^1.6.5"
      }
    },
    "node_modules/@ampproject/remapping": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.2.1.tgz",
      "integrity": "sha512-lFMjJTrFL3j7L9yBxwYfCq2k6qqwHyzuUl/XBnif78PWTJYyL/dfowQHWE3sp6U6ZzqWiiIZnpTMO96zhkjwtg==",
      "dev": true,
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.0",
        "@jridgewell/trace-mapping": "^0.3.9"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@antfu/install-pkg": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/@antfu/install-pkg/-/install-pkg-0.1.1.tgz",
      "integrity": "sha512-LyB/8+bSfa0DFGC06zpCEfs89/XoWZwws5ygEa5D+Xsm3OfI+aXQ86VgVG7Acyef+rSZ5HE7J8rrxzrQeM3PjQ==",
      "dev": true,
      "dependencies": {
        "execa": "^5.1.1",
        "find-up": "^5.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@antfu/utils": {
      "version": "0.7.4",
      "resolved": "https://registry.npmjs.org/@antfu/utils/-/utils-0.7.4.tgz",
      "integrity": "sha512-qe8Nmh9rYI/HIspLSTwtbMFPj6dISG6+dJnOguTlPNXtCvS2uezdxscVBb7/3DrmNbQK49TDqpkSQ1chbRGdpQ==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.22.5",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.22.5.tgz",
      "integrity": "sha512-DFZMC9LJUG9PLOclRC32G63UXwzqS2koQC8dkx+PLdmt1xSePYpbT/NbsrJy8Q/muXz7o/h/d4A7Fuyixm559Q==",
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.17.19.tgz",
      "integrity": "sha512-rIKddzqhmav7MSmoFCmDIb6e2W57geRsM94gV2l38fzhXMwq7hZoClug9USI2pFRGL06f4IOPHHpFNOkWieR8A==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.17.19.tgz",
      "integrity": "sha512-KBMWvEZooR7+kzY0BtbTQn0OAYY7CsiydT63pVEaPtVYF0hXbUaOyZog37DKxK7NF3XacBJOpYT4adIJh+avxA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.17.19.tgz",
      "integrity": "sha512-uUTTc4xGNDT7YSArp/zbtmbhO0uEEK9/ETW29Wk1thYUJBz3IVnvgEiEwEa9IeLyvnpKrWK64Utw2bgUmDveww==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.17.19.tgz",
      "integrity": "sha512-80wEoCfF/hFKM6WE1FyBHc9SfUblloAWx6FJkFWTWiCoht9Mc0ARGEM47e67W9rI09YoUxJL68WHfDRYEAvOhg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.17.19.tgz",
      "integrity": "sha512-IJM4JJsLhRYr9xdtLytPLSH9k/oxR3boaUIYiHkAawtwNOXKE8KoU8tMvryogdcT8AU+Bflmh81Xn6Q0vTZbQw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.17.19.tgz",
      "integrity": "sha512-pBwbc7DufluUeGdjSU5Si+P3SoMF5DQ/F/UmTSb8HXO80ZEAJmrykPyzo1IfNbAoaqw48YRpv8shwd1NoI0jcQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.17.19.tgz",
      "integrity": "sha512-4lu+n8Wk0XlajEhbEffdy2xy53dpR06SlzvhGByyg36qJw6Kpfk7cp45DR/62aPH9mtJRmIyrXAS5UWBrJT6TQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.17.19.tgz",
      "integrity": "sha512-cdmT3KxjlOQ/gZ2cjfrQOtmhG4HJs6hhvm3mWSRDPtZ/lP5oe8FWceS10JaSJC13GBd4eH/haHnqf7hhGNLerA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.17.19.tgz",
      "integrity": "sha512-ct1Tg3WGwd3P+oZYqic+YZF4snNl2bsnMKRkb3ozHmnM0dGWuxcPTTntAF6bOP0Sp4x0PjSF+4uHQ1xvxfRKqg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.17.19.tgz",
      "integrity": "sha512-w4IRhSy1VbsNxHRQpeGCHEmibqdTUx61Vc38APcsRbuVgK0OPEnQ0YD39Brymn96mOx48Y2laBQGqgZ0j9w6SQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.17.19.tgz",
      "integrity": "sha512-2iAngUbBPMq439a+z//gE+9WBldoMp1s5GWsUSgqHLzLJ9WoZLZhpwWuym0u0u/4XmZ3gpHmzV84PonE+9IIdQ==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.17.19.tgz",
      "integrity": "sha512-LKJltc4LVdMKHsrFe4MGNPp0hqDFA1Wpt3jE1gEyM3nKUvOiO//9PheZZHfYRfYl6AwdTH4aTcXSqBerX0ml4A==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.17.19.tgz",
      "integrity": "sha512-/c/DGybs95WXNS8y3Ti/ytqETiW7EU44MEKuCAcpPto3YjQbyK3IQVKfF6nbghD7EcLUGl0NbiL5Rt5DMhn5tg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.17.19.tgz",
      "integrity": "sha512-FC3nUAWhvFoutlhAkgHf8f5HwFWUL6bYdvLc/TTuxKlvLi3+pPzdZiFKSWz/PF30TB1K19SuCxDTI5KcqASJqA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.17.19.tgz",
      "integrity": "sha512-IbFsFbxMWLuKEbH+7sTkKzL6NJmG2vRyy6K7JJo55w+8xDk7RElYn6xvXtDW8HCfoKBFK69f3pgBJSUSQPr+4Q==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.17.19.tgz",
      "integrity": "sha512-68ngA9lg2H6zkZcyp22tsVt38mlhWde8l3eJLWkyLrp4HwMUr3c1s/M2t7+kHIhvMjglIBrFpncX1SzMckomGw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.17.19.tgz",
      "integrity": "sha512-CwFq42rXCR8TYIjIfpXCbRX0rp1jo6cPIUPSaWwzbVI4aOfX96OXY8M6KNmtPcg7QjYeDmN+DD0Wp3LaBOLf4Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.17.19.tgz",
      "integrity": "sha512-cnq5brJYrSZ2CF6c35eCmviIN3k3RczmHz8eYaVlNasVqsNY+JKohZU5MKmaOI+KkllCdzOKKdPs762VCPC20g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.17.19.tgz",
      "integrity": "sha512-vCRT7yP3zX+bKWFeP/zdS6SqdWB8OIpaRq/mbXQxTGHnIxspRtigpkUcDMlSCOejlHowLqII7K2JKevwyRP2rg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.17.19.tgz",
      "integrity": "sha512-yYx+8jwowUstVdorcMdNlzklLYhPxjniHWFKgRqH7IFlUEa0Umu3KuYplf1HUZZ422e3NU9F4LGb+4O0Kdcaag==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.17.19.tgz",
      "integrity": "sha512-eggDKanJszUtCdlVs0RB+h35wNlb5v4TWEkq4vZcmVt5u/HiDZrTXe2bWFQUez3RgNHwx/x4sk5++4NSSicKkw==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.17.19.tgz",
      "integrity": "sha512-lAhycmKnVOuRYNtRtatQR1LPQf2oYCkRGkSFnseDAKPl8lu5SOsK/e1sXe5a0Pc5kHIHe6P2I/ilntNv2xf3cA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.4.0.tgz",
      "integrity": "sha512-1/sA4dwrzBAyeUoQ6oxahHKmrZvsnLCg4RfxW3ZFGGmQkSNQPFNLV9CUEFQP1x9EYXHTo5p6xdhZM1Ne9p/AfA==",
      "dev": true,
      "dependencies": {
        "eslint-visitor-keys": "^3.3.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.5.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.5.1.tgz",
      "integrity": "sha512-Z5ba73P98O1KUYCCJTUeVpja9RcGoMdncZ6T49FCUl2lN38JtCJ+3WgIDBv0AuY4WChU5PmtJmOCTlN6FZTFKQ==",
      "dev": true,
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-2.0.3.tgz",
      "integrity": "sha512-+5gy6OQfk+xx3q0d6jGZZC3f3KzAkXc/IanVxd1is/VIIziRqqt3ongQz0FiTUXqTk0c7aDB3OaFuKnuSoJicQ==",
      "dev": true,
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^9.5.2",
        "globals": "^13.19.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.0",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/js": {
      "version": "8.43.0",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-8.43.0.tgz",
      "integrity": "sha512-s2UHCoiXfxMvmfzqoN+vrQ84ahUSYde9qNO1MdxmoEhyHWsfmwOpFlwYV+ePJEVc7gFnATGUi376WowX1N7tFg==",
      "dev": true,
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      }
    },
    "node_modules/@humanwhocodes/config-array": {
      "version": "0.11.10",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.11.10.tgz",
      "integrity": "sha512-KVVjQmNUepDVGXNuoRRdmmEjruj0KfiGSbS8LVc12LMsWDQzRXJ0qdhN8L8uUigKpfEHRhlaQFY0ib1tnUbNeQ==",
      "dev": true,
      "dependencies": {
        "@humanwhocodes/object-schema": "^1.2.1",
        "debug": "^4.1.1",
        "minimatch": "^3.0.5"
      },
      "engines": {
        "node": ">=10.10.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/object-schema": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-1.2.1.tgz",
      "integrity": "sha512-ZnQMnLV4e7hDlUvw8H+U8ASL02SS2Gn6+9Ac3wGGLIe7+je2AeAOxPY+izIPJDfFDb7eDjev0Us8MO1iFRN8hA==",
      "dev": true
    },
    "node_modules/@iconify/types": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/@iconify/types/-/types-2.0.0.tgz",
      "integrity": "sha512-+wluvCrRhXrhyOmRDJ3q8mux9JkKy5SJ/v8ol2tu4FVjyYvtEzkc/3pK15ET6RKg4b4w4BmTk1+gsCUhf21Ykg==",
      "dev": true
    },
    "node_modules/@iconify/utils": {
      "version": "2.1.7",
      "resolved": "https://registry.npmjs.org/@iconify/utils/-/utils-2.1.7.tgz",
      "integrity": "sha512-P8S3z/L1LcV4Qem9AoCfVAaTFGySEMzFEY4CHZLkfRj0Fv9LiR+AwjDgrDrzyI93U2L2mg9JHsbTJ52mF8suNw==",
      "dev": true,
      "dependencies": {
        "@antfu/install-pkg": "^0.1.1",
        "@antfu/utils": "^0.7.4",
        "@iconify/types": "^2.0.0",
        "debug": "^4.3.4",
        "kolorist": "^1.8.0",
        "local-pkg": "^0.4.3"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.3",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.3.tgz",
      "integrity": "sha512-HLhSWOLRi875zjjMG/r+Nv0oCW8umGb0BgEhyX3dDX3egwZtB8PqLnjz3yedt8R5StBrzcg4aBpnh8UA9D1BoQ==",
      "dev": true,
      "dependencies": {
        "@jridgewell/set-array": "^1.0.1",
        "@jridgewell/sourcemap-codec": "^1.4.10",
        "@jridgewell/trace-mapping": "^0.3.9"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.0.tgz",
      "integrity": "sha512-F2msla3tad+Mfht5cJq7LSXcdudKTWCVYUgw6pLFOOHSTtZlj6SWNYAp+AhuqLmWdBO2X5hPrLcu8cVP8fy28w==",
      "dev": true,
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/set-array": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.1.2.tgz",
      "integrity": "sha512-xnkseuNADM0gt2bs+BvhO0p78Mk762YnZdsuzFV018NoG1Sj1SCQvpSqa7XUaTam5vAGasABV9qXASMKnFMwMw==",
      "dev": true,
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.4.15",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.4.15.tgz",
      "integrity": "sha512-eF2rxCRulEKXHTRiDrDy6erMYWqNw4LPdQ8UQA4huuxaQsVeRPFl2oM8oDGxMFhJUWZf9McpLtJasDDZb/Bpeg=="
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.18",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.18.tgz",
      "integrity": "sha512-w+niJYzMHdd7USdiH2U6869nqhD2nbfZXND5Yp93qIbEmnDNk7PD48o+YchRVpzMU7M6jVCbenTR7PA1FLQ9pA==",
      "dev": true,
      "dependencies": {
        "@jridgewell/resolve-uri": "3.1.0",
        "@jridgewell/sourcemap-codec": "1.4.14"
      }
    },
    "node_modules/@jridgewell/trace-mapping/node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.4.14",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.4.14.tgz",
      "integrity": "sha512-XPSJHWmi394fuUuzDnGz1wiKqWfo1yXecHQMRf2l6hztTO+nPru658AyDngaBe7isIxEkRsPR3FZh+s7iVa4Uw==",
      "dev": true
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@polka/url": {
      "version": "1.0.0-next.21",
      "resolved": "https://registry.npmjs.org/@polka/url/-/url-1.0.0-next.21.tgz",
      "integrity": "sha512-a5Sab1C4/icpTZVzZc5Ghpz88yQtGOyNqYXcZgOssB2uuAr+wF/MvN6bgtW32q7HHrvBki+BsZ0OuNv6EV3K9g==",
      "dev": true
    },
    "node_modules/@rollup/pluginutils": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/@rollup/pluginutils/-/pluginutils-5.0.2.tgz",
      "integrity": "sha512-pTd9rIsP92h+B6wWwFbW8RkZv4hiR/xKsqre4SIuAOaOEQRxi0lqLke9k2/7WegC85GgUs9pjmOjCUi3In4vwA==",
      "dev": true,
      "dependencies": {
        "@types/estree": "^1.0.0",
        "estree-walker": "^2.0.2",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "rollup": "^1.20.0||^2.0.0||^3.0.0"
      },
      "peerDependenciesMeta": {
        "rollup": {
          "optional": true
        }
      }
    },
    "node_modules/@rushstack/eslint-patch": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/@rushstack/eslint-patch/-/eslint-patch-1.3.2.tgz",
      "integrity": "sha512-V+MvGwaHH03hYhY+k6Ef/xKd6RYlc4q8WBx+2ANmipHJcKuktNcI/NgEsJgdSUF6Lw32njT6OnrRsKYCdgHjYw==",
      "dev": true
    },
    "node_modules/@tsconfig/node18": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/@tsconfig/node18/-/node18-2.0.1.tgz",
      "integrity": "sha512-UqdfvuJK0SArA2CxhKWwwAWfnVSXiYe63bVpMutc27vpngCntGUZQETO24pEJ46zU6XM+7SpqYoMgcO3bM11Ew==",
      "dev": true
    },
    "node_modules/@types/estree": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.1.tgz",
      "integrity": "sha512-LG4opVs2ANWZ1TJoKc937iMmNstM/d0ae1vNbnBvBhqCSezgVUOzcLCqbI5elV8Vy6WKwKjaqR+zO9VKirBBCA==",
      "dev": true
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.12",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.12.tgz",
      "integrity": "sha512-Hr5Jfhc9eYOQNPYO5WLDq/n4jqijdHNlDXjuAQkkt+mWdQR+XJToOHrsD4cPaMXpn6KO7y2+wM8AZEs8VpBLVA==",
      "dev": true
    },
    "node_modules/@types/node": {
      "version": "18.16.18",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-18.16.18.tgz",
      "integrity": "sha512-/aNaQZD0+iSBAGnvvN2Cx92HqE5sZCPZtx2TsK+4nvV23fFe09jVDvpArXr2j9DnYlzuU9WuoykDDc6wqvpNcw==",
      "dev": true
    },
    "node_modules/@types/semver": {
      "version": "7.5.0",
      "resolved": "https://registry.npmjs.org/@types/semver/-/semver-7.5.0.tgz",
      "integrity": "sha512-G8hZ6XJiHnuhQKR7ZmysCeJWE08o8T0AXtk5darsCaTVsYZhhgUrq53jizaR2FvsoeCwJhlmwTjkXBY5Pn/ZHw==",
      "dev": true
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "5.60.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-5.60.0.tgz",
      "integrity": "sha512-78B+anHLF1TI8Jn/cD0Q00TBYdMgjdOn980JfAVa9yw5sop8nyTfVOQAv6LWywkOGLclDBtv5z3oxN4w7jxyNg==",
      "dev": true,
      "dependencies": {
        "@eslint-community/regexpp": "^4.4.0",
        "@typescript-eslint/scope-manager": "5.60.0",
        "@typescript-eslint/type-utils": "5.60.0",
        "@typescript-eslint/utils": "5.60.0",
        "debug": "^4.3.4",
        "grapheme-splitter": "^1.0.4",
        "ignore": "^5.2.0",
        "natural-compare-lite": "^1.4.0",
        "semver": "^7.3.7",
        "tsutils": "^3.21.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^5.0.0",
        "eslint": "^6.0.0 || ^7.0.0 || ^8.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "5.60.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-5.60.0.tgz",
      "integrity": "sha512-jBONcBsDJ9UoTWrARkRRCgDz6wUggmH5RpQVlt7BimSwaTkTjwypGzKORXbR4/2Hqjk9hgwlon2rVQAjWNpkyQ==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/scope-manager": "5.60.0",
        "@typescript-eslint/types": "5.60.0",
        "@typescript-eslint/typescript-estree": "5.60.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || ^8.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "5.60.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-5.60.0.tgz",
      "integrity": "sha512-hakuzcxPwXi2ihf9WQu1BbRj1e/Pd8ZZwVTG9kfbxAMZstKz8/9OoexIwnmLzShtsdap5U/CoQGRCWlSuPbYxQ==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "5.60.0",
        "@typescript-eslint/visitor-keys": "5.60.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "5.60.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-5.60.0.tgz",
      "integrity": "sha512-X7NsRQddORMYRFH7FWo6sA9Y/zbJ8s1x1RIAtnlj6YprbToTiQnM6vxcMu7iYhdunmoC0rUWlca13D5DVHkK2g==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/typescript-estree": "5.60.0",
        "@typescript-eslint/utils": "5.60.0",
        "debug": "^4.3.4",
        "tsutils": "^3.21.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "*"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "5.60.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-5.60.0.tgz",
      "integrity": "sha512-ascOuoCpNZBccFVNJRSC6rPq4EmJ2NkuoKnd6LDNyAQmdDnziAtxbCGWCbefG1CNzmDvd05zO36AmB7H8RzKPA==",
      "dev": true,
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "5.60.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-5.60.0.tgz",
      "integrity": "sha512-R43thAuwarC99SnvrBmh26tc7F6sPa2B3evkXp/8q954kYL6Ro56AwASYWtEEi+4j09GbiNAHqYwNNZuNlARGQ==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "5.60.0",
        "@typescript-eslint/visitor-keys": "5.60.0",
        "debug": "^4.3.4",
        "globby": "^11.1.0",
        "is-glob": "^4.0.3",
        "semver": "^7.3.7",
        "tsutils": "^3.21.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "5.60.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-5.60.0.tgz",
      "integrity": "sha512-ba51uMqDtfLQ5+xHtwlO84vkdjrqNzOnqrnwbMHMRY8Tqeme8C2Q8Fc7LajfGR+e3/4LoYiWXUM6BpIIbHJ4hQ==",
      "dev": true,
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.2.0",
        "@types/json-schema": "^7.0.9",
        "@types/semver": "^7.3.12",
        "@typescript-eslint/scope-manager": "5.60.0",
        "@typescript-eslint/types": "5.60.0",
        "@typescript-eslint/typescript-estree": "5.60.0",
        "eslint-scope": "^5.1.1",
        "semver": "^7.3.7"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "5.60.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-5.60.0.tgz",
      "integrity": "sha512-wm9Uz71SbCyhUKgcaPRauBdTegUyY/ZWl8gLwD/i/ybJqscrrdVSFImpvUz16BLPChIeKBK5Fa9s6KDQjsjyWw==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "5.60.0",
        "eslint-visitor-keys": "^3.3.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@unocss/astro": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/astro/-/astro-0.53.3.tgz",
      "integrity": "sha512-25OuQOnfgbWVlIOFvWzx/xJbIn0+HhDZMeFDrNyGjT3v73zr4/6oOltru+Vv4sBzkUCgG89im6kNGJ679EzMCA==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3",
        "@unocss/reset": "0.53.3",
        "@unocss/vite": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/cli": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/cli/-/cli-0.53.3.tgz",
      "integrity": "sha512-pM+vp48f58xEuBHaW3Nwp/Pq4qWHgmlUzd4qM8LNqyKkPRMkt6NrzlJ1iy8Oy3AKa0dnG0csMg+LXXhHEUDlaA==",
      "dev": true,
      "dependencies": {
        "@ampproject/remapping": "^2.2.1",
        "@rollup/pluginutils": "^5.0.2",
        "@unocss/config": "0.53.3",
        "@unocss/core": "0.53.3",
        "@unocss/preset-uno": "0.53.3",
        "cac": "^6.7.14",
        "chokidar": "^3.5.3",
        "colorette": "^2.0.20",
        "consola": "^3.1.0",
        "fast-glob": "^3.2.12",
        "magic-string": "^0.30.0",
        "pathe": "^1.1.1",
        "perfect-debounce": "^1.0.0"
      },
      "bin": {
        "unocss": "bin/unocss.mjs"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/config": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/config/-/config-0.53.3.tgz",
      "integrity": "sha512-72sP17B09ZT/PBJMeFGN1U5y0VhC9sBHTcIQ3GgsRxRnmCRZyzyyRyp9jwBkLRCqWfaKyWgELz1opnWGBhegFw==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3",
        "unconfig": "^0.3.9"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/core": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/core/-/core-0.53.3.tgz",
      "integrity": "sha512-28xxgZZBaGeDUULoNrpmSP4ZtNn41b2NlBnOe2ta+TnA4F0R5v8bW0w8CxHoYGiHS8mbCq4Aw1ReNlqVhfar8Q==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/extractor-arbitrary-variants": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/extractor-arbitrary-variants/-/extractor-arbitrary-variants-0.53.3.tgz",
      "integrity": "sha512-EyCwebLU4WDDNlrN3BbN9mjCszyRAwn0kP2YVOsCcj6IJD0Y3AjzWPoToTPP6jSN4nRk0iZd/8TrN2sqUHrn4w==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/inspector": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/inspector/-/inspector-0.53.3.tgz",
      "integrity": "sha512-EPWBOA5nsI92EjRkPdulNu0DLEURWTRVl7IkAPpgwzSU/ahr1cNuByySpyw+wof1dtyxLxlJEj/Mvz5ExVOltg==",
      "dev": true,
      "dependencies": {
        "gzip-size": "^6.0.0",
        "sirv": "^2.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/postcss": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/postcss/-/postcss-0.53.3.tgz",
      "integrity": "sha512-+uOK8bIzfziY3a7GXB2xI7pFx/aW+F/pigpq+LS0IkF+ZDKGD5mf9Jmo2zrcQ2wujw8ayDRFG66ByaIItjIpWw==",
      "dev": true,
      "dependencies": {
        "@unocss/config": "0.53.3",
        "@unocss/core": "0.53.3",
        "css-tree": "^2.3.1",
        "fast-glob": "^3.2.12",
        "magic-string": "^0.30.0",
        "postcss": "^8.4.24"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      },
      "peerDependencies": {
        "postcss": "^8.4.21"
      }
    },
    "node_modules/@unocss/preset-attributify": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/preset-attributify/-/preset-attributify-0.53.3.tgz",
      "integrity": "sha512-JWDJVldpmdybKzqJtS1UTKqF0nkYjtJKf0ptt3TclHfRYe6khinfvmy5lN1yTob0qolR/kO8S8DApDmB+qXMLg==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/preset-icons": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/preset-icons/-/preset-icons-0.53.3.tgz",
      "integrity": "sha512-V+XIE9qFqZmEa9wrI16nR6OG7zwo6HEj7M6OewQNG1tzije6RVCg5QbU9Mhxgr1vC5qhyY+DaSAYQJKIWh7OQw==",
      "dev": true,
      "dependencies": {
        "@iconify/utils": "^2.1.7",
        "@unocss/core": "0.53.3",
        "ofetch": "^1.1.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/preset-mini": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/preset-mini/-/preset-mini-0.53.3.tgz",
      "integrity": "sha512-Sr61c/UPCD4OjWSXE+30FxXJHMdzh/Zc8Ow6RzlT+fqUBYyNw3WpXwRW3Goxnxl98FvK2vb+cZGTxVRlezO8Pw==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3",
        "@unocss/extractor-arbitrary-variants": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/preset-tagify": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/preset-tagify/-/preset-tagify-0.53.3.tgz",
      "integrity": "sha512-sIbbMp1ZITJ6Tp7RITDQ6vxOZkx61rNwVSPhTh1HXS8V50GSUBBQe9Fv/kDWYuGjmL1Y5Gq2/VkCB8Zp68co/g==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/preset-typography": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/preset-typography/-/preset-typography-0.53.3.tgz",
      "integrity": "sha512-XSv3+nIttJHIuZzpki5mWZx2BGBlUG8j7KQfWJkbCOO+jI3VNwxORFtTEKi5aDMkJM+V63UX8xlF8WRPJcbG1Q==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3",
        "@unocss/preset-mini": "0.53.3"
      }
    },
    "node_modules/@unocss/preset-uno": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/preset-uno/-/preset-uno-0.53.3.tgz",
      "integrity": "sha512-Yh0TOx5cTtqSQMrgxr0ze5kIEaBYs/W6WuX63h+0s18pe4ojG07bh6JKRpndf5scBxJ+oZxulQ6hulu6hOCEZg==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3",
        "@unocss/preset-mini": "0.53.3",
        "@unocss/preset-wind": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/preset-web-fonts": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/preset-web-fonts/-/preset-web-fonts-0.53.3.tgz",
      "integrity": "sha512-P17xcbhx4F+J1HQWrfbslqIibslF/o8iQg+94DYRxaZRg7a+uAKwYIOUCKiPxGXz88r4/QBYhXpsvjoHv4VZ+A==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3",
        "ofetch": "^1.1.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/preset-wind": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/preset-wind/-/preset-wind-0.53.3.tgz",
      "integrity": "sha512-WHy2dEmj41x3RYinkRvxdz6C1B9fAV2Wck7xboFRXu9jJYERFCfajNcQSuCiGZ0zr+Ml94G6e7xYZ2xWCzMlLA==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3",
        "@unocss/preset-mini": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/reset": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/reset/-/reset-0.53.3.tgz",
      "integrity": "sha512-DilchevgPVH7Kiiwg/yU8xV6admL/FeV1rwf5sFBEd4THiQSasQXYiqE0e9RyOAF4bJA4c3ZGE9x0cb8T37Fwg==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/scope": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/scope/-/scope-0.53.3.tgz",
      "integrity": "sha512-i41vTORGTLYmT6HKi6mpv2OLf5ewUvWP2w52ISrRGw8oatl0QQKyLk/vGwt9z06/Xy5QStDYoFt1QRc9tLnzBQ==",
      "dev": true
    },
    "node_modules/@unocss/transformer-attributify-jsx": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/transformer-attributify-jsx/-/transformer-attributify-jsx-0.53.3.tgz",
      "integrity": "sha512-aTFpg9DAAuVSeaEF40SNsnEpK/42MaXdwfdF+xInYCLnqTx0NX/Uh0afZGY/FDgJe9yDEFrkFZ9yCd1W4RjQYQ==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/transformer-attributify-jsx-babel": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/transformer-attributify-jsx-babel/-/transformer-attributify-jsx-babel-0.53.3.tgz",
      "integrity": "sha512-k0G1lMyuZNKQ7MU21uGlq8OPR+gMA17zJv9nNum83umQpNutaIPgrOwcQv/3wItlYgEF7A24u83GOxspWaFauQ==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/transformer-compile-class": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/transformer-compile-class/-/transformer-compile-class-0.53.3.tgz",
      "integrity": "sha512-j/NbGk/BBxSRaMzMYQy0zlojCw8ToPi7IpRMfAYP5oOpswk73vOROVnLXKyALrQUaBlAS5XK4Ui/iY3Bv5C5Xg==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/transformer-directives": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/transformer-directives/-/transformer-directives-0.53.3.tgz",
      "integrity": "sha512-FIPdg8z3OMHEDu9RqbCFcl+84HaELDWKU1ecYTvZQkLzdpugCJfqls4FUg0gPwwzKJbJze2hSqECpWSFk883oA==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3",
        "css-tree": "^2.3.1"
      }
    },
    "node_modules/@unocss/transformer-variant-group": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/transformer-variant-group/-/transformer-variant-group-0.53.3.tgz",
      "integrity": "sha512-0yzV6sVkxwRmhf1wp3F8Vt+dxFaVYZ1wlyUqQVDjlupjvBoMWvARkGQwMaif2h9E/Qb/NTZRs91fbE2g+qBg+A==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/vite": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/vite/-/vite-0.53.3.tgz",
      "integrity": "sha512-XuSzw142Ex4YEQdoLmCf3/aqF+9qzN5ymqVHVdsrk2GE9jNlg8H7eF6G16xpZS39mJJY+cKdwtzuAKRYvoSd5g==",
      "dev": true,
      "dependencies": {
        "@ampproject/remapping": "^2.2.1",
        "@rollup/pluginutils": "^5.0.2",
        "@unocss/config": "0.53.3",
        "@unocss/core": "0.53.3",
        "@unocss/inspector": "0.53.3",
        "@unocss/scope": "0.53.3",
        "@unocss/transformer-directives": "0.53.3",
        "chokidar": "^3.5.3",
        "fast-glob": "^3.2.12",
        "magic-string": "^0.30.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      },
      "peerDependencies": {
        "vite": "^2.9.0 || ^3.0.0-0 || ^4.0.0"
      }
    },
    "node_modules/@vitejs/plugin-vue": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-vue/-/plugin-vue-4.2.3.tgz",
      "integrity": "sha512-R6JDUfiZbJA9cMiguQ7jxALsgiprjBeHL5ikpXfJCH62pPHtI+JdJ5xWj6Ev73yXSlYl86+blXn1kZHQ7uElxw==",
      "dev": true,
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "peerDependencies": {
        "vite": "^4.0.0",
        "vue": "^3.2.25"
      }
    },
    "node_modules/@volar/language-core": {
      "version": "1.7.8",
      "resolved": "https://registry.npmjs.org/@volar/language-core/-/language-core-1.7.8.tgz",
      "integrity": "sha512-TPklg4c2e/f1xB/MGZEiQc3AWG+dH64ZfBlYjFB8nNaWJt4Z4k+IHBhmaP52APG+5PHFerwiWI9oF002RrRTPA==",
      "dev": true,
      "dependencies": {
        "@volar/source-map": "1.7.8"
      }
    },
    "node_modules/@volar/source-map": {
      "version": "1.7.8",
      "resolved": "https://registry.npmjs.org/@volar/source-map/-/source-map-1.7.8.tgz",
      "integrity": "sha512-g2dtC2kOghvfzMDWeODIo4HO1Ml4hxzPTZyAFDz+YhRF9HjZYJSCaWaVuPZ+z0kY+T2daOHYA10GdrWQ5q0teA==",
      "dev": true,
      "dependencies": {
        "muggle-string": "^0.3.1"
      }
    },
    "node_modules/@volar/typescript": {
      "version": "1.7.8",
      "resolved": "https://registry.npmjs.org/@volar/typescript/-/typescript-1.7.8.tgz",
      "integrity": "sha512-NDcI5ZQcdr8kgxzMQrhSSWIM8Tl0MbMFrkvJPTjfm2rdAQZPFT8zv3LrEW9Fqh0e9z2YbCry7jr4a/GShBqeDA==",
      "dev": true,
      "dependencies": {
        "@volar/language-core": "1.7.8"
      }
    },
    "node_modules/@vue/compiler-core": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/compiler-core/-/compiler-core-3.3.4.tgz",
      "integrity": "sha512-cquyDNvZ6jTbf/+x+AgM2Arrp6G4Dzbb0R64jiG804HRMfRiFXWI6kqUVqZ6ZR0bQhIoQjB4+2bhNtVwndW15g==",
      "dependencies": {
        "@babel/parser": "^7.21.3",
        "@vue/shared": "3.3.4",
        "estree-walker": "^2.0.2",
        "source-map-js": "^1.0.2"
      }
    },
    "node_modules/@vue/compiler-dom": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/compiler-dom/-/compiler-dom-3.3.4.tgz",
      "integrity": "sha512-wyM+OjOVpuUukIq6p5+nwHYtj9cFroz9cwkfmP9O1nzH68BenTTv0u7/ndggT8cIQlnBeOo6sUT/gvHcIkLA5w==",
      "dependencies": {
        "@vue/compiler-core": "3.3.4",
        "@vue/shared": "3.3.4"
      }
    },
    "node_modules/@vue/compiler-sfc": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/compiler-sfc/-/compiler-sfc-3.3.4.tgz",
      "integrity": "sha512-6y/d8uw+5TkCuzBkgLS0v3lSM3hJDntFEiUORM11pQ/hKvkhSKZrXW6i69UyXlJQisJxuUEJKAWEqWbWsLeNKQ==",
      "dependencies": {
        "@babel/parser": "^7.20.15",
        "@vue/compiler-core": "3.3.4",
        "@vue/compiler-dom": "3.3.4",
        "@vue/compiler-ssr": "3.3.4",
        "@vue/reactivity-transform": "3.3.4",
        "@vue/shared": "3.3.4",
        "estree-walker": "^2.0.2",
        "magic-string": "^0.30.0",
        "postcss": "^8.1.10",
        "source-map-js": "^1.0.2"
      }
    },
    "node_modules/@vue/compiler-ssr": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/compiler-ssr/-/compiler-ssr-3.3.4.tgz",
      "integrity": "sha512-m0v6oKpup2nMSehwA6Uuu+j+wEwcy7QmwMkVNVfrV9P2qE5KshC6RwOCq8fjGS/Eak/uNb8AaWekfiXxbBB6gQ==",
      "dependencies": {
        "@vue/compiler-dom": "3.3.4",
        "@vue/shared": "3.3.4"
      }
    },
    "node_modules/@vue/devtools-api": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/@vue/devtools-api/-/devtools-api-6.5.0.tgz",
      "integrity": "sha512-o9KfBeaBmCKl10usN4crU53fYtC1r7jJwdGKjPT24t348rHxgfpZ0xL3Xm/gLUYnc0oTp8LAmrxOeLyu6tbk2Q=="
    },
    "node_modules/@vue/eslint-config-prettier": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/@vue/eslint-config-prettier/-/eslint-config-prettier-7.1.0.tgz",
      "integrity": "sha512-Pv/lVr0bAzSIHLd9iz0KnvAr4GKyCEl+h52bc4e5yWuDVtLgFwycF7nrbWTAQAS+FU6q1geVd07lc6EWfJiWKQ==",
      "dev": true,
      "dependencies": {
        "eslint-config-prettier": "^8.3.0",
        "eslint-plugin-prettier": "^4.0.0"
      },
      "peerDependencies": {
        "eslint": ">= 7.28.0",
        "prettier": ">= 2.0.0"
      }
    },
    "node_modules/@vue/eslint-config-typescript": {
      "version": "11.0.3",
      "resolved": "https://registry.npmjs.org/@vue/eslint-config-typescript/-/eslint-config-typescript-11.0.3.tgz",
      "integrity": "sha512-dkt6W0PX6H/4Xuxg/BlFj5xHvksjpSlVjtkQCpaYJBIEuKj2hOVU7r+TIe+ysCwRYFz/lGqvklntRkCAibsbPw==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/eslint-plugin": "^5.59.1",
        "@typescript-eslint/parser": "^5.59.1",
        "vue-eslint-parser": "^9.1.1"
      },
      "engines": {
        "node": "^14.17.0 || >=16.0.0"
      },
      "peerDependencies": {
        "eslint": "^6.2.0 || ^7.0.0 || ^8.0.0",
        "eslint-plugin-vue": "^9.0.0",
        "typescript": "*"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@vue/language-core": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/@vue/language-core/-/language-core-1.8.1.tgz",
      "integrity": "sha512-pumv3k4J7P58hVh4YGRM9Qz3HaAr4TlFWM9bnVOkZ/2K9o2CK1lAP2y9Jw+Z0+mNL4F2uWQqnAPzj3seLyfpDA==",
      "dev": true,
      "dependencies": {
        "@volar/language-core": "1.7.8",
        "@volar/source-map": "1.7.8",
        "@vue/compiler-dom": "^3.3.0",
        "@vue/reactivity": "^3.3.0",
        "@vue/shared": "^3.3.0",
        "minimatch": "^9.0.0",
        "muggle-string": "^0.3.1",
        "vue-template-compiler": "^2.7.14"
      },
      "peerDependencies": {
        "typescript": "*"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@vue/language-core/node_modules/brace-expansion": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
      "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
      "dev": true,
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/@vue/language-core/node_modules/minimatch": {
      "version": "9.0.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.2.tgz",
      "integrity": "sha512-PZOT9g5v2ojiTL7r1xF6plNHLtOeTpSlDI007As2NlA2aYBMfVom17yqa6QzhmDP8QOhn7LjHTg7DFCVSSa6yg==",
      "dev": true,
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@vue/reactivity": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/reactivity/-/reactivity-3.3.4.tgz",
      "integrity": "sha512-kLTDLwd0B1jG08NBF3R5rqULtv/f8x3rOFByTDz4J53ttIQEDmALqKqXY0J+XQeN0aV2FBxY8nJDf88yvOPAqQ==",
      "dependencies": {
        "@vue/shared": "3.3.4"
      }
    },
    "node_modules/@vue/reactivity-transform": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/reactivity-transform/-/reactivity-transform-3.3.4.tgz",
      "integrity": "sha512-MXgwjako4nu5WFLAjpBnCj/ieqcjE2aJBINUNQzkZQfzIZA4xn+0fV1tIYBJvvva3N3OvKGofRLvQIwEQPpaXw==",
      "dependencies": {
        "@babel/parser": "^7.20.15",
        "@vue/compiler-core": "3.3.4",
        "@vue/shared": "3.3.4",
        "estree-walker": "^2.0.2",
        "magic-string": "^0.30.0"
      }
    },
    "node_modules/@vue/runtime-core": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/runtime-core/-/runtime-core-3.3.4.tgz",
      "integrity": "sha512-R+bqxMN6pWO7zGI4OMlmvePOdP2c93GsHFM/siJI7O2nxFRzj55pLwkpCedEY+bTMgp5miZ8CxfIZo3S+gFqvA==",
      "dependencies": {
        "@vue/reactivity": "3.3.4",
        "@vue/shared": "3.3.4"
      }
    },
    "node_modules/@vue/runtime-dom": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/runtime-dom/-/runtime-dom-3.3.4.tgz",
      "integrity": "sha512-Aj5bTJ3u5sFsUckRghsNjVTtxZQ1OyMWCr5dZRAPijF/0Vy4xEoRCwLyHXcj4D0UFbJ4lbx3gPTgg06K/GnPnQ==",
      "dependencies": {
        "@vue/runtime-core": "3.3.4",
        "@vue/shared": "3.3.4",
        "csstype": "^3.1.1"
      }
    },
    "node_modules/@vue/server-renderer": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/server-renderer/-/server-renderer-3.3.4.tgz",
      "integrity": "sha512-Q6jDDzR23ViIb67v+vM1Dqntu+HUexQcsWKhhQa4ARVzxOY2HbC7QRW/ggkDBd5BU+uM1sV6XOAP0b216o34JQ==",
      "dependencies": {
        "@vue/compiler-ssr": "3.3.4",
        "@vue/shared": "3.3.4"
      },
      "peerDependencies": {
        "vue": "3.3.4"
      }
    },
    "node_modules/@vue/shared": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/shared/-/shared-3.3.4.tgz",
      "integrity": "sha512-7OjdcV8vQ74eiz1TZLzZP4JwqM5fA94K6yntPS5Z25r9HDuGNzaGdgvwKYq6S+MxwF0TFRwe50fIR/MYnakdkQ=="
    },
    "node_modules/@vue/tsconfig": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@vue/tsconfig/-/tsconfig-0.4.0.tgz",
      "integrity": "sha512-CPuIReonid9+zOG/CGTT05FXrPYATEqoDGNrEaqS4hwcw5BUNM2FguC0mOwJD4Jr16UpRVl9N0pY3P+srIbqmg==",
      "dev": true
    },
    "node_modules/@vue/typescript": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/@vue/typescript/-/typescript-1.8.1.tgz",
      "integrity": "sha512-nQpo55j/roie8heCfqyXHnyayqD5+p4/0fzfxH4ZuHf7NSBQS791PNv7ztp2CCOjnGAiaiCMdtC9rc6oriyPUg==",
      "dev": true,
      "dependencies": {
        "@volar/typescript": "1.7.8",
        "@vue/language-core": "1.8.1"
      }
    },
    "node_modules/acorn": {
      "version": "8.9.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.9.0.tgz",
      "integrity": "sha512-jaVNAFBHNLXspO543WnNNPZFRtavh3skAkITqD0/2aeMkKZTN+254PyhwxFYrk3vQ1xfY+2wbesJMs/JC8/PwQ==",
      "dev": true,
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true
    },
    "node_modules/array-buffer-byte-length": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/array-buffer-byte-length/-/array-buffer-byte-length-1.0.0.tgz",
      "integrity": "sha512-LPuwb2P+NrQw3XhxGc36+XSvuBPopovXYTR9Ew++Du9Yb/bx5AzBfrIsBoj0EZUifjQU+sHL21sseZ3jerWO/A==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "is-array-buffer": "^3.0.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array-union": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
      "integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q=="
    },
    "node_modules/available-typed-arrays": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/available-typed-arrays/-/available-typed-arrays-1.0.5.tgz",
      "integrity": "sha512-DMD0KiN46eipeziST1LPP/STfDU0sufISXmjSgvVsoU2tqxctQeASejWcfNtxYKqETM1UxQ8sp2OrSBWpHY6sw==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/axios": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/axios/-/axios-1.4.0.tgz",
      "integrity": "sha512-S4XCWMEmzvo64T9GfvQDOXgYRDJ/wsSZc7Jvdgx5u1sd0JwsuPLqb3SYmusag+edF6ziyMensPVqLTSc1PiSEA==",
      "dependencies": {
        "follow-redirects": "^1.15.0",
        "form-data": "^4.0.0",
        "proxy-from-env": "^1.1.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true
    },
    "node_modules/binary-extensions": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",
      "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/boolbase": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
      "integrity": "sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww==",
      "dev": true
    },
    "node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
      "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
      "dev": true,
      "dependencies": {
        "fill-range": "^7.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cac": {
      "version": "6.7.14",
      "resolved": "https://registry.npmjs.org/cac/-/cac-6.7.14.tgz",
      "integrity": "sha512-b6Ilus+c3RrdDk+JhLKUAQfzzgLEPy6wcXqS7f/xe1EETvsDP6GORG7SFuOs6cID5YkqchW/LXZbX5bc8j7ZcQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
      "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/chokidar": {
      "version": "3.5.3",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.3.tgz",
      "integrity": "sha512-Dr3sfKRP6oTcjf2JmUmFJfeVMvXBdegxB0iVQ5eb2V10uFJUCAS8OByZdVAyVb8xXNz3GjjTgj9kLWsZTqE6kw==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://paulmillr.com/funding/"
        }
      ],
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/chokidar/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true
    },
    "node_modules/colorette": {
      "version": "2.0.20",
      "resolved": "https://registry.npmjs.org/colorette/-/colorette-2.0.20.tgz",
      "integrity": "sha512-IfEDxwoWIjkeXL1eXcDiow4UbKjhLdq6/EuSVR9GMN7KVH3r9gQ83e73hsz1Nd1T3ijd5xv1wcWRYO+D6kCI2w==",
      "dev": true
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true
    },
    "node_modules/consola": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/consola/-/consola-3.1.0.tgz",
      "integrity": "sha512-rrrJE6rP0qzl/Srg+C9x/AE5Kxfux7reVm1Wh0wCjuXvih6DqZgqDZe8auTD28fzJ9TF0mHlSDrPpWlujQRo1Q==",
      "dev": true
    },
    "node_modules/cross-spawn": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
      "integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
      "dev": true,
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/css-tree": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-2.3.1.tgz",
      "integrity": "sha512-6Fv1DV/TYw//QF5IzQdqsNDjx/wc8TrMBZsqjL9eW01tWb7R7k/mq+/VXfJCl7SoD5emsJop9cOByJZfs8hYIw==",
      "dev": true,
      "dependencies": {
        "mdn-data": "2.0.30",
        "source-map-js": "^1.0.1"
      },
      "engines": {
        "node": "^10 || ^12.20.0 || ^14.13.0 || >=15.0.0"
      }
    },
    "node_modules/cssesc": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
      "dev": true,
      "bin": {
        "cssesc": "bin/cssesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/csstype": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.1.2.tgz",
      "integrity": "sha512-I7K1Uu0MBPzaFKg4nI5Q7Vs2t+3gWWW648spaF+Rg7pI9ds18Ugn+lvg4SHczUdKlHI5LWBXyqfS8+DufyBsgQ=="
    },
    "node_modules/de-indent": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/de-indent/-/de-indent-1.0.2.tgz",
      "integrity": "sha512-e/1zu3xH5MQryN2zdVaF0OrdNLUbvWxzMbi+iNA6Bky7l1RoP8a2fIbRocyHclXt/arDrrR6lL3TqFD9pMQTsg==",
      "dev": true
    },
    "node_modules/debug": {
      "version": "4.3.4",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
      "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
      "dev": true,
      "dependencies": {
        "ms": "2.1.2"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true
    },
    "node_modules/define-properties": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.2.0.tgz",
      "integrity": "sha512-xvqAVKGfT1+UAvPwKTVw/njhdQ8ZhXK4lI0bCIuCMrp2up9nPnaDftrLtmpTazqd1o+UY4zgzU+avtMbDP+ldA==",
      "dev": true,
      "dependencies": {
        "has-property-descriptors": "^1.0.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/defu": {
      "version": "6.1.2",
      "resolved": "https://registry.npmjs.org/defu/-/defu-6.1.2.tgz",
      "integrity": "sha512-+uO4+qr7msjNNWKYPHqN/3+Dx3NFkmIzayk2L1MyZQlvgZb/J1A0fo410dpKrN2SnqFjt8n4JL8fDJE0wIgjFQ==",
      "dev": true
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/destr": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/destr/-/destr-2.0.0.tgz",
      "integrity": "sha512-FJ9RDpf3GicEBvzI3jxc2XhHzbqD8p4ANw/1kPsFBfTvP1b7Gn/Lg1vO7R9J4IVgoMbyUmFrFGZafJ1hPZpvlg==",
      "dev": true
    },
    "node_modules/dir-glob": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
      "integrity": "sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==",
      "dev": true,
      "dependencies": {
        "path-type": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/doctrine": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
      "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
      "dev": true,
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/duplexer": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/duplexer/-/duplexer-0.1.2.tgz",
      "integrity": "sha512-jtD6YG370ZCIi/9GTaJKQxWTZD045+4R4hTk/x1UyoqadyJ9x9CgSi1RlVDQF8U2sxLLSnFkCaMihqljHIWgMg==",
      "dev": true
    },
    "node_modules/error-ex": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
      "dev": true,
      "dependencies": {
        "is-arrayish": "^0.2.1"
      }
    },
    "node_modules/es-abstract": {
      "version": "1.21.2",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.21.2.tgz",
      "integrity": "sha512-y/B5POM2iBnIxCiernH1G7rC9qQoM77lLIMQLuob0zhp8C56Po81+2Nj0WFKnd0pNReDTnkYryc+zhOzpEIROg==",
      "dev": true,
      "dependencies": {
        "array-buffer-byte-length": "^1.0.0",
        "available-typed-arrays": "^1.0.5",
        "call-bind": "^1.0.2",
        "es-set-tostringtag": "^2.0.1",
        "es-to-primitive": "^1.2.1",
        "function.prototype.name": "^1.1.5",
        "get-intrinsic": "^1.2.0",
        "get-symbol-description": "^1.0.0",
        "globalthis": "^1.0.3",
        "gopd": "^1.0.1",
        "has": "^1.0.3",
        "has-property-descriptors": "^1.0.0",
        "has-proto": "^1.0.1",
        "has-symbols": "^1.0.3",
        "internal-slot": "^1.0.5",
        "is-array-buffer": "^3.0.2",
        "is-callable": "^1.2.7",
        "is-negative-zero": "^2.0.2",
        "is-regex": "^1.1.4",
        "is-shared-array-buffer": "^1.0.2",
        "is-string": "^1.0.7",
        "is-typed-array": "^1.1.10",
        "is-weakref": "^1.0.2",
        "object-inspect": "^1.12.3",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.4",
        "regexp.prototype.flags": "^1.4.3",
        "safe-regex-test": "^1.0.0",
        "string.prototype.trim": "^1.2.7",
        "string.prototype.trimend": "^1.0.6",
        "string.prototype.trimstart": "^1.0.6",
        "typed-array-length": "^1.0.4",
        "unbox-primitive": "^1.0.2",
        "which-typed-array": "^1.1.9"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.0.1.tgz",
      "integrity": "sha512-g3OMbtlwY3QewlqAiMLI47KywjWZoEytKr8pf6iTC8uJq5bIAH52Z9pnQ8pVL6whrCto53JZDuUIsifGeLorTg==",
      "dev": true,
      "dependencies": {
        "get-intrinsic": "^1.1.3",
        "has": "^1.0.3",
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
      "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
      "dev": true,
      "dependencies": {
        "is-callable": "^1.1.4",
        "is-date-object": "^1.0.1",
        "is-symbol": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/esbuild": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.17.19.tgz",
      "integrity": "sha512-XQ0jAPFkK/u3LcVRcvVHQcTIqD6E2H1fvZMA5dQPSOWb3suUbWbfbRf94pjc0bNzRYLfIrDRQXr7X+LHIm5oHw==",
      "dev": true,
      "hasInstallScript": true,
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=12"
      },
      "optionalDependencies": {
        "@esbuild/android-arm": "0.17.19",
        "@esbuild/android-arm64": "0.17.19",
        "@esbuild/android-x64": "0.17.19",
        "@esbuild/darwin-arm64": "0.17.19",
        "@esbuild/darwin-x64": "0.17.19",
        "@esbuild/freebsd-arm64": "0.17.19",
        "@esbuild/freebsd-x64": "0.17.19",
        "@esbuild/linux-arm": "0.17.19",
        "@esbuild/linux-arm64": "0.17.19",
        "@esbuild/linux-ia32": "0.17.19",
        "@esbuild/linux-loong64": "0.17.19",
        "@esbuild/linux-mips64el": "0.17.19",
        "@esbuild/linux-ppc64": "0.17.19",
        "@esbuild/linux-riscv64": "0.17.19",
        "@esbuild/linux-s390x": "0.17.19",
        "@esbuild/linux-x64": "0.17.19",
        "@esbuild/netbsd-x64": "0.17.19",
        "@esbuild/openbsd-x64": "0.17.19",
        "@esbuild/sunos-x64": "0.17.19",
        "@esbuild/win32-arm64": "0.17.19",
        "@esbuild/win32-ia32": "0.17.19",
        "@esbuild/win32-x64": "0.17.19"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "8.43.0",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-8.43.0.tgz",
      "integrity": "sha512-aaCpf2JqqKesMFGgmRPessmVKjcGXqdlAYLLC3THM8t5nBRZRQ+st5WM/hoJXkdioEXLLbXgclUpM0TXo5HX5Q==",
      "dev": true,
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.2.0",
        "@eslint-community/regexpp": "^4.4.0",
        "@eslint/eslintrc": "^2.0.3",
        "@eslint/js": "8.43.0",
        "@humanwhocodes/config-array": "^0.11.10",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@nodelib/fs.walk": "^1.2.8",
        "ajv": "^6.10.0",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.2",
        "debug": "^4.3.2",
        "doctrine": "^3.0.0",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^7.2.0",
        "eslint-visitor-keys": "^3.4.1",
        "espree": "^9.5.2",
        "esquery": "^1.4.2",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^6.0.1",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "globals": "^13.19.0",
        "graphemer": "^1.4.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.0.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "is-path-inside": "^3.0.3",
        "js-yaml": "^4.1.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.4.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.1",
        "strip-ansi": "^6.0.1",
        "strip-json-comments": "^3.1.0",
        "text-table": "^0.2.0"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-config-prettier": {
      "version": "8.8.0",
      "resolved": "https://registry.npmjs.org/eslint-config-prettier/-/eslint-config-prettier-8.8.0.tgz",
      "integrity": "sha512-wLbQiFre3tdGgpDv67NQKnJuTlcUVYHas3k+DZCc2U2BadthoEY4B7hLPvAxaqdyOGCzuLfii2fqGph10va7oA==",
      "dev": true,
      "bin": {
        "eslint-config-prettier": "bin/cli.js"
      },
      "peerDependencies": {
        "eslint": ">=7.0.0"
      }
    },
    "node_modules/eslint-plugin-prettier": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-prettier/-/eslint-plugin-prettier-4.2.1.tgz",
      "integrity": "sha512-f/0rXLXUt0oFYs8ra4w49wYZBG5GKZpAYsJSm6rnYL5uVDjd+zowwMwVZHnAjf4edNrKpCDYfXDgmRE/Ak7QyQ==",
      "dev": true,
      "dependencies": {
        "prettier-linter-helpers": "^1.0.0"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "eslint": ">=7.28.0",
        "prettier": ">=2.0.0"
      },
      "peerDependenciesMeta": {
        "eslint-config-prettier": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-plugin-vue": {
      "version": "9.15.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-vue/-/eslint-plugin-vue-9.15.1.tgz",
      "integrity": "sha512-CJE/oZOslvmAR9hf8SClTdQ9JLweghT6JCBQNrT2Iel1uVw0W0OLJxzvPd6CxmABKCvLrtyDnqGV37O7KQv6+A==",
      "dev": true,
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.3.0",
        "natural-compare": "^1.4.0",
        "nth-check": "^2.0.1",
        "postcss-selector-parser": "^6.0.9",
        "semver": "^7.3.5",
        "vue-eslint-parser": "^9.3.0",
        "xml-name-validator": "^4.0.0"
      },
      "engines": {
        "node": "^14.17.0 || >=16.0.0"
      },
      "peerDependencies": {
        "eslint": "^6.2.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/eslint-scope": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
      "integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
      "dev": true,
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^4.1.1"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "3.4.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.1.tgz",
      "integrity": "sha512-pZnmmLwYzf+kWaM/Qgrvpen51upAktaaiI01nsJD/Yr3lMOdNtq0cxkrrg16w64VtisN6okbs7Q8AfGqj4c9fA==",
      "dev": true,
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint/node_modules/eslint-scope": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.2.0.tgz",
      "integrity": "sha512-DYj5deGlHBfMt15J7rdtyKNq/Nqlv5KfU4iodrQ019XESsRnwXH9KAE0y3cwtUHDo2ob7CypAnCqefh6vioWRw==",
      "dev": true,
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint/node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/espree": {
      "version": "9.5.2",
      "resolved": "https://registry.npmjs.org/espree/-/espree-9.5.2.tgz",
      "integrity": "sha512-7OASN1Wma5fum5SrNhFMAMJxOUAbhyfQ8dQ//PJaJbNw0URTPWqIghHWt1MmAANKhHZIYOHruW4Kw4ruUWOdGw==",
      "dev": true,
      "dependencies": {
        "acorn": "^8.8.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^3.4.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.5.0.tgz",
      "integrity": "sha512-YQLXUplAwJgCydQ78IMJywZCceoqk1oH01OERdSAJc/7U2AylwjhSCLDEtqwg811idIS/9fIU5GjG73IgjKMVg==",
      "dev": true,
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esquery/node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esrecurse/node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
      "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estree-walker": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-2.0.2.tgz",
      "integrity": "sha512-Rfkk/Mp/DL7JVje3u18FxFujQlTNR2q6QfMSMB7AvCBx91NGj/ba3kCfza0f6dVDbw7YlRf/nDrn7pQrCCyQ/w=="
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/execa": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/execa/-/execa-5.1.1.tgz",
      "integrity": "sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==",
      "dev": true,
      "dependencies": {
        "cross-spawn": "^7.0.3",
        "get-stream": "^6.0.0",
        "human-signals": "^2.1.0",
        "is-stream": "^2.0.0",
        "merge-stream": "^2.0.0",
        "npm-run-path": "^4.0.1",
        "onetime": "^5.1.2",
        "signal-exit": "^3.0.3",
        "strip-final-newline": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/execa?sponsor=1"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true
    },
    "node_modules/fast-diff": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/fast-diff/-/fast-diff-1.3.0.tgz",
      "integrity": "sha512-VxPP4NqbUjj6MaAOafWeUn2cXWLcCtljklUtZf0Ind4XQ+QPtmA0b18zZy0jIQx+ExRVCR/ZQpBmik5lXshNsw==",
      "dev": true
    },
    "node_modules/fast-glob": {
      "version": "3.2.12",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.2.12.tgz",
      "integrity": "sha512-DVj4CQIYYow0BlaelwK1pHl5n5cRSJfM60UA0zK891sVInoPri2Ekj7+e1CT3/3qxXenpI+nBBmQAcJPJgaj4w==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.4"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true
    },
    "node_modules/fastq": {
      "version": "1.15.0",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.15.0.tgz",
      "integrity": "sha512-wBrocU2LCXXa+lWBt8RoIRD89Fi8OdABODa/kEnyeyjS5aZO5/GNvI5sEINADqP/h8M29UHTHUb53sUu5Ihqdw==",
      "dev": true,
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
      "integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
      "dev": true,
      "dependencies": {
        "flat-cache": "^3.0.4"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
      "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
      "dev": true,
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.0.4.tgz",
      "integrity": "sha512-dm9s5Pw7Jc0GvMYbshN6zchCA9RgQlzzEZX3vylR9IqFfS8XciblUXOKfW6SiuJ0e13eDYZoZV5wdrev7P3Nwg==",
      "dev": true,
      "dependencies": {
        "flatted": "^3.1.0",
        "rimraf": "^3.0.2"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/flatted": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.2.7.tgz",
      "integrity": "sha512-5nqDSxl8nn5BSNxyR3n4I6eDmbolI6WT+QqR547RwxQapgjQBmtktdP+HTBb/a/zLsbzERTONyUB5pefh5TtjQ==",
      "dev": true
    },
    "node_modules/follow-redirects": {
      "version": "1.15.2",
      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.2.tgz",
      "integrity": "sha512-VQLG33o04KaQ8uYi2tVNbdrWp1QWxNNea+nmIB4EVM28v0hmP17z7aG1+wAkNzVq4KeXTq3221ye5qTJP91JwA==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/RubenVerborgh"
        }
      ],
      "engines": {
        "node": ">=4.0"
      },
      "peerDependenciesMeta": {
        "debug": {
          "optional": true
        }
      }
    },
    "node_modules/for-each": {
      "version": "0.3.3",
      "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.3.tgz",
      "integrity": "sha512-jqYfLp7mo9vIyQf8ykW2v7A+2N4QjeCeI5+Dz9XraiO1ign81wjiH7Fb9vSOWvQfNtmSa4H2RoQTrrXivdUZmw==",
      "dev": true,
      "dependencies": {
        "is-callable": "^1.1.3"
      }
    },
    "node_modules/form-data": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.0.tgz",
      "integrity": "sha512-ETEklSGi5t0QMZuiXoA/Q6vcnxcLQP5vdugSpuAyi6SVGi2clPPp+xgEhuMaHC+zGgn31Kd235W35f7Hykkaww==",
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "mime-types": "^2.1.12"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
      "dev": true
    },
    "node_modules/fsevents": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
      "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
      "dev": true,
      "hasInstallScript": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",
      "dev": true
    },
    "node_modules/function.prototype.name": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/function.prototype.name/-/function.prototype.name-1.1.5.tgz",
      "integrity": "sha512-uN7m/BzVKQnCUF/iW8jYea67v++2u7m5UgENbHRtdDVclOUP+FMPlCNdmk0h/ysGyo2tavMJEDqJAkJdRa1vMA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.19.0",
        "functions-have-names": "^1.2.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/functions-have-names": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/functions-have-names/-/functions-have-names-1.2.3.tgz",
      "integrity": "sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.2.1.tgz",
      "integrity": "sha512-2DcsyfABl+gVHEfCOaTrWgyt+tb6MSEGmKq+kI5HwLbIYgjgmMcV8KQ41uaKz1xxUcn9tJtgFbQUEVcEbd0FYw==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-proto": "^1.0.1",
        "has-symbols": "^1.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-stream": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz",
      "integrity": "sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/get-symbol-description": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.0.0.tgz",
      "integrity": "sha512-2EmdH1YvIQiZpltCNgkuiUnyukzxM/R6NDJX31Ke3BG1Nq5b0S2PhX59UKi9vZpPDQVdqn+1IcaAwnzTT5vCjw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "get-intrinsic": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "dev": true,
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "13.20.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-13.20.0.tgz",
      "integrity": "sha512-Qg5QtVkCy/kv3FUSlu4ukeZDVf9ee0iXLAUYX13gbR17bnejFTzr4iS9bY7kwCf1NztRNm1t91fjOiyx4CSwPQ==",
      "dev": true,
      "dependencies": {
        "type-fest": "^0.20.2"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globalthis": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/globalthis/-/globalthis-1.0.3.tgz",
      "integrity": "sha512-sFdI5LyBiNTHjRd7cGPWapiHWMOXKyuBNX/cWJ3NfzrZQVa8GI/8cofCl74AOVqq9W5kNmguTIzJ/1s2gyI9wA==",
      "dev": true,
      "dependencies": {
        "define-properties": "^1.1.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/globby": {
      "version": "11.1.0",
      "resolved": "https://registry.npmjs.org/globby/-/globby-11.1.0.tgz",
      "integrity": "sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==",
      "dev": true,
      "dependencies": {
        "array-union": "^2.1.0",
        "dir-glob": "^3.0.1",
        "fast-glob": "^3.2.9",
        "ignore": "^5.2.0",
        "merge2": "^1.4.1",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/gopd": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.0.1.tgz",
      "integrity": "sha512-d65bNlIadxvpb/A2abVdlqKqV563juRnZ1Wtk6s1sIR8uNsXR70xqIzVqxVf1eTqDunwT2MkczEeaezCKTZhwA==",
      "dev": true,
      "dependencies": {
        "get-intrinsic": "^1.1.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true
    },
    "node_modules/grapheme-splitter": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/grapheme-splitter/-/grapheme-splitter-1.0.4.tgz",
      "integrity": "sha512-bzh50DW9kTPM00T8y4o8vQg89Di9oLJVLW/KaOGIXJWP/iqCN6WKYkbNOF04vFLJhwcpYUh9ydh/+5vpOqV4YQ==",
      "dev": true
    },
    "node_modules/graphemer": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz",
      "integrity": "sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==",
      "dev": true
    },
    "node_modules/gzip-size": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/gzip-size/-/gzip-size-6.0.0.tgz",
      "integrity": "sha512-ax7ZYomf6jqPTQ4+XCpUGyXKHk5WweS+e05MBO4/y3WJ5RkmPXNKvX+bx1behVILVwr6JSQvZAku021CHPXG3Q==",
      "dev": true,
      "dependencies": {
        "duplexer": "^0.1.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/has": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/has-bigints": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.0.2.tgz",
      "integrity": "sha512-tSvCKtBr9lkF0Ex0aQiP9N+OpV4zi2r/Nee5VkRDbaqv35RLYMzbwQfFSZZH0kR+Rd6302UJZ2p/bJCEoR3VoQ==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.0.tgz",
      "integrity": "sha512-62DVLZGoiEBDHQyqG4w9xCuZ7eJEwNmJRWw2VY84Oedb7WFcA27fiEVe8oUQx9hAUJ4ekurquucTGwsyO1XGdQ==",
      "dev": true,
      "dependencies": {
        "get-intrinsic": "^1.1.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/has-proto/-/has-proto-1.0.1.tgz",
      "integrity": "sha512-7qE+iP+O+bgF9clE5+UoBFzE65mlBiVj3tKCrlNQ0Ogwm0BjpT/gK4SlLYDMybDh5I3TCTKnPPa0oMG7JDYrhg==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz",
      "integrity": "sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.0.tgz",
      "integrity": "sha512-kFjcSNhnlGV1kyoGk7OXKSawH5JOb/LzUc5w9B02hOTO0dfFRjbHQKvg1d6cf3HbeUmtU9VbbV3qzZ2Teh97WQ==",
      "dev": true,
      "dependencies": {
        "has-symbols": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/he": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/he/-/he-1.2.0.tgz",
      "integrity": "sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw==",
      "dev": true,
      "bin": {
        "he": "bin/he"
      }
    },
    "node_modules/hosted-git-info": {
      "version": "2.8.9",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
      "integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
      "dev": true
    },
    "node_modules/human-signals": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-2.1.0.tgz",
      "integrity": "sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==",
      "dev": true,
      "engines": {
        "node": ">=10.17.0"
      }
    },
    "node_modules/ignore": {
      "version": "5.2.4",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.2.4.tgz",
      "integrity": "sha512-MAb38BcSbH0eHNBxn7ql2NH/kX33OkB3lZ1BNdh7ENeRChHTYsTvWrMubiIAMNS2llXEEgZ1MUOBtXChP3kaFQ==",
      "dev": true,
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
      "integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
      "dev": true,
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
      "dev": true,
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "dev": true
    },
    "node_modules/internal-slot": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.0.5.tgz",
      "integrity": "sha512-Y+R5hJrzs52QCG2laLn4udYVnxsfny9CpOhNhUvk/SSSVyF6T27FzRbF0sroPidSu3X8oEAkOn2K804mjpt6UQ==",
      "dev": true,
      "dependencies": {
        "get-intrinsic": "^1.2.0",
        "has": "^1.0.3",
        "side-channel": "^1.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/is-array-buffer": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/is-array-buffer/-/is-array-buffer-3.0.2.tgz",
      "integrity": "sha512-y+FyyR/w8vfIRq4eQcM1EYgSTnmHXPqaF+IgzgraytCFq5Xh8lllDVmAZolPJiZttZLeFSINPYMaEJ7/vWUa1w==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "get-intrinsic": "^1.2.0",
        "is-typed-array": "^1.1.10"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==",
      "dev": true
    },
    "node_modules/is-bigint": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.0.4.tgz",
      "integrity": "sha512-zB9CruMamjym81i2JZ3UMn54PKGsQzsJeo6xvN3HJJ4CAsQNB6iRutp2To77OfCNuoxspsIhzaPoO1zyCEhFOg==",
      "dev": true,
      "dependencies": {
        "has-bigints": "^1.0.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-boolean-object": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.1.2.tgz",
      "integrity": "sha512-gDYaKHJmnj4aWxyj6YHyXVpdQawtVLHU5cb+eztPGczf6cjuTdwve5ZIEfgXqH4e57An1D1AKf8CZ3kYrQRqYA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-callable": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.7.tgz",
      "integrity": "sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.12.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.12.1.tgz",
      "integrity": "sha512-Q4ZuBAe2FUsKtyQJoQHlvP8OvBERxO3jEmy1I7hcRXcJBGGHFh/aJBswbXuS9sgrDH2QUO8ilkwNPHvHMd8clg==",
      "dev": true,
      "dependencies": {
        "has": "^1.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.5.tgz",
      "integrity": "sha512-9YQaSxsAiSwcvS33MBk3wTCVnWK+HhF8VZR2jRxehM16QcVOdHqPn4VPHmRK4lSr38n9JriurInLcP90xsYNfQ==",
      "dev": true,
      "dependencies": {
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-negative-zero": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.2.tgz",
      "integrity": "sha512-dqJvarLawXsFbNDeJW7zAz8ItJ9cd28YufuuFzh0G8pNHjJMnY08Dv7sYX2uF5UpQOwieAeOExEYAWWfu7ZZUA==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-number-object": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.0.7.tgz",
      "integrity": "sha512-k1U0IRzLMo7ZlYIfzRu23Oh6MiIFasgpb9X76eqfFZAqwH44UI4KTBvBYIZ1dSL9ZzChTB9ShHfLkR4pdW5krQ==",
      "dev": true,
      "dependencies": {
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-regex": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.4.tgz",
      "integrity": "sha512-kvRdxDsxZjhzUX07ZnLydzS1TU/TJlTUHHY4YLL87e37oUA49DfkLqgy+VjFocowy29cKvcSiu+kIv728jTTVg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-shared-array-buffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.2.tgz",
      "integrity": "sha512-sqN2UDu1/0y6uvXyStCOzyhAjCSlHceFoMKJW8W9EU9cvic/QdsZ0kEU93HEy3IUEFZIiH/3w+AH/UQbPHNdhA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-stream": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz",
      "integrity": "sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-string": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.0.7.tgz",
      "integrity": "sha512-tE2UXzivje6ofPW7l23cjDOMa09gb7xlAqG6jG5ej6uPV32TlWP3NKPigtaGeHNu9fohccRYvIiZMfOOnOYUtg==",
      "dev": true,
      "dependencies": {
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.4.tgz",
      "integrity": "sha512-C/CPBqKWnvdcxqIARxyOh4v1UUEOCHpgDa0WYgpKDFMszcrPcffg5uhwSgPCLD2WWxmq6isisz87tzT01tuGhg==",
      "dev": true,
      "dependencies": {
        "has-symbols": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typed-array": {
      "version": "1.1.10",
      "resolved": "https://registry.npmjs.org/is-typed-array/-/is-typed-array-1.1.10.tgz",
      "integrity": "sha512-PJqgEHiWZvMpaFZ3uTc8kHPM4+4ADTlDniuQL7cU/UDA0Ql7F70yGfHph3cLNe+c9toaigv+DFzTJKhc2CtO6A==",
      "dev": true,
      "dependencies": {
        "available-typed-arrays": "^1.0.5",
        "call-bind": "^1.0.2",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakref": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.0.2.tgz",
      "integrity": "sha512-qctsuLZmIQ0+vSSMfoVvyFe2+GSEvnmZ2ezTup1SBse9+twCCeial6EEi3Nc2KFcf6+qz2FBPnjXsk8xhKSaPQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true
    },
    "node_modules/jiti": {
      "version": "1.18.2",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-1.18.2.tgz",
      "integrity": "sha512-QAdOptna2NYiSSpv0O/BwoHBSmz4YhpzJHyi+fnMRTXFjp7B8i/YG5Z8IfusxB1ufjcD2Sre1F3R+nX3fvy7gg==",
      "dev": true,
      "bin": {
        "jiti": "bin/jiti.js"
      }
    },
    "node_modules/js-yaml": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
      "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
      "dev": true,
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/json-parse-better-errors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
      "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==",
      "dev": true
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true
    },
    "node_modules/kolorist": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/kolorist/-/kolorist-1.8.0.tgz",
      "integrity": "sha512-Y+60/zizpJ3HRH8DCss+q95yr6145JXZo46OTpFvDZWLfRCE4qChOyk1b26nMaNpfHHgxagk9dXT5OP0Tfe+dQ==",
      "dev": true
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/load-json-file": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-4.0.0.tgz",
      "integrity": "sha512-Kx8hMakjX03tiGTLAIdJ+lL0htKnXjEZN6hk/tozf/WOuYGdZBJrZ+rCJRbVCugsjB3jMLn9746NsQIf5VjBMw==",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.1.2",
        "parse-json": "^4.0.0",
        "pify": "^3.0.0",
        "strip-bom": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/local-pkg": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/local-pkg/-/local-pkg-0.4.3.tgz",
      "integrity": "sha512-SFppqq5p42fe2qcZQqqEOiVRXl+WCP1MdT6k7BDEW1j++sp5fIY+/fdRQitvKgB5BrBcmrs5m/L0v2FrU5MY1g==",
      "dev": true,
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==",
      "dev": true
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true
    },
    "node_modules/lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "dev": true,
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.0",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.0.tgz",
      "integrity": "sha512-LA+31JYDJLs82r2ScLrlz1GjSgu66ZV518eyWT+S8VhyQn/JL0u9MeBOvQMGYiPk1DBiSN9DDMOcXvigJZaViQ==",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.4.13"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/mdn-data": {
      "version": "2.0.30",
      "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.30.tgz",
      "integrity": "sha512-GaqWWShW4kv/G9IEucWScBx9G1/vsFZZJUO+tD26M8J8z3Kw5RDQjaoZe03YAClgeS/SWPOcb4nkFBTEi5DUEA==",
      "dev": true
    },
    "node_modules/memorystream": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/memorystream/-/memorystream-0.3.1.tgz",
      "integrity": "sha512-S3UwM3yj5mtUSEfP41UZmt/0SCoVYUcU1rkXv+BQ5Ig8ndL4sPoJNBUJERafdPb5jjHJGuMgytgKvKIf58XNBw==",
      "dev": true,
      "engines": {
        "node": ">= 0.10.0"
      }
    },
    "node_modules/merge-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
      "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
      "dev": true
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.5.tgz",
      "integrity": "sha512-DMy+ERcEW2q8Z2Po+WNXuw3c5YaUSFjAO5GsJqfEl7UjvtIuFKO6ZrKvcItdy98dwFI2N1tg3zNIdKaQT+aNdA==",
      "dev": true,
      "dependencies": {
        "braces": "^3.0.2",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mimic-fn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
      "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/mrmime": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/mrmime/-/mrmime-1.0.1.tgz",
      "integrity": "sha512-hzzEagAgDyoU1Q6yg5uI+AorQgdvMCur3FcKf7NhMKWsaYg+RnbTyHRa/9IlLF9rf455MOCtcqqrQQ83pPP7Uw==",
      "dev": true,
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
      "dev": true
    },
    "node_modules/muggle-string": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/muggle-string/-/muggle-string-0.3.1.tgz",
      "integrity": "sha512-ckmWDJjphvd/FvZawgygcUeQCxzvohjFO5RxTjj4eq8kw359gFF3E1brjfI+viLMxss5JrHTDRHZvu2/tuy0Qg==",
      "dev": true
    },
    "node_modules/nanoid": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.6.tgz",
      "integrity": "sha512-BGcqMMJuToF7i1rt+2PWSNVnWIkGCU78jBG3RxO/bZlnZPK2Cmi2QaffxGO/2RvWi9sL+FAiRiXMgsyxQ1DIDA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true
    },
    "node_modules/natural-compare-lite": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare-lite/-/natural-compare-lite-1.4.0.tgz",
      "integrity": "sha512-Tj+HTDSJJKaZnfiuw+iaF9skdPpTo2GtEly5JHnWV/hfv2Qj/9RKsGISQtLh2ox3l5EAGw487hnBee0sIJ6v2g==",
      "dev": true
    },
    "node_modules/nice-try": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
      "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ==",
      "dev": true
    },
    "node_modules/node-fetch-native": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/node-fetch-native/-/node-fetch-native-1.2.0.tgz",
      "integrity": "sha512-5IAMBTl9p6PaAjYCnMv5FmqIF6GcZnawAVnzaCG0rX2aYZJ4CxEkZNtVPuTRug7fL7wyM5BQYTlAzcyMPi6oTQ==",
      "dev": true
    },
    "node_modules/normalize-package-data": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
      "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
      "dev": true,
      "dependencies": {
        "hosted-git-info": "^2.1.4",
        "resolve": "^1.10.0",
        "semver": "2 || 3 || 4 || 5",
        "validate-npm-package-license": "^3.0.1"
      }
    },
    "node_modules/normalize-package-data/node_modules/semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "dev": true,
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/npm-run-all": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/npm-run-all/-/npm-run-all-4.1.5.tgz",
      "integrity": "sha512-Oo82gJDAVcaMdi3nuoKFavkIHBRVqQ1qvMb+9LHk/cF4P6B2m8aP04hGf7oL6wZ9BuGwX1onlLhpuoofSyoQDQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "chalk": "^2.4.1",
        "cross-spawn": "^6.0.5",
        "memorystream": "^0.3.1",
        "minimatch": "^3.0.4",
        "pidtree": "^0.3.0",
        "read-pkg": "^3.0.0",
        "shell-quote": "^1.6.1",
        "string.prototype.padend": "^3.0.0"
      },
      "bin": {
        "npm-run-all": "bin/npm-run-all/index.js",
        "run-p": "bin/run-p/index.js",
        "run-s": "bin/run-s/index.js"
      },
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/npm-run-all/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npm-run-all/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npm-run-all/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/npm-run-all/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==",
      "dev": true
    },
    "node_modules/npm-run-all/node_modules/cross-spawn": {
      "version": "6.0.5",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
      "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
      "dev": true,
      "dependencies": {
        "nice-try": "^1.0.4",
        "path-key": "^2.0.1",
        "semver": "^5.5.0",
        "shebang-command": "^1.2.0",
        "which": "^1.2.9"
      },
      "engines": {
        "node": ">=4.8"
      }
    },
    "node_modules/npm-run-all/node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",
      "dev": true,
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/npm-run-all/node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npm-run-all/node_modules/path-key": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
      "integrity": "sha512-fEHGKCSmUSDPv4uoj8AlD+joPlq3peND+HRYyxFz4KPw4z926S/b8rIuFs2FYJg3BwsxJf6A9/3eIdLaYC+9Dw==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npm-run-all/node_modules/semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "dev": true,
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/npm-run-all/node_modules/shebang-command": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
      "integrity": "sha512-EV3L1+UQWGor21OmnvojK36mhg+TyIKDh3iFBKBohr5xeXIhNBcx8oWdgkTEEQ+BEFFYdLRuqMfd5L84N1V5Vg==",
      "dev": true,
      "dependencies": {
        "shebang-regex": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/npm-run-all/node_modules/shebang-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
      "integrity": "sha512-wpoSFAxys6b2a2wHZ1XpDSgD7N9iVjg29Ph9uV/uaP9Ex/KXlkTZTeddxDPSYQpgvzKLGJke2UU0AzoGCjNIvQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/npm-run-all/node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npm-run-all/node_modules/which": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
      "dev": true,
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "which": "bin/which"
      }
    },
    "node_modules/npm-run-path": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz",
      "integrity": "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==",
      "dev": true,
      "dependencies": {
        "path-key": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/nth-check": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-2.1.1.tgz",
      "integrity": "sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==",
      "dev": true,
      "dependencies": {
        "boolbase": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/fb55/nth-check?sponsor=1"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.12.3",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.12.3.tgz",
      "integrity": "sha512-geUvdk7c+eizMNUDkRpW1wJwgfOiOeHbxBR/hLXK1aT6zmVSO0jsQcs7fj6MGw89jC/cjGfLcNOrtMYtGqm81g==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.4",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.4.tgz",
      "integrity": "sha512-1mxKf0e58bvyjSCtKYY4sRe9itRk3PJpquJOjeIkz885CczcI4IvJJDLPS72oowuSh+pBxUFROpX+TU++hxhZQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.4",
        "has-symbols": "^1.0.3",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/ofetch": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ofetch/-/ofetch-1.1.1.tgz",
      "integrity": "sha512-SSMoktrp9SNLi20BWfB/BnnKcL0RDigXThD/mZBeQxkIRv1xrd9183MtLdsqRYLYSqW0eTr5t8w8MqjNhvoOQQ==",
      "dev": true,
      "dependencies": {
        "destr": "^2.0.0",
        "node-fetch-native": "^1.2.0",
        "ufo": "^1.1.2"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "dev": true,
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/onetime": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
      "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
      "dev": true,
      "dependencies": {
        "mimic-fn": "^2.1.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.1",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.1.tgz",
      "integrity": "sha512-74RlY5FCnhq4jRxVUPKDaRwrVNXMqsGsiW6AJw4XK8hmtm10wC0ypZBLw5IIp85NZMr91+qd1RvvENwg7jjRFw==",
      "dev": true,
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.3"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/parse-json": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
      "integrity": "sha512-aOIos8bujGN93/8Ox/jPLh7RwVnPEysynVFE+fQZyg6jKELEHwzgKdLRFHUgXJL6kylijVSBC4BvN9OmsB48Rw==",
      "dev": true,
      "dependencies": {
        "error-ex": "^1.3.1",
        "json-parse-better-errors": "^1.0.1"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true
    },
    "node_modules/path-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pathe": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/pathe/-/pathe-1.1.1.tgz",
      "integrity": "sha512-d+RQGp0MAYTIaDBIMmOfMwz3E+LOZnxx1HZd5R18mmCZY0QBlK0LDZfPc8FW8Ed2DlvsuE6PRjroDY+wg4+j/Q==",
      "dev": true
    },
    "node_modules/perfect-debounce": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/perfect-debounce/-/perfect-debounce-1.0.0.tgz",
      "integrity": "sha512-xCy9V055GLEqoFaHoC1SoLIaLmWctgCUaBaWxDZ7/Zx4CTyX7cJQLJOok/orfjZAh9kEYpjJa4d0KcJmCbctZA==",
      "dev": true
    },
    "node_modules/picocolors": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.0.0.tgz",
      "integrity": "sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ=="
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pidtree": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/pidtree/-/pidtree-0.3.1.tgz",
      "integrity": "sha512-qQbW94hLHEqCg7nhby4yRC7G2+jYHY4Rguc2bjw7Uug4GIJuu1tvf2uHaZv5Q8zdt+WKJ6qK1FOI6amaWUo5FA==",
      "dev": true,
      "bin": {
        "pidtree": "bin/pidtree.js"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/pify": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
      "integrity": "sha512-C3FsVNH1udSEX48gGX1xfvwTWfsYWj5U+8/uK15BGzIGrKoUpghX8hWZwa/OFnakBiiVNmBvemTJR5mcy7iPcg==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss": {
      "version": "8.4.24",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.24.tgz",
      "integrity": "sha512-M0RzbcI0sO/XJNucsGjvWU9ERWxb/ytp1w6dKtxTKgixdtQDq4rmx/g8W1hnaheq9jgwL/oyEdH5Bc4WwJKMqg==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "nanoid": "^3.3.6",
        "picocolors": "^1.0.0",
        "source-map-js": "^1.0.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-selector-parser": {
      "version": "6.0.13",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.0.13.tgz",
      "integrity": "sha512-EaV1Gl4mUEV4ddhDnv/xtj7sxwrwxdetHdWUGnT4VJQf+4d05v6lHYZr8N573k5Z0BViss7BDhfWtKS3+sfAqQ==",
      "dev": true,
      "dependencies": {
        "cssesc": "^3.0.0",
        "util-deprecate": "^1.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prettier": {
      "version": "2.8.8",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-2.8.8.tgz",
      "integrity": "sha512-tdN8qQGvNjw4CHbY+XXk0JgCXn9QiF21a55rBe5LJAU+kDyC4WQn4+awm2Xfk2lQMk5fKup9XgzTZtGkjBdP9Q==",
      "dev": true,
      "bin": {
        "prettier": "bin-prettier.js"
      },
      "engines": {
        "node": ">=10.13.0"
      },
      "funding": {
        "url": "https://github.com/prettier/prettier?sponsor=1"
      }
    },
    "node_modules/prettier-linter-helpers": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/prettier-linter-helpers/-/prettier-linter-helpers-1.0.0.tgz",
      "integrity": "sha512-GbK2cP9nraSSUF9N2XwUwqfzlAFlMNYYl+ShE/V+H8a9uNl/oUqB1w2EL54Jh0OlyRSd8RfWYJ3coVS4TROP2w==",
      "dev": true,
      "dependencies": {
        "fast-diff": "^1.1.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/proxy-from-env": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz",
      "integrity": "sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg=="
    },
    "node_modules/punycode": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.0.tgz",
      "integrity": "sha512-rRV+zQD8tVFys26lAGR9WUuS4iUAngJScM+ZRSKtvl5tKeZ2t5bvdNFdNHBW9FWR4guGHlgmsZ1G7BSm2wTbuA==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/read-pkg": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-3.0.0.tgz",
      "integrity": "sha512-BLq/cCO9two+lBgiTYNqD6GdtK8s4NpaWrl6/rCO9w0TUS8oJl7cmToOZfRYllKTISY6nt1U7jQ53brmKqY6BA==",
      "dev": true,
      "dependencies": {
        "load-json-file": "^4.0.0",
        "normalize-package-data": "^2.3.2",
        "path-type": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/read-pkg/node_modules/path-type": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-3.0.0.tgz",
      "integrity": "sha512-T2ZUsdZFHgA3u4e5PfPbjd7HDDpxPnQb5jN0SrDsjNSuVXHJqtwTnWqG0B1jZrgmJ/7lj1EmVIByWt1gxGkWvg==",
      "dev": true,
      "dependencies": {
        "pify": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/regexp.prototype.flags": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.5.0.tgz",
      "integrity": "sha512-0SutC3pNudRKgquxGoRGIz946MZVHqbNfPjBdxeOhBrdgDKlRoXmYLQN9xRbrR09ZXWeGAdPuif7egofn6v5LA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.2.0",
        "functions-have-names": "^1.2.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve": {
      "version": "1.22.2",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.2.tgz",
      "integrity": "sha512-Sb+mjNHOULsBv818T40qSPeRiuWLyaGMa5ewydRLFimneixmVy2zdivRl+AF6jaYPC8ERxGDmFSiqui6SfPd+g==",
      "dev": true,
      "dependencies": {
        "is-core-module": "^2.11.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/reusify": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
      "dev": true,
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "dev": true,
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/rollup": {
      "version": "3.25.2",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-3.25.2.tgz",
      "integrity": "sha512-VLnkxZMDr3jpxgtmS8pQZ0UvhslmF4ADq/9w4erkctbgjCqLW9oa89fJuXEs4ZmgyoF7Dm8rMDKSS5b5u2hHUg==",
      "dev": true,
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=14.18.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-regex-test": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/safe-regex-test/-/safe-regex-test-1.0.0.tgz",
      "integrity": "sha512-JBUUzyOgEwXQY1NuPtvcj/qcBDbDmEvWufhlnXZIm75DEHp+afM1r1ujJpJsV/gSM4t59tpDyPi1sd6ZaPFfsA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "get-intrinsic": "^1.1.3",
        "is-regex": "^1.1.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/semver": {
      "version": "7.5.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.5.3.tgz",
      "integrity": "sha512-QBlUtyVk/5EeHbi7X0fw6liDZc7BBmEaSYn01fMU1OUYbf6GPsbTtd8WmnqbI20SeycoHSeiybkE/q1Q+qlThQ==",
      "dev": true,
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shell-quote": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.8.1.tgz",
      "integrity": "sha512-6j1W9l1iAs/4xYBI1SYOVZyFcCis9b4KCLQ8fgAGG07QvzaRLVVRQvAy85yNmmZSjYjg4MWh4gNvlPujU/5LpA==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",
      "integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.0",
        "get-intrinsic": "^1.0.2",
        "object-inspect": "^1.9.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/signal-exit": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
      "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
      "dev": true
    },
    "node_modules/sirv": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/sirv/-/sirv-2.0.3.tgz",
      "integrity": "sha512-O9jm9BsID1P+0HOi81VpXPoDxYP374pkOLzACAoyUQ/3OUVndNpsz6wMnY2z+yOxzbllCKZrM+9QrWsv4THnyA==",
      "dev": true,
      "dependencies": {
        "@polka/url": "^1.0.0-next.20",
        "mrmime": "^1.0.0",
        "totalist": "^3.0.0"
      },
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/slash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
      "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.0.2.tgz",
      "integrity": "sha512-R0XvVJ9WusLiqTCEiGCmICCMplcCkIwwR11mOSD9CR5u+IXYdiseeEuXCVAjS54zqwkLcPNnmU4OeJ6tUrWhDw==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/spdx-correct": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.2.0.tgz",
      "integrity": "sha512-kN9dJbvnySHULIluDHy32WHRUu3Og7B9sbY7tsFLctQkIqnMh3hErYgdMjTYuqmcXX+lK5T1lnUt3G7zNswmZA==",
      "dev": true,
      "dependencies": {
        "spdx-expression-parse": "^3.0.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "node_modules/spdx-exceptions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.3.0.tgz",
      "integrity": "sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A==",
      "dev": true
    },
    "node_modules/spdx-expression-parse": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",
      "integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",
      "dev": true,
      "dependencies": {
        "spdx-exceptions": "^2.1.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "node_modules/spdx-license-ids": {
      "version": "3.0.13",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.13.tgz",
      "integrity": "sha512-XkD+zwiqXHikFZm4AX/7JSCXA98U5Db4AFd5XUg/+9UNtnH75+Z9KxtpYiJZx36mUDVOwH83pl7yvCer6ewM3w==",
      "dev": true
    },
    "node_modules/string.prototype.padend": {
      "version": "3.1.4",
      "resolved": "https://registry.npmjs.org/string.prototype.padend/-/string.prototype.padend-3.1.4.tgz",
      "integrity": "sha512-67otBXoksdjsnXXRUq+KMVTdlVRZ2af422Y0aTyTjVaoQkGr3mxl2Bc5emi7dOQ3OGVVQQskmLEWwFXwommpNw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.4",
        "es-abstract": "^1.20.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trim": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/string.prototype.trim/-/string.prototype.trim-1.2.7.tgz",
      "integrity": "sha512-p6TmeT1T3411M8Cgg9wBTMRtY2q9+PNy9EV1i2lIXUN/btt763oIfxwN3RR8VU6wHX8j/1CFy0L+YuThm6bgOg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.4",
        "es-abstract": "^1.20.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.6.tgz",
      "integrity": "sha512-JySq+4mrPf9EsDBEDYMOb/lM7XQLulwg5R/m1r0PXEFqrV0qHvl58sdTilSXtKOflCsK2E8jxf+GKC0T07RWwQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.4",
        "es-abstract": "^1.20.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.6.tgz",
      "integrity": "sha512-omqjMDaY92pbn5HOX7f9IccLA+U1tA9GvtU4JrodiXFfYB7jPzzHpRzpglLAjtUV6bB557zwClJezTqnAiYnQA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.4",
        "es-abstract": "^1.20.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-final-newline": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz",
      "integrity": "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==",
      "dev": true
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/totalist": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/totalist/-/totalist-3.0.1.tgz",
      "integrity": "sha512-sf4i37nQ2LBx4m3wB74y+ubopq6W/dIzXg0FDGjsYnZHVa1Da8FH853wlL2gtUhg+xJXjfk3kUZS3BRoQeoQBQ==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/tslib": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
      "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
      "dev": true
    },
    "node_modules/tsutils": {
      "version": "3.21.0",
      "resolved": "https://registry.npmjs.org/tsutils/-/tsutils-3.21.0.tgz",
      "integrity": "sha512-mHKK3iUXL+3UF6xL5k0PEhKRUBKPBCv/+RkEOpjRWxxx27KKRBmmA60A9pgOUvMi8GKhRMPEmjBRPzs2W7O1OA==",
      "dev": true,
      "dependencies": {
        "tslib": "^1.8.1"
      },
      "engines": {
        "node": ">= 6"
      },
      "peerDependencies": {
        "typescript": ">=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta"
      }
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-fest": {
      "version": "0.20.2",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
      "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/typed-array-length": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/typed-array-length/-/typed-array-length-1.0.4.tgz",
      "integrity": "sha512-KjZypGq+I/H7HI5HlOoGHkWUUGq+Q0TPhQurLbyrVrvnKTBgzLhIJ7j6J/XTQOi0d1RjyZ0wdas8bKs2p0x3Ng==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "for-each": "^0.3.3",
        "is-typed-array": "^1.1.9"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typescript": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.0.4.tgz",
      "integrity": "sha512-cW9T5W9xY37cc+jfEnaUvX91foxtHkza3Nw3wkoF4sSlKn0MONdkdEndig/qPBWXNkmplh3NzayQzCiHM4/hqw==",
      "dev": true,
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=12.20"
      }
    },
    "node_modules/ufo": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/ufo/-/ufo-1.1.2.tgz",
      "integrity": "sha512-TrY6DsjTQQgyS3E3dBaOXf0TpPD8u9FVrVYmKVegJuFw51n/YB9XPt+U6ydzFG5ZIN7+DIjPbNmXoBj9esYhgQ==",
      "dev": true
    },
    "node_modules/unbox-primitive": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.0.2.tgz",
      "integrity": "sha512-61pPlCD9h51VoreyJ0BReideM3MDKMKnh6+V9L08331ipq6Q8OFXZYiqP6n/tbHx4s5I9uRhcye6BrbkizkBDw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "has-bigints": "^1.0.2",
        "has-symbols": "^1.0.3",
        "which-boxed-primitive": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/unconfig": {
      "version": "0.3.9",
      "resolved": "https://registry.npmjs.org/unconfig/-/unconfig-0.3.9.tgz",
      "integrity": "sha512-8yhetFd48M641mxrkWA+C/lZU4N0rCOdlo3dFsyFPnBHBjMJfjT/3eAZBRT2RxCRqeBMAKBVgikejdS6yeBjMw==",
      "dev": true,
      "dependencies": {
        "@antfu/utils": "^0.7.2",
        "defu": "^6.1.2",
        "jiti": "^1.18.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/unocss": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/unocss/-/unocss-0.53.3.tgz",
      "integrity": "sha512-kZx3GFOczE7uS2zUecmvW1kM0MTPdVtQIMcXC5XYoPfr2Ho6G1p75eGAXmaL7jaompSo+WHsK4HrSC756nbfgg==",
      "dev": true,
      "dependencies": {
        "@unocss/astro": "0.53.3",
        "@unocss/cli": "0.53.3",
        "@unocss/core": "0.53.3",
        "@unocss/extractor-arbitrary-variants": "0.53.3",
        "@unocss/postcss": "0.53.3",
        "@unocss/preset-attributify": "0.53.3",
        "@unocss/preset-icons": "0.53.3",
        "@unocss/preset-mini": "0.53.3",
        "@unocss/preset-tagify": "0.53.3",
        "@unocss/preset-typography": "0.53.3",
        "@unocss/preset-uno": "0.53.3",
        "@unocss/preset-web-fonts": "0.53.3",
        "@unocss/preset-wind": "0.53.3",
        "@unocss/reset": "0.53.3",
        "@unocss/transformer-attributify-jsx": "0.53.3",
        "@unocss/transformer-attributify-jsx-babel": "0.53.3",
        "@unocss/transformer-compile-class": "0.53.3",
        "@unocss/transformer-directives": "0.53.3",
        "@unocss/transformer-variant-group": "0.53.3",
        "@unocss/vite": "0.53.3"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      },
      "peerDependencies": {
        "@unocss/webpack": "0.53.3"
      },
      "peerDependenciesMeta": {
        "@unocss/webpack": {
          "optional": true
        }
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "dev": true
    },
    "node_modules/validate-npm-package-license": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
      "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
      "dev": true,
      "dependencies": {
        "spdx-correct": "^3.0.0",
        "spdx-expression-parse": "^3.0.0"
      }
    },
    "node_modules/vite": {
      "version": "4.3.9",
      "resolved": "https://registry.npmjs.org/vite/-/vite-4.3.9.tgz",
      "integrity": "sha512-qsTNZjO9NoJNW7KnOrgYwczm0WctJ8m/yqYAMAK9Lxt4SoySUfS5S8ia9K7JHpa3KEeMfyF8LoJ3c5NeBJy6pg==",
      "dev": true,
      "dependencies": {
        "esbuild": "^0.17.5",
        "postcss": "^8.4.23",
        "rollup": "^3.21.0"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      },
      "peerDependencies": {
        "@types/node": ">= 14",
        "less": "*",
        "sass": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.4.0"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        }
      }
    },
    "node_modules/vue": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/vue/-/vue-3.3.4.tgz",
      "integrity": "sha512-VTyEYn3yvIeY1Py0WaYGZsXnz3y5UnGi62GjVEqvEGPl6nxbOrCXbVOTQWBEJUqAyTUk2uJ5JLVnYJ6ZzGbrSw==",
      "dependencies": {
        "@vue/compiler-dom": "3.3.4",
        "@vue/compiler-sfc": "3.3.4",
        "@vue/runtime-dom": "3.3.4",
        "@vue/server-renderer": "3.3.4",
        "@vue/shared": "3.3.4"
      }
    },
    "node_modules/vue-eslint-parser": {
      "version": "9.3.1",
      "resolved": "https://registry.npmjs.org/vue-eslint-parser/-/vue-eslint-parser-9.3.1.tgz",
      "integrity": "sha512-Clr85iD2XFZ3lJ52/ppmUDG/spxQu6+MAeHXjjyI4I1NUYZ9xmenQp4N0oaHJhrA8OOxltCVxMRfANGa70vU0g==",
      "dev": true,
      "dependencies": {
        "debug": "^4.3.4",
        "eslint-scope": "^7.1.1",
        "eslint-visitor-keys": "^3.3.0",
        "espree": "^9.3.1",
        "esquery": "^1.4.0",
        "lodash": "^4.17.21",
        "semver": "^7.3.6"
      },
      "engines": {
        "node": "^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/mysticatea"
      },
      "peerDependencies": {
        "eslint": ">=6.0.0"
      }
    },
    "node_modules/vue-eslint-parser/node_modules/eslint-scope": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.2.0.tgz",
      "integrity": "sha512-DYj5deGlHBfMt15J7rdtyKNq/Nqlv5KfU4iodrQ019XESsRnwXH9KAE0y3cwtUHDo2ob7CypAnCqefh6vioWRw==",
      "dev": true,
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/vue-eslint-parser/node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/vue-router": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/vue-router/-/vue-router-4.2.2.tgz",
      "integrity": "sha512-cChBPPmAflgBGmy3tBsjeoe3f3VOSG6naKyY5pjtrqLGbNEXdzCigFUHgBvp9e3ysAtFtEx7OLqcSDh/1Cq2TQ==",
      "dependencies": {
        "@vue/devtools-api": "^6.5.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/posva"
      },
      "peerDependencies": {
        "vue": "^3.2.0"
      }
    },
    "node_modules/vue-template-compiler": {
      "version": "2.7.14",
      "resolved": "https://registry.npmjs.org/vue-template-compiler/-/vue-template-compiler-2.7.14.tgz",
      "integrity": "sha512-zyA5Y3ArvVG0NacJDkkzJuPQDF8RFeRlzV2vLeSnhSpieO6LK2OVbdLPi5MPPs09Ii+gMO8nY4S3iKQxBxDmWQ==",
      "dev": true,
      "dependencies": {
        "de-indent": "^1.0.2",
        "he": "^1.2.0"
      }
    },
    "node_modules/vue-tsc": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/vue-tsc/-/vue-tsc-1.8.1.tgz",
      "integrity": "sha512-GxBQrcb0Qvyrj1uZqnTXQyWbXdNDRY2MTa+r7ESgjhf+WzBSdxZfkS3KD/C3WhKYG+aN8hf44Hp5Gqzb6PehAA==",
      "dev": true,
      "dependencies": {
        "@vue/language-core": "1.8.1",
        "@vue/typescript": "1.8.1",
        "semver": "^7.3.8"
      },
      "bin": {
        "vue-tsc": "bin/vue-tsc.js"
      },
      "peerDependencies": {
        "typescript": "*"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.0.2.tgz",
      "integrity": "sha512-bwZdv0AKLpplFY2KZRX6TvyuN7ojjr7lwkg6ml0roIy9YeuSr7JS372qlNW18UQYzgYK9ziGcerWqZOmEn9VNg==",
      "dev": true,
      "dependencies": {
        "is-bigint": "^1.0.1",
        "is-boolean-object": "^1.1.0",
        "is-number-object": "^1.0.4",
        "is-string": "^1.0.5",
        "is-symbol": "^1.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-typed-array": {
      "version": "1.1.9",
      "resolved": "https://registry.npmjs.org/which-typed-array/-/which-typed-array-1.1.9.tgz",
      "integrity": "sha512-w9c4xkx6mPidwp7180ckYWfMmvxpjlZuIudNtDf4N/tTAUB8VJbX25qZoAsrtGuYNnGw3pa0AXgbGKRB8/EceA==",
      "dev": true,
      "dependencies": {
        "available-typed-arrays": "^1.0.5",
        "call-bind": "^1.0.2",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "has-tostringtag": "^1.0.0",
        "is-typed-array": "^1.1.10"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
      "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "dev": true
    },
    "node_modules/xml-name-validator": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-4.0.0.tgz",
      "integrity": "sha512-ICP2e+jsHvAj2E2lIHxa5tjXRlKDJo4IdvPvCXbXQGdzSfmSpNVyIKMvoZHjDY9DP0zV17iI85o90vRFXNccRw==",
      "dev": true,
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "dev": true
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    }
  }
}
{
  "name": "vue-project",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "run-p type-check build-only",
    "preview": "vite preview",
    "build-only": "vite build",
    "type-check": "vue-tsc --noEmit -p tsconfig.app.json --composite false",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
    "format": "prettier --write src/"
  },
  "dependencies": {
    "axios": "^1.4.0",
    "vue": "^3.3.4",
    "vue-router": "^4.2.2"
  },
  "devDependencies": {
    "@rushstack/eslint-patch": "^1.2.0",
    "@tsconfig/node18": "^2.0.1",
    "@types/node": "^18.16.17",
    "@vitejs/plugin-vue": "^4.2.3",
    "@vue/eslint-config-prettier": "^7.1.0",
    "@vue/eslint-config-typescript": "^11.0.3",
    "@vue/tsconfig": "^0.4.0",
    "eslint": "^8.39.0",
    "eslint-plugin-vue": "^9.11.0",
    "npm-run-all": "^4.1.5",
    "prettier": "^2.8.8",
    "typescript": "~5.0.4",
    "unocss": "^0.53.3",
    "vite": "^4.3.9",
    "vue-tsc": "^1.6.5"
  }
}
# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue"],
  "exclude": ["src/**/__tests__/*"],
  "compilerOptions": {
    "composite": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.node.json"
    },
    {
      "path": "./tsconfig.app.json"
    }
  ]
}
{
  "extends": "@tsconfig/node18/tsconfig.json",
  "include": [
    "vite.config.*",
    "vitest.config.*",
    "cypress.config.*",
    "nightwatch.conf.*",
    "playwright.config.*"
  ],
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "types": ["node"]
  }
}
// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
.DS_Store
dist
dist-ssr
coverage
*.local

/cypress/videos/
/cypress/screenshots/

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "semi": false,
  "tabWidth": 2,
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "none"
}/// <reference types="vite/client" />
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
{
  "name": "vue-project",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "vue-project",
      "version": "0.0.0",
      "dependencies": {
        "axios": "^1.4.0",
        "vue": "^3.3.4",
        "vue-router": "^4.2.2"
      },
      "devDependencies": {
        "@rushstack/eslint-patch": "^1.2.0",
        "@tsconfig/node18": "^2.0.1",
        "@types/node": "^18.16.17",
        "@vitejs/plugin-vue": "^4.2.3",
        "@vue/eslint-config-prettier": "^7.1.0",
        "@vue/eslint-config-typescript": "^11.0.3",
        "@vue/tsconfig": "^0.4.0",
        "eslint": "^8.39.0",
        "eslint-plugin-vue": "^9.11.0",
        "npm-run-all": "^4.1.5",
        "prettier": "^2.8.8",
        "typescript": "~5.0.4",
        "unocss": "^0.53.3",
        "vite": "^4.3.9",
        "vue-tsc": "^1.6.5"
      }
    },
    "node_modules/@ampproject/remapping": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.2.1.tgz",
      "integrity": "sha512-lFMjJTrFL3j7L9yBxwYfCq2k6qqwHyzuUl/XBnif78PWTJYyL/dfowQHWE3sp6U6ZzqWiiIZnpTMO96zhkjwtg==",
      "dev": true,
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.0",
        "@jridgewell/trace-mapping": "^0.3.9"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@antfu/install-pkg": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/@antfu/install-pkg/-/install-pkg-0.1.1.tgz",
      "integrity": "sha512-LyB/8+bSfa0DFGC06zpCEfs89/XoWZwws5ygEa5D+Xsm3OfI+aXQ86VgVG7Acyef+rSZ5HE7J8rrxzrQeM3PjQ==",
      "dev": true,
      "dependencies": {
        "execa": "^5.1.1",
        "find-up": "^5.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@antfu/utils": {
      "version": "0.7.4",
      "resolved": "https://registry.npmjs.org/@antfu/utils/-/utils-0.7.4.tgz",
      "integrity": "sha512-qe8Nmh9rYI/HIspLSTwtbMFPj6dISG6+dJnOguTlPNXtCvS2uezdxscVBb7/3DrmNbQK49TDqpkSQ1chbRGdpQ==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.22.5",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.22.5.tgz",
      "integrity": "sha512-DFZMC9LJUG9PLOclRC32G63UXwzqS2koQC8dkx+PLdmt1xSePYpbT/NbsrJy8Q/muXz7o/h/d4A7Fuyixm559Q==",
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.17.19.tgz",
      "integrity": "sha512-rIKddzqhmav7MSmoFCmDIb6e2W57geRsM94gV2l38fzhXMwq7hZoClug9USI2pFRGL06f4IOPHHpFNOkWieR8A==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.17.19.tgz",
      "integrity": "sha512-KBMWvEZooR7+kzY0BtbTQn0OAYY7CsiydT63pVEaPtVYF0hXbUaOyZog37DKxK7NF3XacBJOpYT4adIJh+avxA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.17.19.tgz",
      "integrity": "sha512-uUTTc4xGNDT7YSArp/zbtmbhO0uEEK9/ETW29Wk1thYUJBz3IVnvgEiEwEa9IeLyvnpKrWK64Utw2bgUmDveww==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.17.19.tgz",
      "integrity": "sha512-80wEoCfF/hFKM6WE1FyBHc9SfUblloAWx6FJkFWTWiCoht9Mc0ARGEM47e67W9rI09YoUxJL68WHfDRYEAvOhg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.17.19.tgz",
      "integrity": "sha512-IJM4JJsLhRYr9xdtLytPLSH9k/oxR3boaUIYiHkAawtwNOXKE8KoU8tMvryogdcT8AU+Bflmh81Xn6Q0vTZbQw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.17.19.tgz",
      "integrity": "sha512-pBwbc7DufluUeGdjSU5Si+P3SoMF5DQ/F/UmTSb8HXO80ZEAJmrykPyzo1IfNbAoaqw48YRpv8shwd1NoI0jcQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.17.19.tgz",
      "integrity": "sha512-4lu+n8Wk0XlajEhbEffdy2xy53dpR06SlzvhGByyg36qJw6Kpfk7cp45DR/62aPH9mtJRmIyrXAS5UWBrJT6TQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.17.19.tgz",
      "integrity": "sha512-cdmT3KxjlOQ/gZ2cjfrQOtmhG4HJs6hhvm3mWSRDPtZ/lP5oe8FWceS10JaSJC13GBd4eH/haHnqf7hhGNLerA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.17.19.tgz",
      "integrity": "sha512-ct1Tg3WGwd3P+oZYqic+YZF4snNl2bsnMKRkb3ozHmnM0dGWuxcPTTntAF6bOP0Sp4x0PjSF+4uHQ1xvxfRKqg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.17.19.tgz",
      "integrity": "sha512-w4IRhSy1VbsNxHRQpeGCHEmibqdTUx61Vc38APcsRbuVgK0OPEnQ0YD39Brymn96mOx48Y2laBQGqgZ0j9w6SQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.17.19.tgz",
      "integrity": "sha512-2iAngUbBPMq439a+z//gE+9WBldoMp1s5GWsUSgqHLzLJ9WoZLZhpwWuym0u0u/4XmZ3gpHmzV84PonE+9IIdQ==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.17.19.tgz",
      "integrity": "sha512-LKJltc4LVdMKHsrFe4MGNPp0hqDFA1Wpt3jE1gEyM3nKUvOiO//9PheZZHfYRfYl6AwdTH4aTcXSqBerX0ml4A==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.17.19.tgz",
      "integrity": "sha512-/c/DGybs95WXNS8y3Ti/ytqETiW7EU44MEKuCAcpPto3YjQbyK3IQVKfF6nbghD7EcLUGl0NbiL5Rt5DMhn5tg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.17.19.tgz",
      "integrity": "sha512-FC3nUAWhvFoutlhAkgHf8f5HwFWUL6bYdvLc/TTuxKlvLi3+pPzdZiFKSWz/PF30TB1K19SuCxDTI5KcqASJqA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.17.19.tgz",
      "integrity": "sha512-IbFsFbxMWLuKEbH+7sTkKzL6NJmG2vRyy6K7JJo55w+8xDk7RElYn6xvXtDW8HCfoKBFK69f3pgBJSUSQPr+4Q==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.17.19.tgz",
      "integrity": "sha512-68ngA9lg2H6zkZcyp22tsVt38mlhWde8l3eJLWkyLrp4HwMUr3c1s/M2t7+kHIhvMjglIBrFpncX1SzMckomGw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.17.19.tgz",
      "integrity": "sha512-CwFq42rXCR8TYIjIfpXCbRX0rp1jo6cPIUPSaWwzbVI4aOfX96OXY8M6KNmtPcg7QjYeDmN+DD0Wp3LaBOLf4Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.17.19.tgz",
      "integrity": "sha512-cnq5brJYrSZ2CF6c35eCmviIN3k3RczmHz8eYaVlNasVqsNY+JKohZU5MKmaOI+KkllCdzOKKdPs762VCPC20g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.17.19.tgz",
      "integrity": "sha512-vCRT7yP3zX+bKWFeP/zdS6SqdWB8OIpaRq/mbXQxTGHnIxspRtigpkUcDMlSCOejlHowLqII7K2JKevwyRP2rg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.17.19.tgz",
      "integrity": "sha512-yYx+8jwowUstVdorcMdNlzklLYhPxjniHWFKgRqH7IFlUEa0Umu3KuYplf1HUZZ422e3NU9F4LGb+4O0Kdcaag==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.17.19.tgz",
      "integrity": "sha512-eggDKanJszUtCdlVs0RB+h35wNlb5v4TWEkq4vZcmVt5u/HiDZrTXe2bWFQUez3RgNHwx/x4sk5++4NSSicKkw==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.17.19.tgz",
      "integrity": "sha512-lAhycmKnVOuRYNtRtatQR1LPQf2oYCkRGkSFnseDAKPl8lu5SOsK/e1sXe5a0Pc5kHIHe6P2I/ilntNv2xf3cA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.4.0.tgz",
      "integrity": "sha512-1/sA4dwrzBAyeUoQ6oxahHKmrZvsnLCg4RfxW3ZFGGmQkSNQPFNLV9CUEFQP1x9EYXHTo5p6xdhZM1Ne9p/AfA==",
      "dev": true,
      "dependencies": {
        "eslint-visitor-keys": "^3.3.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.5.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.5.1.tgz",
      "integrity": "sha512-Z5ba73P98O1KUYCCJTUeVpja9RcGoMdncZ6T49FCUl2lN38JtCJ+3WgIDBv0AuY4WChU5PmtJmOCTlN6FZTFKQ==",
      "dev": true,
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-2.0.3.tgz",
      "integrity": "sha512-+5gy6OQfk+xx3q0d6jGZZC3f3KzAkXc/IanVxd1is/VIIziRqqt3ongQz0FiTUXqTk0c7aDB3OaFuKnuSoJicQ==",
      "dev": true,
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^9.5.2",
        "globals": "^13.19.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.0",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/js": {
      "version": "8.43.0",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-8.43.0.tgz",
      "integrity": "sha512-s2UHCoiXfxMvmfzqoN+vrQ84ahUSYde9qNO1MdxmoEhyHWsfmwOpFlwYV+ePJEVc7gFnATGUi376WowX1N7tFg==",
      "dev": true,
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      }
    },
    "node_modules/@humanwhocodes/config-array": {
      "version": "0.11.10",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.11.10.tgz",
      "integrity": "sha512-KVVjQmNUepDVGXNuoRRdmmEjruj0KfiGSbS8LVc12LMsWDQzRXJ0qdhN8L8uUigKpfEHRhlaQFY0ib1tnUbNeQ==",
      "dev": true,
      "dependencies": {
        "@humanwhocodes/object-schema": "^1.2.1",
        "debug": "^4.1.1",
        "minimatch": "^3.0.5"
      },
      "engines": {
        "node": ">=10.10.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/object-schema": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-1.2.1.tgz",
      "integrity": "sha512-ZnQMnLV4e7hDlUvw8H+U8ASL02SS2Gn6+9Ac3wGGLIe7+je2AeAOxPY+izIPJDfFDb7eDjev0Us8MO1iFRN8hA==",
      "dev": true
    },
    "node_modules/@iconify/types": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/@iconify/types/-/types-2.0.0.tgz",
      "integrity": "sha512-+wluvCrRhXrhyOmRDJ3q8mux9JkKy5SJ/v8ol2tu4FVjyYvtEzkc/3pK15ET6RKg4b4w4BmTk1+gsCUhf21Ykg==",
      "dev": true
    },
    "node_modules/@iconify/utils": {
      "version": "2.1.7",
      "resolved": "https://registry.npmjs.org/@iconify/utils/-/utils-2.1.7.tgz",
      "integrity": "sha512-P8S3z/L1LcV4Qem9AoCfVAaTFGySEMzFEY4CHZLkfRj0Fv9LiR+AwjDgrDrzyI93U2L2mg9JHsbTJ52mF8suNw==",
      "dev": true,
      "dependencies": {
        "@antfu/install-pkg": "^0.1.1",
        "@antfu/utils": "^0.7.4",
        "@iconify/types": "^2.0.0",
        "debug": "^4.3.4",
        "kolorist": "^1.8.0",
        "local-pkg": "^0.4.3"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.3",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.3.tgz",
      "integrity": "sha512-HLhSWOLRi875zjjMG/r+Nv0oCW8umGb0BgEhyX3dDX3egwZtB8PqLnjz3yedt8R5StBrzcg4aBpnh8UA9D1BoQ==",
      "dev": true,
      "dependencies": {
        "@jridgewell/set-array": "^1.0.1",
        "@jridgewell/sourcemap-codec": "^1.4.10",
        "@jridgewell/trace-mapping": "^0.3.9"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.0.tgz",
      "integrity": "sha512-F2msla3tad+Mfht5cJq7LSXcdudKTWCVYUgw6pLFOOHSTtZlj6SWNYAp+AhuqLmWdBO2X5hPrLcu8cVP8fy28w==",
      "dev": true,
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/set-array": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.1.2.tgz",
      "integrity": "sha512-xnkseuNADM0gt2bs+BvhO0p78Mk762YnZdsuzFV018NoG1Sj1SCQvpSqa7XUaTam5vAGasABV9qXASMKnFMwMw==",
      "dev": true,
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.4.15",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.4.15.tgz",
      "integrity": "sha512-eF2rxCRulEKXHTRiDrDy6erMYWqNw4LPdQ8UQA4huuxaQsVeRPFl2oM8oDGxMFhJUWZf9McpLtJasDDZb/Bpeg=="
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.18",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.18.tgz",
      "integrity": "sha512-w+niJYzMHdd7USdiH2U6869nqhD2nbfZXND5Yp93qIbEmnDNk7PD48o+YchRVpzMU7M6jVCbenTR7PA1FLQ9pA==",
      "dev": true,
      "dependencies": {
        "@jridgewell/resolve-uri": "3.1.0",
        "@jridgewell/sourcemap-codec": "1.4.14"
      }
    },
    "node_modules/@jridgewell/trace-mapping/node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.4.14",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.4.14.tgz",
      "integrity": "sha512-XPSJHWmi394fuUuzDnGz1wiKqWfo1yXecHQMRf2l6hztTO+nPru658AyDngaBe7isIxEkRsPR3FZh+s7iVa4Uw==",
      "dev": true
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@polka/url": {
      "version": "1.0.0-next.21",
      "resolved": "https://registry.npmjs.org/@polka/url/-/url-1.0.0-next.21.tgz",
      "integrity": "sha512-a5Sab1C4/icpTZVzZc5Ghpz88yQtGOyNqYXcZgOssB2uuAr+wF/MvN6bgtW32q7HHrvBki+BsZ0OuNv6EV3K9g==",
      "dev": true
    },
    "node_modules/@rollup/pluginutils": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/@rollup/pluginutils/-/pluginutils-5.0.2.tgz",
      "integrity": "sha512-pTd9rIsP92h+B6wWwFbW8RkZv4hiR/xKsqre4SIuAOaOEQRxi0lqLke9k2/7WegC85GgUs9pjmOjCUi3In4vwA==",
      "dev": true,
      "dependencies": {
        "@types/estree": "^1.0.0",
        "estree-walker": "^2.0.2",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "rollup": "^1.20.0||^2.0.0||^3.0.0"
      },
      "peerDependenciesMeta": {
        "rollup": {
          "optional": true
        }
      }
    },
    "node_modules/@rushstack/eslint-patch": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/@rushstack/eslint-patch/-/eslint-patch-1.3.2.tgz",
      "integrity": "sha512-V+MvGwaHH03hYhY+k6Ef/xKd6RYlc4q8WBx+2ANmipHJcKuktNcI/NgEsJgdSUF6Lw32njT6OnrRsKYCdgHjYw==",
      "dev": true
    },
    "node_modules/@tsconfig/node18": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/@tsconfig/node18/-/node18-2.0.1.tgz",
      "integrity": "sha512-UqdfvuJK0SArA2CxhKWwwAWfnVSXiYe63bVpMutc27vpngCntGUZQETO24pEJ46zU6XM+7SpqYoMgcO3bM11Ew==",
      "dev": true
    },
    "node_modules/@types/estree": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.1.tgz",
      "integrity": "sha512-LG4opVs2ANWZ1TJoKc937iMmNstM/d0ae1vNbnBvBhqCSezgVUOzcLCqbI5elV8Vy6WKwKjaqR+zO9VKirBBCA==",
      "dev": true
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.12",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.12.tgz",
      "integrity": "sha512-Hr5Jfhc9eYOQNPYO5WLDq/n4jqijdHNlDXjuAQkkt+mWdQR+XJToOHrsD4cPaMXpn6KO7y2+wM8AZEs8VpBLVA==",
      "dev": true
    },
    "node_modules/@types/node": {
      "version": "18.16.18",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-18.16.18.tgz",
      "integrity": "sha512-/aNaQZD0+iSBAGnvvN2Cx92HqE5sZCPZtx2TsK+4nvV23fFe09jVDvpArXr2j9DnYlzuU9WuoykDDc6wqvpNcw==",
      "dev": true
    },
    "node_modules/@types/semver": {
      "version": "7.5.0",
      "resolved": "https://registry.npmjs.org/@types/semver/-/semver-7.5.0.tgz",
      "integrity": "sha512-G8hZ6XJiHnuhQKR7ZmysCeJWE08o8T0AXtk5darsCaTVsYZhhgUrq53jizaR2FvsoeCwJhlmwTjkXBY5Pn/ZHw==",
      "dev": true
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "5.60.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-5.60.0.tgz",
      "integrity": "sha512-78B+anHLF1TI8Jn/cD0Q00TBYdMgjdOn980JfAVa9yw5sop8nyTfVOQAv6LWywkOGLclDBtv5z3oxN4w7jxyNg==",
      "dev": true,
      "dependencies": {
        "@eslint-community/regexpp": "^4.4.0",
        "@typescript-eslint/scope-manager": "5.60.0",
        "@typescript-eslint/type-utils": "5.60.0",
        "@typescript-eslint/utils": "5.60.0",
        "debug": "^4.3.4",
        "grapheme-splitter": "^1.0.4",
        "ignore": "^5.2.0",
        "natural-compare-lite": "^1.4.0",
        "semver": "^7.3.7",
        "tsutils": "^3.21.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^5.0.0",
        "eslint": "^6.0.0 || ^7.0.0 || ^8.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "5.60.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-5.60.0.tgz",
      "integrity": "sha512-jBONcBsDJ9UoTWrARkRRCgDz6wUggmH5RpQVlt7BimSwaTkTjwypGzKORXbR4/2Hqjk9hgwlon2rVQAjWNpkyQ==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/scope-manager": "5.60.0",
        "@typescript-eslint/types": "5.60.0",
        "@typescript-eslint/typescript-estree": "5.60.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || ^8.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "5.60.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-5.60.0.tgz",
      "integrity": "sha512-hakuzcxPwXi2ihf9WQu1BbRj1e/Pd8ZZwVTG9kfbxAMZstKz8/9OoexIwnmLzShtsdap5U/CoQGRCWlSuPbYxQ==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "5.60.0",
        "@typescript-eslint/visitor-keys": "5.60.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "5.60.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-5.60.0.tgz",
      "integrity": "sha512-X7NsRQddORMYRFH7FWo6sA9Y/zbJ8s1x1RIAtnlj6YprbToTiQnM6vxcMu7iYhdunmoC0rUWlca13D5DVHkK2g==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/typescript-estree": "5.60.0",
        "@typescript-eslint/utils": "5.60.0",
        "debug": "^4.3.4",
        "tsutils": "^3.21.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "*"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "5.60.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-5.60.0.tgz",
      "integrity": "sha512-ascOuoCpNZBccFVNJRSC6rPq4EmJ2NkuoKnd6LDNyAQmdDnziAtxbCGWCbefG1CNzmDvd05zO36AmB7H8RzKPA==",
      "dev": true,
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "5.60.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-5.60.0.tgz",
      "integrity": "sha512-R43thAuwarC99SnvrBmh26tc7F6sPa2B3evkXp/8q954kYL6Ro56AwASYWtEEi+4j09GbiNAHqYwNNZuNlARGQ==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "5.60.0",
        "@typescript-eslint/visitor-keys": "5.60.0",
        "debug": "^4.3.4",
        "globby": "^11.1.0",
        "is-glob": "^4.0.3",
        "semver": "^7.3.7",
        "tsutils": "^3.21.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "5.60.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-5.60.0.tgz",
      "integrity": "sha512-ba51uMqDtfLQ5+xHtwlO84vkdjrqNzOnqrnwbMHMRY8Tqeme8C2Q8Fc7LajfGR+e3/4LoYiWXUM6BpIIbHJ4hQ==",
      "dev": true,
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.2.0",
        "@types/json-schema": "^7.0.9",
        "@types/semver": "^7.3.12",
        "@typescript-eslint/scope-manager": "5.60.0",
        "@typescript-eslint/types": "5.60.0",
        "@typescript-eslint/typescript-estree": "5.60.0",
        "eslint-scope": "^5.1.1",
        "semver": "^7.3.7"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "5.60.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-5.60.0.tgz",
      "integrity": "sha512-wm9Uz71SbCyhUKgcaPRauBdTegUyY/ZWl8gLwD/i/ybJqscrrdVSFImpvUz16BLPChIeKBK5Fa9s6KDQjsjyWw==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/types": "5.60.0",
        "eslint-visitor-keys": "^3.3.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@unocss/astro": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/astro/-/astro-0.53.3.tgz",
      "integrity": "sha512-25OuQOnfgbWVlIOFvWzx/xJbIn0+HhDZMeFDrNyGjT3v73zr4/6oOltru+Vv4sBzkUCgG89im6kNGJ679EzMCA==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3",
        "@unocss/reset": "0.53.3",
        "@unocss/vite": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/cli": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/cli/-/cli-0.53.3.tgz",
      "integrity": "sha512-pM+vp48f58xEuBHaW3Nwp/Pq4qWHgmlUzd4qM8LNqyKkPRMkt6NrzlJ1iy8Oy3AKa0dnG0csMg+LXXhHEUDlaA==",
      "dev": true,
      "dependencies": {
        "@ampproject/remapping": "^2.2.1",
        "@rollup/pluginutils": "^5.0.2",
        "@unocss/config": "0.53.3",
        "@unocss/core": "0.53.3",
        "@unocss/preset-uno": "0.53.3",
        "cac": "^6.7.14",
        "chokidar": "^3.5.3",
        "colorette": "^2.0.20",
        "consola": "^3.1.0",
        "fast-glob": "^3.2.12",
        "magic-string": "^0.30.0",
        "pathe": "^1.1.1",
        "perfect-debounce": "^1.0.0"
      },
      "bin": {
        "unocss": "bin/unocss.mjs"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/config": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/config/-/config-0.53.3.tgz",
      "integrity": "sha512-72sP17B09ZT/PBJMeFGN1U5y0VhC9sBHTcIQ3GgsRxRnmCRZyzyyRyp9jwBkLRCqWfaKyWgELz1opnWGBhegFw==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3",
        "unconfig": "^0.3.9"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/core": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/core/-/core-0.53.3.tgz",
      "integrity": "sha512-28xxgZZBaGeDUULoNrpmSP4ZtNn41b2NlBnOe2ta+TnA4F0R5v8bW0w8CxHoYGiHS8mbCq4Aw1ReNlqVhfar8Q==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/extractor-arbitrary-variants": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/extractor-arbitrary-variants/-/extractor-arbitrary-variants-0.53.3.tgz",
      "integrity": "sha512-EyCwebLU4WDDNlrN3BbN9mjCszyRAwn0kP2YVOsCcj6IJD0Y3AjzWPoToTPP6jSN4nRk0iZd/8TrN2sqUHrn4w==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/inspector": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/inspector/-/inspector-0.53.3.tgz",
      "integrity": "sha512-EPWBOA5nsI92EjRkPdulNu0DLEURWTRVl7IkAPpgwzSU/ahr1cNuByySpyw+wof1dtyxLxlJEj/Mvz5ExVOltg==",
      "dev": true,
      "dependencies": {
        "gzip-size": "^6.0.0",
        "sirv": "^2.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/postcss": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/postcss/-/postcss-0.53.3.tgz",
      "integrity": "sha512-+uOK8bIzfziY3a7GXB2xI7pFx/aW+F/pigpq+LS0IkF+ZDKGD5mf9Jmo2zrcQ2wujw8ayDRFG66ByaIItjIpWw==",
      "dev": true,
      "dependencies": {
        "@unocss/config": "0.53.3",
        "@unocss/core": "0.53.3",
        "css-tree": "^2.3.1",
        "fast-glob": "^3.2.12",
        "magic-string": "^0.30.0",
        "postcss": "^8.4.24"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      },
      "peerDependencies": {
        "postcss": "^8.4.21"
      }
    },
    "node_modules/@unocss/preset-attributify": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/preset-attributify/-/preset-attributify-0.53.3.tgz",
      "integrity": "sha512-JWDJVldpmdybKzqJtS1UTKqF0nkYjtJKf0ptt3TclHfRYe6khinfvmy5lN1yTob0qolR/kO8S8DApDmB+qXMLg==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/preset-icons": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/preset-icons/-/preset-icons-0.53.3.tgz",
      "integrity": "sha512-V+XIE9qFqZmEa9wrI16nR6OG7zwo6HEj7M6OewQNG1tzije6RVCg5QbU9Mhxgr1vC5qhyY+DaSAYQJKIWh7OQw==",
      "dev": true,
      "dependencies": {
        "@iconify/utils": "^2.1.7",
        "@unocss/core": "0.53.3",
        "ofetch": "^1.1.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/preset-mini": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/preset-mini/-/preset-mini-0.53.3.tgz",
      "integrity": "sha512-Sr61c/UPCD4OjWSXE+30FxXJHMdzh/Zc8Ow6RzlT+fqUBYyNw3WpXwRW3Goxnxl98FvK2vb+cZGTxVRlezO8Pw==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3",
        "@unocss/extractor-arbitrary-variants": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/preset-tagify": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/preset-tagify/-/preset-tagify-0.53.3.tgz",
      "integrity": "sha512-sIbbMp1ZITJ6Tp7RITDQ6vxOZkx61rNwVSPhTh1HXS8V50GSUBBQe9Fv/kDWYuGjmL1Y5Gq2/VkCB8Zp68co/g==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/preset-typography": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/preset-typography/-/preset-typography-0.53.3.tgz",
      "integrity": "sha512-XSv3+nIttJHIuZzpki5mWZx2BGBlUG8j7KQfWJkbCOO+jI3VNwxORFtTEKi5aDMkJM+V63UX8xlF8WRPJcbG1Q==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3",
        "@unocss/preset-mini": "0.53.3"
      }
    },
    "node_modules/@unocss/preset-uno": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/preset-uno/-/preset-uno-0.53.3.tgz",
      "integrity": "sha512-Yh0TOx5cTtqSQMrgxr0ze5kIEaBYs/W6WuX63h+0s18pe4ojG07bh6JKRpndf5scBxJ+oZxulQ6hulu6hOCEZg==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3",
        "@unocss/preset-mini": "0.53.3",
        "@unocss/preset-wind": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/preset-web-fonts": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/preset-web-fonts/-/preset-web-fonts-0.53.3.tgz",
      "integrity": "sha512-P17xcbhx4F+J1HQWrfbslqIibslF/o8iQg+94DYRxaZRg7a+uAKwYIOUCKiPxGXz88r4/QBYhXpsvjoHv4VZ+A==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3",
        "ofetch": "^1.1.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/preset-wind": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/preset-wind/-/preset-wind-0.53.3.tgz",
      "integrity": "sha512-WHy2dEmj41x3RYinkRvxdz6C1B9fAV2Wck7xboFRXu9jJYERFCfajNcQSuCiGZ0zr+Ml94G6e7xYZ2xWCzMlLA==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3",
        "@unocss/preset-mini": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/reset": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/reset/-/reset-0.53.3.tgz",
      "integrity": "sha512-DilchevgPVH7Kiiwg/yU8xV6admL/FeV1rwf5sFBEd4THiQSasQXYiqE0e9RyOAF4bJA4c3ZGE9x0cb8T37Fwg==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/scope": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/scope/-/scope-0.53.3.tgz",
      "integrity": "sha512-i41vTORGTLYmT6HKi6mpv2OLf5ewUvWP2w52ISrRGw8oatl0QQKyLk/vGwt9z06/Xy5QStDYoFt1QRc9tLnzBQ==",
      "dev": true
    },
    "node_modules/@unocss/transformer-attributify-jsx": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/transformer-attributify-jsx/-/transformer-attributify-jsx-0.53.3.tgz",
      "integrity": "sha512-aTFpg9DAAuVSeaEF40SNsnEpK/42MaXdwfdF+xInYCLnqTx0NX/Uh0afZGY/FDgJe9yDEFrkFZ9yCd1W4RjQYQ==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/transformer-attributify-jsx-babel": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/transformer-attributify-jsx-babel/-/transformer-attributify-jsx-babel-0.53.3.tgz",
      "integrity": "sha512-k0G1lMyuZNKQ7MU21uGlq8OPR+gMA17zJv9nNum83umQpNutaIPgrOwcQv/3wItlYgEF7A24u83GOxspWaFauQ==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/transformer-compile-class": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/transformer-compile-class/-/transformer-compile-class-0.53.3.tgz",
      "integrity": "sha512-j/NbGk/BBxSRaMzMYQy0zlojCw8ToPi7IpRMfAYP5oOpswk73vOROVnLXKyALrQUaBlAS5XK4Ui/iY3Bv5C5Xg==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/transformer-directives": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/transformer-directives/-/transformer-directives-0.53.3.tgz",
      "integrity": "sha512-FIPdg8z3OMHEDu9RqbCFcl+84HaELDWKU1ecYTvZQkLzdpugCJfqls4FUg0gPwwzKJbJze2hSqECpWSFk883oA==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3",
        "css-tree": "^2.3.1"
      }
    },
    "node_modules/@unocss/transformer-variant-group": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/transformer-variant-group/-/transformer-variant-group-0.53.3.tgz",
      "integrity": "sha512-0yzV6sVkxwRmhf1wp3F8Vt+dxFaVYZ1wlyUqQVDjlupjvBoMWvARkGQwMaif2h9E/Qb/NTZRs91fbE2g+qBg+A==",
      "dev": true,
      "dependencies": {
        "@unocss/core": "0.53.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/@unocss/vite": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/@unocss/vite/-/vite-0.53.3.tgz",
      "integrity": "sha512-XuSzw142Ex4YEQdoLmCf3/aqF+9qzN5ymqVHVdsrk2GE9jNlg8H7eF6G16xpZS39mJJY+cKdwtzuAKRYvoSd5g==",
      "dev": true,
      "dependencies": {
        "@ampproject/remapping": "^2.2.1",
        "@rollup/pluginutils": "^5.0.2",
        "@unocss/config": "0.53.3",
        "@unocss/core": "0.53.3",
        "@unocss/inspector": "0.53.3",
        "@unocss/scope": "0.53.3",
        "@unocss/transformer-directives": "0.53.3",
        "chokidar": "^3.5.3",
        "fast-glob": "^3.2.12",
        "magic-string": "^0.30.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      },
      "peerDependencies": {
        "vite": "^2.9.0 || ^3.0.0-0 || ^4.0.0"
      }
    },
    "node_modules/@vitejs/plugin-vue": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-vue/-/plugin-vue-4.2.3.tgz",
      "integrity": "sha512-R6JDUfiZbJA9cMiguQ7jxALsgiprjBeHL5ikpXfJCH62pPHtI+JdJ5xWj6Ev73yXSlYl86+blXn1kZHQ7uElxw==",
      "dev": true,
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "peerDependencies": {
        "vite": "^4.0.0",
        "vue": "^3.2.25"
      }
    },
    "node_modules/@volar/language-core": {
      "version": "1.7.8",
      "resolved": "https://registry.npmjs.org/@volar/language-core/-/language-core-1.7.8.tgz",
      "integrity": "sha512-TPklg4c2e/f1xB/MGZEiQc3AWG+dH64ZfBlYjFB8nNaWJt4Z4k+IHBhmaP52APG+5PHFerwiWI9oF002RrRTPA==",
      "dev": true,
      "dependencies": {
        "@volar/source-map": "1.7.8"
      }
    },
    "node_modules/@volar/source-map": {
      "version": "1.7.8",
      "resolved": "https://registry.npmjs.org/@volar/source-map/-/source-map-1.7.8.tgz",
      "integrity": "sha512-g2dtC2kOghvfzMDWeODIo4HO1Ml4hxzPTZyAFDz+YhRF9HjZYJSCaWaVuPZ+z0kY+T2daOHYA10GdrWQ5q0teA==",
      "dev": true,
      "dependencies": {
        "muggle-string": "^0.3.1"
      }
    },
    "node_modules/@volar/typescript": {
      "version": "1.7.8",
      "resolved": "https://registry.npmjs.org/@volar/typescript/-/typescript-1.7.8.tgz",
      "integrity": "sha512-NDcI5ZQcdr8kgxzMQrhSSWIM8Tl0MbMFrkvJPTjfm2rdAQZPFT8zv3LrEW9Fqh0e9z2YbCry7jr4a/GShBqeDA==",
      "dev": true,
      "dependencies": {
        "@volar/language-core": "1.7.8"
      }
    },
    "node_modules/@vue/compiler-core": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/compiler-core/-/compiler-core-3.3.4.tgz",
      "integrity": "sha512-cquyDNvZ6jTbf/+x+AgM2Arrp6G4Dzbb0R64jiG804HRMfRiFXWI6kqUVqZ6ZR0bQhIoQjB4+2bhNtVwndW15g==",
      "dependencies": {
        "@babel/parser": "^7.21.3",
        "@vue/shared": "3.3.4",
        "estree-walker": "^2.0.2",
        "source-map-js": "^1.0.2"
      }
    },
    "node_modules/@vue/compiler-dom": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/compiler-dom/-/compiler-dom-3.3.4.tgz",
      "integrity": "sha512-wyM+OjOVpuUukIq6p5+nwHYtj9cFroz9cwkfmP9O1nzH68BenTTv0u7/ndggT8cIQlnBeOo6sUT/gvHcIkLA5w==",
      "dependencies": {
        "@vue/compiler-core": "3.3.4",
        "@vue/shared": "3.3.4"
      }
    },
    "node_modules/@vue/compiler-sfc": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/compiler-sfc/-/compiler-sfc-3.3.4.tgz",
      "integrity": "sha512-6y/d8uw+5TkCuzBkgLS0v3lSM3hJDntFEiUORM11pQ/hKvkhSKZrXW6i69UyXlJQisJxuUEJKAWEqWbWsLeNKQ==",
      "dependencies": {
        "@babel/parser": "^7.20.15",
        "@vue/compiler-core": "3.3.4",
        "@vue/compiler-dom": "3.3.4",
        "@vue/compiler-ssr": "3.3.4",
        "@vue/reactivity-transform": "3.3.4",
        "@vue/shared": "3.3.4",
        "estree-walker": "^2.0.2",
        "magic-string": "^0.30.0",
        "postcss": "^8.1.10",
        "source-map-js": "^1.0.2"
      }
    },
    "node_modules/@vue/compiler-ssr": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/compiler-ssr/-/compiler-ssr-3.3.4.tgz",
      "integrity": "sha512-m0v6oKpup2nMSehwA6Uuu+j+wEwcy7QmwMkVNVfrV9P2qE5KshC6RwOCq8fjGS/Eak/uNb8AaWekfiXxbBB6gQ==",
      "dependencies": {
        "@vue/compiler-dom": "3.3.4",
        "@vue/shared": "3.3.4"
      }
    },
    "node_modules/@vue/devtools-api": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/@vue/devtools-api/-/devtools-api-6.5.0.tgz",
      "integrity": "sha512-o9KfBeaBmCKl10usN4crU53fYtC1r7jJwdGKjPT24t348rHxgfpZ0xL3Xm/gLUYnc0oTp8LAmrxOeLyu6tbk2Q=="
    },
    "node_modules/@vue/eslint-config-prettier": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/@vue/eslint-config-prettier/-/eslint-config-prettier-7.1.0.tgz",
      "integrity": "sha512-Pv/lVr0bAzSIHLd9iz0KnvAr4GKyCEl+h52bc4e5yWuDVtLgFwycF7nrbWTAQAS+FU6q1geVd07lc6EWfJiWKQ==",
      "dev": true,
      "dependencies": {
        "eslint-config-prettier": "^8.3.0",
        "eslint-plugin-prettier": "^4.0.0"
      },
      "peerDependencies": {
        "eslint": ">= 7.28.0",
        "prettier": ">= 2.0.0"
      }
    },
    "node_modules/@vue/eslint-config-typescript": {
      "version": "11.0.3",
      "resolved": "https://registry.npmjs.org/@vue/eslint-config-typescript/-/eslint-config-typescript-11.0.3.tgz",
      "integrity": "sha512-dkt6W0PX6H/4Xuxg/BlFj5xHvksjpSlVjtkQCpaYJBIEuKj2hOVU7r+TIe+ysCwRYFz/lGqvklntRkCAibsbPw==",
      "dev": true,
      "dependencies": {
        "@typescript-eslint/eslint-plugin": "^5.59.1",
        "@typescript-eslint/parser": "^5.59.1",
        "vue-eslint-parser": "^9.1.1"
      },
      "engines": {
        "node": "^14.17.0 || >=16.0.0"
      },
      "peerDependencies": {
        "eslint": "^6.2.0 || ^7.0.0 || ^8.0.0",
        "eslint-plugin-vue": "^9.0.0",
        "typescript": "*"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@vue/language-core": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/@vue/language-core/-/language-core-1.8.1.tgz",
      "integrity": "sha512-pumv3k4J7P58hVh4YGRM9Qz3HaAr4TlFWM9bnVOkZ/2K9o2CK1lAP2y9Jw+Z0+mNL4F2uWQqnAPzj3seLyfpDA==",
      "dev": true,
      "dependencies": {
        "@volar/language-core": "1.7.8",
        "@volar/source-map": "1.7.8",
        "@vue/compiler-dom": "^3.3.0",
        "@vue/reactivity": "^3.3.0",
        "@vue/shared": "^3.3.0",
        "minimatch": "^9.0.0",
        "muggle-string": "^0.3.1",
        "vue-template-compiler": "^2.7.14"
      },
      "peerDependencies": {
        "typescript": "*"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@vue/language-core/node_modules/brace-expansion": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
      "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
      "dev": true,
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/@vue/language-core/node_modules/minimatch": {
      "version": "9.0.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.2.tgz",
      "integrity": "sha512-PZOT9g5v2ojiTL7r1xF6plNHLtOeTpSlDI007As2NlA2aYBMfVom17yqa6QzhmDP8QOhn7LjHTg7DFCVSSa6yg==",
      "dev": true,
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@vue/reactivity": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/reactivity/-/reactivity-3.3.4.tgz",
      "integrity": "sha512-kLTDLwd0B1jG08NBF3R5rqULtv/f8x3rOFByTDz4J53ttIQEDmALqKqXY0J+XQeN0aV2FBxY8nJDf88yvOPAqQ==",
      "dependencies": {
        "@vue/shared": "3.3.4"
      }
    },
    "node_modules/@vue/reactivity-transform": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/reactivity-transform/-/reactivity-transform-3.3.4.tgz",
      "integrity": "sha512-MXgwjako4nu5WFLAjpBnCj/ieqcjE2aJBINUNQzkZQfzIZA4xn+0fV1tIYBJvvva3N3OvKGofRLvQIwEQPpaXw==",
      "dependencies": {
        "@babel/parser": "^7.20.15",
        "@vue/compiler-core": "3.3.4",
        "@vue/shared": "3.3.4",
        "estree-walker": "^2.0.2",
        "magic-string": "^0.30.0"
      }
    },
    "node_modules/@vue/runtime-core": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/runtime-core/-/runtime-core-3.3.4.tgz",
      "integrity": "sha512-R+bqxMN6pWO7zGI4OMlmvePOdP2c93GsHFM/siJI7O2nxFRzj55pLwkpCedEY+bTMgp5miZ8CxfIZo3S+gFqvA==",
      "dependencies": {
        "@vue/reactivity": "3.3.4",
        "@vue/shared": "3.3.4"
      }
    },
    "node_modules/@vue/runtime-dom": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/runtime-dom/-/runtime-dom-3.3.4.tgz",
      "integrity": "sha512-Aj5bTJ3u5sFsUckRghsNjVTtxZQ1OyMWCr5dZRAPijF/0Vy4xEoRCwLyHXcj4D0UFbJ4lbx3gPTgg06K/GnPnQ==",
      "dependencies": {
        "@vue/runtime-core": "3.3.4",
        "@vue/shared": "3.3.4",
        "csstype": "^3.1.1"
      }
    },
    "node_modules/@vue/server-renderer": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/server-renderer/-/server-renderer-3.3.4.tgz",
      "integrity": "sha512-Q6jDDzR23ViIb67v+vM1Dqntu+HUexQcsWKhhQa4ARVzxOY2HbC7QRW/ggkDBd5BU+uM1sV6XOAP0b216o34JQ==",
      "dependencies": {
        "@vue/compiler-ssr": "3.3.4",
        "@vue/shared": "3.3.4"
      },
      "peerDependencies": {
        "vue": "3.3.4"
      }
    },
    "node_modules/@vue/shared": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/@vue/shared/-/shared-3.3.4.tgz",
      "integrity": "sha512-7OjdcV8vQ74eiz1TZLzZP4JwqM5fA94K6yntPS5Z25r9HDuGNzaGdgvwKYq6S+MxwF0TFRwe50fIR/MYnakdkQ=="
    },
    "node_modules/@vue/tsconfig": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@vue/tsconfig/-/tsconfig-0.4.0.tgz",
      "integrity": "sha512-CPuIReonid9+zOG/CGTT05FXrPYATEqoDGNrEaqS4hwcw5BUNM2FguC0mOwJD4Jr16UpRVl9N0pY3P+srIbqmg==",
      "dev": true
    },
    "node_modules/@vue/typescript": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/@vue/typescript/-/typescript-1.8.1.tgz",
      "integrity": "sha512-nQpo55j/roie8heCfqyXHnyayqD5+p4/0fzfxH4ZuHf7NSBQS791PNv7ztp2CCOjnGAiaiCMdtC9rc6oriyPUg==",
      "dev": true,
      "dependencies": {
        "@volar/typescript": "1.7.8",
        "@vue/language-core": "1.8.1"
      }
    },
    "node_modules/acorn": {
      "version": "8.9.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.9.0.tgz",
      "integrity": "sha512-jaVNAFBHNLXspO543WnNNPZFRtavh3skAkITqD0/2aeMkKZTN+254PyhwxFYrk3vQ1xfY+2wbesJMs/JC8/PwQ==",
      "dev": true,
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true
    },
    "node_modules/array-buffer-byte-length": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/array-buffer-byte-length/-/array-buffer-byte-length-1.0.0.tgz",
      "integrity": "sha512-LPuwb2P+NrQw3XhxGc36+XSvuBPopovXYTR9Ew++Du9Yb/bx5AzBfrIsBoj0EZUifjQU+sHL21sseZ3jerWO/A==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "is-array-buffer": "^3.0.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array-union": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
      "integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q=="
    },
    "node_modules/available-typed-arrays": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/available-typed-arrays/-/available-typed-arrays-1.0.5.tgz",
      "integrity": "sha512-DMD0KiN46eipeziST1LPP/STfDU0sufISXmjSgvVsoU2tqxctQeASejWcfNtxYKqETM1UxQ8sp2OrSBWpHY6sw==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/axios": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/axios/-/axios-1.4.0.tgz",
      "integrity": "sha512-S4XCWMEmzvo64T9GfvQDOXgYRDJ/wsSZc7Jvdgx5u1sd0JwsuPLqb3SYmusag+edF6ziyMensPVqLTSc1PiSEA==",
      "dependencies": {
        "follow-redirects": "^1.15.0",
        "form-data": "^4.0.0",
        "proxy-from-env": "^1.1.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true
    },
    "node_modules/binary-extensions": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",
      "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/boolbase": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
      "integrity": "sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww==",
      "dev": true
    },
    "node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
      "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
      "dev": true,
      "dependencies": {
        "fill-range": "^7.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cac": {
      "version": "6.7.14",
      "resolved": "https://registry.npmjs.org/cac/-/cac-6.7.14.tgz",
      "integrity": "sha512-b6Ilus+c3RrdDk+JhLKUAQfzzgLEPy6wcXqS7f/xe1EETvsDP6GORG7SFuOs6cID5YkqchW/LXZbX5bc8j7ZcQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
      "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/chokidar": {
      "version": "3.5.3",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.3.tgz",
      "integrity": "sha512-Dr3sfKRP6oTcjf2JmUmFJfeVMvXBdegxB0iVQ5eb2V10uFJUCAS8OByZdVAyVb8xXNz3GjjTgj9kLWsZTqE6kw==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://paulmillr.com/funding/"
        }
      ],
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/chokidar/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true
    },
    "node_modules/colorette": {
      "version": "2.0.20",
      "resolved": "https://registry.npmjs.org/colorette/-/colorette-2.0.20.tgz",
      "integrity": "sha512-IfEDxwoWIjkeXL1eXcDiow4UbKjhLdq6/EuSVR9GMN7KVH3r9gQ83e73hsz1Nd1T3ijd5xv1wcWRYO+D6kCI2w==",
      "dev": true
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true
    },
    "node_modules/consola": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/consola/-/consola-3.1.0.tgz",
      "integrity": "sha512-rrrJE6rP0qzl/Srg+C9x/AE5Kxfux7reVm1Wh0wCjuXvih6DqZgqDZe8auTD28fzJ9TF0mHlSDrPpWlujQRo1Q==",
      "dev": true
    },
    "node_modules/cross-spawn": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
      "integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
      "dev": true,
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/css-tree": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-2.3.1.tgz",
      "integrity": "sha512-6Fv1DV/TYw//QF5IzQdqsNDjx/wc8TrMBZsqjL9eW01tWb7R7k/mq+/VXfJCl7SoD5emsJop9cOByJZfs8hYIw==",
      "dev": true,
      "dependencies": {
        "mdn-data": "2.0.30",
        "source-map-js": "^1.0.1"
      },
      "engines": {
        "node": "^10 || ^12.20.0 || ^14.13.0 || >=15.0.0"
      }
    },
    "node_modules/cssesc": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
      "dev": true,
      "bin": {
        "cssesc": "bin/cssesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/csstype": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.1.2.tgz",
      "integrity": "sha512-I7K1Uu0MBPzaFKg4nI5Q7Vs2t+3gWWW648spaF+Rg7pI9ds18Ugn+lvg4SHczUdKlHI5LWBXyqfS8+DufyBsgQ=="
    },
    "node_modules/de-indent": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/de-indent/-/de-indent-1.0.2.tgz",
      "integrity": "sha512-e/1zu3xH5MQryN2zdVaF0OrdNLUbvWxzMbi+iNA6Bky7l1RoP8a2fIbRocyHclXt/arDrrR6lL3TqFD9pMQTsg==",
      "dev": true
    },
    "node_modules/debug": {
      "version": "4.3.4",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
      "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
      "dev": true,
      "dependencies": {
        "ms": "2.1.2"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true
    },
    "node_modules/define-properties": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.2.0.tgz",
      "integrity": "sha512-xvqAVKGfT1+UAvPwKTVw/njhdQ8ZhXK4lI0bCIuCMrp2up9nPnaDftrLtmpTazqd1o+UY4zgzU+avtMbDP+ldA==",
      "dev": true,
      "dependencies": {
        "has-property-descriptors": "^1.0.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/defu": {
      "version": "6.1.2",
      "resolved": "https://registry.npmjs.org/defu/-/defu-6.1.2.tgz",
      "integrity": "sha512-+uO4+qr7msjNNWKYPHqN/3+Dx3NFkmIzayk2L1MyZQlvgZb/J1A0fo410dpKrN2SnqFjt8n4JL8fDJE0wIgjFQ==",
      "dev": true
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/destr": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/destr/-/destr-2.0.0.tgz",
      "integrity": "sha512-FJ9RDpf3GicEBvzI3jxc2XhHzbqD8p4ANw/1kPsFBfTvP1b7Gn/Lg1vO7R9J4IVgoMbyUmFrFGZafJ1hPZpvlg==",
      "dev": true
    },
    "node_modules/dir-glob": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
      "integrity": "sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==",
      "dev": true,
      "dependencies": {
        "path-type": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/doctrine": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
      "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
      "dev": true,
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/duplexer": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/duplexer/-/duplexer-0.1.2.tgz",
      "integrity": "sha512-jtD6YG370ZCIi/9GTaJKQxWTZD045+4R4hTk/x1UyoqadyJ9x9CgSi1RlVDQF8U2sxLLSnFkCaMihqljHIWgMg==",
      "dev": true
    },
    "node_modules/error-ex": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
      "dev": true,
      "dependencies": {
        "is-arrayish": "^0.2.1"
      }
    },
    "node_modules/es-abstract": {
      "version": "1.21.2",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.21.2.tgz",
      "integrity": "sha512-y/B5POM2iBnIxCiernH1G7rC9qQoM77lLIMQLuob0zhp8C56Po81+2Nj0WFKnd0pNReDTnkYryc+zhOzpEIROg==",
      "dev": true,
      "dependencies": {
        "array-buffer-byte-length": "^1.0.0",
        "available-typed-arrays": "^1.0.5",
        "call-bind": "^1.0.2",
        "es-set-tostringtag": "^2.0.1",
        "es-to-primitive": "^1.2.1",
        "function.prototype.name": "^1.1.5",
        "get-intrinsic": "^1.2.0",
        "get-symbol-description": "^1.0.0",
        "globalthis": "^1.0.3",
        "gopd": "^1.0.1",
        "has": "^1.0.3",
        "has-property-descriptors": "^1.0.0",
        "has-proto": "^1.0.1",
        "has-symbols": "^1.0.3",
        "internal-slot": "^1.0.5",
        "is-array-buffer": "^3.0.2",
        "is-callable": "^1.2.7",
        "is-negative-zero": "^2.0.2",
        "is-regex": "^1.1.4",
        "is-shared-array-buffer": "^1.0.2",
        "is-string": "^1.0.7",
        "is-typed-array": "^1.1.10",
        "is-weakref": "^1.0.2",
        "object-inspect": "^1.12.3",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.4",
        "regexp.prototype.flags": "^1.4.3",
        "safe-regex-test": "^1.0.0",
        "string.prototype.trim": "^1.2.7",
        "string.prototype.trimend": "^1.0.6",
        "string.prototype.trimstart": "^1.0.6",
        "typed-array-length": "^1.0.4",
        "unbox-primitive": "^1.0.2",
        "which-typed-array": "^1.1.9"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.0.1.tgz",
      "integrity": "sha512-g3OMbtlwY3QewlqAiMLI47KywjWZoEytKr8pf6iTC8uJq5bIAH52Z9pnQ8pVL6whrCto53JZDuUIsifGeLorTg==",
      "dev": true,
      "dependencies": {
        "get-intrinsic": "^1.1.3",
        "has": "^1.0.3",
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
      "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
      "dev": true,
      "dependencies": {
        "is-callable": "^1.1.4",
        "is-date-object": "^1.0.1",
        "is-symbol": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/esbuild": {
      "version": "0.17.19",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.17.19.tgz",
      "integrity": "sha512-XQ0jAPFkK/u3LcVRcvVHQcTIqD6E2H1fvZMA5dQPSOWb3suUbWbfbRf94pjc0bNzRYLfIrDRQXr7X+LHIm5oHw==",
      "dev": true,
      "hasInstallScript": true,
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=12"
      },
      "optionalDependencies": {
        "@esbuild/android-arm": "0.17.19",
        "@esbuild/android-arm64": "0.17.19",
        "@esbuild/android-x64": "0.17.19",
        "@esbuild/darwin-arm64": "0.17.19",
        "@esbuild/darwin-x64": "0.17.19",
        "@esbuild/freebsd-arm64": "0.17.19",
        "@esbuild/freebsd-x64": "0.17.19",
        "@esbuild/linux-arm": "0.17.19",
        "@esbuild/linux-arm64": "0.17.19",
        "@esbuild/linux-ia32": "0.17.19",
        "@esbuild/linux-loong64": "0.17.19",
        "@esbuild/linux-mips64el": "0.17.19",
        "@esbuild/linux-ppc64": "0.17.19",
        "@esbuild/linux-riscv64": "0.17.19",
        "@esbuild/linux-s390x": "0.17.19",
        "@esbuild/linux-x64": "0.17.19",
        "@esbuild/netbsd-x64": "0.17.19",
        "@esbuild/openbsd-x64": "0.17.19",
        "@esbuild/sunos-x64": "0.17.19",
        "@esbuild/win32-arm64": "0.17.19",
        "@esbuild/win32-ia32": "0.17.19",
        "@esbuild/win32-x64": "0.17.19"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "8.43.0",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-8.43.0.tgz",
      "integrity": "sha512-aaCpf2JqqKesMFGgmRPessmVKjcGXqdlAYLLC3THM8t5nBRZRQ+st5WM/hoJXkdioEXLLbXgclUpM0TXo5HX5Q==",
      "dev": true,
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.2.0",
        "@eslint-community/regexpp": "^4.4.0",
        "@eslint/eslintrc": "^2.0.3",
        "@eslint/js": "8.43.0",
        "@humanwhocodes/config-array": "^0.11.10",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@nodelib/fs.walk": "^1.2.8",
        "ajv": "^6.10.0",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.2",
        "debug": "^4.3.2",
        "doctrine": "^3.0.0",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^7.2.0",
        "eslint-visitor-keys": "^3.4.1",
        "espree": "^9.5.2",
        "esquery": "^1.4.2",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^6.0.1",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "globals": "^13.19.0",
        "graphemer": "^1.4.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.0.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "is-path-inside": "^3.0.3",
        "js-yaml": "^4.1.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.4.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.1",
        "strip-ansi": "^6.0.1",
        "strip-json-comments": "^3.1.0",
        "text-table": "^0.2.0"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-config-prettier": {
      "version": "8.8.0",
      "resolved": "https://registry.npmjs.org/eslint-config-prettier/-/eslint-config-prettier-8.8.0.tgz",
      "integrity": "sha512-wLbQiFre3tdGgpDv67NQKnJuTlcUVYHas3k+DZCc2U2BadthoEY4B7hLPvAxaqdyOGCzuLfii2fqGph10va7oA==",
      "dev": true,
      "bin": {
        "eslint-config-prettier": "bin/cli.js"
      },
      "peerDependencies": {
        "eslint": ">=7.0.0"
      }
    },
    "node_modules/eslint-plugin-prettier": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-prettier/-/eslint-plugin-prettier-4.2.1.tgz",
      "integrity": "sha512-f/0rXLXUt0oFYs8ra4w49wYZBG5GKZpAYsJSm6rnYL5uVDjd+zowwMwVZHnAjf4edNrKpCDYfXDgmRE/Ak7QyQ==",
      "dev": true,
      "dependencies": {
        "prettier-linter-helpers": "^1.0.0"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "eslint": ">=7.28.0",
        "prettier": ">=2.0.0"
      },
      "peerDependenciesMeta": {
        "eslint-config-prettier": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-plugin-vue": {
      "version": "9.15.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-vue/-/eslint-plugin-vue-9.15.1.tgz",
      "integrity": "sha512-CJE/oZOslvmAR9hf8SClTdQ9JLweghT6JCBQNrT2Iel1uVw0W0OLJxzvPd6CxmABKCvLrtyDnqGV37O7KQv6+A==",
      "dev": true,
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.3.0",
        "natural-compare": "^1.4.0",
        "nth-check": "^2.0.1",
        "postcss-selector-parser": "^6.0.9",
        "semver": "^7.3.5",
        "vue-eslint-parser": "^9.3.0",
        "xml-name-validator": "^4.0.0"
      },
      "engines": {
        "node": "^14.17.0 || >=16.0.0"
      },
      "peerDependencies": {
        "eslint": "^6.2.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/eslint-scope": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
      "integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
      "dev": true,
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^4.1.1"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "3.4.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.1.tgz",
      "integrity": "sha512-pZnmmLwYzf+kWaM/Qgrvpen51upAktaaiI01nsJD/Yr3lMOdNtq0cxkrrg16w64VtisN6okbs7Q8AfGqj4c9fA==",
      "dev": true,
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint/node_modules/eslint-scope": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.2.0.tgz",
      "integrity": "sha512-DYj5deGlHBfMt15J7rdtyKNq/Nqlv5KfU4iodrQ019XESsRnwXH9KAE0y3cwtUHDo2ob7CypAnCqefh6vioWRw==",
      "dev": true,
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint/node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/espree": {
      "version": "9.5.2",
      "resolved": "https://registry.npmjs.org/espree/-/espree-9.5.2.tgz",
      "integrity": "sha512-7OASN1Wma5fum5SrNhFMAMJxOUAbhyfQ8dQ//PJaJbNw0URTPWqIghHWt1MmAANKhHZIYOHruW4Kw4ruUWOdGw==",
      "dev": true,
      "dependencies": {
        "acorn": "^8.8.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^3.4.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.5.0.tgz",
      "integrity": "sha512-YQLXUplAwJgCydQ78IMJywZCceoqk1oH01OERdSAJc/7U2AylwjhSCLDEtqwg811idIS/9fIU5GjG73IgjKMVg==",
      "dev": true,
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esquery/node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esrecurse/node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
      "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estree-walker": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-2.0.2.tgz",
      "integrity": "sha512-Rfkk/Mp/DL7JVje3u18FxFujQlTNR2q6QfMSMB7AvCBx91NGj/ba3kCfza0f6dVDbw7YlRf/nDrn7pQrCCyQ/w=="
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/execa": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/execa/-/execa-5.1.1.tgz",
      "integrity": "sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==",
      "dev": true,
      "dependencies": {
        "cross-spawn": "^7.0.3",
        "get-stream": "^6.0.0",
        "human-signals": "^2.1.0",
        "is-stream": "^2.0.0",
        "merge-stream": "^2.0.0",
        "npm-run-path": "^4.0.1",
        "onetime": "^5.1.2",
        "signal-exit": "^3.0.3",
        "strip-final-newline": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/execa?sponsor=1"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true
    },
    "node_modules/fast-diff": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/fast-diff/-/fast-diff-1.3.0.tgz",
      "integrity": "sha512-VxPP4NqbUjj6MaAOafWeUn2cXWLcCtljklUtZf0Ind4XQ+QPtmA0b18zZy0jIQx+ExRVCR/ZQpBmik5lXshNsw==",
      "dev": true
    },
    "node_modules/fast-glob": {
      "version": "3.2.12",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.2.12.tgz",
      "integrity": "sha512-DVj4CQIYYow0BlaelwK1pHl5n5cRSJfM60UA0zK891sVInoPri2Ekj7+e1CT3/3qxXenpI+nBBmQAcJPJgaj4w==",
      "dev": true,
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.4"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true
    },
    "node_modules/fastq": {
      "version": "1.15.0",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.15.0.tgz",
      "integrity": "sha512-wBrocU2LCXXa+lWBt8RoIRD89Fi8OdABODa/kEnyeyjS5aZO5/GNvI5sEINADqP/h8M29UHTHUb53sUu5Ihqdw==",
      "dev": true,
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
      "integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
      "dev": true,
      "dependencies": {
        "flat-cache": "^3.0.4"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
      "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
      "dev": true,
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.0.4.tgz",
      "integrity": "sha512-dm9s5Pw7Jc0GvMYbshN6zchCA9RgQlzzEZX3vylR9IqFfS8XciblUXOKfW6SiuJ0e13eDYZoZV5wdrev7P3Nwg==",
      "dev": true,
      "dependencies": {
        "flatted": "^3.1.0",
        "rimraf": "^3.0.2"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/flatted": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.2.7.tgz",
      "integrity": "sha512-5nqDSxl8nn5BSNxyR3n4I6eDmbolI6WT+QqR547RwxQapgjQBmtktdP+HTBb/a/zLsbzERTONyUB5pefh5TtjQ==",
      "dev": true
    },
    "node_modules/follow-redirects": {
      "version": "1.15.2",
      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.2.tgz",
      "integrity": "sha512-VQLG33o04KaQ8uYi2tVNbdrWp1QWxNNea+nmIB4EVM28v0hmP17z7aG1+wAkNzVq4KeXTq3221ye5qTJP91JwA==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/RubenVerborgh"
        }
      ],
      "engines": {
        "node": ">=4.0"
      },
      "peerDependenciesMeta": {
        "debug": {
          "optional": true
        }
      }
    },
    "node_modules/for-each": {
      "version": "0.3.3",
      "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.3.tgz",
      "integrity": "sha512-jqYfLp7mo9vIyQf8ykW2v7A+2N4QjeCeI5+Dz9XraiO1ign81wjiH7Fb9vSOWvQfNtmSa4H2RoQTrrXivdUZmw==",
      "dev": true,
      "dependencies": {
        "is-callable": "^1.1.3"
      }
    },
    "node_modules/form-data": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.0.tgz",
      "integrity": "sha512-ETEklSGi5t0QMZuiXoA/Q6vcnxcLQP5vdugSpuAyi6SVGi2clPPp+xgEhuMaHC+zGgn31Kd235W35f7Hykkaww==",
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "mime-types": "^2.1.12"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
      "dev": true
    },
    "node_modules/fsevents": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
      "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
      "dev": true,
      "hasInstallScript": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",
      "dev": true
    },
    "node_modules/function.prototype.name": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/function.prototype.name/-/function.prototype.name-1.1.5.tgz",
      "integrity": "sha512-uN7m/BzVKQnCUF/iW8jYea67v++2u7m5UgENbHRtdDVclOUP+FMPlCNdmk0h/ysGyo2tavMJEDqJAkJdRa1vMA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.19.0",
        "functions-have-names": "^1.2.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/functions-have-names": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/functions-have-names/-/functions-have-names-1.2.3.tgz",
      "integrity": "sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.2.1.tgz",
      "integrity": "sha512-2DcsyfABl+gVHEfCOaTrWgyt+tb6MSEGmKq+kI5HwLbIYgjgmMcV8KQ41uaKz1xxUcn9tJtgFbQUEVcEbd0FYw==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-proto": "^1.0.1",
        "has-symbols": "^1.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-stream": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz",
      "integrity": "sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/get-symbol-description": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.0.0.tgz",
      "integrity": "sha512-2EmdH1YvIQiZpltCNgkuiUnyukzxM/R6NDJX31Ke3BG1Nq5b0S2PhX59UKi9vZpPDQVdqn+1IcaAwnzTT5vCjw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "get-intrinsic": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "dev": true,
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "13.20.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-13.20.0.tgz",
      "integrity": "sha512-Qg5QtVkCy/kv3FUSlu4ukeZDVf9ee0iXLAUYX13gbR17bnejFTzr4iS9bY7kwCf1NztRNm1t91fjOiyx4CSwPQ==",
      "dev": true,
      "dependencies": {
        "type-fest": "^0.20.2"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globalthis": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/globalthis/-/globalthis-1.0.3.tgz",
      "integrity": "sha512-sFdI5LyBiNTHjRd7cGPWapiHWMOXKyuBNX/cWJ3NfzrZQVa8GI/8cofCl74AOVqq9W5kNmguTIzJ/1s2gyI9wA==",
      "dev": true,
      "dependencies": {
        "define-properties": "^1.1.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/globby": {
      "version": "11.1.0",
      "resolved": "https://registry.npmjs.org/globby/-/globby-11.1.0.tgz",
      "integrity": "sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==",
      "dev": true,
      "dependencies": {
        "array-union": "^2.1.0",
        "dir-glob": "^3.0.1",
        "fast-glob": "^3.2.9",
        "ignore": "^5.2.0",
        "merge2": "^1.4.1",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/gopd": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.0.1.tgz",
      "integrity": "sha512-d65bNlIadxvpb/A2abVdlqKqV563juRnZ1Wtk6s1sIR8uNsXR70xqIzVqxVf1eTqDunwT2MkczEeaezCKTZhwA==",
      "dev": true,
      "dependencies": {
        "get-intrinsic": "^1.1.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true
    },
    "node_modules/grapheme-splitter": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/grapheme-splitter/-/grapheme-splitter-1.0.4.tgz",
      "integrity": "sha512-bzh50DW9kTPM00T8y4o8vQg89Di9oLJVLW/KaOGIXJWP/iqCN6WKYkbNOF04vFLJhwcpYUh9ydh/+5vpOqV4YQ==",
      "dev": true
    },
    "node_modules/graphemer": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz",
      "integrity": "sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==",
      "dev": true
    },
    "node_modules/gzip-size": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/gzip-size/-/gzip-size-6.0.0.tgz",
      "integrity": "sha512-ax7ZYomf6jqPTQ4+XCpUGyXKHk5WweS+e05MBO4/y3WJ5RkmPXNKvX+bx1behVILVwr6JSQvZAku021CHPXG3Q==",
      "dev": true,
      "dependencies": {
        "duplexer": "^0.1.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/has": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/has-bigints": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.0.2.tgz",
      "integrity": "sha512-tSvCKtBr9lkF0Ex0aQiP9N+OpV4zi2r/Nee5VkRDbaqv35RLYMzbwQfFSZZH0kR+Rd6302UJZ2p/bJCEoR3VoQ==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.0.tgz",
      "integrity": "sha512-62DVLZGoiEBDHQyqG4w9xCuZ7eJEwNmJRWw2VY84Oedb7WFcA27fiEVe8oUQx9hAUJ4ekurquucTGwsyO1XGdQ==",
      "dev": true,
      "dependencies": {
        "get-intrinsic": "^1.1.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/has-proto/-/has-proto-1.0.1.tgz",
      "integrity": "sha512-7qE+iP+O+bgF9clE5+UoBFzE65mlBiVj3tKCrlNQ0Ogwm0BjpT/gK4SlLYDMybDh5I3TCTKnPPa0oMG7JDYrhg==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz",
      "integrity": "sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.0.tgz",
      "integrity": "sha512-kFjcSNhnlGV1kyoGk7OXKSawH5JOb/LzUc5w9B02hOTO0dfFRjbHQKvg1d6cf3HbeUmtU9VbbV3qzZ2Teh97WQ==",
      "dev": true,
      "dependencies": {
        "has-symbols": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/he": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/he/-/he-1.2.0.tgz",
      "integrity": "sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw==",
      "dev": true,
      "bin": {
        "he": "bin/he"
      }
    },
    "node_modules/hosted-git-info": {
      "version": "2.8.9",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
      "integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
      "dev": true
    },
    "node_modules/human-signals": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-2.1.0.tgz",
      "integrity": "sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==",
      "dev": true,
      "engines": {
        "node": ">=10.17.0"
      }
    },
    "node_modules/ignore": {
      "version": "5.2.4",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.2.4.tgz",
      "integrity": "sha512-MAb38BcSbH0eHNBxn7ql2NH/kX33OkB3lZ1BNdh7ENeRChHTYsTvWrMubiIAMNS2llXEEgZ1MUOBtXChP3kaFQ==",
      "dev": true,
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
      "integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
      "dev": true,
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
      "dev": true,
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "dev": true
    },
    "node_modules/internal-slot": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.0.5.tgz",
      "integrity": "sha512-Y+R5hJrzs52QCG2laLn4udYVnxsfny9CpOhNhUvk/SSSVyF6T27FzRbF0sroPidSu3X8oEAkOn2K804mjpt6UQ==",
      "dev": true,
      "dependencies": {
        "get-intrinsic": "^1.2.0",
        "has": "^1.0.3",
        "side-channel": "^1.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/is-array-buffer": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/is-array-buffer/-/is-array-buffer-3.0.2.tgz",
      "integrity": "sha512-y+FyyR/w8vfIRq4eQcM1EYgSTnmHXPqaF+IgzgraytCFq5Xh8lllDVmAZolPJiZttZLeFSINPYMaEJ7/vWUa1w==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "get-intrinsic": "^1.2.0",
        "is-typed-array": "^1.1.10"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==",
      "dev": true
    },
    "node_modules/is-bigint": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.0.4.tgz",
      "integrity": "sha512-zB9CruMamjym81i2JZ3UMn54PKGsQzsJeo6xvN3HJJ4CAsQNB6iRutp2To77OfCNuoxspsIhzaPoO1zyCEhFOg==",
      "dev": true,
      "dependencies": {
        "has-bigints": "^1.0.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-boolean-object": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.1.2.tgz",
      "integrity": "sha512-gDYaKHJmnj4aWxyj6YHyXVpdQawtVLHU5cb+eztPGczf6cjuTdwve5ZIEfgXqH4e57An1D1AKf8CZ3kYrQRqYA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-callable": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.7.tgz",
      "integrity": "sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.12.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.12.1.tgz",
      "integrity": "sha512-Q4ZuBAe2FUsKtyQJoQHlvP8OvBERxO3jEmy1I7hcRXcJBGGHFh/aJBswbXuS9sgrDH2QUO8ilkwNPHvHMd8clg==",
      "dev": true,
      "dependencies": {
        "has": "^1.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.5.tgz",
      "integrity": "sha512-9YQaSxsAiSwcvS33MBk3wTCVnWK+HhF8VZR2jRxehM16QcVOdHqPn4VPHmRK4lSr38n9JriurInLcP90xsYNfQ==",
      "dev": true,
      "dependencies": {
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-negative-zero": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.2.tgz",
      "integrity": "sha512-dqJvarLawXsFbNDeJW7zAz8ItJ9cd28YufuuFzh0G8pNHjJMnY08Dv7sYX2uF5UpQOwieAeOExEYAWWfu7ZZUA==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-number-object": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.0.7.tgz",
      "integrity": "sha512-k1U0IRzLMo7ZlYIfzRu23Oh6MiIFasgpb9X76eqfFZAqwH44UI4KTBvBYIZ1dSL9ZzChTB9ShHfLkR4pdW5krQ==",
      "dev": true,
      "dependencies": {
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-regex": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.4.tgz",
      "integrity": "sha512-kvRdxDsxZjhzUX07ZnLydzS1TU/TJlTUHHY4YLL87e37oUA49DfkLqgy+VjFocowy29cKvcSiu+kIv728jTTVg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-shared-array-buffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.2.tgz",
      "integrity": "sha512-sqN2UDu1/0y6uvXyStCOzyhAjCSlHceFoMKJW8W9EU9cvic/QdsZ0kEU93HEy3IUEFZIiH/3w+AH/UQbPHNdhA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-stream": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz",
      "integrity": "sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==",
      "dev": true,
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-string": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.0.7.tgz",
      "integrity": "sha512-tE2UXzivje6ofPW7l23cjDOMa09gb7xlAqG6jG5ej6uPV32TlWP3NKPigtaGeHNu9fohccRYvIiZMfOOnOYUtg==",
      "dev": true,
      "dependencies": {
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.4.tgz",
      "integrity": "sha512-C/CPBqKWnvdcxqIARxyOh4v1UUEOCHpgDa0WYgpKDFMszcrPcffg5uhwSgPCLD2WWxmq6isisz87tzT01tuGhg==",
      "dev": true,
      "dependencies": {
        "has-symbols": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typed-array": {
      "version": "1.1.10",
      "resolved": "https://registry.npmjs.org/is-typed-array/-/is-typed-array-1.1.10.tgz",
      "integrity": "sha512-PJqgEHiWZvMpaFZ3uTc8kHPM4+4ADTlDniuQL7cU/UDA0Ql7F70yGfHph3cLNe+c9toaigv+DFzTJKhc2CtO6A==",
      "dev": true,
      "dependencies": {
        "available-typed-arrays": "^1.0.5",
        "call-bind": "^1.0.2",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakref": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.0.2.tgz",
      "integrity": "sha512-qctsuLZmIQ0+vSSMfoVvyFe2+GSEvnmZ2ezTup1SBse9+twCCeial6EEi3Nc2KFcf6+qz2FBPnjXsk8xhKSaPQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true
    },
    "node_modules/jiti": {
      "version": "1.18.2",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-1.18.2.tgz",
      "integrity": "sha512-QAdOptna2NYiSSpv0O/BwoHBSmz4YhpzJHyi+fnMRTXFjp7B8i/YG5Z8IfusxB1ufjcD2Sre1F3R+nX3fvy7gg==",
      "dev": true,
      "bin": {
        "jiti": "bin/jiti.js"
      }
    },
    "node_modules/js-yaml": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
      "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
      "dev": true,
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/json-parse-better-errors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
      "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==",
      "dev": true
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true
    },
    "node_modules/kolorist": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/kolorist/-/kolorist-1.8.0.tgz",
      "integrity": "sha512-Y+60/zizpJ3HRH8DCss+q95yr6145JXZo46OTpFvDZWLfRCE4qChOyk1b26nMaNpfHHgxagk9dXT5OP0Tfe+dQ==",
      "dev": true
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/load-json-file": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-4.0.0.tgz",
      "integrity": "sha512-Kx8hMakjX03tiGTLAIdJ+lL0htKnXjEZN6hk/tozf/WOuYGdZBJrZ+rCJRbVCugsjB3jMLn9746NsQIf5VjBMw==",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.1.2",
        "parse-json": "^4.0.0",
        "pify": "^3.0.0",
        "strip-bom": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/local-pkg": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/local-pkg/-/local-pkg-0.4.3.tgz",
      "integrity": "sha512-SFppqq5p42fe2qcZQqqEOiVRXl+WCP1MdT6k7BDEW1j++sp5fIY+/fdRQitvKgB5BrBcmrs5m/L0v2FrU5MY1g==",
      "dev": true,
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==",
      "dev": true
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true
    },
    "node_modules/lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "dev": true,
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.0",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.0.tgz",
      "integrity": "sha512-LA+31JYDJLs82r2ScLrlz1GjSgu66ZV518eyWT+S8VhyQn/JL0u9MeBOvQMGYiPk1DBiSN9DDMOcXvigJZaViQ==",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.4.13"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/mdn-data": {
      "version": "2.0.30",
      "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.30.tgz",
      "integrity": "sha512-GaqWWShW4kv/G9IEucWScBx9G1/vsFZZJUO+tD26M8J8z3Kw5RDQjaoZe03YAClgeS/SWPOcb4nkFBTEi5DUEA==",
      "dev": true
    },
    "node_modules/memorystream": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/memorystream/-/memorystream-0.3.1.tgz",
      "integrity": "sha512-S3UwM3yj5mtUSEfP41UZmt/0SCoVYUcU1rkXv+BQ5Ig8ndL4sPoJNBUJERafdPb5jjHJGuMgytgKvKIf58XNBw==",
      "dev": true,
      "engines": {
        "node": ">= 0.10.0"
      }
    },
    "node_modules/merge-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
      "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
      "dev": true
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.5.tgz",
      "integrity": "sha512-DMy+ERcEW2q8Z2Po+WNXuw3c5YaUSFjAO5GsJqfEl7UjvtIuFKO6ZrKvcItdy98dwFI2N1tg3zNIdKaQT+aNdA==",
      "dev": true,
      "dependencies": {
        "braces": "^3.0.2",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mimic-fn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
      "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/mrmime": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/mrmime/-/mrmime-1.0.1.tgz",
      "integrity": "sha512-hzzEagAgDyoU1Q6yg5uI+AorQgdvMCur3FcKf7NhMKWsaYg+RnbTyHRa/9IlLF9rf455MOCtcqqrQQ83pPP7Uw==",
      "dev": true,
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
      "dev": true
    },
    "node_modules/muggle-string": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/muggle-string/-/muggle-string-0.3.1.tgz",
      "integrity": "sha512-ckmWDJjphvd/FvZawgygcUeQCxzvohjFO5RxTjj4eq8kw359gFF3E1brjfI+viLMxss5JrHTDRHZvu2/tuy0Qg==",
      "dev": true
    },
    "node_modules/nanoid": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.6.tgz",
      "integrity": "sha512-BGcqMMJuToF7i1rt+2PWSNVnWIkGCU78jBG3RxO/bZlnZPK2Cmi2QaffxGO/2RvWi9sL+FAiRiXMgsyxQ1DIDA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true
    },
    "node_modules/natural-compare-lite": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare-lite/-/natural-compare-lite-1.4.0.tgz",
      "integrity": "sha512-Tj+HTDSJJKaZnfiuw+iaF9skdPpTo2GtEly5JHnWV/hfv2Qj/9RKsGISQtLh2ox3l5EAGw487hnBee0sIJ6v2g==",
      "dev": true
    },
    "node_modules/nice-try": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
      "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ==",
      "dev": true
    },
    "node_modules/node-fetch-native": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/node-fetch-native/-/node-fetch-native-1.2.0.tgz",
      "integrity": "sha512-5IAMBTl9p6PaAjYCnMv5FmqIF6GcZnawAVnzaCG0rX2aYZJ4CxEkZNtVPuTRug7fL7wyM5BQYTlAzcyMPi6oTQ==",
      "dev": true
    },
    "node_modules/normalize-package-data": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
      "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
      "dev": true,
      "dependencies": {
        "hosted-git-info": "^2.1.4",
        "resolve": "^1.10.0",
        "semver": "2 || 3 || 4 || 5",
        "validate-npm-package-license": "^3.0.1"
      }
    },
    "node_modules/normalize-package-data/node_modules/semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "dev": true,
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/npm-run-all": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/npm-run-all/-/npm-run-all-4.1.5.tgz",
      "integrity": "sha512-Oo82gJDAVcaMdi3nuoKFavkIHBRVqQ1qvMb+9LHk/cF4P6B2m8aP04hGf7oL6wZ9BuGwX1onlLhpuoofSyoQDQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "chalk": "^2.4.1",
        "cross-spawn": "^6.0.5",
        "memorystream": "^0.3.1",
        "minimatch": "^3.0.4",
        "pidtree": "^0.3.0",
        "read-pkg": "^3.0.0",
        "shell-quote": "^1.6.1",
        "string.prototype.padend": "^3.0.0"
      },
      "bin": {
        "npm-run-all": "bin/npm-run-all/index.js",
        "run-p": "bin/run-p/index.js",
        "run-s": "bin/run-s/index.js"
      },
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/npm-run-all/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npm-run-all/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npm-run-all/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/npm-run-all/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==",
      "dev": true
    },
    "node_modules/npm-run-all/node_modules/cross-spawn": {
      "version": "6.0.5",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
      "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
      "dev": true,
      "dependencies": {
        "nice-try": "^1.0.4",
        "path-key": "^2.0.1",
        "semver": "^5.5.0",
        "shebang-command": "^1.2.0",
        "which": "^1.2.9"
      },
      "engines": {
        "node": ">=4.8"
      }
    },
    "node_modules/npm-run-all/node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",
      "dev": true,
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/npm-run-all/node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npm-run-all/node_modules/path-key": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
      "integrity": "sha512-fEHGKCSmUSDPv4uoj8AlD+joPlq3peND+HRYyxFz4KPw4z926S/b8rIuFs2FYJg3BwsxJf6A9/3eIdLaYC+9Dw==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npm-run-all/node_modules/semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "dev": true,
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/npm-run-all/node_modules/shebang-command": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
      "integrity": "sha512-EV3L1+UQWGor21OmnvojK36mhg+TyIKDh3iFBKBohr5xeXIhNBcx8oWdgkTEEQ+BEFFYdLRuqMfd5L84N1V5Vg==",
      "dev": true,
      "dependencies": {
        "shebang-regex": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/npm-run-all/node_modules/shebang-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
      "integrity": "sha512-wpoSFAxys6b2a2wHZ1XpDSgD7N9iVjg29Ph9uV/uaP9Ex/KXlkTZTeddxDPSYQpgvzKLGJke2UU0AzoGCjNIvQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/npm-run-all/node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npm-run-all/node_modules/which": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
      "dev": true,
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "which": "bin/which"
      }
    },
    "node_modules/npm-run-path": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz",
      "integrity": "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==",
      "dev": true,
      "dependencies": {
        "path-key": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/nth-check": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-2.1.1.tgz",
      "integrity": "sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==",
      "dev": true,
      "dependencies": {
        "boolbase": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/fb55/nth-check?sponsor=1"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.12.3",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.12.3.tgz",
      "integrity": "sha512-geUvdk7c+eizMNUDkRpW1wJwgfOiOeHbxBR/hLXK1aT6zmVSO0jsQcs7fj6MGw89jC/cjGfLcNOrtMYtGqm81g==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.4",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.4.tgz",
      "integrity": "sha512-1mxKf0e58bvyjSCtKYY4sRe9itRk3PJpquJOjeIkz885CczcI4IvJJDLPS72oowuSh+pBxUFROpX+TU++hxhZQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.4",
        "has-symbols": "^1.0.3",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/ofetch": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ofetch/-/ofetch-1.1.1.tgz",
      "integrity": "sha512-SSMoktrp9SNLi20BWfB/BnnKcL0RDigXThD/mZBeQxkIRv1xrd9183MtLdsqRYLYSqW0eTr5t8w8MqjNhvoOQQ==",
      "dev": true,
      "dependencies": {
        "destr": "^2.0.0",
        "node-fetch-native": "^1.2.0",
        "ufo": "^1.1.2"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "dev": true,
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/onetime": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
      "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
      "dev": true,
      "dependencies": {
        "mimic-fn": "^2.1.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.1",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.1.tgz",
      "integrity": "sha512-74RlY5FCnhq4jRxVUPKDaRwrVNXMqsGsiW6AJw4XK8hmtm10wC0ypZBLw5IIp85NZMr91+qd1RvvENwg7jjRFw==",
      "dev": true,
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.3"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/parse-json": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
      "integrity": "sha512-aOIos8bujGN93/8Ox/jPLh7RwVnPEysynVFE+fQZyg6jKELEHwzgKdLRFHUgXJL6kylijVSBC4BvN9OmsB48Rw==",
      "dev": true,
      "dependencies": {
        "error-ex": "^1.3.1",
        "json-parse-better-errors": "^1.0.1"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true
    },
    "node_modules/path-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pathe": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/pathe/-/pathe-1.1.1.tgz",
      "integrity": "sha512-d+RQGp0MAYTIaDBIMmOfMwz3E+LOZnxx1HZd5R18mmCZY0QBlK0LDZfPc8FW8Ed2DlvsuE6PRjroDY+wg4+j/Q==",
      "dev": true
    },
    "node_modules/perfect-debounce": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/perfect-debounce/-/perfect-debounce-1.0.0.tgz",
      "integrity": "sha512-xCy9V055GLEqoFaHoC1SoLIaLmWctgCUaBaWxDZ7/Zx4CTyX7cJQLJOok/orfjZAh9kEYpjJa4d0KcJmCbctZA==",
      "dev": true
    },
    "node_modules/picocolors": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.0.0.tgz",
      "integrity": "sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ=="
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pidtree": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/pidtree/-/pidtree-0.3.1.tgz",
      "integrity": "sha512-qQbW94hLHEqCg7nhby4yRC7G2+jYHY4Rguc2bjw7Uug4GIJuu1tvf2uHaZv5Q8zdt+WKJ6qK1FOI6amaWUo5FA==",
      "dev": true,
      "bin": {
        "pidtree": "bin/pidtree.js"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/pify": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
      "integrity": "sha512-C3FsVNH1udSEX48gGX1xfvwTWfsYWj5U+8/uK15BGzIGrKoUpghX8hWZwa/OFnakBiiVNmBvemTJR5mcy7iPcg==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss": {
      "version": "8.4.24",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.24.tgz",
      "integrity": "sha512-M0RzbcI0sO/XJNucsGjvWU9ERWxb/ytp1w6dKtxTKgixdtQDq4rmx/g8W1hnaheq9jgwL/oyEdH5Bc4WwJKMqg==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "nanoid": "^3.3.6",
        "picocolors": "^1.0.0",
        "source-map-js": "^1.0.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-selector-parser": {
      "version": "6.0.13",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.0.13.tgz",
      "integrity": "sha512-EaV1Gl4mUEV4ddhDnv/xtj7sxwrwxdetHdWUGnT4VJQf+4d05v6lHYZr8N573k5Z0BViss7BDhfWtKS3+sfAqQ==",
      "dev": true,
      "dependencies": {
        "cssesc": "^3.0.0",
        "util-deprecate": "^1.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prettier": {
      "version": "2.8.8",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-2.8.8.tgz",
      "integrity": "sha512-tdN8qQGvNjw4CHbY+XXk0JgCXn9QiF21a55rBe5LJAU+kDyC4WQn4+awm2Xfk2lQMk5fKup9XgzTZtGkjBdP9Q==",
      "dev": true,
      "bin": {
        "prettier": "bin-prettier.js"
      },
      "engines": {
        "node": ">=10.13.0"
      },
      "funding": {
        "url": "https://github.com/prettier/prettier?sponsor=1"
      }
    },
    "node_modules/prettier-linter-helpers": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/prettier-linter-helpers/-/prettier-linter-helpers-1.0.0.tgz",
      "integrity": "sha512-GbK2cP9nraSSUF9N2XwUwqfzlAFlMNYYl+ShE/V+H8a9uNl/oUqB1w2EL54Jh0OlyRSd8RfWYJ3coVS4TROP2w==",
      "dev": true,
      "dependencies": {
        "fast-diff": "^1.1.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/proxy-from-env": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz",
      "integrity": "sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg=="
    },
    "node_modules/punycode": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.0.tgz",
      "integrity": "sha512-rRV+zQD8tVFys26lAGR9WUuS4iUAngJScM+ZRSKtvl5tKeZ2t5bvdNFdNHBW9FWR4guGHlgmsZ1G7BSm2wTbuA==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/read-pkg": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-3.0.0.tgz",
      "integrity": "sha512-BLq/cCO9two+lBgiTYNqD6GdtK8s4NpaWrl6/rCO9w0TUS8oJl7cmToOZfRYllKTISY6nt1U7jQ53brmKqY6BA==",
      "dev": true,
      "dependencies": {
        "load-json-file": "^4.0.0",
        "normalize-package-data": "^2.3.2",
        "path-type": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/read-pkg/node_modules/path-type": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-3.0.0.tgz",
      "integrity": "sha512-T2ZUsdZFHgA3u4e5PfPbjd7HDDpxPnQb5jN0SrDsjNSuVXHJqtwTnWqG0B1jZrgmJ/7lj1EmVIByWt1gxGkWvg==",
      "dev": true,
      "dependencies": {
        "pify": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/regexp.prototype.flags": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.5.0.tgz",
      "integrity": "sha512-0SutC3pNudRKgquxGoRGIz946MZVHqbNfPjBdxeOhBrdgDKlRoXmYLQN9xRbrR09ZXWeGAdPuif7egofn6v5LA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.2.0",
        "functions-have-names": "^1.2.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve": {
      "version": "1.22.2",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.2.tgz",
      "integrity": "sha512-Sb+mjNHOULsBv818T40qSPeRiuWLyaGMa5ewydRLFimneixmVy2zdivRl+AF6jaYPC8ERxGDmFSiqui6SfPd+g==",
      "dev": true,
      "dependencies": {
        "is-core-module": "^2.11.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/reusify": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
      "dev": true,
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "dev": true,
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/rollup": {
      "version": "3.25.2",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-3.25.2.tgz",
      "integrity": "sha512-VLnkxZMDr3jpxgtmS8pQZ0UvhslmF4ADq/9w4erkctbgjCqLW9oa89fJuXEs4ZmgyoF7Dm8rMDKSS5b5u2hHUg==",
      "dev": true,
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=14.18.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-regex-test": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/safe-regex-test/-/safe-regex-test-1.0.0.tgz",
      "integrity": "sha512-JBUUzyOgEwXQY1NuPtvcj/qcBDbDmEvWufhlnXZIm75DEHp+afM1r1ujJpJsV/gSM4t59tpDyPi1sd6ZaPFfsA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "get-intrinsic": "^1.1.3",
        "is-regex": "^1.1.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/semver": {
      "version": "7.5.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.5.3.tgz",
      "integrity": "sha512-QBlUtyVk/5EeHbi7X0fw6liDZc7BBmEaSYn01fMU1OUYbf6GPsbTtd8WmnqbI20SeycoHSeiybkE/q1Q+qlThQ==",
      "dev": true,
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shell-quote": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.8.1.tgz",
      "integrity": "sha512-6j1W9l1iAs/4xYBI1SYOVZyFcCis9b4KCLQ8fgAGG07QvzaRLVVRQvAy85yNmmZSjYjg4MWh4gNvlPujU/5LpA==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",
      "integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.0",
        "get-intrinsic": "^1.0.2",
        "object-inspect": "^1.9.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/signal-exit": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
      "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
      "dev": true
    },
    "node_modules/sirv": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/sirv/-/sirv-2.0.3.tgz",
      "integrity": "sha512-O9jm9BsID1P+0HOi81VpXPoDxYP374pkOLzACAoyUQ/3OUVndNpsz6wMnY2z+yOxzbllCKZrM+9QrWsv4THnyA==",
      "dev": true,
      "dependencies": {
        "@polka/url": "^1.0.0-next.20",
        "mrmime": "^1.0.0",
        "totalist": "^3.0.0"
      },
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/slash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
      "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.0.2.tgz",
      "integrity": "sha512-R0XvVJ9WusLiqTCEiGCmICCMplcCkIwwR11mOSD9CR5u+IXYdiseeEuXCVAjS54zqwkLcPNnmU4OeJ6tUrWhDw==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/spdx-correct": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.2.0.tgz",
      "integrity": "sha512-kN9dJbvnySHULIluDHy32WHRUu3Og7B9sbY7tsFLctQkIqnMh3hErYgdMjTYuqmcXX+lK5T1lnUt3G7zNswmZA==",
      "dev": true,
      "dependencies": {
        "spdx-expression-parse": "^3.0.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "node_modules/spdx-exceptions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.3.0.tgz",
      "integrity": "sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A==",
      "dev": true
    },
    "node_modules/spdx-expression-parse": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",
      "integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",
      "dev": true,
      "dependencies": {
        "spdx-exceptions": "^2.1.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "node_modules/spdx-license-ids": {
      "version": "3.0.13",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.13.tgz",
      "integrity": "sha512-XkD+zwiqXHikFZm4AX/7JSCXA98U5Db4AFd5XUg/+9UNtnH75+Z9KxtpYiJZx36mUDVOwH83pl7yvCer6ewM3w==",
      "dev": true
    },
    "node_modules/string.prototype.padend": {
      "version": "3.1.4",
      "resolved": "https://registry.npmjs.org/string.prototype.padend/-/string.prototype.padend-3.1.4.tgz",
      "integrity": "sha512-67otBXoksdjsnXXRUq+KMVTdlVRZ2af422Y0aTyTjVaoQkGr3mxl2Bc5emi7dOQ3OGVVQQskmLEWwFXwommpNw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.4",
        "es-abstract": "^1.20.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trim": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/string.prototype.trim/-/string.prototype.trim-1.2.7.tgz",
      "integrity": "sha512-p6TmeT1T3411M8Cgg9wBTMRtY2q9+PNy9EV1i2lIXUN/btt763oIfxwN3RR8VU6wHX8j/1CFy0L+YuThm6bgOg==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.4",
        "es-abstract": "^1.20.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.6.tgz",
      "integrity": "sha512-JySq+4mrPf9EsDBEDYMOb/lM7XQLulwg5R/m1r0PXEFqrV0qHvl58sdTilSXtKOflCsK2E8jxf+GKC0T07RWwQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.4",
        "es-abstract": "^1.20.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.6.tgz",
      "integrity": "sha512-omqjMDaY92pbn5HOX7f9IccLA+U1tA9GvtU4JrodiXFfYB7jPzzHpRzpglLAjtUV6bB557zwClJezTqnAiYnQA==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.4",
        "es-abstract": "^1.20.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-final-newline": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz",
      "integrity": "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==",
      "dev": true
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/totalist": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/totalist/-/totalist-3.0.1.tgz",
      "integrity": "sha512-sf4i37nQ2LBx4m3wB74y+ubopq6W/dIzXg0FDGjsYnZHVa1Da8FH853wlL2gtUhg+xJXjfk3kUZS3BRoQeoQBQ==",
      "dev": true,
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/tslib": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
      "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
      "dev": true
    },
    "node_modules/tsutils": {
      "version": "3.21.0",
      "resolved": "https://registry.npmjs.org/tsutils/-/tsutils-3.21.0.tgz",
      "integrity": "sha512-mHKK3iUXL+3UF6xL5k0PEhKRUBKPBCv/+RkEOpjRWxxx27KKRBmmA60A9pgOUvMi8GKhRMPEmjBRPzs2W7O1OA==",
      "dev": true,
      "dependencies": {
        "tslib": "^1.8.1"
      },
      "engines": {
        "node": ">= 6"
      },
      "peerDependencies": {
        "typescript": ">=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta"
      }
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-fest": {
      "version": "0.20.2",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
      "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/typed-array-length": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/typed-array-length/-/typed-array-length-1.0.4.tgz",
      "integrity": "sha512-KjZypGq+I/H7HI5HlOoGHkWUUGq+Q0TPhQurLbyrVrvnKTBgzLhIJ7j6J/XTQOi0d1RjyZ0wdas8bKs2p0x3Ng==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "for-each": "^0.3.3",
        "is-typed-array": "^1.1.9"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typescript": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.0.4.tgz",
      "integrity": "sha512-cW9T5W9xY37cc+jfEnaUvX91foxtHkza3Nw3wkoF4sSlKn0MONdkdEndig/qPBWXNkmplh3NzayQzCiHM4/hqw==",
      "dev": true,
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=12.20"
      }
    },
    "node_modules/ufo": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/ufo/-/ufo-1.1.2.tgz",
      "integrity": "sha512-TrY6DsjTQQgyS3E3dBaOXf0TpPD8u9FVrVYmKVegJuFw51n/YB9XPt+U6ydzFG5ZIN7+DIjPbNmXoBj9esYhgQ==",
      "dev": true
    },
    "node_modules/unbox-primitive": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.0.2.tgz",
      "integrity": "sha512-61pPlCD9h51VoreyJ0BReideM3MDKMKnh6+V9L08331ipq6Q8OFXZYiqP6n/tbHx4s5I9uRhcye6BrbkizkBDw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "has-bigints": "^1.0.2",
        "has-symbols": "^1.0.3",
        "which-boxed-primitive": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/unconfig": {
      "version": "0.3.9",
      "resolved": "https://registry.npmjs.org/unconfig/-/unconfig-0.3.9.tgz",
      "integrity": "sha512-8yhetFd48M641mxrkWA+C/lZU4N0rCOdlo3dFsyFPnBHBjMJfjT/3eAZBRT2RxCRqeBMAKBVgikejdS6yeBjMw==",
      "dev": true,
      "dependencies": {
        "@antfu/utils": "^0.7.2",
        "defu": "^6.1.2",
        "jiti": "^1.18.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      }
    },
    "node_modules/unocss": {
      "version": "0.53.3",
      "resolved": "https://registry.npmjs.org/unocss/-/unocss-0.53.3.tgz",
      "integrity": "sha512-kZx3GFOczE7uS2zUecmvW1kM0MTPdVtQIMcXC5XYoPfr2Ho6G1p75eGAXmaL7jaompSo+WHsK4HrSC756nbfgg==",
      "dev": true,
      "dependencies": {
        "@unocss/astro": "0.53.3",
        "@unocss/cli": "0.53.3",
        "@unocss/core": "0.53.3",
        "@unocss/extractor-arbitrary-variants": "0.53.3",
        "@unocss/postcss": "0.53.3",
        "@unocss/preset-attributify": "0.53.3",
        "@unocss/preset-icons": "0.53.3",
        "@unocss/preset-mini": "0.53.3",
        "@unocss/preset-tagify": "0.53.3",
        "@unocss/preset-typography": "0.53.3",
        "@unocss/preset-uno": "0.53.3",
        "@unocss/preset-web-fonts": "0.53.3",
        "@unocss/preset-wind": "0.53.3",
        "@unocss/reset": "0.53.3",
        "@unocss/transformer-attributify-jsx": "0.53.3",
        "@unocss/transformer-attributify-jsx-babel": "0.53.3",
        "@unocss/transformer-compile-class": "0.53.3",
        "@unocss/transformer-directives": "0.53.3",
        "@unocss/transformer-variant-group": "0.53.3",
        "@unocss/vite": "0.53.3"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antfu"
      },
      "peerDependencies": {
        "@unocss/webpack": "0.53.3"
      },
      "peerDependenciesMeta": {
        "@unocss/webpack": {
          "optional": true
        }
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "dev": true
    },
    "node_modules/validate-npm-package-license": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
      "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
      "dev": true,
      "dependencies": {
        "spdx-correct": "^3.0.0",
        "spdx-expression-parse": "^3.0.0"
      }
    },
    "node_modules/vite": {
      "version": "4.3.9",
      "resolved": "https://registry.npmjs.org/vite/-/vite-4.3.9.tgz",
      "integrity": "sha512-qsTNZjO9NoJNW7KnOrgYwczm0WctJ8m/yqYAMAK9Lxt4SoySUfS5S8ia9K7JHpa3KEeMfyF8LoJ3c5NeBJy6pg==",
      "dev": true,
      "dependencies": {
        "esbuild": "^0.17.5",
        "postcss": "^8.4.23",
        "rollup": "^3.21.0"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      },
      "peerDependencies": {
        "@types/node": ">= 14",
        "less": "*",
        "sass": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.4.0"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        }
      }
    },
    "node_modules/vue": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/vue/-/vue-3.3.4.tgz",
      "integrity": "sha512-VTyEYn3yvIeY1Py0WaYGZsXnz3y5UnGi62GjVEqvEGPl6nxbOrCXbVOTQWBEJUqAyTUk2uJ5JLVnYJ6ZzGbrSw==",
      "dependencies": {
        "@vue/compiler-dom": "3.3.4",
        "@vue/compiler-sfc": "3.3.4",
        "@vue/runtime-dom": "3.3.4",
        "@vue/server-renderer": "3.3.4",
        "@vue/shared": "3.3.4"
      }
    },
    "node_modules/vue-eslint-parser": {
      "version": "9.3.1",
      "resolved": "https://registry.npmjs.org/vue-eslint-parser/-/vue-eslint-parser-9.3.1.tgz",
      "integrity": "sha512-Clr85iD2XFZ3lJ52/ppmUDG/spxQu6+MAeHXjjyI4I1NUYZ9xmenQp4N0oaHJhrA8OOxltCVxMRfANGa70vU0g==",
      "dev": true,
      "dependencies": {
        "debug": "^4.3.4",
        "eslint-scope": "^7.1.1",
        "eslint-visitor-keys": "^3.3.0",
        "espree": "^9.3.1",
        "esquery": "^1.4.0",
        "lodash": "^4.17.21",
        "semver": "^7.3.6"
      },
      "engines": {
        "node": "^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/mysticatea"
      },
      "peerDependencies": {
        "eslint": ">=6.0.0"
      }
    },
    "node_modules/vue-eslint-parser/node_modules/eslint-scope": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.2.0.tgz",
      "integrity": "sha512-DYj5deGlHBfMt15J7rdtyKNq/Nqlv5KfU4iodrQ019XESsRnwXH9KAE0y3cwtUHDo2ob7CypAnCqefh6vioWRw==",
      "dev": true,
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/vue-eslint-parser/node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/vue-router": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/vue-router/-/vue-router-4.2.2.tgz",
      "integrity": "sha512-cChBPPmAflgBGmy3tBsjeoe3f3VOSG6naKyY5pjtrqLGbNEXdzCigFUHgBvp9e3ysAtFtEx7OLqcSDh/1Cq2TQ==",
      "dependencies": {
        "@vue/devtools-api": "^6.5.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/posva"
      },
      "peerDependencies": {
        "vue": "^3.2.0"
      }
    },
    "node_modules/vue-template-compiler": {
      "version": "2.7.14",
      "resolved": "https://registry.npmjs.org/vue-template-compiler/-/vue-template-compiler-2.7.14.tgz",
      "integrity": "sha512-zyA5Y3ArvVG0NacJDkkzJuPQDF8RFeRlzV2vLeSnhSpieO6LK2OVbdLPi5MPPs09Ii+gMO8nY4S3iKQxBxDmWQ==",
      "dev": true,
      "dependencies": {
        "de-indent": "^1.0.2",
        "he": "^1.2.0"
      }
    },
    "node_modules/vue-tsc": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/vue-tsc/-/vue-tsc-1.8.1.tgz",
      "integrity": "sha512-GxBQrcb0Qvyrj1uZqnTXQyWbXdNDRY2MTa+r7ESgjhf+WzBSdxZfkS3KD/C3WhKYG+aN8hf44Hp5Gqzb6PehAA==",
      "dev": true,
      "dependencies": {
        "@vue/language-core": "1.8.1",
        "@vue/typescript": "1.8.1",
        "semver": "^7.3.8"
      },
      "bin": {
        "vue-tsc": "bin/vue-tsc.js"
      },
      "peerDependencies": {
        "typescript": "*"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.0.2.tgz",
      "integrity": "sha512-bwZdv0AKLpplFY2KZRX6TvyuN7ojjr7lwkg6ml0roIy9YeuSr7JS372qlNW18UQYzgYK9ziGcerWqZOmEn9VNg==",
      "dev": true,
      "dependencies": {
        "is-bigint": "^1.0.1",
        "is-boolean-object": "^1.1.0",
        "is-number-object": "^1.0.4",
        "is-string": "^1.0.5",
        "is-symbol": "^1.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-typed-array": {
      "version": "1.1.9",
      "resolved": "https://registry.npmjs.org/which-typed-array/-/which-typed-array-1.1.9.tgz",
      "integrity": "sha512-w9c4xkx6mPidwp7180ckYWfMmvxpjlZuIudNtDf4N/tTAUB8VJbX25qZoAsrtGuYNnGw3pa0AXgbGKRB8/EceA==",
      "dev": true,
      "dependencies": {
        "available-typed-arrays": "^1.0.5",
        "call-bind": "^1.0.2",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "has-tostringtag": "^1.0.0",
        "is-typed-array": "^1.1.10"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
      "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "dev": true
    },
    "node_modules/xml-name-validator": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-4.0.0.tgz",
      "integrity": "sha512-ICP2e+jsHvAj2E2lIHxa5tjXRlKDJo4IdvPvCXbXQGdzSfmSpNVyIKMvoZHjDY9DP0zV17iI85o90vRFXNccRw==",
      "dev": true,
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "dev": true
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    }
  }
}
{
  "name": "vue-project",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "run-p type-check build-only",
    "preview": "vite preview",
    "build-only": "vite build",
    "type-check": "vue-tsc --noEmit -p tsconfig.app.json --composite false",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
    "format": "prettier --write src/"
  },
  "dependencies": {
    "axios": "^1.4.0",
    "vue": "^3.3.4",
    "vue-router": "^4.2.2"
  },
  "devDependencies": {
    "@rushstack/eslint-patch": "^1.2.0",
    "@tsconfig/node18": "^2.0.1",
    "@types/node": "^18.16.17",
    "@vitejs/plugin-vue": "^4.2.3",
    "@vue/eslint-config-prettier": "^7.1.0",
    "@vue/eslint-config-typescript": "^11.0.3",
    "@vue/tsconfig": "^0.4.0",
    "eslint": "^8.39.0",
    "eslint-plugin-vue": "^9.11.0",
    "npm-run-all": "^4.1.5",
    "prettier": "^2.8.8",
    "typescript": "~5.0.4",
    "unocss": "^0.53.3",
    "vite": "^4.3.9",
    "vue-tsc": "^1.6.5"
  }
}
# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue"],
  "exclude": ["src/**/__tests__/*"],
  "compilerOptions": {
    "composite": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.node.json"
    },
    {
      "path": "./tsconfig.app.json"
    }
  ]
}
{
  "extends": "@tsconfig/node18/tsconfig.json",
  "include": [
    "vite.config.*",
    "vitest.config.*",
    "cypress.config.*",
    "nightwatch.conf.*",
    "playwright.config.*"
  ],
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "types": ["node"]
  }
}
// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
