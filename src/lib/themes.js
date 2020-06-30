/**
 * @type {import('@material-ui/core').ThemeOptions}
 */
const commonArgs = {
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'html, body, #root': {
          WebkitFontSmoothing: 'auto',
          height: '100%',
          width: '100%',
        },
        '*, *:after, *:before': { boxSizing: 'border-box' },
        a: {
          '&:hover, &:active, &:visited': {
            textDecoration: 'none',
            color: 'inherit',
          },
        },
      },
    },
    MuiButton: {
      root: { textTransform: 'none' },
      containedPrimary: { transform: 'skew(-15deg)' },
      outlinedPrimary: { backgroundColor: '#FCF4E6' },
    },
    MuiListItemIcon: {
      root: { justifyContent: 'center' },
    },
    MuiTabs: {
      flexContainer: { justifyContent: 'space-between' },
    },
    MuiTab: {
      wrapper: { display: 'inline', textAlign: 'left', textTransform: 'none' },
    },
  },
};

/**
 * @type {import("@devskope/use-mui-theme/lib/useMuiTheme").UseMuiThemeConfig}
 */
const dark = {
  themeOptions: {
    name: 'dark',
    palette: {
      type: 'dark',
      primary: {
        main: '#FFC107',
      },
    },
  },
  themeArgs: [commonArgs],
  responsiveFonts: true,
  fontOptions: { factor: 1 },
};

/**
 * @type {import("@devskope/use-mui-theme/lib/useMuiTheme").UseMuiThemeConfig}
 */
const light = {
  themeOptions: {
    name: 'bight-scene',
    palette: {
      type: 'light',
      primary: {
        main: '#FBB30B',
      },
    },
  },
  themeArgs: [commonArgs],
  responsiveFonts: true,
  fontOptions: { factor: 1 },
};

export default { dark, light };
