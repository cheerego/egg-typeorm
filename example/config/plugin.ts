import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },

  typeorm: {
    enable: true,
    package: '@forsigner/egg-typeorm',
  },
};

export default plugin;
