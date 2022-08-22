import { fontFamily } from './fontFamily';
import { colors } from './colors';
import { input } from './components';

export * from './global';

export const theme = {
  components: {
    input: input.lightTheme,
  },
  fontFamily,
  colors,
};
