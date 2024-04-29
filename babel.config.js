module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['.'],
        alias: {
          '@components': './shared/components',
          '@api': './shared/api',
          '@images': './shared/images',
          '@utils': './shared/utils',
        },
      },
  ]],
  };
};

