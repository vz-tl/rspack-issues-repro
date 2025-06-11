import { createConfig } from '@nx/angular-rspack';

export default createConfig(
  {
    options: {
      root: __dirname,

      outputPath: {
        base: '../../dist/apps/rsapp'
      },
      index: './src/index.html',
      browser: './src/main.ts',
      polyfills: ['zone.js'],
      tsConfig: './tsconfig.app.json',
      inlineStyleLanguage: 'scss',
      assets: [
        {
          glob: '**/*',
          input: './public'
        }
      ],
      styles: ['./src/styles.scss'],
      scripts: [],
      devServer: {},
      ssr: {
        entry: './src/server.ts'
      },
      server: './src/main.server.ts',
      prerender: {
        discoverRoutes: true,
        routes: ['/']
      }
    }
  },
  {
    production: {
      options: {
        budgets: [
          {
            type: 'initial',
            maximumWarning: '2mb',
            maximumError: '5mb'
          },
          {
            type: 'anyComponentStyle',
            maximumWarning: '6kb',
            maximumError: '10kb'
          }
        ],
        outputHashing: 'all',
        devServer: {},
        prerender: {
          discoverRoutes: true,
          routes: []
        }
      }
    },

    development: {
      options: {
        optimization: false,
        vendorChunk: true,
        extractLicenses: false,
        sourceMap: true,
        namedChunks: true,
        devServer: {},
        fileReplacements: [
          {
            replace: './src/environments/environment.ts',
            with: './src/environments/environment.dev.ts'
          }
        ],
        prerender: {
          discoverRoutes: true,
          routes: []
        }
      },
      rspackConfigOverrides: {
        stats: 'errors-warnings'
      }
    }
  }
);
