import '!style-loader!css-loader!sass-loader!../src/css/_main.scss'
import '!style-loader!css-loader!sass-loader!bootstrap/dist/css/bootstrap.min.css';
import '!style-loader!css-loader!sass-loader!../src/stories/story.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}